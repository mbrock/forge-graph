/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('LSP: Go to Definition', () => {
	const docUri = getDocUri('lsp-features.frg');

	test('Should go to sig definition', async () => {
		await testGoToDefinition(docUri, new vscode.Position(49, 20), [
			// Position of "Person" in line: "pred wellFormed[p: Person] {"
			{ uri: docUri, range: toRange(10, 13, 10, 19) } // abstract sig Person
		]);
	});

	test('Should go to predicate definition', async () => {
		await testGoToDefinition(docUri, new vscode.Position(66, 8), [
			// Position of "wellFormed" in line: "    wellFormed[p]"
			{ uri: docUri, range: toRange(41, 5, 41, 15) } // pred wellFormed
		]);
	});

        test('Should go to function definition', async () => {
                await testGoToDefinition(docUri, new vscode.Position(52, 8), [
                        // Position of "getFriends" usage
                        { uri: docUri, range: toRange(52, 4, 52, 14) } // fun getFriends
                ]);
        });

        test('Should go to field definition', async () => {
                await testGoToDefinition(docUri, new vscode.Position(59, 8), [
                        // Position of "friends" usage in function body
                        { uri: docUri, range: toRange(11, 4, 11, 11) } // friends field in Person
                ]);
        });
});

suite('LSP: Hover Information', () => {
	const docUri = getDocUri('lsp-features.frg');

	test('Should show hover for sig', async () => {
		await testHover(docUri, new vscode.Position(10, 15), {
			contents: ['**sig** `Person`']
		});
	});

	test('Should show hover for predicate', async () => {
		await testHover(docUri, new vscode.Position(41, 8), {
			contents: ['**predicate** `wellFormed`']
		});
	});

        test('Should show hover for function', async () => {
                await testHover(docUri, new vscode.Position(52, 8), {
                        contents: ['**function** `getFriends`']
                });
        });

        test('Should show hover for field', async () => {
                await testHover(docUri, new vscode.Position(11, 8), {
                        contents: ['**field** `friends`', 'field in Person: set Person']
                });
        });
});

suite('LSP: Document Symbols', () => {
	const docUri = getDocUri('lsp-features.frg');

	test('Should find all signatures', async () => {
		const symbols = await testDocumentSymbols(docUri);
		
		const sigNames = symbols
			.filter(s => s.kind === vscode.SymbolKind.Class)
			.map(s => s.name);
		
		assert.ok(sigNames.includes('Person'), 'Should find Person sig');
		assert.ok(sigNames.includes('Student'), 'Should find Student sig');
		assert.ok(sigNames.includes('Teacher'), 'Should find Teacher sig');
		assert.ok(sigNames.includes('Course'), 'Should find Course sig');
	});

	test('Should find all predicates', async () => {
		const symbols = await testDocumentSymbols(docUri);
		
		const predNames = symbols
			.filter(s => s.kind === vscode.SymbolKind.Function)
			.map(s => s.name);
		
		assert.ok(predNames.includes('wellFormed'), 'Should find wellFormed predicate');
		assert.ok(predNames.includes('popular'), 'Should find popular predicate');
		assert.ok(predNames.includes('testNetwork'), 'Should find testNetwork predicate');
	});

	test('Should find all functions', async () => {
		const symbols = await testDocumentSymbols(docUri);
		
		const funNames = symbols
			.filter(s => s.kind === vscode.SymbolKind.Function)
			.map(s => s.name);
		
		assert.ok(funNames.includes('getFriends'), 'Should find getFriends function');
		assert.ok(funNames.includes('countFriends'), 'Should find countFriends function');
	});

	test('Should find fields', async () => {
		const symbols = await testDocumentSymbols(docUri);
		
		const fieldNames = symbols
			.filter(s => s.kind === vscode.SymbolKind.Field)
			.map(s => s.name);
		
		assert.ok(fieldNames.includes('friends'), 'Should find friends field');
		assert.ok(fieldNames.includes('age'), 'Should find age field');
		assert.ok(fieldNames.includes('courses'), 'Should find courses field');
		assert.ok(fieldNames.includes('teaches'), 'Should find teaches field');
	});
});

