# ANTLR Parser Setup for Forge LSP Features

## Overview

The Forge language extension now uses a proper ANTLR4-based parser with a Context-Free Grammar (CFG) instead of regex-based parsing. This provides the foundation for robust LSP features like go-to-definition, hover information, find-all-references, and symbol search.

## Architecture

### Grammar Files
- **Location**: `server/grammars/`
- **ForgeLexer.g4**: Lexical grammar defining all Forge tokens
- **Forge.g4**: Parser grammar defining the Forge language structure with `tokenVocab=ForgeLexer`

### Generated Parser
- **Location**: `server/src/parser/grammars/`
- **Generated Files**:
  - `ForgeLexer.ts` - Tokenizer
  - `ForgeParser.ts` - Parser with context classes for each grammar rule
  - `ForgeVisitor.ts` - Visitor interface for AST traversal
  - `ForgeListener.ts` - Listener interface (alternative to visitor)
  - `*.tokens` files - Token vocabulary

### Symbol Extraction
- **File**: `server/src/symbols.ts`
- **Class**: `ForgeSymbolExtractor`
- **Pattern**: Visitor pattern using `SymbolExtractorVisitor` that extends `AbstractParseTreeVisitor`

## How It Works

1. **Parsing**: Text → ANTLRInputStream → ForgeLexer → tokens → ForgeParser → AST
2. **Traversal**: AST → SymbolExtractorVisitor → visits nodes (sigDecl, predDecl, funDecl)
3. **Extraction**: Visitor collects symbol info (name, kind, location, documentation)
4. **LSP Integration**: Symbols used for definition/hover/outline features

## Build Process

```bash
# Automatic (runs before compile)
bun run compile  # Runs antlr -> tsc

# Manual parser generation
bun run antlr    # Generates TypeScript parser from grammars
```

The `precompile` script ensures the parser is always regenerated before compilation.

## Supported Symbol Kinds

- **Sig**: Forge signatures (mapped to LSP Class)
- **Predicate**: Predicates (mapped to LSP Function)
- **Function**: Functions (mapped to LSP Function)
- **Field**: Signature fields (mapped to LSP Field)
- **Test**: Test declarations (mapped to LSP Method)
- **Example**: Example declarations (mapped to LSP Constant)

## Future Enhancements

With the CFG in place, we can now add:

1. **Scope Analysis**: Track which symbols are in scope at any position
2. **Find All References**: Search for all usages of a symbol
3. **Type Information**: Extract and display type signatures
4. **Semantic Validation**: Catch semantic errors beyond syntax
5. **Advanced Completion**: Context-aware suggestions based on AST position
6. **Rename Refactoring**: Safe symbol renaming across the codebase

## Key Files

- `server/grammars/ForgeLexer.g4` - Lexer grammar
- `server/grammars/Forge.g4` - Parser grammar
- `server/src/symbols.ts` - Symbol extraction visitor
- `server/src/server.ts` - LSP server with feature handlers
- `server/package.json` - Build scripts with ANTLR integration

## Dependencies

- `antlr4ts@^0.5.0-alpha.4` - ANTLR runtime for TypeScript
- `antlr4ts-cli@^0.5.0-alpha.4` - ANTLR code generator
