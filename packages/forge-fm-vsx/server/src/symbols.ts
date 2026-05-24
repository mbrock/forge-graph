import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ForgeLexer } from './parser/grammars/ForgeLexer';
import { ForgeParser, SigDeclContext, PredDeclContext, FunDeclContext, ArrowDeclContext, ParaDeclContext, QuantDeclContext } from './parser/grammars/ForgeParser';
import { ForgeVisitor } from './parser/grammars/ForgeVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Range } from 'vscode-languageserver';

export enum SymbolKind {
    Sig = 'sig',
    Predicate = 'predicate',
    Function = 'function',
    Field = 'field',
    Variable = 'variable',
    Parameter = 'parameter',
    Test = 'test',
    Example = 'example'
}

export interface ForgeSymbol {
    name: string;
    kind: SymbolKind;
    range: Range;
    detail?: string;
    documentation?: string;
}

/**
 * Visitor that extracts symbol information from the Forge AST
 */
class SymbolExtractorVisitor extends AbstractParseTreeVisitor<void> implements ForgeVisitor<void> {
    private symbols: ForgeSymbol[] = [];
    private text: string;
    private currentSigName: string | null = null;

    constructor(text: string) {
        super();
        this.text = text;
    }

    getSymbols(): ForgeSymbol[] {
        return this.symbols;
    }

    /**
     * Extract the doc comment that immediately precedes a declaration.
     * Only blocks starting with `/**` are treated as docstrings; any other
     * comments between the doc block and the declaration will cause the doc
     * to be ignored.
     */
    private extractDocComment(startLine: number): string | undefined {
        const lines = this.text.split('\n');
        let currentLine = startLine - 1;

        // Skip blank lines directly above the declaration
        while (currentLine >= 0 && lines[currentLine].trim() === '') {
            currentLine--;
        }

        if (currentLine < 0) {
            return undefined;
        }

        // The line immediately above must be part of the doc block
        const endLine = currentLine;
        if (!lines[endLine].includes('*/') && !lines[endLine].includes('/**')) {
            return undefined;
        }

        // Walk upward to find the start of the doc block
        const docLines: string[] = [lines[endLine]];
        let foundStart = lines[endLine].includes('/**');
        while (!foundStart && currentLine > 0) {
            currentLine--;
            docLines.push(lines[currentLine]);
            if (lines[currentLine].includes('/**')) {
                foundStart = true;
                break;
            }
            // If we hit another block terminator before finding '/**', bail
            if (lines[currentLine].includes('*/')) {
                return undefined;
            }
        }

        if (!foundStart) {
            return undefined;
        }

        // Assemble the doc block in original order
        const rawBlock = docLines.reverse().join('\n');
        const startIndex = rawBlock.indexOf('/**');
        const endIndex = rawBlock.lastIndexOf('*/');
        if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
            return undefined;
        }

        const inner = rawBlock.slice(startIndex + 3, endIndex);
        const cleaned = inner
            .split('\n')
            .map(line => line.replace(/^\s*\*\s?/, '').trimEnd())
            .join('\n')
            .trim();

