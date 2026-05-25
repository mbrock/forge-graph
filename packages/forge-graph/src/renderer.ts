import { parseAlloyXML } from '@spytial-core/data-instance/alloy/alloy-instance/index';
import { AlloyDataInstance } from '@spytial-core/data-instance/alloy-data-instance';
import { SGraphQueryEvaluator } from '@spytial-core/evaluators/data/sgq-evaluator';
import { parseLayoutSpec } from '@spytial-core/layout/layoutspec';
import { LayoutInstance } from '@spytial-core/layout/layoutinstance';
import { WebColaTranslator } from '@spytial-core/translators/webcola/webcolatranslator';
import type { EdgeWithMetadata, NodeWithMetadata } from '@spytial-core/translators/webcola/webcolatranslator';
import * as d3 from 'd3';
import * as cola from 'webcola';
import yaml from 'js-yaml';
import { getBoxToBoxArrow } from 'perfect-arrows';
import type { ArrowOptions } from 'perfect-arrows';

export interface ForgeGraphRenderInput {
	xml: string;
	cnd?: string;
	width?: number;
	height?: number;
	layoutHeight?: number;
	title?: string;
}

export interface SolvedForgeGraphLayout {
	nodes: NodeWithMetadata[];
	links: EdgeWithMetadata[];
	groups: any[];
	width: number;
	height: number;
}

export interface ForgeGraphRenderResult {
	svg: string;
	bounds: BoundsBox;
	stats: {
		nodes: number;
		edges: number;
	};
}

