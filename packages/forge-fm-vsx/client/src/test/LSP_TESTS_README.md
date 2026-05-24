# LSP Features Tests

This directory contains comprehensive tests for the Language Server Protocol (LSP) features implemented in the Forge extension.

## Test Coverage

### 1. Go to Definition (`lsp.test.ts`)
Tests the ability to navigate to symbol definitions:
- Signature definitions (e.g., clicking on `Person` jumps to `sig Person`)
- Predicate definitions (e.g., clicking on `wellFormed` usage jumps to `pred wellFormed`)
- Function definitions (e.g., clicking on `getFriends` usage jumps to `fun getFriends`)

### 2. Hover Information (`lsp.test.ts`)
Tests hover tooltips showing type and documentation:
- Signature hover (shows `sig` keyword and name)
- Predicate hover (shows `predicate` keyword, signature, and documentation)
- Function hover (shows `function` keyword, signature, return type)

### 3. Document Symbols (`lsp.test.ts`)
Tests the outline/symbol view that shows all symbols in a file:
- All signatures (Person, Student, Teacher, Course)
- All predicates (wellFormed, popular, testNetwork)
- All functions (getFriends, countFriends)
- All fields (friends, age, courses, teaches, enrolled, instructor)

### 4. Completion (`lsp.test.ts`)
Tests autocomplete functionality:
- Forge keywords (sig, pred, fun, all, some, etc.)
- Code snippets (sig template, pred template, etc.)
- Context-aware completions (no completions in comments)

## Test Fixtures

### `lsp-features.frg`
A comprehensive Forge file containing:
- Abstract and concrete signatures with inheritance
- Predicates with parameters and constraints
- Functions with return types
- Fields with various multiplicities
- Test blocks and run commands
- Documentation comments

## Running Tests

```bash
# Run all tests
bun test

# Run only LSP tests
bun test -- --grep "LSP"
```

## Test Structure

Each test suite follows this pattern:
1. Load the test fixture file
2. Activate the language server
3. Execute a VS Code command (e.g., `vscode.executeDefinitionProvider`)
4. Assert the results match expectations

## Expected Behavior

When LSP features are working correctly:
- **Ctrl/Cmd + Click** on a symbol jumps to its definition
- **Hovering** over a symbol shows type information and documentation
- **Ctrl/Cmd + Shift + O** shows the document outline with all symbols
- **Typing** shows autocomplete suggestions for keywords and snippets

## Debugging Failed Tests

If tests fail:
1. Check that the language server is running (look for `Client and Server launched` in debug console)
2. Verify the ANTLR parser is generated (`bun run compile` in server directory)
3. Check for compile errors in TypeScript files
4. Ensure all dependencies are installed (`bun install` in root, client, and server directories)

## Common Issues

### "Cannot find symbol" errors
- The ANTLR parser may not have been generated
- Run `cd server && bun run antlr` to regenerate the parser

### "Language server not responding"
- The server module may not have compiled
- Run `bun run compile` to build both client and server

### "Completions not showing"
- Check that the client is properly connected to the server
- Enable server tracing in VS Code settings: `"forgeLanguageServer.trace.server": "verbose"`
