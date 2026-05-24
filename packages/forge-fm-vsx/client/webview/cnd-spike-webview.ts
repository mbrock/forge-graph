import { renderForgeGraph } from '../../../forge-graph/src/renderer';
import type { ForgeGraphRenderResult } from '../../../forge-graph/src/renderer';

declare const acquireVsCodeApi: () => {
	postMessage(message: unknown): void;
};

interface RenderPayload {
	xml: string;
	cnd: string;
	title: string;
	sourceDescription: string;
	status?: string;
	datumId?: string | number;
	generatorName?: string;
	buttons?: ProviderButton[];
	providerWebSocketUrl?: string;
}

interface ProviderPayload {
	providerWebSocketUrl: string;
	cnd: string;
	title: string;
	sourceDescription: string;
}

interface ProviderButton {
	text: string;
	mouseover?: string;
	onClick: string;
}

interface ProviderDatum {
	id: string | number;
	generatorName?: string;
	format: string;
	data: string;
	status?: string;
	buttons?: ProviderButton[];
}

interface ProviderMeta {
	name?: string;
	generators?: string[];
}

interface RenderSnapshot {
	payload: RenderPayload;
	result: ForgeGraphRenderResult;
}

const vscode = acquireVsCodeApi();
const app = document.getElementById('app');
let providerSocket: WebSocket | undefined;
let activeProviderPayload: ProviderPayload | undefined;
let activeGeneratorName: string | undefined;
let renderHistory: RenderSnapshot[] = [];
let renderHistoryIndex = -1;
let providerStatusMessage = '';

function setHtml(html: string): void {
	if (app) {
		app.innerHTML = html;
	}
}

function postError(message: string): void {
	vscode.postMessage({ type: 'error', message });
}

