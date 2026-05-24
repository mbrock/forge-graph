# @forge-fm/forge-graph

Browser-side Forge/Alloy instance graph renderer.

This package is the first-class home for the CnD/WebCola/Perfect Arrows rendering experiment. It exports:

- `renderForgeGraph(input)`: parse Alloy XML, apply a CnD layout spec, solve the layout, and return SVG markup.
- `solveForgeGraphLayout(input)`: return the solved graph layout data without rendering.
- `<forge-graph>`: a custom element that renders inline Alloy XML or XML loaded from `src`.

Build with Bun:

```sh
bun run build
```

Run the demo:

```sh
bun run dev
```

The VS Code extension webview currently imports `src/renderer` directly so local changes to this package can be bundled into the extension pane.

CnD/SpyTial note: `spytial-core` is installed as a pinned GitHub dependency because the npm package currently exports only a browser-global bundle, while this renderer needs parser/layout source modules. The package-local `tsconfig.json` maps `@spytial-core/*` to the installed package source under `node_modules`; it should not require a sibling checkout like `/Users/mbrock/src/cnd-core-v2.3`.
