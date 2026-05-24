import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import { spawn, type ChildProcessWithoutNullStreams } from 'child_process';

export const DEFAULT_CND_SPEC = `directives:
  - flag: hideDisconnectedBuiltIns
`;

interface CndSpikeInputs {
	xml: string;
	cnd: string;
	title: string;
	sourceDescription: string;
}

interface CndProviderInputs {
	providerWebSocketUrl: string;
	cnd: string;
	title: string;
	sourceDescription: string;
}

type CndPanelMessage =
	| { type: 'render'; payload: CndSpikeInputs }
	| { type: 'connect'; payload: CndProviderInputs };

let currentPanel: vscode.WebviewPanel | undefined;
let currentPanelReady = false;
let pendingMessage: CndPanelMessage | undefined;
let bundleWatcher: fs.FSWatcher | undefined;
let bundleReloadTimer: NodeJS.Timeout | undefined;
let bunWatchProcess: ChildProcessWithoutNullStreams | undefined;
let bunWatchOutput: vscode.OutputChannel | undefined;

function readFileIfExists(filePath: string): string | undefined {
	try {
		if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
			return fs.readFileSync(filePath, 'utf8');
		}
	} catch {
		return undefined;
	}
	return undefined;
}

export function cndSpecForModel(filePath: string): string {
	return readFileIfExists(companionPath(filePath, '.cnd')) || DEFAULT_CND_SPEC;
}

function companionPath(filePath: string, extension: string): string {
	const parsed = path.parse(filePath);
	return path.join(parsed.dir, `${parsed.name}${extension}`);
}

function resolveInputs(): CndSpikeInputs {
	const activePath = vscode.window.activeTextEditor?.document.uri.fsPath;
	let xmlPath: string | undefined;
	let cndPath: string | undefined;

	if (activePath) {
		const extension = path.extname(activePath).toLowerCase();
		if (extension === '.xml') {
			xmlPath = activePath;
			cndPath = companionPath(activePath, '.cnd');
		} else if (extension === '.frg' || extension === '.als') {
			xmlPath = companionPath(activePath, '.xml');
			cndPath = companionPath(activePath, '.cnd');
		}
	}

	let xml = xmlPath ? readFileIfExists(xmlPath) : undefined;
	let cnd = cndPath ? readFileIfExists(cndPath) : undefined;
	let title = activePath ? path.basename(activePath) : 'CnD Layout Spike';
	let sourceDescription = xmlPath && xml
		? `${xmlPath}${cnd ? ` + ${cndPath}` : ' + default CnD'}`
		: '';

	if (!xml) {
		const demoRoot = '/Users/mbrock/src/copeanddrag/demos/rc';
		xmlPath = path.join(demoRoot, 'rc-datum.xml');
		cndPath = path.join(demoRoot, 'rc.cnd');
		xml = readFileIfExists(xmlPath);
		cnd = readFileIfExists(cndPath);
		title = 'Cope and Drag RC Demo';
		sourceDescription = `${xmlPath} + ${cndPath}`;
	}

	if (!xml) {
		throw new Error('Could not find an Alloy XML instance. Open an .xml file, add a sibling .xml next to the active .frg, or restore the Cope and Drag demo fixture.');
	}

	return {
		xml,
		cnd: cnd || DEFAULT_CND_SPEC,
		title,
		sourceDescription,
	};
}