function escapeHtml(value: unknown): string {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function sendProviderMessage(message: unknown): void {
	if (!providerSocket || providerSocket.readyState !== WebSocket.OPEN) {
		postError('Forge provider is not connected.');
		return;
	}
	providerSocket.send(JSON.stringify(message));
}

function requestGenerator(generatorName: string, onClick = 'next'): void {
	activeGeneratorName = generatorName;
	providerStatusMessage = '';
	sendProviderMessage({
		type: 'click',
		version: 1,
		payload: {
			onClick,
			context: { generatorName },
		},
	});
}

function renderProviderMeta(payload: ProviderPayload, meta: ProviderMeta): void {
	const generators = meta.generators || [];
	const generatorButtons = generators.map((generatorName) =>
		`<button class="provider-action" data-generator="${escapeHtml(generatorName)}">${escapeHtml(generatorName)}</button>`
	).join('');

	setHtml(`<main class="loading">
		<header class="toolbar">
			<div class="toolbar-title">
				<strong>${escapeHtml(payload.title)}</strong>
				<span>${generators.length ? 'Choose a command to render.' : 'Connected; waiting for data.'}</span>
			</div>
			<div class="actions">${generatorButtons}</div>
		</header>
	</main>`);

	app?.querySelectorAll<HTMLButtonElement>('button[data-generator]').forEach((button) => {
		button.addEventListener('click', () => {
			const generatorName = button.dataset.generator;
			if (generatorName) {
				requestGenerator(generatorName);
			}
		});
	});
}

function showProviderStatus(payload: ProviderPayload, message: string): void {
	setHtml(`<main class="loading">
		<header class="toolbar">
			<div class="toolbar-title">
				<strong>${escapeHtml(payload.title)}</strong>
				<span>${escapeHtml(message)}</span>
			</div>
		</header>
	</main>`);
}

async function handleProviderData(providerPayload: ProviderPayload, datum: ProviderDatum): Promise<void> {
	if (datum.format !== 'alloy') {
		throw new Error(`Unsupported Forge provider datum format: ${datum.format}`);
	}
	if (datum.status && datum.status !== 'sat') {
		providerStatusMessage = `Forge returned ${datum.status}.`;
		renderCurrentSnapshot();
		if (renderHistoryIndex < 0) {
			showProviderStatus(providerPayload, providerStatusMessage);
		}
		return;
	}

	await renderAndStore({
		xml: datum.data,
		cnd: providerPayload.cnd,
		title: datum.generatorName
			? `${providerPayload.title}: ${datum.generatorName}`
			: providerPayload.title,
		sourceDescription: providerPayload.sourceDescription,
		status: datum.status,
		datumId: datum.id,
		generatorName: datum.generatorName || activeGeneratorName,
		buttons: datum.buttons,
		providerWebSocketUrl: providerPayload.providerWebSocketUrl,
	});
}

function handleProviderMessage(providerPayload: ProviderPayload, raw: string): void {
	if (raw === 'pong') {
		return;
	}

	let message: any;
	try {
		message = JSON.parse(raw);
	} catch {
		throw new Error(`Forge provider sent non-JSON data: ${raw}`);
	}

	if (message.type === 'meta') {
		const meta = message.payload as ProviderMeta;
		renderProviderMeta(providerPayload, meta);
		if (!activeGeneratorName && meta.generators?.length) {
			requestGenerator(meta.generators[0]);
		}
		return;
	}

	if (message.type === 'data') {
		const entering = (message.payload?.enter || []) as ProviderDatum[];
		const datum = entering.find((candidate) => candidate.format === 'alloy') || entering[0];
		if (!datum) {
			showProviderStatus(providerPayload, 'Forge provider returned no renderable data.');
			return;
		}
		handleProviderData(providerPayload, datum).catch((error) => {
			const errorMessage = error instanceof Error ? error.message : String(error);
			setHtml(`<main class="error">
				<header class="toolbar">
					<div class="toolbar-title"><strong>Provider render failed</strong><span>${escapeHtml(errorMessage)}</span></div>
				</header>
			</main>`);
			postError(errorMessage);
		});
		return;
	}
}

function connectProvider(payload: ProviderPayload): void {
	activeProviderPayload = payload;
	activeGeneratorName = undefined;
	renderHistory = [];
	renderHistoryIndex = -1;
	providerStatusMessage = '';
	providerSocket?.close();
	showProviderStatus(payload, `Connecting to ${payload.providerWebSocketUrl}...`);

	const socket = new WebSocket(payload.providerWebSocketUrl);
	providerSocket = socket;

	socket.addEventListener('open', () => {
		showProviderStatus(payload, `Connected to ${payload.providerWebSocketUrl}; requesting commands...`);
		socket.send(JSON.stringify({ type: 'meta', version: 1 }));
	});
	socket.addEventListener('message', (event) => {
		try {
			handleProviderMessage(payload, String(event.data));
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			setHtml(`<main class="error">
				<header class="toolbar">
					<div class="toolbar-title"><strong>Provider error</strong><span>${escapeHtml(message)}</span></div>
				</header>
			</main>`);
			postError(message);
		}
	});
	socket.addEventListener('error', () => {
		postError(`Could not connect to Forge provider at ${payload.providerWebSocketUrl}.`);
	});
	socket.addEventListener('close', () => {
		if (providerSocket === socket) {
			providerSocket = undefined;
		}
	});
}

function renderGraphResult(payload: RenderPayload, result: ForgeGraphRenderResult): void {
	const actionMarkup = (payload.buttons || []).map((button, index) =>
		`<button class="provider-action" data-provider-action="${index}" title="${escapeHtml(button.mouseover || '')}">${escapeHtml(button.text)}</button>`
	).join('');
	const canGoBack = renderHistoryIndex > 0;
	const canGoForward = renderHistoryIndex >= 0 && renderHistoryIndex < renderHistory.length - 1;
	const title = payload.generatorName || payload.title;
	const instanceLabel = payload.datumId !== undefined
		? `instance ${escapeHtml(payload.datumId)}`
		: renderHistoryIndex >= 0
			? `instance ${renderHistoryIndex + 1}`
			: 'instance';
	const statusText = providerStatusMessage || payload.status || '';
	const stats = `${result.stats.nodes} nodes · ${result.stats.edges} edges · ${instanceLabel}${statusText ? ` · ${escapeHtml(statusText)}` : ''}`;

	setHtml(`<main>
		<header class="toolbar">
			<div class="toolbar-title">
				<strong>${escapeHtml(title)}</strong>
				<span>${stats}</span>
			</div>
			<div class="actions">
				<button class="toolbar-button" data-history-back ${canGoBack ? '' : 'disabled'}>Back</button>
				<button class="toolbar-button" data-history-forward ${canGoForward ? '' : 'disabled'}>Forward</button>
				${actionMarkup}
			</div>
		</header>
		<section class="canvas">${result.svg}</section>
	</main>`);

	app?.querySelectorAll<HTMLButtonElement>('button[data-provider-action]').forEach((button) => {
		button.addEventListener('click', () => {
			const actionIndex = Number(button.dataset.providerAction);
			const action = payload.buttons?.[actionIndex];
			const generatorName = payload.generatorName || activeGeneratorName;
			if (action?.onClick && generatorName && activeProviderPayload) {
				requestGenerator(generatorName, action.onClick);
			}
		});
	});
	app?.querySelector<HTMLButtonElement>('button[data-history-back]')?.addEventListener('click', () => {
		if (renderHistoryIndex > 0) {
			renderHistoryIndex -= 1;
			providerStatusMessage = '';
			renderCurrentSnapshot();
		}
	});
	app?.querySelector<HTMLButtonElement>('button[data-history-forward]')?.addEventListener('click', () => {
		if (renderHistoryIndex < renderHistory.length - 1) {
			renderHistoryIndex += 1;
			providerStatusMessage = '';
			renderCurrentSnapshot();
		}
	});
}

function renderCurrentSnapshot(): void {
	const snapshot = renderHistory[renderHistoryIndex];
	if (snapshot) {
		renderGraphResult(snapshot.payload, snapshot.result);
	}
}

function storeSnapshot(snapshot: RenderSnapshot): void {
	if (renderHistoryIndex < renderHistory.length - 1) {
		renderHistory = renderHistory.slice(0, renderHistoryIndex + 1);
	}
	renderHistory.push(snapshot);
	renderHistoryIndex = renderHistory.length - 1;
	providerStatusMessage = '';
	renderCurrentSnapshot();
}

async function renderAndStore(payload: RenderPayload): Promise<void> {
	setHtml(`<main class="loading">
		<header class="toolbar">
			<div class="toolbar-title">
				<strong>${escapeHtml(payload.generatorName || payload.title)}</strong>
				<span>Computing layout...</span>
			</div>
		</header>
	</main>`);
	const result = await renderForgeGraph({
		xml: payload.xml,
		cnd: payload.cnd,
		title: payload.generatorName || payload.title,
		width: window.innerWidth,
		height: window.innerHeight,
	});
	storeSnapshot({ payload, result });
}

window.addEventListener('message', (event) => {
	if (event.data?.type === 'connect') {
		connectProvider(event.data.payload);
		return;
	}

	if (event.data?.type !== 'render') {
		return;
	}

	providerSocket?.close();
	providerSocket = undefined;
	activeProviderPayload = undefined;
	activeGeneratorName = undefined;
	renderHistory = [];
	renderHistoryIndex = -1;
	providerStatusMessage = '';

	renderAndStore(event.data.payload).catch((error) => {
		const message = error instanceof Error ? error.message : String(error);
		setHtml(`<main class="error">
			<header class="toolbar">
				<div class="toolbar-title"><strong>Render failed</strong><span>${escapeHtml(message)}</span></div>
			</header>
		</main>`);
		postError(message);
	});
});

const style = document.createElement('style');
style.textContent = `
	:root {
		color-scheme: light dark;
		--bg: #ffffff;
		--toolbar: #f7f7f7;
		--toolbar-border: #d7d7d7;
		--ink: #141414;
		--muted: #666666;
		--line: #1e1e1e;
		--paper: #ffffff;
		--accent: #d92818;
	}
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		background: var(--bg);
		color: var(--ink);
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}
	main {
		display: grid;
		grid-template-rows: 42px 1fr;
		min-height: 100vh;
	}
	.toolbar {
		align-items: center;
		background: var(--toolbar);
		border-bottom: 1px solid var(--toolbar-border);
		display: flex;
		gap: 16px;
		justify-content: space-between;
		min-width: 0;
		padding: 0 10px;
	}
	.toolbar-title {
		align-items: baseline;
		display: flex;
		gap: 10px;
		min-width: 0;
		overflow: hidden;
		white-space: nowrap;
	}
	.toolbar-title strong {
		color: var(--ink);
		font-size: 13px;
		font-weight: 650;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.toolbar-title span {
		color: var(--muted);
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.actions {
		display: flex;
		flex: 0 0 auto;
		height: 100%;
	}
	.toolbar-button,
	.provider-action {
		align-items: center;
		background: transparent;
		border: 0;
		border-left: 1px solid var(--toolbar-border);
		color: var(--ink);
		cursor: pointer;
		display: inline-flex;
		font-family: inherit;
		font-size: 12px;
		font-weight: 520;
		height: 100%;
		letter-spacing: 0.01em;
		padding: 0 12px;
	}
	.toolbar-button:last-child,
	.provider-action:last-child {
		border-right: 1px solid var(--toolbar-border);
	}
	.toolbar-button:hover:not(:disabled),
	.provider-action:hover {
		background: #ececec;
	}
	.toolbar-button:disabled {
		color: #aaa;
		cursor: default;
	}
	.canvas {
		min-height: 0;
		overflow: hidden;
		background: var(--paper);
	}
	svg {
		display: block;
		width: 100%;
		height: calc(100vh - 42px);
	}
	.edge {
		color: var(--line);
	}
	.edge path {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
	}
	.edge polygon {
		fill: currentColor;
		stroke: none;
	}
	.edge text {
		dominant-baseline: middle;
		fill: var(--line);
		font-family: inherit;
		font-size: 10px;
		font-variant-caps: all-small-caps;
		font-weight: 720;
		letter-spacing: 0.075em;
		paint-order: stroke;
		pointer-events: none;
		stroke: var(--paper);
		stroke-width: 5px;
		stroke-linejoin: round;
		text-anchor: middle;
		text-transform: lowercase;
	}
	.node rect {
		fill: #fff;
		stroke: var(--accent);
		stroke-width: 1.4;
	}
	.node .type {
		font-size: 10px;
		font-weight: 720;
		letter-spacing: 0.075em;
		text-transform: uppercase;
	}
	.node .label {
		fill: var(--ink);
		font-size: 19px;
		font-weight: 720;
		letter-spacing: 0.01em;
	}
	.error {
		grid-template-rows: 42px 1fr;
	}
`;
document.head.appendChild(style);

vscode.postMessage({ type: 'ready' });
