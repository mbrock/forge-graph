import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';
import { workspace, ExtensionContext, Diagnostic, DiagnosticSeverity, DiagnosticCollection, languages } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

import { Logger, LogLevel, Event } from "./logger";
import { ForgeRunner } from './forge-runner';
import { registerForgeChat } from './forge-chat-participant';
import { cndSpecForModel, openCndLayoutForProvider, registerCndLayoutSpike } from './cnd-layout-spike';

const os = require("os");
import { v4 as uuidv4 } from 'uuid';

let client: LanguageClient;

const forgeOutput = vscode.window.createOutputChannel('Forge Output');

const forgeEvalDiagnostics = vscode.languages.createDiagnosticCollection('Forge Eval');

/**
 * Strip ANSI escape codes from a string.
 */
function stripAnsi(text: string): string {
	return text.replace(/\u001b\[[0-9;]*m/g, '');
}

function appendRunHeader(output: vscode.OutputChannel, filePath: string, runId: string): void {
	const timestamp = new Date().toLocaleTimeString();
	const fileName = path.basename(filePath);
	output.appendLine(`[forge run] ${timestamp} · ${fileName}`);
	output.appendLine('────────────────────────────────────────────────');
}

function extractForgeProviderPort(line: string): number | undefined {
	const match = /provider at:\s*(?:https?:\/\/(?:127\.0\.0\.1|localhost)(?::|\/))?(\d+)/i.exec(line);
	if (!match) {
		return undefined;
	}
	const port = Number(match[1]);
	return Number.isInteger(port) && port > 0 ? port : undefined;
}


async function getUserId(context) {
	const UID_KEY = "FORGE_UID";

	try {
		var uid = await context.secrets.get(UID_KEY).toString();
	}
	catch {
		uid = uuidv4().toString();
		await context.secrets.store(UID_KEY, uid);
	}
	forgeOutput.appendLine(`Your anonymous ID is ${uid}.`);
	return uid;
}




function subscribeToDocumentChanges(context: vscode.ExtensionContext, myDiagnostics: vscode.DiagnosticCollection): void {

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(e => myDiagnostics.delete(e.document.uri))
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument(doc => myDiagnostics.delete(doc.uri))
	);
}

// TODO: Want to make this an extension method on TextDocument, but cannot wrangle it.
function textDocumentToLog(d, focusedDoc) {
	const content = d.getText();
	const filePath = d.isUntitled ? "untitled" : d.fileName;
	const fileName = path.parse(filePath).base;
	const fileExtension = path.extname(fileName);

	// Don't log files if they do not have '.frg' extension.
	if (fileExtension !== '.frg') {
		return {};
	}

	return {
		focused: focusedDoc,
		filename: fileName,
		fileContent: content
	};
}



class ForgeErrorCodeLensProvider implements vscode.CodeLensProvider {
	private _onDidChangeCodeLenses = new vscode.EventEmitter<void>();
	public readonly onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;

	constructor(private diagnostics: vscode.DiagnosticCollection) {
		vscode.languages.onDidChangeDiagnostics((event) => {
			const hasForgeDiagnostics = event.uris.some((uri) => this.diagnostics.has(uri));
			if (hasForgeDiagnostics) {
				this._onDidChangeCodeLenses.fire();
			}
		});
	}

	provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
		const documentDiagnostics = this.diagnostics.get(document.uri) || [];
		const errors = documentDiagnostics.filter((d) => d.severity === vscode.DiagnosticSeverity.Error);

		if (errors.length === 0) {
			return [];
		}

		const lenses: vscode.CodeLens[] = [];
		for (const err of errors) {
			lenses.push(new vscode.CodeLens(err.range, {
				title: 'Forge: Open Output',
				command: 'forge.showOutput'
			}));
			lenses.push(new vscode.CodeLens(err.range, {
				title: 'Forge: Rerun file',
				command: 'forge.runFile'
			}));
		}

		return lenses;
	}
}



