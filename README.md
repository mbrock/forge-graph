# Forge Graph

Workspace for Forge/Alloy graph rendering experiments and editor integrations.

## Packages

- `packages/forge-graph`: standalone browser package for rendering Forge/Alloy instance XML as SVG using CnD/SpyTial layout, WebCola, and Perfect Arrows.
- `packages/forge-fm-vsx`: Forge VS Code/Cursor extension package, including the current CnD layout webview integration.

## Development

Build everything with Bun:

```sh
bun run build
```

Build only the standalone graph package:

```sh
bun run build:forge-graph
```

Build only the editor extension:

```sh
bun run build:vsx
```
