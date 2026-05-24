import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentSymbolParams,
	SymbolInformation,
	SymbolKind,
	DefinitionParams,
	Definition,
	Location,
	HoverParams,
	Hover,
	MarkupKind,
	InsertTextFormat
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { ChildProcess, spawn } from 'child_process';
import * as path from 'path';
import * as net from 'net';
import { Buffer } from 'buffer';
import { ForgeSymbolExtractor, ForgeSymbol, SymbolKind as ForgeSymbolKind } from './symbols';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
const racket = spawnRacket();

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			},
			// Support for go-to-definition
			definitionProvider: true,
			// Support for hover information
			hoverProvider: true,
			// Support for document symbols
			documentSymbolProvider: true
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.forgeLanguageServer || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'forgeLanguageServer'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

function spawnRacket(): ChildProcess {
	// spawn racket
	const syntaxCheck = path.resolve(__dirname, '../src/syntax_check.rkt');
	const racket = spawn('racket', [`"${syntaxCheck}"`], { shell: true });
	if (!racket) {
		connection.console.error('Cannot launch racket');
		throw new Error('Cannot launch racket');
	}
	// if (racket.stderr) {
	// 	racket.stderr.on('data', (data: string) => {
	// 		connection.console.log(`Racket data: ${data}`);
	// 	});
	// }
	// connection.console.log("Successfully spawned Racket");
	return racket;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

let waitingForRacket = true;
setTimeout(() => waitingForRacket = false, 3 * 1000); // need about ~2 second but to be safe here

let timestamp = Date.now();

async function validateTextDocument(textDocument: TextDocument): Promise<void> {

	// connection.console.log(`${Diagnostics.get(textDocument.uri)}`);
	if (waitingForRacket) return;
	// const settings = await getDocumentSettings(textDocument.uri);
	// when validate is called, we assign this validation a timestamp
	const myTimestamp = Date.now();
	timestamp = myTimestamp;

	const text = textDocument.getText();
	const buf = Buffer.alloc(4);
	buf.writeUInt32LE(text.length, 0);

	const diagnostics: Diagnostic[] = [];

	let myStderr = '\n';
	// connection.console.log(">>>>>>>>>> Connecting to socket");
	const so = new net.Socket();
	so.connect(8879, 'localhost');

	so.on('error', function (error) { connection.console.log(`client received error: ${error.toString()}`); });
	so.on('connect', function () {
		// connection.console.log("Connected to the socket");
		// it is possible that when we connect, there are already new validation being assigned
		// in this case we want to quit to allow others to enter the socket
		if (myTimestamp < timestamp) {
			// connection.console.log(`oops I connected too late: current timestamp is ${timestamp}, my timestamp is ${myTimestamp}`);
			so.end();
			so.destroy();
		} else {
			so.write(buf);
			// connection.console.log(`>>>>>>>>  text size is: ${text.length} ${buf}`);
			so.write(text);
			// connection.console.log("write text to the racket server");
		}
	});
	so.on('data', function (data) {
		if (myTimestamp < timestamp) {
			// connection.console.log(`oops my data arrived too late: current timestamp is ${timestamp}, my timestamp is ${myTimestamp}`);
			so.end();
			so.destroy();
		} else {
			myStderr += data;
			connection.console.log(data.toString());
			// connection.console.log(">>>>>>>>>> Ending socket");
			so.end();
			so.destroy();

			// when racket finishes eval, we parse the received stderr and send diagnostics to client
			if (myStderr !== '\n') {
				let start = 0;
				let end = 0;

				const line_match = /line=(\d+)/.exec(myStderr);
				const column_match = /column=(\d+)/.exec(myStderr);
				// let offset_match = parser(myStderr, /offset=(\d+)/);

				let line_num = 0;
				let col_num = 0;

				// the stderr could be tokenization issues
				if (line_match !== null && column_match !== null) {
					// connection.console.log(`line match: ${line_match[0]}, col match: ${column_match[0]}`);
					// racket line/col num starts from 0
					line_num = parseInt(line_match[0].slice('line='.length));
					col_num = parseInt(column_match[0].slice('column='.length));
				}

				// } else {
				// 	// for now this would not happen
				// 	const special_match = /frg:(\d+):(\d+):/.exec(myStderr);
				// 	if (special_match !== null) {
				// 		line_num = parseInt(special_match[1]);
				// 		col_num = parseInt(special_match[2]);
				// 	}
				// }

				// if we get some line/col number, we want to get the start and end of the error
				if (line_num !== 0) {
					// connection.console.log(`line num: ${line_num}, col num: ${col_num}`);
					let m: RegExpExecArray | null;
					// iterate over each line
					const pattern = /(.*[\n\r\w])/g; // include the new line char and eof
					while (line_num > 0 && (m = pattern.exec(text))) {
						// connection.console.log(`match: ${m[0]}, ${m.index}, ${m[0].length}`);
						start = m.index + col_num;
						end = m.index + m[0].length;
						line_num -= 1;
					}
					// connection.console.log(`start: ${start}, end: ${end}`);
				}

				const diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Warning,
					range: {
						start: textDocument.positionAt(start),
						end: textDocument.positionAt(end)
					},
					message: `Forge Syntax Error: ${myStderr}`,
					source: 'syntax_check.rkt'
				};
				if (hasDiagnosticRelatedInformationCapability) {
					diagnostic.relatedInformation = [
						{
							location: {
								uri: textDocument.uri,
								range: Object.assign({}, diagnostic.range)
							},
							message: `${myStderr}`
						}
					];
				}
				diagnostics.push(diagnostic);
			}
			// Send the computed diagnostics to VSCode.
			connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
		}
	});
	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// ========== Forge Completion Data ==========

interface ForgeCompletionData {
	label: string;
	kind: CompletionItemKind;
	detail?: string;
	documentation?: string;
	insertText?: string;
	insertTextFormat?: InsertTextFormat;
	sortText?: string;
}

const forgeKeywords: ForgeCompletionData[] = [
	// Core keywords
	{ label: 'sig', kind: CompletionItemKind.Keyword, detail: 'Signature declaration', documentation: 'Define a signature (type)' },
	{ label: 'pred', kind: CompletionItemKind.Keyword, detail: 'Predicate declaration', documentation: 'Define a predicate (constraint)' },
	{ label: 'fun', kind: CompletionItemKind.Keyword, detail: 'Function declaration', documentation: 'Define a function returning a value' },
	{ label: 'assert', kind: CompletionItemKind.Keyword, detail: 'Assertion', documentation: 'Define an assertion to check' },
	{ label: 'test', kind: CompletionItemKind.Keyword, detail: 'Test declaration', documentation: 'Define a test or test suite' },
	{ label: 'expect', kind: CompletionItemKind.Keyword, detail: 'Test expectation block', documentation: 'Group test expectations' },
	{ label: 'run', kind: CompletionItemKind.Keyword, detail: 'Run command', documentation: 'Find instances satisfying a predicate' },
	{ label: 'check', kind: CompletionItemKind.Keyword, detail: 'Check command', documentation: 'Verify no counterexamples exist' },
	{ label: 'example', kind: CompletionItemKind.Keyword, detail: 'Example instance', documentation: 'Define a concrete example instance' },
	{ label: 'inst', kind: CompletionItemKind.Keyword, detail: 'Instance bounds', documentation: 'Define partial instance bounds' },
	
	// Multiplicity/quantifiers
	{ label: 'all', kind: CompletionItemKind.Keyword, detail: 'Universal quantifier', documentation: 'For all elements...' },
	{ label: 'some', kind: CompletionItemKind.Keyword, detail: 'Existential quantifier', documentation: 'There exists at least one...' },
	{ label: 'no', kind: CompletionItemKind.Keyword, detail: 'No quantifier', documentation: 'There are no...' },
	{ label: 'lone', kind: CompletionItemKind.Keyword, detail: 'At most one', documentation: 'Zero or one element' },
	{ label: 'one', kind: CompletionItemKind.Keyword, detail: 'Exactly one', documentation: 'Exactly one element' },
	{ label: 'set', kind: CompletionItemKind.Keyword, detail: 'Set multiplicity', documentation: 'Any number of elements (default)' },
	
	// Logical operators
	{ label: 'and', kind: CompletionItemKind.Keyword, detail: 'Logical AND', documentation: 'Both conditions must be true' },
	{ label: 'or', kind: CompletionItemKind.Keyword, detail: 'Logical OR', documentation: 'At least one condition must be true' },
	{ label: 'not', kind: CompletionItemKind.Keyword, detail: 'Logical NOT', documentation: 'Negate a condition' },
	{ label: 'implies', kind: CompletionItemKind.Keyword, detail: 'Implication', documentation: 'If-then logical implication' },
	{ label: 'iff', kind: CompletionItemKind.Keyword, detail: 'Bi-implication', documentation: 'If and only if' },
	{ label: 'else', kind: CompletionItemKind.Keyword, detail: 'Else clause', documentation: 'Alternative for implies' },
	
	// Signature modifiers
	{ label: 'abstract', kind: CompletionItemKind.Keyword, detail: 'Abstract signature', documentation: 'Signature with no direct instances' },
	{ label: 'extends', kind: CompletionItemKind.Keyword, detail: 'Signature extension', documentation: 'Extend a parent signature' },
	{ label: 'in', kind: CompletionItemKind.Keyword, detail: 'Subset relation', documentation: 'Subset of another signature' },
	{ label: 'var', kind: CompletionItemKind.Keyword, detail: 'Variable field/sig', documentation: 'Value can change over time' },
	{ label: 'disj', kind: CompletionItemKind.Keyword, detail: 'Disjoint declaration', documentation: 'Declare disjoint variables' },
	
	// Temporal operators
	{ label: 'always', kind: CompletionItemKind.Keyword, detail: 'Always (temporal)', documentation: 'True in all future states' },
	{ label: 'eventually', kind: CompletionItemKind.Keyword, detail: 'Eventually (temporal)', documentation: 'True in some future state' },
	{ label: 'after', kind: CompletionItemKind.Keyword, detail: 'After (temporal)', documentation: 'True in the next state' },
	{ label: 'until', kind: CompletionItemKind.Keyword, detail: 'Until (temporal)', documentation: 'P until Q holds' },
	
	// Test/assertion keywords
	{ label: 'is', kind: CompletionItemKind.Keyword, detail: 'Test expectation', documentation: 'Specify expected result' },
	{ label: 'sat', kind: CompletionItemKind.Keyword, detail: 'Satisfiable', documentation: 'Expect satisfiable result' },
	{ label: 'unsat', kind: CompletionItemKind.Keyword, detail: 'Unsatisfiable', documentation: 'Expect unsatisfiable result' },
	{ label: 'theorem', kind: CompletionItemKind.Keyword, detail: 'Theorem expectation', documentation: 'Expect to prove as theorem' },
	
	// Other
	{ label: 'for', kind: CompletionItemKind.Keyword, detail: 'Scope bounds', documentation: 'Specify scope for run/check' },
	{ label: 'but', kind: CompletionItemKind.Keyword, detail: 'Scope exception', documentation: 'Override specific bounds' },
	{ label: 'exactly', kind: CompletionItemKind.Keyword, detail: 'Exact bound', documentation: 'Exactly this many instances' },
	{ label: 'let', kind: CompletionItemKind.Keyword, detail: 'Let binding', documentation: 'Introduce local binding' },
	{ label: 'open', kind: CompletionItemKind.Keyword, detail: 'Import module', documentation: 'Import another Forge file' },
	{ label: 'option', kind: CompletionItemKind.Keyword, detail: 'Set option', documentation: 'Configure Forge options' },
	
	// Built-in relations
	{ label: 'none', kind: CompletionItemKind.Constant, detail: 'Empty set', documentation: 'The empty set' },
	{ label: 'univ', kind: CompletionItemKind.Constant, detail: 'Universal set', documentation: 'Set of all atoms' },
	{ label: 'iden', kind: CompletionItemKind.Constant, detail: 'Identity relation', documentation: 'Identity relation on atoms' },
];

const forgeSnippets: ForgeCompletionData[] = [
	{
		label: 'sig (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Signature declaration',
		documentation: 'Create a new signature with fields',
		insertText: 'sig ${1:Name} {\n\t${2:// fields}\n}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_sig'
	},
	{
		label: 'abstract sig (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Abstract signature',
		documentation: 'Create an abstract signature',
		insertText: 'abstract sig ${1:Name} {\n\t${2:// fields}\n}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_abstract'
	},
	{
		label: 'pred (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Predicate declaration',
		documentation: 'Create a new predicate',
		insertText: 'pred ${1:name}[${2:params}] {\n\t${3:// constraints}\n}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_pred'
	},
	{
		label: 'fun (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Function declaration',
		documentation: 'Create a new function',
		insertText: 'fun ${1:name}[${2:params}]: ${3:Type} {\n\t${4:// expression}\n}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_fun'
	},
	{
		label: 'run (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Run command',
		documentation: 'Run a predicate to find instances',
		insertText: 'run {\n\t${1:// constraints}\n} for ${2:5} ${3:// scope}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_run'
	},
	{
		label: 'check (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Check command',
		documentation: 'Check that a property always holds',
		insertText: 'check {\n\t${1:// assertion}\n} for ${2:5} ${3:// scope}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_check'
	},
	{
		label: 'test expect (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Test expect block',
		documentation: 'Create a test expectation block',
		insertText: 'test expect ${1:testName} {\n\t${2:testCase}: {\n\t\t${3:// constraints}\n\t} for ${4:5} is ${5:sat}\n}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '0_test'
	},
	{
		label: 'all (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Universal quantifier',
		documentation: 'For all elements satisfying...',
		insertText: 'all ${1:x}: ${2:Type} | ${3:constraint}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '1_all'
	},
	{
		label: 'some (snippet)',
		kind: CompletionItemKind.Snippet,
		detail: 'Existential quantifier',
		documentation: 'There exists some element...',
		insertText: 'some ${1:x}: ${2:Type} | ${3:constraint}',
		insertTextFormat: InsertTextFormat.Snippet,
		sortText: '1_some'
	},
];

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(params: TextDocumentPositionParams): CompletionItem[] => {
		const document = documents.get(params.textDocument.uri);
		if (!document) {
			return [];
		}

		// Get the line up to the cursor position for context
		const position = params.position;
		const line = document.getText({
			start: { line: position.line, character: 0 },
			end: position
		});

		// Basic context detection to reduce noise
		const isInComment = /\/\//.test(line);
		const isInString = (line.match(/"/g) || []).length % 2 === 1;
		
		if (isInComment || isInString) {
			// Don't provide completions in comments or strings
			return [];
		}

		// Combine keywords and snippets
		const allCompletions: CompletionItem[] = [];
		
		// Add keywords with data index for resolve
		forgeKeywords.forEach((item, index) => {
			allCompletions.push({
				label: item.label,
				kind: item.kind,
				data: index,
				sortText: item.sortText || `2_${item.label}`
			});
		});

		// Add snippets with data index offset
		forgeSnippets.forEach((item, index) => {
			allCompletions.push({
				label: item.label,
				kind: item.kind,
				insertText: item.insertText,
				insertTextFormat: item.insertTextFormat,
				data: forgeKeywords.length + index,
				sortText: item.sortText || `1_${item.label}`
			});
		});

		return allCompletions;
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		const index = item.data as number;
		
		if (index < forgeKeywords.length) {
			// It's a keyword
			const keyword = forgeKeywords[index];
			item.detail = keyword.detail;
			item.documentation = keyword.documentation;
		} else {
			// It's a snippet
			const snippet = forgeSnippets[index - forgeKeywords.length];
			item.detail = snippet.detail;
			item.documentation = snippet.documentation;
		}
		
		return item;
	}
);

connection.onExit(() => {
	// kill racket
	if (racket) {
		racket.kill('SIGTERM');
	}
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// ========== LSP Feature Implementations ==========

// Cache symbols per document
const documentSymbols = new Map<string, ForgeSymbol[]>();

// Update symbols when document changes
documents.onDidChangeContent(change => {
	const text = change.document.getText();
	const symbols = ForgeSymbolExtractor.extractSymbols(text);
	documentSymbols.set(change.document.uri, symbols);
});

// Provide document symbols (outline view)
connection.onDocumentSymbol((params: DocumentSymbolParams): SymbolInformation[] => {
	const document = documents.get(params.textDocument.uri);
	if (!document) return [];
	
	const symbols = documentSymbols.get(params.textDocument.uri);
	if (!symbols) return [];
	
	return symbols.map(symbol => ({
		name: symbol.name,
		kind: forgeSymbolKindToLSP(symbol.kind),
		location: Location.create(params.textDocument.uri, symbol.range),
		containerName: symbol.detail
	}));
});

// Provide go-to-definition
connection.onDefinition((params: DefinitionParams): Definition | null => {
	const document = documents.get(params.textDocument.uri);
	if (!document) return null;
	
	const symbols = documentSymbols.get(params.textDocument.uri);
	if (!symbols) return null;
	
	// Get word at position
	const offset = document.offsetAt(params.position);
	const text = document.getText();
	const wordRange = getWordRangeAtPosition(text, offset);
	if (!wordRange) return null;
	
	const word = text.substring(wordRange.start, wordRange.end);
	
	// Find definition of this symbol
        const definitions = symbols.filter(s =>
                s.name === word &&
                (s.kind === ForgeSymbolKind.Sig ||
                 s.kind === ForgeSymbolKind.Predicate ||
                 s.kind === ForgeSymbolKind.Function ||
                 s.kind === ForgeSymbolKind.Field)
        );

        if (definitions.length === 0) return null;

        // Prefer field definitions when available so field usages jump to their declarations
        const definition = definitions.find(d => d.kind === ForgeSymbolKind.Field) || definitions[0];

        return Location.create(params.textDocument.uri, definition.range);
});

// Provide hover information
connection.onHover((params: HoverParams): Hover | null => {
	const document = documents.get(params.textDocument.uri);
	if (!document) return null;
	
	const symbols = documentSymbols.get(params.textDocument.uri);
	if (!symbols) return null;
	
	// Get word at position
	const offset = document.offsetAt(params.position);
	const text = document.getText();
	const wordRange = getWordRangeAtPosition(text, offset);
	if (!wordRange) return null;
	
	const word = text.substring(wordRange.start, wordRange.end);
	
        const matchingSymbols = symbols.filter(s => s.name === word);
        // Prefer documented symbols, and prioritize fields when available so hovering
        // on sig fields shows their definitions.
        const symbol = matchingSymbols.find(s => s.documentation && s.kind === ForgeSymbolKind.Field) ||
                matchingSymbols.find(s => s.documentation) ||
                matchingSymbols.find(s => s.kind === ForgeSymbolKind.Field) ||
                matchingSymbols[0];
	if (!symbol) return null;
	
	let hoverText = `**${symbol.kind}** \`${symbol.name}\``;
	if (symbol.detail) {
		hoverText += `\n\n\`\`\`forge\n${symbol.detail}\n\`\`\``;
	}
	if (symbol.documentation) {
		hoverText += `\n\n${symbol.documentation}`;
	}
	
	return {
		contents: {
			kind: MarkupKind.Markdown,
			value: hoverText
		}
	};
});

// Helper to convert Forge symbol kinds to LSP symbol kinds
function forgeSymbolKindToLSP(kind: ForgeSymbolKind): SymbolKind {
	switch (kind) {
		case ForgeSymbolKind.Sig:
			return SymbolKind.Class;
		case ForgeSymbolKind.Predicate:
			return SymbolKind.Function;
		case ForgeSymbolKind.Function:
			return SymbolKind.Function;
		case ForgeSymbolKind.Field:
			return SymbolKind.Field;
		case ForgeSymbolKind.Variable:
			return SymbolKind.Variable;
		case ForgeSymbolKind.Parameter:
			return SymbolKind.Variable;
		case ForgeSymbolKind.Test:
			return SymbolKind.Method;
		case ForgeSymbolKind.Example:
			return SymbolKind.Constant;
		default:
			return SymbolKind.Variable;
	}
}

// Helper to get word range at position
function getWordRangeAtPosition(text: string, offset: number): { start: number; end: number } | null {
	const identifierPattern = /[a-zA-Z_][a-zA-Z0-9_]*/g;
	let match;
	
	while ((match = identifierPattern.exec(text)) !== null) {
		if (offset >= match.index && offset <= match.index + match[0].length) {
			return {
				start: match.index,
				end: match.index + match[0].length
			};
		}
	}
	
	return null;
}

// Listen on the connection
connection.listen();