function nonce(): string {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let value = '';
	for (let i = 0; i < 32; i++) {
		value += alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	return value;
}

function webviewBundlePath(context: vscode.ExtensionContext): string {
	return context.asAbsolutePath(path.join('client', 'out', 'webview', 'cnd-spike-webview.js'));
}

function cndOutputChannel(): vscode.OutputChannel {
	if (!bunWatchOutput) {
		bunWatchOutput = vscode.window.createOutputChannel('Forge CnD Webview');
	}
	return bunWatchOutput;
}

function forgeConfiguration(): vscode.WorkspaceConfiguration {
	return vscode.workspace.getConfiguration('forge');
}

function configuredBunPath(): string {
	const configured = String(forgeConfiguration().get<string>('bunPath', '') || '').trim();
	if (configured) {
		return configured;
	}

	const candidates = [
		process.env.BUN_INSTALL ? path.join(process.env.BUN_INSTALL, 'bin', 'bun') : undefined,
		path.join(os.homedir(), '.bun', 'bin', 'bun'),
		'/opt/homebrew/bin/bun',
		'/usr/local/bin/bun',
	];
	return candidates.find((candidate) => candidate && fs.existsSync(candidate)) || 'bun';
}

function webviewScriptUrl(webview: vscode.Webview, context: vscode.ExtensionContext): string {
	const configured = String(forgeConfiguration().get<string>('cndWebviewScriptUrl', '') || '').trim();
	if (configured) {
		return configured;
	}
	return webview.asWebviewUri(vscode.Uri.file(webviewBundlePath(context))).toString();
}

function startBunWatchIfEnabled(context: vscode.ExtensionContext): void {
	if (!forgeConfiguration().get<boolean>('cndWebviewRunBunWatch', false) || bunWatchProcess) {
		return;
	}

	const output = cndOutputChannel();
	const bunPath = configuredBunPath();
	const args = [
		'build',
		'./client/webview/cnd-spike-webview.ts',
		'--outdir',
		'./client/out/webview',
		'--target=browser',
		'--format=esm',
		'--sourcemap=linked',
		'--watch',
		'--no-clear-screen',
	];

	output.appendLine(`[watch] ${bunPath} ${args.join(' ')}`);
	const child = spawn(bunPath, args, {
		cwd: context.extensionPath,
		env: process.env,
	});
	bunWatchProcess = child;

	child.stdout.on('data', (chunk) => output.append(chunk.toString()));
	child.stderr.on('data', (chunk) => output.append(chunk.toString()));
	child.on('error', (error) => {
		if (bunWatchProcess === child) {
			bunWatchProcess = undefined;
		}
		output.appendLine(`[watch error] ${error.message}`);
		vscode.window.showWarningMessage(`Could not start CnD webview Bun watch: ${error.message}`);
	});
	child.on('exit', (code, signal) => {
		if (bunWatchProcess === child) {
			bunWatchProcess = undefined;
		}
		output.appendLine(`[watch exit] code=${code ?? 'null'} signal=${signal ?? 'null'}`);
	});
}

function stopBunWatch(): void {
	if (bunWatchProcess) {
		bunWatchProcess.kill();
		bunWatchProcess = undefined;
	}
}

function scheduleBundleReload(context: vscode.ExtensionContext): void {
	if (!currentPanel) {
		return;
	}
	if (bundleReloadTimer) {
		clearTimeout(bundleReloadTimer);
	}
	bundleReloadTimer = setTimeout(() => {
		if (!currentPanel) {
			return;
		}
		currentPanelReady = false;
		currentPanel.webview.html = webviewHtml(currentPanel.webview, context, currentPanel.title);
	}, 120);
}

function ensureBundleWatcher(context: vscode.ExtensionContext): void {
	if (!forgeConfiguration().get<boolean>('cndWebviewAutoReload', true) || bundleWatcher) {
		return;
	}

	const bundlePath = webviewBundlePath(context);
	const bundleDir = path.dirname(bundlePath);
	const bundleFileName = path.basename(bundlePath);
	if (!fs.existsSync(bundleDir)) {
		return;
	}

	try {
		bundleWatcher = fs.watch(bundleDir, (_eventType, fileName) => {
			if (String(fileName || '') === bundleFileName) {
				scheduleBundleReload(context);
			}
		});
	} catch (error) {
		cndOutputChannel().appendLine(`[watch error] ${error instanceof Error ? error.message : String(error)}`);
	}
}

function stopBundleWatcher(): void {
	if (bundleReloadTimer) {
		clearTimeout(bundleReloadTimer);
		bundleReloadTimer = undefined;
	}
	if (bundleWatcher) {
		bundleWatcher.close();
		bundleWatcher = undefined;
	}
}

function webviewHtml(webview: vscode.Webview, context: vscode.ExtensionContext, title: string): string {
	const scriptUri = webviewScriptUrl(webview, context);
	const scriptNonce = nonce();

	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} data:; style-src 'unsafe-inline'; script-src 'nonce-${scriptNonce}' http://127.0.0.1:* http://localhost:*; connect-src ws://127.0.0.1:* ws://localhost:* http://127.0.0.1:* http://localhost:*;">
	<title>${escapeHtml(title)}</title>
</head>
<body>
	<div id="app"></div>
	<script nonce="${scriptNonce}" type="module" src="${scriptUri}"></script>
</body>
</html>`;
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function ensurePanel(context: vscode.ExtensionContext, title: string): vscode.WebviewPanel {
	startBunWatchIfEnabled(context);
	ensureBundleWatcher(context);

	if (currentPanel) {
		currentPanel.title = 'CnD Layout';
		currentPanel.reveal(vscode.ViewColumn.Beside, false);
		return currentPanel;
	}

	currentPanelReady = false;
	const panel = vscode.window.createWebviewPanel(
			'forgeCndLayoutSpike',
			'CnD Layout',
			vscode.ViewColumn.Beside,
			{
				enableScripts: true,
				localResourceRoots: [
					vscode.Uri.file(context.asAbsolutePath(path.join('client', 'out', 'webview'))),
				],
			}
		);

	panel.webview.html = webviewHtml(panel.webview, context, title);
	panel.onDidDispose(() => {
		if (currentPanel === panel) {
			currentPanel = undefined;
			currentPanelReady = false;
			pendingMessage = undefined;
		}
	});
	panel.webview.onDidReceiveMessage((message) => {
		if (message?.type === 'ready') {
			currentPanelReady = true;
			if (pendingMessage) {
				panel.webview.postMessage(pendingMessage);
			}
			return;
		}
		if (message?.type === 'error') {
			vscode.window.showErrorMessage(`CnD renderer: ${message.message}`);
		}
	});

	currentPanel = panel;
	return panel;
}

function postToPanel(context: vscode.ExtensionContext, title: string, message: CndPanelMessage): void {
	const panel = ensurePanel(context, title);
	pendingMessage = message;
	if (currentPanelReady) {
		panel.webview.postMessage(message);
	}
}

export function openCndLayoutForProvider(context: vscode.ExtensionContext, inputs: CndProviderInputs): void {
	postToPanel(context, inputs.title, { type: 'connect', payload: inputs });
}

export function openCndLayoutForInputs(context: vscode.ExtensionContext, inputs: CndSpikeInputs): void {
	postToPanel(context, inputs.title, { type: 'render', payload: inputs });
}

export function registerCndLayoutSpike(context: vscode.ExtensionContext): vscode.Disposable {
	context.subscriptions.push(
		{ dispose: stopBundleWatcher },
		{ dispose: stopBunWatch }
	);

	return vscode.commands.registerCommand('forge.openCndLayoutSpike', async () => {
		try {
			openCndLayoutForInputs(context, resolveInputs());
		} catch (error) {
			vscode.window.showErrorMessage(error instanceof Error ? error.message : String(error));
		}
	});
}