interface BoundsBox {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface Point {
	x: number;
	y: number;
}

interface ArrowGeometry {
	sx: number;
	sy: number;
	cx: number;
	cy: number;
	ex: number;
	ey: number;
	endAngle: number;
	laneOffset: number;
}

interface LabelPlacement {
	x: number;
	y: number;
	box: BoundsBox;
}

export const DEFAULT_CND_SPEC = `directives:
  - flag: hideDisconnectedBuiltIns
`;

export async function renderForgeGraph(input: ForgeGraphRenderInput): Promise<ForgeGraphRenderResult> {
	const layout = await solveForgeGraphLayout(input);
	const bounds = layoutBounds(layout);
	return {
		svg: renderForgeGraphSvg(layout, bounds, input.title),
		bounds,
		stats: {
			nodes: layout.nodes.length,
			edges: layout.links.length,
		},
	};
}

export async function solveForgeGraphLayout(input: ForgeGraphRenderInput): Promise<SolvedForgeGraphLayout> {
	const alloyDatum = parseAlloyXML(input.xml);
	if (!alloyDatum.instances?.length) {
		throw new Error('The XML did not contain any Alloy instances.');
	}

	const dataInstance = new AlloyDataInstance(alloyDatum.instances[0]);
	const evaluator = new SGraphQueryEvaluator();
	evaluator.initialize({ sourceData: dataInstance });

	const layoutSpec = parseLayoutSpec(extractLayoutYaml(input.cnd || DEFAULT_CND_SPEC));
	const layoutInstance = new LayoutInstance(layoutSpec, evaluator, 0, true);
	const layoutResult = layoutInstance.generateLayout(dataInstance);

	if (layoutResult.selectorErrors?.length) {
		throw new Error(`Selector errors: ${layoutResult.selectorErrors.map((error: any) => error.message ?? String(error)).join('; ')}`);
	}

	const layoutWidth = Math.max(320, Math.round(input.width || 1200));
	const layoutHeight = Math.max(240, Math.round(input.layoutHeight || input.height || layoutWidth * 0.56));
	const webcolaLayout = await new WebColaTranslator().translate(layoutResult.layout, layoutWidth, layoutHeight);
	for (const node of webcolaLayout.nodes as any[]) {
		const display = nodeDisplay(node);
		node.visualWidth = display.width;
		node.visualHeight = display.height;
		node.width = display.width + 18;
		node.height = display.height + 18;
	}

	await new Promise<void>((resolve, reject) => {
		const solver = (cola as any).d3adaptor(d3)
			.linkDistance(Math.max(90, Math.min(170, layoutWidth * 0.125)))
			.convergenceThreshold(1e-3)
			.avoidOverlaps(true)
			.handleDisconnected(true)
			.nodes(webcolaLayout.nodes)
			.links(webcolaLayout.links)
			.constraints(webcolaLayout.constraints)
			.groups(webcolaLayout.groups)
			.groupCompactness(1e-5)
			.size([webcolaLayout.FIG_WIDTH, webcolaLayout.FIG_HEIGHT]);

		solver.on('end', () => resolve());
		try {
			solver.start(10, 50, 200, 1);
		} catch (error) {
			reject(error);
		}
	});

	return {
		nodes: webcolaLayout.nodes,
		links: webcolaLayout.links,
		groups: webcolaLayout.groups,
		width: webcolaLayout.FIG_WIDTH,
		height: webcolaLayout.FIG_HEIGHT,
	};
}

function renderForgeGraphSvg(layout: SolvedForgeGraphLayout, bounds: BoundsBox, title = 'Forge graph'): string {
	return `<svg class="forge-graph-svg" width="${bounds.width}" height="${bounds.height}" viewBox="${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}" role="img" aria-label="${escapeHtml(title)}" xmlns="http://www.w3.org/2000/svg">
	<style>${forgeGraphSvgCss()}</style>
	<g class="edges">${renderEdges(layout)}</g>
	<g class="nodes">${renderNodes(layout)}</g>
</svg>`;
}

function renderEdges(layout: SolvedForgeGraphLayout): string {
	const nodeBounds = layout.nodes.map((node) => nodeBox(node));
	const arrowOptions: ArrowOptions = {
		bow: 0.1,
		stretch: 0.35,
		stretchMin: 40,
		stretchMax: 360,
		padStart: 4,
		padEnd: 12,
		straights: true,
	};

	const edgeGroups = new Map<string, any[]>();
	for (const edge of layout.links as any[]) {
		const source = edgeEndpoint(edge.source, layout.nodes);
		const target = edgeEndpoint(edge.target, layout.nodes);
		if (!source || !target) {
			continue;
		}
		const key = edgePairKey(source, target);
		edgeGroups.set(key, [...(edgeGroups.get(key) || []), edge]);
	}

	const placedLabels: BoundsBox[] = [];
	return layout.links.map((edge: any) => {
		const source = edgeEndpoint(edge.source, layout.nodes);
		const target = edgeEndpoint(edge.target, layout.nodes);
		if (!source || !target) {
			return '';
		}
		const group = edgeGroups.get(edgePairKey(source, target)) || [edge];
		const laneOffset = group.indexOf(edge) - (group.length - 1) / 2;
		const directionSign = String(source.id) <= String(target.id) ? 1 : -1;
		const laneSign = laneOffset === 0 ? directionSign : Math.sign(laneOffset) * directionSign;
		const laneMagnitude = Math.abs(laneOffset) + (group.length > 1 ? 0.3 : 0);
		const sourceBox = nodeBox(source);
		const targetBox = nodeBox(target);
		const [sx, sy, cx, cy, ex, ey, endAngle] = getBoxToBoxArrow(
			sourceBox.x,
			sourceBox.y,
			sourceBox.width,
			sourceBox.height,
			targetBox.x,
			targetBox.y,
			targetBox.width,
			targetBox.height,
			{
				...arrowOptions,
				bow: Math.min(0.28, (arrowOptions.bow || 0.1) + laneMagnitude * 0.08),
				flip: laneSign < 0,
			}
		);
		const arrow: ArrowGeometry = { sx, sy, cx, cy, ex, ey, endAngle, laneOffset };
		const label = edgeLabelForDisplay(edge);
		const labelPlacement = label ? pickEdgeLabelPlacement(arrow, label, placedLabels, nodeBounds) : undefined;
		if (labelPlacement) {
			placedLabels.push(labelPlacement.box);
		}
		const arrowAngle = endAngle * (180 / Math.PI);
		return `<g class="edge">
			<path d="M${sx},${sy} Q${cx},${cy} ${ex},${ey}" />
			<polygon points="0,-4 10,0 0,4" transform="translate(${ex},${ey}) rotate(${arrowAngle})" />
			${labelPlacement ? `<text x="${labelPlacement.x}" y="${labelPlacement.y}">${escapeHtml(label)}</text>` : ''}
		</g>`;
	}).join('');
}

function edgeLabelBounds(layout: SolvedForgeGraphLayout): BoundsBox[] {
	const nodeBounds = layout.nodes.map((node) => nodeBox(node));
	const arrowOptions: ArrowOptions = {
		bow: 0.1,
		stretch: 0.35,
		stretchMin: 40,
		stretchMax: 360,
		padStart: 4,
		padEnd: 12,
		straights: true,
	};
	const edgeGroups = new Map<string, any[]>();
	for (const edge of layout.links as any[]) {
		const source = edgeEndpoint(edge.source, layout.nodes);
		const target = edgeEndpoint(edge.target, layout.nodes);
		if (!source || !target) {
			continue;
		}
		const key = edgePairKey(source, target);
		edgeGroups.set(key, [...(edgeGroups.get(key) || []), edge]);
	}

	const placedLabels: BoundsBox[] = [];
	for (const edge of layout.links as any[]) {
		const source = edgeEndpoint(edge.source, layout.nodes);
		const target = edgeEndpoint(edge.target, layout.nodes);
		if (!source || !target) {
			continue;
		}
		const group = edgeGroups.get(edgePairKey(source, target)) || [edge];
		const laneOffset = group.indexOf(edge) - (group.length - 1) / 2;
		const directionSign = String(source.id) <= String(target.id) ? 1 : -1;
		const laneSign = laneOffset === 0 ? directionSign : Math.sign(laneOffset) * directionSign;
		const laneMagnitude = Math.abs(laneOffset) + (group.length > 1 ? 0.3 : 0);
		const sourceBox = nodeBox(source);
		const targetBox = nodeBox(target);
		const [sx, sy, cx, cy, ex, ey, endAngle] = getBoxToBoxArrow(
			sourceBox.x,
			sourceBox.y,
			sourceBox.width,
			sourceBox.height,
			targetBox.x,
			targetBox.y,
			targetBox.width,
			targetBox.height,
			{
				...arrowOptions,
				bow: Math.min(0.28, (arrowOptions.bow || 0.1) + laneMagnitude * 0.08),
				flip: laneSign < 0,
			}
		);
		const arrow: ArrowGeometry = { sx, sy, cx, cy, ex, ey, endAngle, laneOffset };
		const label = edgeLabelForDisplay(edge);
		if (!label) {
			continue;
		}
		const labelPlacement = pickEdgeLabelPlacement(arrow, label, placedLabels, nodeBounds);
		placedLabels.push(labelPlacement.box);
	}
	return placedLabels;
}

function renderNodes(layout: SolvedForgeGraphLayout): string {
	return layout.nodes.map((node: any) => {
		const { x, y } = nodeCenter(node);
		const display = nodeDisplay(node);
		const { width, height } = display;
		const topLeftX = x - width / 2;
		const topLeftY = y - height / 2;
		return `<g class="node" data-node-id="${escapeHtml(node.id)}">
			<rect x="${topLeftX}" y="${topLeftY}" width="${width}" height="${height}" />
			<text class="type" x="${x}" y="${topLeftY + 17}" text-anchor="middle" fill="${escapeHtml(display.color)}">${escapeHtml(display.typeLabel)}</text>
			<text class="label" x="${x}" y="${y + 12}" text-anchor="middle">${escapeHtml(display.label)}</text>
		</g>`;
	}).join('');
}

export function forgeGraphSvgCss(): string {
	return `
		.forge-graph-svg {
			background: transparent;
			color: #141414;
			display: block;
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
			height: auto;
			width: 100%;
		}
		.edge {
			color: #1e1e1e;
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
			fill: #1e1e1e;
			font-family: inherit;
			font-size: 10px;
			font-variant-caps: all-small-caps;
			font-weight: 720;
			letter-spacing: 0.075em;
			paint-order: stroke;
			pointer-events: none;
			stroke: rgba(255, 255, 255, 0.82);
			stroke-linejoin: round;
			stroke-width: 5px;
			text-anchor: middle;
			text-transform: lowercase;
		}
		.node rect {
			fill: #fff;
			stroke: #d92818;
			stroke-width: 1.4;
		}
		.node .type {
			font-size: 10px;
			font-weight: 720;
			letter-spacing: 0.075em;
			text-transform: uppercase;
		}
		.node .label {
			fill: #141414;
			font-size: 19px;
			font-weight: 720;
			letter-spacing: 0.01em;
		}
	`;
}

function extractLayoutYaml(cndSpec: string): string {
	if (!cndSpec.trim()) {
		return '';
	}

	try {
		const parsed = yaml.load(cndSpec);
		if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
			return cndSpec;
		}

		const source = parsed as Record<string, unknown>;
		const layoutOnly: Record<string, unknown> = {};
		if (source.constraints !== undefined) {
			layoutOnly.constraints = source.constraints;
		}
		if (source.directives !== undefined) {
			layoutOnly.directives = source.directives;
		}

		return Object.keys(layoutOnly).length > 0
			? yaml.dump(layoutOnly, { lineWidth: -1 })
			: '';
	} catch {
		return cndSpec;
	}
}

