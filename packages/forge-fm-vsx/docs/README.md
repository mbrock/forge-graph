# Forge VSCode Extension

[![Build and Deploy Extension](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/vsce-package.yml/badge.svg)](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/vsce-package.yml)
[![Test Check](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/test-run.yml/badge.svg)](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/test-run.yml)
[![Version Increment Check](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/version-check.yml/badge.svg)](https://github.com/sidprasad/forge-language-extension-vscode/actions/workflows/version-check.yml)
[![VS Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/SiddharthaPrasad.forge-language-server)](https://marketplace.visualstudio.com/items?itemName=SiddharthaPrasad.forge-language-server)
[![VS Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SiddharthaPrasad.forge-language-server)](https://marketplace.visualstudio.com/items?itemName=SiddharthaPrasad.forge-language-server)
[![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.74.0-blue?logo=visualstudiocode)](https://code.visualstudio.com/)
[![Forge](https://img.shields.io/badge/Forge-%3E%3D3.3.0-ff6f00)](https://forge-fm.org/)

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

## UI/UX reliability

- Consistent run/stop/continue flows with clear output channels.
- Diagnostics parsed into VS Code Problems with clickable links.
- No shell wrappers for execution, which keeps behavior predictable and safer.
- Friendly errors when Racket or Forge are missing or out of date.

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
- `Forge: Run Smoke Tests`
- `Forge: Stop`
- `Forge: Continue Forge Run`
- `Forge: Enable Logging`
- `Forge: Disable Logging`
- `Forge: Forge Docs`

## Settings

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `forge.racketPath` | string | `""` | Path to Racket executable. Leave empty to auto-detect. |
| `forge.minVersion` | string | `"3.3.0"` | Minimum Forge version required. |
| `forgeLanguageServer.maxNumberOfProblems` | number | `100` | Max diagnostics produced by the server. |
| `forgeLanguageServer.trace.server` | string | `"messages"` | LSP trace verbosity. |

## Testing

- `bun test` runs the VS Code extension test harness via `scripts/e2e.sh`.
- `bun run lint` checks client/server linting.
- Manual QA focus: run/stop/continue, missing Racket, old Forge versions, diagnostics, and LSP navigation.

## Development

See `dev-guide.md` for setup and publishing guidance. For architecture and implementation notes:

- `ARCHITECTURE.md`
- `FORGE_RUNNER.md`
- `LSP_FEATURES.md`
- `ANTLR_SETUP.md`
