# Packaging & LSP Features Issue - SOLVED

## Problem

**Symptom**: LSP features (go-to-definition, autocomplete, hover) work in debug mode but NOT when the extension is installed.

**Root Cause**: The `.vscodeignore` file was excluding critical files needed for the Language Server to function:
1. Server compiled output (`server/out/**`)
2. ANTLR parser compiled files (`server/src/parser/grammars/**`)
3. Required node_modules dependencies for the language server

## Why It Worked in Debug Mode

When you press F5 to debug:
- VS Code runs the extension using **all files** in the workspace
- The TypeScript compiler watches and compiles in real-time
- The server can access all dependencies in `node_modules/`

## Why It Failed When Installed

When you package the extension with `vsce package`:
- Only files **not listed** in `.vscodeignore` are included
- The packaged `.vsix` file was missing the compiled server code
- The extension would start but the language server couldn't function

## The Fix

Updated `.vscodeignore` to explicitly include:

```ignore
# Exclude source TypeScript
**/*.ts

# But INCLUDE compiled JavaScript output
!server/out/**
!client/out/**

# INCLUDE ANTLR compiled parser (critical!)
!server/src/parser/**

# INCLUDE necessary node_modules
!server/node_modules/vscode-languageserver/**
!server/node_modules/vscode-languageserver-textdocument/**
!server/node_modules/antlr4ts/**
!client/node_modules/vscode-languageclient/**
```

## How to Verify the Fix

### Method 1: Check Packaged Files

```bash
# Package the extension
npx vsce package

# List contents of the .vsix (it's a zip file)
unzip -l forge-fm-0.0.2.vsix | grep -E "(server/out|parser)"

# You should see:
# - extension/server/out/server.js
# - extension/server/out/symbols.js
# - extension/server/src/parser/grammars/*.js (ANTLR parser)
```

### Method 2: Install and Test

```bash
# Package the extension
npx vsce package

# Install it
code --install-extension forge-fm-0.0.2.vsix

# Open a .frg file and test:
# 1. Ctrl/Cmd + Click on a symbol → should jump to definition
# 2. Hover over a symbol → should show type info
# 3. Type "sig" → should show autocomplete
```

### Method 3: Check Extension Size

The packaged `.vsix` file should be **larger** now because it includes:
- Compiled server code (~50-200KB)
- ANTLR parser generated code (~500KB-1MB)
- Required node_modules dependencies

Before fix: ~500KB
After fix: ~2-5MB (approximately)

## Testing LSP Features

Once installed, open `client/testFixture/lsp-features.frg` and verify:

1. **Go to Definition**: Ctrl/Cmd+Click on `Person` on line 49 → jumps to line 10
2. **Hover**: Hover over `wellFormed` → shows predicate signature
3. **Outline**: Ctrl/Cmd+Shift+O → shows all symbols (Person, Student, etc.)
4. **Autocomplete**: Type `sig` → shows completions and snippets

## Common Packaging Mistakes

1. **Excluding `out/` directories** - These contain compiled code!
2. **Excluding all `node_modules/`** - Language servers need their dependencies
3. **Excluding ANTLR generated files** - Parser is essential for LSP features
4. **Not testing the packaged .vsix** - Always install and test before publishing

## Build Checklist

Before packaging:

- [ ] Run `bun run compile` in root (compiles both client and server)
- [ ] Verify `server/out/server.js` exists
- [ ] Verify `server/src/parser/grammars/*.js` exist (ANTLR output)
- [ ] Verify `client/out/extension.js` exists
- [ ] Test in debug mode first (F5)
- [ ] Package with `npx vsce package`
- [ ] Install the .vsix and test LSP features
- [ ] Check .vsix size is reasonable (>1MB with dependencies)

## Related Files

- `.vscodeignore` - Controls what gets packaged
- `package.json` - Main entry point: `"main": "./client/out/extension"`
- `server/package.json` - Server dependencies
- `client/src/extension.ts` - Starts the language server
- `server/src/server.ts` - LSP feature implementations