suite('LSP: Completion', () => {
	const docUri = getDocUri('lsp-features.frg');

	test('Should complete Forge keywords', async () => {
		// Test at a position where we expect completions
		await testCompletion(docUri, new vscode.Position(80, 0), {
			items: [
				{ label: 'sig', kind: vscode.CompletionItemKind.Keyword },
				{ label: 'pred', kind: vscode.CompletionItemKind.Keyword },
				{ label: 'fun', kind: vscode.CompletionItemKind.Keyword },
				{ label: 'all', kind: vscode.CompletionItemKind.Keyword },
				{ label: 'some', kind: vscode.CompletionItemKind.Keyword }
			]
		});
	});

	test('Should include snippets', async () => {
		const completionList = await vscode.commands.executeCommand(
			'vscode.executeCompletionItemProvider',
			docUri,
			new vscode.Position(80, 0)
		) as vscode.CompletionList;

		const snippets = completionList.items.filter(
			item => item.kind === vscode.CompletionItemKind.Snippet
		);
		
		assert.ok(snippets.length > 0, 'Should have snippet completions');
		
		const snippetLabels = snippets.map(s => s.label);
		assert.ok(
			snippetLabels.some(label => label.toString().includes('sig')),
			'Should have sig snippet'
		);
		assert.ok(
			snippetLabels.some(label => label.toString().includes('pred')),
			'Should have pred snippet'
		);
	});

	test('Should not complete in comments', async () => {
		// Position inside a comment
		const completionList = await vscode.commands.executeCommand(
			'vscode.executeCompletionItemProvider',
			docUri,
			new vscode.Position(1, 10) // Inside "// Test file for LSP features"
		) as vscode.CompletionList;

		// Should return empty or minimal completions in comments
		assert.ok(
			completionList.items.length === 0 || 
			completionList.items.every(item => item.kind !== vscode.CompletionItemKind.Keyword),
			'Should not provide keyword completions in comments'
		);
	});
});

// Helper functions

async function testGoToDefinition(
	docUri: vscode.Uri,
	position: vscode.Position,
	expectedLocations: vscode.Location[]
) {
	await activate(docUri);

	const actualLocations = (await vscode.commands.executeCommand(
		'vscode.executeDefinitionProvider',
		docUri,
		position
	)) as vscode.Location[];

	assert.strictEqual(actualLocations.length, expectedLocations.length, 
		`Expected ${expectedLocations.length} definitions, got ${actualLocations.length}`);

	expectedLocations.forEach((expectedLocation, i) => {
		const actualLocation = actualLocations[i];
		assert.strictEqual(actualLocation.uri.toString(), expectedLocation.uri.toString());
		assert.strictEqual(
			actualLocation.range.start.line,
			expectedLocation.range.start.line,
			`Line mismatch at definition ${i}`
		);
		assert.strictEqual(
			actualLocation.range.start.character,
			expectedLocation.range.start.character,
			`Character mismatch at definition ${i}`
		);
	});
}

async function testHover(
	docUri: vscode.Uri,
	position: vscode.Position,
	expectedHover: { contents: string[] }
) {
	await activate(docUri);

	const actualHovers = (await vscode.commands.executeCommand(
		'vscode.executeHoverProvider',
		docUri,
		position
	)) as vscode.Hover[];

	assert.ok(actualHovers.length > 0, 'Should have hover information');
	
	const hover = actualHovers[0];
	const hoverContent = hover.contents.map(c => {
		if (typeof c === 'string') return c;
		if (c instanceof vscode.MarkdownString) return c.value;
		return '';
	}).join('\n');

	expectedHover.contents.forEach(expected => {
		assert.ok(
			hoverContent.includes(expected),
			`Hover should contain "${expected}", got: ${hoverContent}`
		);
	});
}

async function testDocumentSymbols(
	docUri: vscode.Uri
): Promise<vscode.DocumentSymbol[]> {
	await activate(docUri);

	const symbols = (await vscode.commands.executeCommand(
		'vscode.executeDocumentSymbolProvider',
		docUri
	)) as vscode.DocumentSymbol[];

	assert.ok(symbols.length > 0, 'Should have document symbols');
	return symbols;
}

async function testCompletion(
	docUri: vscode.Uri,
	position: vscode.Position,
	expectedCompletionList: { items: { label: string; kind: vscode.CompletionItemKind }[] }
) {
	await activate(docUri);

	const actualCompletionList = (await vscode.commands.executeCommand(
		'vscode.executeCompletionItemProvider',
		docUri,
		position
	)) as vscode.CompletionList;

	assert.ok(
		actualCompletionList.items.length >= expectedCompletionList.items.length,
		`Expected at least ${expectedCompletionList.items.length} completions, got ${actualCompletionList.items.length}`
	);

	expectedCompletionList.items.forEach(expectedItem => {
		const found = actualCompletionList.items.find(
			item => item.label === expectedItem.label && item.kind === expectedItem.kind
		);
		assert.ok(
			found,
			`Should find completion item: ${expectedItem.label} (kind: ${expectedItem.kind})`
		);
	});
}

function toRange(
	sLine: number,
	sChar: number,
	eLine: number,
	eChar: number
): vscode.Range {
	const start = new vscode.Position(sLine, sChar);
	const end = new vscode.Position(eLine, eChar);
	return new vscode.Range(start, end);
}