export async function activate(context: ExtensionContext) {

	// Initialize Forge runner
	const forgeRunner = ForgeRunner.getInstance(forgeOutput);
	
	try {
		await forgeRunner.initialize();
		
		// Check minimum version
		const currentSettings = vscode.workspace.getConfiguration('forge');
		const minSupportedVersion = String(currentSettings.get<string>('minVersion'));
		
		const meetsMinVersion = await forgeRunner.checkMinVersion(minSupportedVersion);
		if (!meetsMinVersion) {
			const env = forgeRunner.getEnvironment();
			vscode.window.showWarningMessage(
				`Forge version ${env?.forgeVersion} may not meet minimum requirement ${minSupportedVersion}`
			);
		}
	} catch (error) {
		vscode.window.showErrorMessage(`Forge initialization failed: ${error}`);
		forgeOutput.appendLine(`✗ Initialization error: ${error}`);
	}


	// inspired by: https://github.com/GrandChris/TerminalRelativePath/blob/main/src/extension.ts
	vscode.window.registerTerminalLinkProvider({
		provideTerminalLinks: (context, token) => {

			const matcher = ForgeRunner.matchForgeError(context.line);
			if (!matcher) {
				return [];
			} else {
				const filename = matcher['fileName'];
				// verify that filename matches?
				const filePath = vscode.window.activeTextEditor?.document.uri.fsPath;
				const filePathFilename = filePath?.split(/[/\\]/).pop();
				// console.log(`${filePath}: active filename: ${filePathFilename}; filename: ${filename}`);
				if (filePathFilename !== filename) {
					// console.log("the line name is not the active filename");
					return [];
				}

				const line = matcher['linenum'];
				const col = matcher['colnum'];

				const tooltip = filePath + `:${line}:${col}`;
				return [
					{
						startIndex: matcher['index'],
						length: matcher['line'].length,
						tooltip: tooltip,
						filePath: filePath,
						line: line,
						column: col
					}
				];
			}
		},
		handleTerminalLink: (link: any) => {
			if (link.line !== undefined) {
				ForgeRunner.showFileWithOpts(link.filePath, link.line, link.column);
			} else {
				ForgeRunner.showFileWithOpts(link.filePath, null, null);
			}
		}
	});


	context.globalState.update('forge.isLoggingEnabled', true);
	vscode.commands.executeCommand('setContext', 'forge.isLoggingEnabled', true);

	const userid = await getUserId(context);
	const logger = new Logger(userid);


	const forgeDocs = vscode.commands.registerCommand('forge.openDocumentation', async () => {

		const DOCS_URL = 'https://csci1710.github.io/forge-documentation/home.html';
		vscode.env.openExternal(vscode.Uri.parse(DOCS_URL))
			.then((success) => {
				if (!success) {
					vscode.window.showErrorMessage(`Could not open Forge documentation from VS Code. It is available at ${DOCS_URL}`);
				}
			});
	});

	const showForgeOutput = vscode.commands.registerCommand('forge.showOutput', () => {
		forgeOutput.show(true);
	});
	const openCndLayoutSpike = registerCndLayoutSpike(context);

	const runFileSaveSuppressions = new Set<string>();
	const runFile = vscode.commands.registerCommand('forge.runFile', async () => {
		const isLoggingEnabled = context.globalState.get<boolean>('forge.isLoggingEnabled', false);
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage(`No active text editor!`);
			return null;
		}

		const fileURI = editor?.document.uri;
		const filepath = fileURI?.fsPath;
		const runId = uuidv4();

		const forgeSettings = vscode.workspace.getConfiguration('forge');
		const clearOutputBeforeRun = forgeSettings.get<boolean>('clearOutputBeforeRun', true);

		if (clearOutputBeforeRun) {
			forgeOutput.clear();
		}
		forgeOutput.show();
		appendRunHeader(forgeOutput, filepath, runId);

		// Always auto-save before any run. When forge.runOnSave is enabled,
		// suppress the save event caused by this command so manual runs do not
		// immediately launch a second run that kills the first Sterling server.
		const savedDocumentUri = editor.document.uri.toString();
		runFileSaveSuppressions.add(savedDocumentUri);
		let didSave = false;
		try {
			didSave = await editor.document.save();
		} finally {
			setTimeout(() => runFileSaveSuppressions.delete(savedDocumentUri), 1000);
		}
		if (!didSave) {
			console.error(`Could not save ${filepath}`);
			vscode.window.showErrorMessage(`Could not save ${filepath}`);
			return null;
		}

		// Try to only run active forge file
		if (filepath.split(/\./).pop() !== 'frg') {
			vscode.window.showInformationMessage('Click on the Forge file first before hitting the run button :)');
			console.log(`cannot run file ${filepath}`);
			return;
		}

		let myStderr = '';
		let providerPaneOpened = false;
		let stdoutBuffer = '';
		forgeOutput.appendLine(`Running file "${filepath}" ...`);

		const stdoutListener = (data: string) => {
			stdoutBuffer += stripAnsi(data.toString());
			const lines = stdoutBuffer.split(/[\n]/);
			stdoutBuffer = lines.pop() || '';
			for (const line of lines) {
				const providerPort = extractForgeProviderPort(line);
				if (providerPort && !providerPaneOpened) {
					providerPaneOpened = true;
					const providerWebSocketUrl = `ws://127.0.0.1:${providerPort}`;
					forgeOutput.appendLine(`CnD layout pane connecting to Forge provider at ${providerWebSocketUrl}`);
					openCndLayoutForProvider(context, {
						providerWebSocketUrl,
						cnd: cndSpecForModel(filepath),
						title: path.basename(filepath),
						sourceDescription: `${filepath} · Forge provider ${providerWebSocketUrl}`,
					});
				}
				if (line === 'Sterling running. Hit enter to stop service.') {
					forgeOutput.appendLine('Sterling running. Hit "Continue" to stop service and continue execution.');
				} else {
					forgeOutput.appendLine(line);
				}
			}
		};

		const stderrListener = (data: string) => {
			myStderr += data;
		};

		const exitListener = (code: number | null) => {
			if (stdoutBuffer) {
				forgeOutput.appendLine(stdoutBuffer);
				stdoutBuffer = '';
			}
			if (!forgeRunner.isKilledManually()) {
				if (myStderr !== '') {
					forgeRunner.sendEvalErrors(myStderr, fileURI, forgeEvalDiagnostics);
				} else {
					ForgeRunner.showFileWithOpts(filepath, null, null);
					forgeOutput.appendLine('Finished running.');
				}
			} else {
				ForgeRunner.showFileWithOpts(filepath, null, null);
				forgeOutput.appendLine('Forge process terminated.');
			}

			// Log run result
			const payload = {
				"output-errors": myStderr,
				"runId": runId
			};
			logger.log_payload(payload, LogLevel.INFO, Event.FORGE_RUN_RESULT);
		};

		try {
			await forgeRunner.runFile(filepath, {
				args: ['-O', 'run_sterling', "'serve"],
				onStdout: stdoutListener,
				onStderr: stderrListener,
				onExit: exitListener
			});

			if (isLoggingEnabled && editor) {
				const documentData = vscode.workspace.textDocuments.map((d) => {
					const focusedDoc = (d === editor.document);
					return textDocumentToLog(d, focusedDoc);
				}).filter((data) => Object.keys(data).length > 0);

				documentData['runId'] = runId;
				logger.log_payload(documentData, LogLevel.INFO, Event.FORGE_RUN);
			}
		} catch (error) {
			const log = textDocumentToLog(editor.document, true);
			log['error'] = `Could not run Forge process: ${error}`;
			log['runId'] = runId;

			logger.log_payload(log, LogLevel.ERROR, Event.FORGE_RUN);
			vscode.window.showErrorMessage(`Could not run Forge process: ${error}`);
			console.error("Could not run Forge process:", error);
			return null;
		}
	});

	const stopRun = vscode.commands.registerCommand('forge.stopRun', () => {
		forgeRunner.kill(true);
	});

	const continueRun = vscode.commands.registerCommand('forge.continueRun', () => {
		if (!forgeRunner.sendInput('\n')) {
			vscode.window.showErrorMessage('No active Forge process to continue.');
		}
	});


	const enableLogging = vscode.commands.registerCommand('forge.enableLogging', () => {
		context.globalState.update('forge.isLoggingEnabled', true);
		vscode.commands.executeCommand('setContext', 'forge.isLoggingEnabled', true);
	});

	const disableLogging = vscode.commands.registerCommand('forge.disableLogging', () => {
		context.globalState.update('forge.isLoggingEnabled', false);
		vscode.commands.executeCommand('setContext', 'forge.isLoggingEnabled', false);
	});

	let runOnSaveInProgress = false;
	const runOnSave = vscode.workspace.onDidSaveTextDocument(async (document) => {
		const documentUri = document.uri.toString();
		if (runFileSaveSuppressions.delete(documentUri)) {
			return;
		}

		const forgeSettings = vscode.workspace.getConfiguration('forge', document.uri);
		const runOnSaveEnabled = forgeSettings.get<boolean>('runOnSave', false);

		if (!runOnSaveEnabled || document.languageId !== 'forge' || document.uri.scheme !== 'file') {
			return;
		}

		const activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor || activeEditor.document.uri.toString() !== document.uri.toString()) {
			return;
		}

		if (runOnSaveInProgress) {
			return;
		}

		runOnSaveInProgress = true;
		try {
			await vscode.commands.executeCommand('forge.runFile');
		} finally {
			runOnSaveInProgress = false;
		}
	});

	context.subscriptions.push(runFile, stopRun, continueRun, enableLogging, disableLogging, forgeEvalDiagnostics,
		forgeOutput, forgeDocs, showForgeOutput, openCndLayoutSpike, runOnSave);

	// Register @forge chat participant (requires GitHub Copilot)
	registerForgeChat(context);

	const codeLensProvider = new ForgeErrorCodeLensProvider(forgeEvalDiagnostics);
	context.subscriptions.push(
		vscode.languages.registerCodeLensProvider({ language: 'forge', scheme: 'file' }, codeLensProvider)
	);

	subscribeToDocumentChanges(context, forgeEvalDiagnostics);

	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'forge' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'forgeLanguageServer',
		'Forge Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
	console.log('Client and Server launched');
}

export function deactivate(): Thenable<void> | undefined {
	const forgeRunner = ForgeRunner.getInstance(forgeOutput);
	forgeRunner.kill(false);
	
	if (!client) {
		return undefined;
	}

	return client.stop();
}
