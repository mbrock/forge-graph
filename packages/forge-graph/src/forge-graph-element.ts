import { DEFAULT_CND_SPEC, renderForgeGraph } from './renderer';

export class ForgeGraphElement extends HTMLElement {
	private readonly root: ShadowRoot;
	private resizeObserver?: ResizeObserver;
	private renderSerial = 0;
	private _ready: Promise<void> = Promise.resolve();

	static get observedAttributes(): string[] {
		return ['src', 'cnd', 'height'];
	}

	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
		this.root.innerHTML = `<style>${elementCss()}</style><div class="frame"><div class="status">Loading graph...</div></div>`;
	}

	get ready(): Promise<void> {
		return this._ready;
	}

	get xml(): string {
		return this.getAttribute('xml') || '';
	}

	set xml(value: string) {
		this.setAttribute('xml', value);
		this.scheduleRender();
	}

	get cndSpec(): string {
		return this.getAttribute('cnd-spec') || '';
	}

	set cndSpec(value: string) {
		this.setAttribute('cnd-spec', value);
		this.scheduleRender();
	}

	connectedCallback(): void {
		this.applyHeight();
		this.resizeObserver = new ResizeObserver(() => this.scheduleRender());
		this.resizeObserver.observe(this);
		this.scheduleRender();
	}

	disconnectedCallback(): void {
		this.resizeObserver?.disconnect();
		this.resizeObserver = undefined;
	}

	attributeChangedCallback(): void {
		this.applyHeight();
		this.scheduleRender();
	}

	async render(): Promise<void> {
		const serial = ++this.renderSerial;
		const frame = this.frame();
		try {
			frame.classList.add('is-loading');
			if (!frame.querySelector('svg')) {
				frame.innerHTML = '<div class="status">Loading graph...</div>';
			}

			const [xml, cnd] = await Promise.all([this.resolveXml(), this.resolveCnd()]);
			const rect = this.getBoundingClientRect();
			const width = Math.max(320, Math.round(rect.width || 800));
			const height = Math.max(240, Math.round(rect.height || Number(this.getAttribute('height')) || 480));
			const result = await renderForgeGraph({
				xml,
				cnd,
				width,
				height,
				title: this.getAttribute('title') || 'Forge graph',
			});

			if (serial !== this.renderSerial) {
				return;
			}

			frame.classList.remove('is-loading');
			frame.innerHTML = result.svg;
			this.dispatchEvent(new CustomEvent('forge-graph-rendered', {
				bubbles: true,
				composed: true,
				detail: result,
			}));
		} catch (error) {
			if (serial !== this.renderSerial) {
				return;
			}

			const message = error instanceof Error ? error.message : String(error);
			frame.classList.remove('is-loading');
			frame.innerHTML = `<div class="status error">${escapeHtml(message)}</div>`;
			this.dispatchEvent(new CustomEvent('forge-graph-error', {
				bubbles: true,
				composed: true,
				detail: { message, error },
			}));
		}
	}

	private scheduleRender(): void {
		this._ready = new Promise((resolve) => {
			queueMicrotask(() => this.render().then(resolve, resolve));
		});
	}

	private frame(): HTMLElement {
		const frame = this.root.querySelector<HTMLElement>('.frame');
		if (!frame) {
			throw new Error('Forge graph frame was not initialized.');
		}
		return frame;
	}

	private applyHeight(): void {
		const height = this.getAttribute('height');
		if (height) {
			this.style.minHeight = /^\d+$/.test(height) ? `${height}px` : height;
		}
	}

	private async resolveXml(): Promise<string> {
		const src = this.getAttribute('src');
		if (src) {
			return fetchText(src);
		}

		const xmlChild = this.querySelector<HTMLScriptElement>('script[type="application/xml"], script[type="text/xml"]');
		const inlineXml = this.xml || xmlChild?.textContent || this.textContent || '';
		if (!inlineXml.trim()) {
			throw new Error('No Forge/Alloy XML was provided.');
		}
		return inlineXml;
	}

	private async resolveCnd(): Promise<string> {
		const cndUrl = this.getAttribute('cnd');
		if (cndUrl) {
			return fetchText(cndUrl);
		}

		const cndChild = this.querySelector<HTMLScriptElement>('script[type="text/cnd"], script[type="application/cnd"]');
		return this.cndSpec || cndChild?.textContent || DEFAULT_CND_SPEC;
	}
}

export function defineForgeGraphElement(name = 'forge-graph'): void {
	if (!customElements.get(name)) {
		customElements.define(name, ForgeGraphElement);
	}
}

async function fetchText(url: string): Promise<string> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Could not load ${url}: ${response.status} ${response.statusText}`);
	}
	return response.text();
}

function elementCss(): string {
	return `
		:host {
			background: #fff;
			display: block;
			min-height: 480px;
			overflow: hidden;
		}
		.frame {
			height: 100%;
			min-height: inherit;
			position: relative;
			width: 100%;
		}
		.status {
			align-items: center;
			color: #666;
			display: flex;
			font: 12px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
			inset: 0;
			justify-content: center;
			position: absolute;
		}
		.status.error {
			color: #b3261e;
			padding: 16px;
			text-align: center;
		}
	`;
}

function escapeHtml(value: unknown): string {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