function labelForDisplay(label: string): string {
	return label
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
		.replace(/([A-Za-z])([0-9])/g, '$1 $2');
}

function publicRelationLabel(label: string): string {
	return label.replace(/-for-[A-Za-z0-9_]+-[A-Za-z0-9_]+$/, '');
}

function relationLabelForDisplay(label: string): string {
	const publicLabel = publicRelationLabel(label);
	if (publicLabel === 'belongs-to') {
		return '';
	}
	return labelForDisplay(publicLabel)
		.replace(/[-_]+/g, ' ')
		.toLowerCase();
}

function compactAtomLabel(label: string): string {
	const normalized = String(label || '').replace(/\s+/g, '');
	const match = /^(.+?)(\d+)$/.exec(normalized);
	const base = match ? match[1] : normalized;
	const suffix = match ? match[2] : '';
	const words = labelForDisplay(base).split(/[\s_-]+/).filter(Boolean);
	const initials = words.map((word) => word[0]?.toUpperCase()).join('');
	return `${initials || base.slice(0, 3).toUpperCase()}${suffix}`;
}

function estimateTextWidth(text: string, fontSize: number, factor = 0.62): number {
	return Math.max(0, text.length * fontSize * factor);
}

function nodeDisplay(node: any): { label: string; typeLabel: string; width: number; height: number; color: string } {
	const label = compactAtomLabel(node.label || node.id);
	const typeLabel = labelForDisplay(node.mostSpecificType || '');
	const labelWidth = estimateTextWidth(label, 19, 0.66);
	const typeWidth = estimateTextWidth(typeLabel.toUpperCase(), 10, 0.62);
	const width = Math.ceil(Math.max(58, labelWidth + 30, typeWidth + 24));
	return {
		label,
		typeLabel,
		width,
		height: 56,
		color: node.color && node.color !== 'black' ? node.color : '#222',
	};
}