        return cleaned || undefined;
    }

    protected defaultResult(): void {
        return;
    }

    /**
     * Extract signature declarations
     */
    visitSigDecl(ctx: SigDeclContext): void {
        // Get the first name from nameList
        const nameList = ctx.nameList();
        const nameContext = nameList.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken) {
            const line = nameToken.symbol.line - 1; // Convert to 0-based
            const column = nameToken.symbol.charPositionInLine;
            const docComment = this.extractDocComment(line);
            
            // Build detailed signature information
            let detail = '';
            if (ctx.ABSTRACT_TOK()) detail += 'abstract ';
            if (ctx.mult()) detail += ctx.mult()!.text + ' ';
            detail += 'sig ' + nameToken.text;
            if (ctx.sigExt()) {
                detail += ' ' + ctx.sigExt()!.text;
            }
            
            // Store current sig name for field processing
            const previousSigName = this.currentSigName;
            this.currentSigName = nameToken.text;
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Sig,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: detail.trim(),
                documentation: docComment
            });
            
            // Visit children to capture fields
            this.visitChildren(ctx);
            
            // Restore previous sig name
            this.currentSigName = previousSigName;
        }
    }

    /**
     * Extract field declarations (arrowDecl) from signatures
     */
    visitArrowDecl(ctx: ArrowDeclContext): void {
        const nameList = ctx.nameList();
        const nameContext = nameList.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken && this.currentSigName) {
            const line = nameToken.symbol.line - 1;
            const column = nameToken.symbol.charPositionInLine;
            const docComment = this.extractDocComment(line);
            
            // Build field type information
            let fieldType = '';
            if (ctx.arrowMult()) {
                fieldType = ctx.arrowMult()!.text + ' ';
            }
            if (ctx.arrowExpr()) {
                fieldType += ctx.arrowExpr().text;
            }
            
            const detail = `${nameToken.text}: ${fieldType}`;
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Field,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: `field in ${this.currentSigName}: ${fieldType}`,
                documentation: docComment
            });
        }
        
        this.visitChildren(ctx);
    }

    /**
     * Extract predicate declarations
     */
    visitPredDecl(ctx: PredDeclContext): void {
        const nameContext = ctx.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken) {
            const line = nameToken.symbol.line - 1;
            const column = nameToken.symbol.charPositionInLine;
            const docComment = this.extractDocComment(line);
            
            // Build predicate signature
            let detail = 'pred ' + nameToken.text;
            if (ctx.paraDecls()) {
                detail += ctx.paraDecls()!.text;
            }
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Predicate,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: detail,
                documentation: docComment
            });
        }
        
        // Visit children to capture parameters
        this.visitChildren(ctx);
    }

    /**
     * Extract function declarations
     */
    visitFunDecl(ctx: FunDeclContext): void {
        const nameContext = ctx.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken) {
            const line = nameToken.symbol.line - 1;
            const column = nameToken.symbol.charPositionInLine;
            const docComment = this.extractDocComment(line);
            
            // Build function signature
            let detail = 'fun ' + nameToken.text;
            if (ctx.paraDecls()) {
                detail += ctx.paraDecls()!.text;
            }
            detail += ': ';
            if (ctx.helperMult()) {
                detail += ctx.helperMult()!.text + ' ';
            }
            // Get return type from first expr
            const exprs = ctx.expr();
            if (exprs && exprs.length > 0) {
                detail += exprs[0].text;
            }
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Function,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: detail,
                documentation: docComment
            });
        }
        
        this.visitChildren(ctx);
    }

    /**
     * Extract quantified variable declarations (all s: Node, some n: Person, etc.)
     */
    visitQuantDecl(ctx: QuantDeclContext): void {
        const nameList = ctx.nameList();
        const nameContext = nameList.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken) {
            const line = nameToken.symbol.line - 1;
            const column = nameToken.symbol.charPositionInLine;
            
            // Build variable type information
            let varType = '';
            if (ctx.SET_TOK()) {
                varType = 'set ';
            }
            if (ctx.expr()) {
                varType += ctx.expr().text;
            }
            
            const detail = `${nameToken.text}: ${varType}`;
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Variable,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: detail,
                documentation: undefined
            });
        }
        
        this.visitChildren(ctx);
    }

    /**
     * Extract parameter declarations from predicates/functions
     */
    visitParaDecl(ctx: ParaDeclContext): void {
        const nameList = ctx.nameList();
        const nameContext = nameList.name();
        const nameToken = nameContext.IDENTIFIER_TOK();
        
        if (nameToken) {
            const line = nameToken.symbol.line - 1;
            const column = nameToken.symbol.charPositionInLine;
            
            // Build parameter type information
            let paramType = '';
            if (ctx.helperMult()) {
                paramType = ctx.helperMult()!.text + ' ';
            }
            if (ctx.expr()) {
                paramType += ctx.expr().text;
            }
            
            const detail = `parameter ${nameToken.text}: ${paramType}`;
            
            this.symbols.push({
                name: nameToken.text,
                kind: SymbolKind.Parameter,
                range: Range.create(line, column, line, column + nameToken.text.length),
                detail: detail,
                documentation: undefined
            });
        }
        
        this.visitChildren(ctx);
    }
}

/**
 * Symbol extractor using ANTLR parser
 */
export class ForgeSymbolExtractor {
    /**
     * Parse Forge code and extract symbol information
     */
    static extractSymbols(text: string): ForgeSymbol[] {
        try {
            // Create lexer and parser
            const inputStream = new ANTLRInputStream(text);
            const lexer = new ForgeLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new ForgeParser(tokenStream);

            // Parse the file
            const tree = parser.alloyModule();

            // Extract symbols using visitor
            const visitor = new SymbolExtractorVisitor(text);
            visitor.visit(tree);

            return visitor.getSymbols();
        } catch (error) {
            console.error('Error parsing Forge code:', error);
            return [];
        }
    }
}
