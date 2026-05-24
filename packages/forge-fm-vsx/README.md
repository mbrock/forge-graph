# Forge VSCode Extension


VS Code support for [Forge](https://forge-fm.org/).

## Highlights

- Run Forge files with robust process management (Racket discovery, version checks, graceful stop).
- LSP essentials: go to definition, hover, and document symbols.
- **Intelligent code completion**: 60+ Forge keywords and 9 smart snippets for common patterns.
- Syntax highlighting and language configuration for `.frg`.

## Quick start

1. Install Racket and Forge: `raco pkg install forge`
2. Install the extension from the 
3. Open a `.frg` file and run `Forge: Run` (or click the Run button).

## Code Completion

Smart, non-intrusive completions for Forge. Trigger with **Ctrl+Space** (Windows/Linux) or **Cmd+Space** (Mac), or let it appear naturally as you type.

**Features:**
- **60+ Keywords**: All Forge keywords (`sig`, `pred`, `fun`, `run`, `check`, `all`, `some`, `always`, etc.)
- **9 Smart Snippets**: Common code patterns with tab-stop placeholders:
  - `sig (snippet)` → Full signature declaration template
  - `pred (snippet)` → Predicate with parameters
  - `run (snippet)` → Run command with scope
  - `test expect (snippet)` → Complete test block
  - Quantifiers: `all (snippet)`, `some (snippet)`
  - And more...
- **Context-aware**: Skips completions inside comments and strings
- **Helpful documentation**: Each item includes description and usage info

## Commands

- `Forge: Run`
- `Forge: Stop`
- `Forge: Continue Forge Run`
- `Forge: Enable Logging`
- `Forge: Disable Logging`
- `Forge: Forge Docs`

## `@forge` Chat Participant (AI-Powered Help)

The extension includes a **chat participant** that lets students ask questions about Forge directly in VS Code's Copilot Chat. It comes bundled with the complete [Forge v5 documentation](https://forge-fm.github.io/forge-documentation/5.0/), so answers are grounded in the official reference material — not generic LLM guesses.

### Prerequisites

- **VS Code 1.93+**
- **GitHub Copilot** (or another VS Code language-model provider) installed and signed in.

### Usage

Open the Chat panel (`Ctrl+Shift+I` / `Cmd+Shift+I`) and type `@forge` followed by your question:

```
@forge How do I declare a sig with fields?
@forge What does "lone" mean?
@forge Why am I getting a "contract violation" error?
```

### Slash commands

| Command | Description |
| --- | --- |
| `@forge /docs <topic>` | Look up the official Forge documentation for a specific topic (sigs, quantifiers, temporal operators, etc.) |
| `@forge /explain` | Explain Forge code or concepts — automatically includes the active `.frg` file as context |

### How it works

1. **Bundled docs** — The full Forge v5 documentation is shipped inside the extension as structured data (see `client/src/forge-docs.ts`). No network fetch needed at query time.
2. **Keyword search** — When a question comes in, the extension scores every documentation section against the query using keyword and title matching, then selects the most relevant sections.
3. **LLM augmentation** — The relevant doc sections, plus the user's current `.frg` file (if open), are sent as context to the language model alongside a Forge-specific system prompt.
4. **Pedagogical guardrails** — The system prompt instructs the model to guide students toward understanding rather than providing homework solutions outright.

### Example workflow

1. Open your `.frg` file.
2. Open Chat and type: `@forge /explain`
3. The assistant reads your file and walks through the model, explaining each sig, predicate, and constraint.
4. Follow up with: `@forge Why is my run returning UNSAT?`
5. The assistant uses the relevant "Running" and "Bounds" documentation to help you debug.

## Settings

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `forge.racketPath` | string | `""` | Path to Racket executable. Leave empty to auto-detect. |
| `forge.minVersion` | string | `"3.3.0"` | Minimum Forge version required. |
| `forgeLanguageServer.maxNumberOfProblems` | number | `100` | Max diagnostics produced by the server. |
| `forgeLanguageServer.trace.server` | string | `"messages"` | LSP trace verbosity. |