function nodeCenter(node: any): { x: number; y: number } {
	return {
		x: Number.isFinite(node?.x) ? node.x : 0,
		y: Number.isFinite(node?.y) ? node.y : 0,
	};
}

function nodeSize(node: any): { width: number; height: number } {
	const display = nodeDisplay(node);
	return { width: display.width, height: display.height };
}

function edgeEndpoint(endpoint: any, nodes: NodeWithMetadata[]): NodeWithMetadata | undefined {
	if (typeof endpoint === 'number') {
		return nodes[endpoint];
	}
	return endpoint;
}

function nodeBox(node: any): BoundsBox {
	const { x, y } = nodeCenter(node);
	const { width, height } = nodeSize(node);
	return {
		x: x - width / 2,
		y: y - height / 2,
		width,
		height,
	};
}

function edgeLabelForDisplay(edge: any): string {
	return relationLabelForDisplay(String(edge.label ?? edge.relName ?? ''));
}

function edgePairKey(source: NodeWithMetadata, target: NodeWithMetadata): string {
	const sourceId = String(source.id);
	const targetId = String(target.id);
	return sourceId < targetId
		? `${sourceId}\u0000${targetId}`
		: `${targetId}\u0000${sourceId}`;
}

function quadraticPoint(arrow: ArrowGeometry, t: number): Point {
	const inv = 1 - t;
	return {
		x: inv * inv * arrow.sx + 2 * inv * t * arrow.cx + t * t * arrow.ex,
		y: inv * inv * arrow.sy + 2 * inv * t * arrow.cy + t * t * arrow.ey,
	};
}

function quadraticDerivative(arrow: ArrowGeometry, t: number): Point {
	return {
		x: 2 * (1 - t) * (arrow.cx - arrow.sx) + 2 * t * (arrow.ex - arrow.cx),
		y: 2 * (1 - t) * (arrow.cy - arrow.sy) + 2 * t * (arrow.ey - arrow.cy),
	};
}

function normalizeVector(point: Point): Point {
	const length = Math.hypot(point.x, point.y);
	if (!length) {
		return { x: 0, y: 0 };
	}
	return { x: point.x / length, y: point.y / length };
}

function labelBox(label: string, x: number, y: number): BoundsBox {
	const width = Math.max(26, estimateTextWidth(label.toUpperCase(), 10, 0.67) + 12);
	const height = 15;
	return {
		x: x - width / 2,
		y: y - height / 2,
		width,
		height,
	};
}

function overlapArea(a: BoundsBox, b: BoundsBox): number {
	const x = Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x));
	const y = Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
	return x * y;
}

function pickEdgeLabelPlacement(
	arrow: ArrowGeometry,
	label: string,
	placedLabels: BoundsBox[],
	nodeBoxes: BoundsBox[]
): LabelPlacement {
	const midCurve = quadraticPoint(arrow, 0.5);
	const midLine = {
		x: (arrow.sx + arrow.ex) / 2,
		y: (arrow.sy + arrow.ey) / 2,
	};
	const outside = normalizeVector({
		x: midCurve.x - midLine.x,
		y: midCurve.y - midLine.y,
	});
	const fallbackNormal = normalizeVector({
		x: -quadraticDerivative(arrow, 0.5).y,
		y: quadraticDerivative(arrow, 0.5).x,
	});
	const side = Math.hypot(outside.x, outside.y) > 0.001
		? outside
		: Math.hypot(fallbackNormal.x, fallbackNormal.y) > 0.001
			? fallbackNormal
			: { x: 0, y: -1 };
	const laneDistance = 12 + Math.min(Math.abs(arrow.laneOffset), 3) * 5;
	const tBase = Math.min(0.68, Math.max(0.32, 0.5 + arrow.laneOffset * 0.05));
	const candidates = [
		{ t: tBase, offset: laneDistance },
		{ t: tBase - 0.08, offset: laneDistance },
		{ t: tBase + 0.08, offset: laneDistance },
		{ t: tBase, offset: laneDistance + 10 },
		{ t: tBase - 0.14, offset: laneDistance + 8 },
		{ t: tBase + 0.14, offset: laneDistance + 8 },
		{ t: tBase, offset: -laneDistance },
	];

	let best: LabelPlacement | undefined;
	let bestScore = Number.POSITIVE_INFINITY;
	for (const candidate of candidates) {
		const t = Math.min(0.75, Math.max(0.25, candidate.t));
		const curvePoint = quadraticPoint(arrow, t);
		const x = curvePoint.x + side.x * candidate.offset;
		const y = curvePoint.y + side.y * candidate.offset;
		const box = labelBox(label, x, y);
		const labelOverlap = placedLabels.reduce((score, placed) => score + overlapArea(box, placed) * 8, 0);
		const nodeOverlap = nodeBoxes.reduce((score, node) => score + overlapArea(box, node) * 14, 0);
		const distancePenalty = Math.abs(t - 0.5) * 40 + Math.max(0, Math.abs(candidate.offset) - laneDistance) * 0.2;
		const score = labelOverlap + nodeOverlap + distancePenalty;
		if (score < bestScore) {
			bestScore = score;
			best = { x, y, box };
		}
	}

	return best || { x: midCurve.x, y: midCurve.y - laneDistance, box: labelBox(label, midCurve.x, midCurve.y - laneDistance) };
}

function layoutBounds(layout: SolvedForgeGraphLayout): BoundsBox {
	const padding = 28;
	let minX = Number.POSITIVE_INFINITY;
	let minY = Number.POSITIVE_INFINITY;
	let maxX = Number.NEGATIVE_INFINITY;
	let maxY = Number.NEGATIVE_INFINITY;

	for (const node of layout.nodes) {
		const { x, y } = nodeCenter(node);
		const { width, height } = nodeSize(node);
		minX = Math.min(minX, x - width / 2);
		minY = Math.min(minY, y - height / 2);
		maxX = Math.max(maxX, x + width / 2);
		maxY = Math.max(maxY, y + height / 2);
	}
	for (const box of edgeLabelBounds(layout)) {
		minX = Math.min(minX, box.x);
		minY = Math.min(minY, box.y);
		maxX = Math.max(maxX, box.x + box.width);
		maxY = Math.max(maxY, box.y + box.height);
	}

	if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
		return { x: 0, y: 0, width: layout.width, height: layout.height };
	}

	return {
		x: minX - padding,
		y: minY - padding,
		width: Math.max(200, maxX - minX + padding * 2),
		height: Math.max(200, maxY - minY + padding * 2),
	};
}

function escapeHtml(value: unknown): string {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
