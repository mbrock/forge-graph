// Generated from grammars/Forge.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ForgeListener } from "./ForgeListener";
import { ForgeVisitor } from "./ForgeVisitor";


export class ForgeParser extends Parser {
	public static readonly OPEN_TOK = 1;
	public static readonly LEFT_SQUARE_TOK = 2;
	public static readonly RIGHT_SQUARE_TOK = 3;
	public static readonly AS_TOK = 4;
	public static readonly FILE_PATH_TOK = 5;
	public static readonly VAR_TOK = 6;
	public static readonly ABSTRACT_TOK = 7;
	public static readonly SIG_TOK = 8;
	public static readonly LEFT_CURLY_TOK = 9;
	public static readonly RIGHT_CURLY_TOK = 10;
	public static readonly EXTENDS_TOK = 11;
	public static readonly IN_TOK = 12;
	public static readonly PLUS_TOK = 13;
	public static readonly LONE_TOK = 14;
	public static readonly SOME_TOK = 15;
	public static readonly ONE_TOK = 16;
	public static readonly TWO_TOK = 17;
	public static readonly SET_TOK = 18;
	public static readonly FUNC_TOK = 19;
	public static readonly PFUNC_TOK = 20;
	public static readonly DISJ_TOK = 21;
	public static readonly COLON_TOK = 22;
	public static readonly WHEAT_TOK = 23;
	public static readonly PRED_TOK = 24;
	public static readonly DOT_TOK = 25;
	public static readonly FUN_TOK = 26;
	public static readonly LEFT_PAREN_TOK = 27;
	public static readonly RIGHT_PAREN_TOK = 28;
	public static readonly ASSERT_TOK = 29;
	public static readonly RUN_TOK = 30;
	public static readonly CHECK_TOK = 31;
	public static readonly FOR_TOK = 32;
	public static readonly BUT_TOK = 33;
	public static readonly EXACTLY_TOK = 34;
	public static readonly NONE_TOK = 35;
	public static readonly UNIV_TOK = 36;
	public static readonly IDEN_TOK = 37;
	public static readonly MINUS_TOK = 38;
	public static readonly IS_TOK = 39;
	public static readonly SAT_TOK = 40;
	public static readonly UNSAT_TOK = 41;
	public static readonly THEOREM_TOK = 42;
	public static readonly FORGE_ERROR_TOK = 43;
	public static readonly CHECKED_TOK = 44;
	public static readonly TEST_TOK = 45;
	public static readonly EXPECT_TOK = 46;
	public static readonly SUITE_TOK = 47;
	public static readonly BAR_TOK = 48;
	public static readonly ALL_TOK = 49;
	public static readonly SUFFICIENT_TOK = 50;
	public static readonly NECESSARY_TOK = 51;
	public static readonly CONSISTENT_TOK = 52;
	public static readonly INCONSISTENT_TOK = 53;
	public static readonly WITH_TOK = 54;
	public static readonly LET_TOK = 55;
	public static readonly BIND_TOK = 56;
	public static readonly OR_TOK = 57;
	public static readonly XOR_TOK = 58;
	public static readonly IFF_TOK = 59;
	public static readonly IMP_TOK = 60;
	public static readonly ELSE_TOK = 61;
	public static readonly AND_TOK = 62;
	public static readonly UNTIL_TOK = 63;
	public static readonly RELEASE_TOK = 64;
	public static readonly SINCE_TOK = 65;
	public static readonly TRIGGERED_TOK = 66;
	public static readonly NEG_TOK = 67;
	public static readonly ALWAYS_TOK = 68;
	public static readonly EVENTUALLY_TOK = 69;
	public static readonly AFTER_TOK = 70;
	public static readonly BEFORE_TOK = 71;
	public static readonly ONCE_TOK = 72;
	public static readonly HISTORICALLY_TOK = 73;
	public static readonly CARD_TOK = 74;
	public static readonly PPLUS_TOK = 75;
	public static readonly AMP_TOK = 76;
	public static readonly SUBT_TOK = 77;
	public static readonly SUPT_TOK = 78;
	public static readonly PRIME_TOK = 79;
	public static readonly TILDE_TOK = 80;
	public static readonly EXP_TOK = 81;
	public static readonly STAR_TOK = 82;
	public static readonly AT_TOK = 83;
	public static readonly BACKQUOTE_TOK = 84;
	public static readonly THIS_TOK = 85;
	public static readonly SEXPR_TOK = 86;
	public static readonly INST_TOK = 87;
	public static readonly EVAL_TOK = 88;
	public static readonly EXAMPLE_TOK = 89;
	public static readonly ARROW_TOK = 90;
	public static readonly EQ_TOK = 91;
	public static readonly LT_TOK = 92;
	public static readonly GT_TOK = 93;
	public static readonly LEQ_TOK = 94;
	public static readonly GEQ_TOK = 95;
	public static readonly NI_TOK = 96;
	public static readonly NO_TOK = 97;
	public static readonly SUM_TOK = 98;
	public static readonly INT_TOK = 99;
	public static readonly OPTION_TOK = 100;
	public static readonly COMMA_TOK = 101;
	public static readonly SLASH_TOK = 102;
	public static readonly NUM_CONST_TOK = 103;
	public static readonly IDENTIFIER_TOK = 104;
	public static readonly WS = 105;
	public static readonly CCOMMENT = 106;
	public static readonly COMMENT = 107;
	public static readonly MULTCOMMENT = 108;
	public static readonly LANG_DECL = 109;
	public static readonly RULE_alloyModule = 0;
	public static readonly RULE_importDecl = 1;
	public static readonly RULE_paragraph = 2;
	public static readonly RULE_sigDecl = 3;
	public static readonly RULE_sigExt = 4;
	public static readonly RULE_mult = 5;
	public static readonly RULE_arrowMult = 6;
	public static readonly RULE_helperMult = 7;
	public static readonly RULE_paraDecl = 8;
	public static readonly RULE_quantDecl = 9;
	public static readonly RULE_arrowDecl = 10;
	public static readonly RULE_predType = 11;
	public static readonly RULE_predDecl = 12;
	public static readonly RULE_funDecl = 13;
	public static readonly RULE_paraDecls = 14;
	public static readonly RULE_assertDecl = 15;
	public static readonly RULE_cmdDecl = 16;
	public static readonly RULE_testDecl = 17;
	public static readonly RULE_testExpectDecl = 18;
	public static readonly RULE_testBlock = 19;
	public static readonly RULE_scope = 20;
	public static readonly RULE_typescope = 21;
	public static readonly RULE_const = 22;
	public static readonly RULE_satisfiabilityDecl = 23;
	public static readonly RULE_quantifiedPropertyDecl = 24;
	public static readonly RULE_propertyDecl = 25;
	public static readonly RULE_consistencyDecl = 26;
	public static readonly RULE_testSuiteDecl = 27;
	public static readonly RULE_testConstruct = 28;
	public static readonly RULE_arrowOp = 29;
	public static readonly RULE_compareOp = 30;
	public static readonly RULE_letDecl = 31;
	public static readonly RULE_block = 32;
	public static readonly RULE_blockOrBar = 33;
	public static readonly RULE_quant = 34;
	public static readonly RULE_qualName = 35;
	public static readonly RULE_optionDecl = 36;
	public static readonly RULE_name = 37;
	public static readonly RULE_nameList = 38;
	public static readonly RULE_qualNameList = 39;
	public static readonly RULE_paraDeclList = 40;
	public static readonly RULE_quantDeclList = 41;
	public static readonly RULE_arrowDeclList = 42;
	public static readonly RULE_letDeclList = 43;
	public static readonly RULE_typescopeList = 44;
	public static readonly RULE_exprList = 45;
	public static readonly RULE_expr = 46;
	public static readonly RULE_expr1 = 47;
	public static readonly RULE_expr1_5 = 48;
	public static readonly RULE_expr2 = 49;
	public static readonly RULE_expr3 = 50;
	public static readonly RULE_expr4 = 51;
	public static readonly RULE_expr4_5 = 52;
	public static readonly RULE_expr5 = 53;
	public static readonly RULE_expr6 = 54;
	public static readonly RULE_expr7 = 55;
	public static readonly RULE_expr8 = 56;
	public static readonly RULE_expr9 = 57;
	public static readonly RULE_expr10 = 58;
	public static readonly RULE_expr11 = 59;
	public static readonly RULE_expr12 = 60;
	public static readonly RULE_expr13 = 61;
	public static readonly RULE_expr14 = 62;
	public static readonly RULE_expr15 = 63;
	public static readonly RULE_expr16 = 64;
	public static readonly RULE_expr17 = 65;
	public static readonly RULE_expr18 = 66;
	public static readonly RULE_arrowExpr = 67;
	public static readonly RULE_sexprDecl = 68;
	public static readonly RULE_sexpr = 69;
	public static readonly RULE_instDecl = 70;
	public static readonly RULE_evalRelDecl = 71;
	public static readonly RULE_evalDecl = 72;
	public static readonly RULE_exampleDecl = 73;
	public static readonly RULE_queryDecl = 74;
	public static readonly RULE_numberList = 75;
	public static readonly RULE_number = 76;
	public static readonly RULE_bounds = 77;
	public static readonly RULE_atomNameOrNumber = 78;
	public static readonly RULE_bound = 79;
	public static readonly RULE_boundLHS = 80;
	public static readonly RULE_bindRHSUnion = 81;
	public static readonly RULE_bindRHSProduct = 82;
	public static readonly RULE_bindRHSProductBase = 83;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"alloyModule", "importDecl", "paragraph", "sigDecl", "sigExt", "mult", 
		"arrowMult", "helperMult", "paraDecl", "quantDecl", "arrowDecl", "predType", 
		"predDecl", "funDecl", "paraDecls", "assertDecl", "cmdDecl", "testDecl", 
		"testExpectDecl", "testBlock", "scope", "typescope", "const", "satisfiabilityDecl", 
		"quantifiedPropertyDecl", "propertyDecl", "consistencyDecl", "testSuiteDecl", 
		"testConstruct", "arrowOp", "compareOp", "letDecl", "block", "blockOrBar", 
		"quant", "qualName", "optionDecl", "name", "nameList", "qualNameList", 
		"paraDeclList", "quantDeclList", "arrowDeclList", "letDeclList", "typescopeList", 
		"exprList", "expr", "expr1", "expr1_5", "expr2", "expr3", "expr4", "expr4_5", 
		"expr5", "expr6", "expr7", "expr8", "expr9", "expr10", "expr11", "expr12", 
		"expr13", "expr14", "expr15", "expr16", "expr17", "expr18", "arrowExpr", 
		"sexprDecl", "sexpr", "instDecl", "evalRelDecl", "evalDecl", "exampleDecl", 
		"queryDecl", "numberList", "number", "bounds", "atomNameOrNumber", "bound", 
		"boundLHS", "bindRHSUnion", "bindRHSProduct", "bindRHSProductBase",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'open'", "'['", "']'", "'as'", undefined, "'var'", "'abstract'", 
		"'sig'", "'{'", "'}'", "'extends'", "'in'", "'+'", "'lone'", "'some'", 
		"'one'", "'two'", "'set'", "'func'", "'pfunc'", "'disj'", "':'", "'wheat'", 
		"'pred'", "'.'", "'fun'", "'('", "')'", "'assert'", "'run'", "'check'", 
		"'for'", "'but'", "'exactly'", "'none'", "'univ'", "'iden'", "'-'", "'is'", 
		"'sat'", "'unsat'", "'theorem'", "'forge_error'", "'checked'", "'test'", 
		"'expect'", "'suite'", "'|'", "'all'", "'sufficient'", "'necessary'", 
		"'consistent'", "'inconsistent'", "'with'", "'let'", "'bind'", undefined, 
		"'xor'", undefined, undefined, "'else'", undefined, "'until'", "'release'", 
		"'since'", "'triggered'", undefined, "'always'", "'eventually'", "'after'", 
		"'before'", "'once'", "'historically'", "'#'", "'++'", "'&'", "'<:'", 
		"':>'", "'''", "'~'", "'^'", "'*'", "'@'", "'`'", "'this'", "'sexpr'", 
		"'inst'", "'eval'", "'example'", "'->'", "'='", "'<'", "'>'", undefined, 
		"'>='", "'ni'", "'no'", "'sum'", "'Int'", "'option'", "','", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPEN_TOK", "LEFT_SQUARE_TOK", "RIGHT_SQUARE_TOK", "AS_TOK", 
		"FILE_PATH_TOK", "VAR_TOK", "ABSTRACT_TOK", "SIG_TOK", "LEFT_CURLY_TOK", 
		"RIGHT_CURLY_TOK", "EXTENDS_TOK", "IN_TOK", "PLUS_TOK", "LONE_TOK", "SOME_TOK", 
		"ONE_TOK", "TWO_TOK", "SET_TOK", "FUNC_TOK", "PFUNC_TOK", "DISJ_TOK", 
		"COLON_TOK", "WHEAT_TOK", "PRED_TOK", "DOT_TOK", "FUN_TOK", "LEFT_PAREN_TOK", 
		"RIGHT_PAREN_TOK", "ASSERT_TOK", "RUN_TOK", "CHECK_TOK", "FOR_TOK", "BUT_TOK", 
		"EXACTLY_TOK", "NONE_TOK", "UNIV_TOK", "IDEN_TOK", "MINUS_TOK", "IS_TOK", 
		"SAT_TOK", "UNSAT_TOK", "THEOREM_TOK", "FORGE_ERROR_TOK", "CHECKED_TOK", 
		"TEST_TOK", "EXPECT_TOK", "SUITE_TOK", "BAR_TOK", "ALL_TOK", "SUFFICIENT_TOK", 
		"NECESSARY_TOK", "CONSISTENT_TOK", "INCONSISTENT_TOK", "WITH_TOK", "LET_TOK", 
		"BIND_TOK", "OR_TOK", "XOR_TOK", "IFF_TOK", "IMP_TOK", "ELSE_TOK", "AND_TOK", 
		"UNTIL_TOK", "RELEASE_TOK", "SINCE_TOK", "TRIGGERED_TOK", "NEG_TOK", "ALWAYS_TOK", 
		"EVENTUALLY_TOK", "AFTER_TOK", "BEFORE_TOK", "ONCE_TOK", "HISTORICALLY_TOK", 
		"CARD_TOK", "PPLUS_TOK", "AMP_TOK", "SUBT_TOK", "SUPT_TOK", "PRIME_TOK", 
		"TILDE_TOK", "EXP_TOK", "STAR_TOK", "AT_TOK", "BACKQUOTE_TOK", "THIS_TOK", 
		"SEXPR_TOK", "INST_TOK", "EVAL_TOK", "EXAMPLE_TOK", "ARROW_TOK", "EQ_TOK", 
		"LT_TOK", "GT_TOK", "LEQ_TOK", "GEQ_TOK", "NI_TOK", "NO_TOK", "SUM_TOK", 
		"INT_TOK", "OPTION_TOK", "COMMA_TOK", "SLASH_TOK", "NUM_CONST_TOK", "IDENTIFIER_TOK", 
		"WS", "CCOMMENT", "COMMENT", "MULTCOMMENT", "LANG_DECL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ForgeParser._LITERAL_NAMES, ForgeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ForgeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Forge.g4"; }

	// @Override
	public get ruleNames(): string[] { return ForgeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ForgeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ForgeParser._ATN, this);
	}
	// @RuleVersion(0)
	public alloyModule(): AlloyModuleContext {
		let _localctx: AlloyModuleContext = new AlloyModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ForgeParser.RULE_alloyModule);
		let _la: number;
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ForgeParser.OPEN_TOK) {
					{
					{
					this.state = 168;
					this.importDecl();
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.VAR_TOK) | (1 << ForgeParser.ABSTRACT_TOK) | (1 << ForgeParser.SIG_TOK) | (1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.SOME_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.TWO_TOK) | (1 << ForgeParser.PRED_TOK) | (1 << ForgeParser.FUN_TOK) | (1 << ForgeParser.ASSERT_TOK) | (1 << ForgeParser.RUN_TOK) | (1 << ForgeParser.CHECK_TOK))) !== 0) || _la === ForgeParser.TEST_TOK || _la === ForgeParser.EXPECT_TOK || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (ForgeParser.SEXPR_TOK - 86)) | (1 << (ForgeParser.INST_TOK - 86)) | (1 << (ForgeParser.EXAMPLE_TOK - 86)) | (1 << (ForgeParser.OPTION_TOK - 86)) | (1 << (ForgeParser.IDENTIFIER_TOK - 86)))) !== 0)) {
					{
					{
					this.state = 174;
					this.paragraph();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ForgeParser.EVAL_TOK) {
					{
					{
					this.state = 180;
					this.evalDecl();
					}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDecl(): ImportDeclContext {
		let _localctx: ImportDeclContext = new ImportDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ForgeParser.RULE_importDecl);
		let _la: number;
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(ForgeParser.OPEN_TOK);
				this.state = 189;
				this.qualName();
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.LEFT_SQUARE_TOK) {
					{
					this.state = 190;
					this.match(ForgeParser.LEFT_SQUARE_TOK);
					this.state = 191;
					this.qualNameList();
					this.state = 192;
					this.match(ForgeParser.RIGHT_SQUARE_TOK);
					}
				}

				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.AS_TOK) {
					{
					this.state = 196;
					this.match(ForgeParser.AS_TOK);
					this.state = 197;
					this.name();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.match(ForgeParser.OPEN_TOK);
				this.state = 201;
				this.match(ForgeParser.FILE_PATH_TOK);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.AS_TOK) {
					{
					this.state = 202;
					this.match(ForgeParser.AS_TOK);
					this.state = 203;
					this.name();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paragraph(): ParagraphContext {
		let _localctx: ParagraphContext = new ParagraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ForgeParser.RULE_paragraph);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.sigDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.predDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.funDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.assertDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 212;
				this.cmdDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 213;
				this.testExpectDecl();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 214;
				this.sexprDecl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 215;
				this.queryDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 216;
				this.evalRelDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 217;
				this.optionDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 218;
				this.instDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 219;
				this.exampleDecl();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 220;
				this.propertyDecl();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 221;
				this.quantifiedPropertyDecl();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 222;
				this.satisfiabilityDecl();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 223;
				this.consistencyDecl();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 224;
				this.testSuiteDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sigDecl(): SigDeclContext {
		let _localctx: SigDeclContext = new SigDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ForgeParser.RULE_sigDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.VAR_TOK) {
				{
				this.state = 227;
				this.match(ForgeParser.VAR_TOK);
				}
			}

			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.ABSTRACT_TOK) {
				{
				this.state = 230;
				this.match(ForgeParser.ABSTRACT_TOK);
				}
			}

			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.SOME_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.TWO_TOK))) !== 0)) {
				{
				this.state = 233;
				this.mult();
				}
			}

			this.state = 236;
			this.match(ForgeParser.SIG_TOK);
			this.state = 237;
			this.nameList();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.EXTENDS_TOK || _la === ForgeParser.IN_TOK) {
				{
				this.state = 238;
				this.sigExt();
				}
			}

			this.state = 241;
			this.match(ForgeParser.LEFT_CURLY_TOK);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.VAR_TOK || _la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 242;
				this.arrowDeclList();
				}
			}

			this.state = 245;
			this.match(ForgeParser.RIGHT_CURLY_TOK);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.LEFT_CURLY_TOK) {
				{
				this.state = 246;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sigExt(): SigExtContext {
		let _localctx: SigExtContext = new SigExtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ForgeParser.RULE_sigExt);
		let _la: number;
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.EXTENDS_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 249;
				this.match(ForgeParser.EXTENDS_TOK);
				this.state = 250;
				this.qualName();
				}
				break;
			case ForgeParser.IN_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.match(ForgeParser.IN_TOK);
				this.state = 252;
				this.qualName();
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ForgeParser.PLUS_TOK) {
					{
					{
					this.state = 253;
					this.match(ForgeParser.PLUS_TOK);
					this.state = 254;
					this.qualName();
					}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mult(): MultContext {
		let _localctx: MultContext = new MultContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ForgeParser.RULE_mult);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.SOME_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.TWO_TOK))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowMult(): ArrowMultContext {
		let _localctx: ArrowMultContext = new ArrowMultContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ForgeParser.RULE_arrowMult);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.TWO_TOK) | (1 << ForgeParser.SET_TOK) | (1 << ForgeParser.FUNC_TOK) | (1 << ForgeParser.PFUNC_TOK))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public helperMult(): HelperMultContext {
		let _localctx: HelperMultContext = new HelperMultContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ForgeParser.RULE_helperMult);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.SET_TOK) | (1 << ForgeParser.FUNC_TOK) | (1 << ForgeParser.PFUNC_TOK))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paraDecl(): ParaDeclContext {
		let _localctx: ParaDeclContext = new ParaDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ForgeParser.RULE_paraDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.DISJ_TOK) {
				{
				this.state = 268;
				this.match(ForgeParser.DISJ_TOK);
				}
			}

			this.state = 271;
			this.nameList();
			this.state = 272;
			this.match(ForgeParser.COLON_TOK);
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.helperMult();
				}
				break;
			}
			this.state = 276;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantDecl(): QuantDeclContext {
		let _localctx: QuantDeclContext = new QuantDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ForgeParser.RULE_quantDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.DISJ_TOK) {
				{
				this.state = 278;
				this.match(ForgeParser.DISJ_TOK);
				}
			}

			this.state = 281;
			this.nameList();
			this.state = 282;
			this.match(ForgeParser.COLON_TOK);
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 283;
				this.match(ForgeParser.SET_TOK);
				}
				break;
			}
			this.state = 286;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowDecl(): ArrowDeclContext {
		let _localctx: ArrowDeclContext = new ArrowDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ForgeParser.RULE_arrowDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.VAR_TOK) {
				{
				this.state = 288;
				this.match(ForgeParser.VAR_TOK);
				}
			}

			this.state = 291;
			this.nameList();
			this.state = 292;
			this.match(ForgeParser.COLON_TOK);
			this.state = 293;
			this.arrowMult();
			this.state = 294;
			this.arrowExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predType(): PredTypeContext {
		let _localctx: PredTypeContext = new PredTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ForgeParser.RULE_predType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(ForgeParser.WHEAT_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predDecl(): PredDeclContext {
		let _localctx: PredDeclContext = new PredDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ForgeParser.RULE_predDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(ForgeParser.PRED_TOK);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.WHEAT_TOK) {
				{
				this.state = 299;
				this.predType();
				}
			}

			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.qualName();
				this.state = 303;
				this.match(ForgeParser.DOT_TOK);
				}
				break;
			}
			this.state = 307;
			this.name();
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.LEFT_SQUARE_TOK || _la === ForgeParser.LEFT_PAREN_TOK) {
				{
				this.state = 308;
				this.paraDecls();
				}
			}

			this.state = 311;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funDecl(): FunDeclContext {
		let _localctx: FunDeclContext = new FunDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ForgeParser.RULE_funDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(ForgeParser.FUN_TOK);
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 314;
				this.qualName();
				this.state = 315;
				this.match(ForgeParser.DOT_TOK);
				}
				break;
			}
			this.state = 319;
			this.name();
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.LEFT_SQUARE_TOK || _la === ForgeParser.LEFT_PAREN_TOK) {
				{
				this.state = 320;
				this.paraDecls();
				}
			}

			this.state = 323;
			this.match(ForgeParser.COLON_TOK);
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 324;
				this.helperMult();
				}
				break;
			}
			this.state = 327;
			this.expr();
			this.state = 328;
			this.match(ForgeParser.LEFT_CURLY_TOK);
			this.state = 329;
			this.expr();
			this.state = 330;
			this.match(ForgeParser.RIGHT_CURLY_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paraDecls(): ParaDeclsContext {
		let _localctx: ParaDeclsContext = new ParaDeclsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ForgeParser.RULE_paraDecls);
		let _la: number;
		try {
			this.state = 342;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_PAREN_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 332;
				this.match(ForgeParser.LEFT_PAREN_TOK);
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.DISJ_TOK || _la === ForgeParser.IDENTIFIER_TOK) {
					{
					this.state = 333;
					this.paraDeclList();
					}
				}

				this.state = 336;
				this.match(ForgeParser.RIGHT_PAREN_TOK);
				}
				break;
			case ForgeParser.LEFT_SQUARE_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this.match(ForgeParser.LEFT_SQUARE_TOK);
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.DISJ_TOK || _la === ForgeParser.IDENTIFIER_TOK) {
					{
					this.state = 338;
					this.paraDeclList();
					}
				}

				this.state = 341;
				this.match(ForgeParser.RIGHT_SQUARE_TOK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertDecl(): AssertDeclContext {
		let _localctx: AssertDeclContext = new AssertDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ForgeParser.RULE_assertDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(ForgeParser.ASSERT_TOK);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 345;
				this.name();
				}
			}

			this.state = 348;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDecl(): CmdDeclContext {
		let _localctx: CmdDeclContext = new CmdDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ForgeParser.RULE_cmdDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 350;
				this.name();
				this.state = 351;
				this.match(ForgeParser.COLON_TOK);
				}
			}

			this.state = 355;
			_la = this._input.LA(1);
			if (!(_la === ForgeParser.RUN_TOK || _la === ForgeParser.CHECK_TOK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 356;
				this.qualName();
				}
				break;

			case 2:
				{
				this.state = 357;
				this.block();
				}
				break;
			}
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				this.scope();
				}
				break;
			}
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 363;
				this.match(ForgeParser.FOR_TOK);
				this.state = 364;
				this.bounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testDecl(): TestDeclContext {
		let _localctx: TestDeclContext = new TestDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ForgeParser.RULE_testDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 367;
				this.name();
				this.state = 368;
				this.match(ForgeParser.COLON_TOK);
				}
				break;
			}
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.THIS_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				{
				this.state = 372;
				this.qualName();
				}
				break;
			case ForgeParser.LEFT_CURLY_TOK:
				{
				this.state = 373;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 376;
				this.scope();
				}
				break;
			}
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 379;
				this.match(ForgeParser.FOR_TOK);
				this.state = 380;
				this.bounds();
				}
			}

			this.state = 383;
			this.match(ForgeParser.IS_TOK);
			this.state = 384;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ForgeParser.SAT_TOK - 40)) | (1 << (ForgeParser.UNSAT_TOK - 40)) | (1 << (ForgeParser.THEOREM_TOK - 40)) | (1 << (ForgeParser.FORGE_ERROR_TOK - 40)) | (1 << (ForgeParser.CHECKED_TOK - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testExpectDecl(): TestExpectDeclContext {
		let _localctx: TestExpectDeclContext = new TestExpectDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ForgeParser.RULE_testExpectDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.TEST_TOK) {
				{
				this.state = 386;
				this.match(ForgeParser.TEST_TOK);
				}
			}

			this.state = 389;
			this.match(ForgeParser.EXPECT_TOK);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 390;
				this.name();
				}
			}

			this.state = 393;
			this.testBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testBlock(): TestBlockContext {
		let _localctx: TestBlockContext = new TestBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ForgeParser.RULE_testBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(ForgeParser.LEFT_CURLY_TOK);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ForgeParser.LEFT_CURLY_TOK || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (ForgeParser.THIS_TOK - 85)) | (1 << (ForgeParser.SUM_TOK - 85)) | (1 << (ForgeParser.INT_TOK - 85)) | (1 << (ForgeParser.IDENTIFIER_TOK - 85)))) !== 0)) {
				{
				{
				this.state = 396;
				this.testDecl();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(ForgeParser.RIGHT_CURLY_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ForgeParser.RULE_scope);
		let _la: number;
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.match(ForgeParser.FOR_TOK);
				this.state = 405;
				this.number();
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.BUT_TOK) {
					{
					this.state = 406;
					this.match(ForgeParser.BUT_TOK);
					this.state = 407;
					this.typescopeList();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(ForgeParser.FOR_TOK);
				this.state = 411;
				this.typescopeList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typescope(): TypescopeContext {
		let _localctx: TypescopeContext = new TypescopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ForgeParser.RULE_typescope);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.EXACTLY_TOK) {
				{
				this.state = 414;
				this.match(ForgeParser.EXACTLY_TOK);
				}
			}

			this.state = 417;
			this.number();
			this.state = 418;
			this.qualName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public const(): ConstContext {
		let _localctx: ConstContext = new ConstContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ForgeParser.RULE_const);
		let _la: number;
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.NONE_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.match(ForgeParser.NONE_TOK);
				}
				break;
			case ForgeParser.UNIV_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.match(ForgeParser.UNIV_TOK);
				}
				break;
			case ForgeParser.IDEN_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 422;
				this.match(ForgeParser.IDEN_TOK);
				}
				break;
			case ForgeParser.MINUS_TOK:
			case ForgeParser.NUM_CONST_TOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.MINUS_TOK) {
					{
					this.state = 423;
					this.match(ForgeParser.MINUS_TOK);
					}
				}

				this.state = 426;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public satisfiabilityDecl(): SatisfiabilityDeclContext {
		let _localctx: SatisfiabilityDeclContext = new SatisfiabilityDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ForgeParser.RULE_satisfiabilityDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 429;
				this.name();
				this.state = 430;
				this.match(ForgeParser.COLON_TOK);
				}
			}

			this.state = 434;
			this.match(ForgeParser.ASSERT_TOK);
			this.state = 435;
			this.expr();
			this.state = 436;
			this.match(ForgeParser.IS_TOK);
			this.state = 437;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ForgeParser.SAT_TOK - 40)) | (1 << (ForgeParser.UNSAT_TOK - 40)) | (1 << (ForgeParser.FORGE_ERROR_TOK - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 438;
				this.scope();
				}
				break;
			}
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 441;
				this.match(ForgeParser.FOR_TOK);
				this.state = 442;
				this.bounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifiedPropertyDecl(): QuantifiedPropertyDeclContext {
		let _localctx: QuantifiedPropertyDeclContext = new QuantifiedPropertyDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ForgeParser.RULE_quantifiedPropertyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 445;
				this.name();
				this.state = 446;
				this.match(ForgeParser.COLON_TOK);
				}
			}

			this.state = 450;
			this.match(ForgeParser.ASSERT_TOK);
			this.state = 451;
			this.match(ForgeParser.ALL_TOK);
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.match(ForgeParser.DISJ_TOK);
				}
				break;
			}
			this.state = 455;
			this.quantDeclList();
			this.state = 456;
			this.match(ForgeParser.BAR_TOK);
			this.state = 457;
			this.expr();
			this.state = 458;
			this.match(ForgeParser.IS_TOK);
			this.state = 459;
			_la = this._input.LA(1);
			if (!(_la === ForgeParser.SUFFICIENT_TOK || _la === ForgeParser.NECESSARY_TOK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 460;
			this.match(ForgeParser.FOR_TOK);
			this.state = 461;
			this.name();
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.LEFT_SQUARE_TOK) {
				{
				this.state = 462;
				this.match(ForgeParser.LEFT_SQUARE_TOK);
				this.state = 463;
				this.exprList();
				this.state = 464;
				this.match(ForgeParser.RIGHT_SQUARE_TOK);
				}
			}

			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 468;
				this.scope();
				}
				break;
			}
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 471;
				this.match(ForgeParser.FOR_TOK);
				this.state = 472;
				this.bounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDecl(): PropertyDeclContext {
		let _localctx: PropertyDeclContext = new PropertyDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ForgeParser.RULE_propertyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 475;
				this.name();
				this.state = 476;
				this.match(ForgeParser.COLON_TOK);
				}
			}

			this.state = 480;
			this.match(ForgeParser.ASSERT_TOK);
			this.state = 481;
			this.expr();
			this.state = 482;
			this.match(ForgeParser.IS_TOK);
			this.state = 483;
			_la = this._input.LA(1);
			if (!(_la === ForgeParser.SUFFICIENT_TOK || _la === ForgeParser.NECESSARY_TOK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 484;
			this.match(ForgeParser.FOR_TOK);
			this.state = 485;
			this.name();
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.scope();
				}
				break;
			}
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 489;
				this.match(ForgeParser.FOR_TOK);
				this.state = 490;
				this.bounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consistencyDecl(): ConsistencyDeclContext {
		let _localctx: ConsistencyDeclContext = new ConsistencyDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ForgeParser.RULE_consistencyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.IDENTIFIER_TOK) {
				{
				this.state = 493;
				this.name();
				this.state = 494;
				this.match(ForgeParser.COLON_TOK);
				}
			}

			this.state = 498;
			this.match(ForgeParser.ASSERT_TOK);
			this.state = 499;
			this.expr();
			this.state = 500;
			this.match(ForgeParser.IS_TOK);
			this.state = 501;
			_la = this._input.LA(1);
			if (!(_la === ForgeParser.CONSISTENT_TOK || _la === ForgeParser.INCONSISTENT_TOK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 502;
			this.match(ForgeParser.WITH_TOK);
			this.state = 503;
			this.name();
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 504;
				this.scope();
				}
				break;
			}
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 507;
				this.match(ForgeParser.FOR_TOK);
				this.state = 508;
				this.bounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testSuiteDecl(): TestSuiteDeclContext {
		let _localctx: TestSuiteDeclContext = new TestSuiteDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ForgeParser.RULE_testSuiteDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(ForgeParser.TEST_TOK);
			this.state = 512;
			this.match(ForgeParser.SUITE_TOK);
			this.state = 513;
			this.match(ForgeParser.FOR_TOK);
			this.state = 514;
			this.name();
			this.state = 515;
			this.match(ForgeParser.LEFT_CURLY_TOK);
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (ForgeParser.ASSERT_TOK - 29)) | (1 << (ForgeParser.TEST_TOK - 29)) | (1 << (ForgeParser.EXPECT_TOK - 29)))) !== 0) || _la === ForgeParser.EXAMPLE_TOK || _la === ForgeParser.IDENTIFIER_TOK) {
				{
				{
				this.state = 516;
				this.testConstruct();
				}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 522;
			this.match(ForgeParser.RIGHT_CURLY_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public testConstruct(): TestConstructContext {
		let _localctx: TestConstructContext = new TestConstructContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ForgeParser.RULE_testConstruct);
		try {
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.exampleDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
				this.testExpectDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 526;
				this.quantifiedPropertyDecl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 527;
				this.propertyDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 528;
				this.satisfiabilityDecl();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 529;
				this.consistencyDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowOp(): ArrowOpContext {
		let _localctx: ArrowOpContext = new ArrowOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ForgeParser.RULE_arrowOp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LONE_TOK:
			case ForgeParser.SOME_TOK:
			case ForgeParser.ONE_TOK:
			case ForgeParser.TWO_TOK:
				{
				this.state = 532;
				this.mult();
				}
				break;
			case ForgeParser.SET_TOK:
				{
				this.state = 533;
				this.match(ForgeParser.SET_TOK);
				}
				break;
			case ForgeParser.ARROW_TOK:
				break;
			default:
				break;
			}
			this.state = 536;
			this.match(ForgeParser.ARROW_TOK);
			this.state = 539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LONE_TOK:
			case ForgeParser.SOME_TOK:
			case ForgeParser.ONE_TOK:
			case ForgeParser.TWO_TOK:
				{
				this.state = 537;
				this.mult();
				}
				break;
			case ForgeParser.SET_TOK:
				{
				this.state = 538;
				this.match(ForgeParser.SET_TOK);
				}
				break;
			case ForgeParser.LEFT_CURLY_TOK:
			case ForgeParser.LEFT_PAREN_TOK:
			case ForgeParser.NONE_TOK:
			case ForgeParser.UNIV_TOK:
			case ForgeParser.IDEN_TOK:
			case ForgeParser.MINUS_TOK:
			case ForgeParser.TILDE_TOK:
			case ForgeParser.EXP_TOK:
			case ForgeParser.STAR_TOK:
			case ForgeParser.AT_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SEXPR_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.NUM_CONST_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compareOp(): CompareOpContext {
		let _localctx: CompareOpContext = new CompareOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ForgeParser.RULE_compareOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			_la = this._input.LA(1);
			if (!(_la === ForgeParser.IN_TOK || _la === ForgeParser.IS_TOK || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ForgeParser.EQ_TOK - 91)) | (1 << (ForgeParser.LT_TOK - 91)) | (1 << (ForgeParser.GT_TOK - 91)) | (1 << (ForgeParser.LEQ_TOK - 91)) | (1 << (ForgeParser.GEQ_TOK - 91)) | (1 << (ForgeParser.NI_TOK - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letDecl(): LetDeclContext {
		let _localctx: LetDeclContext = new LetDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ForgeParser.RULE_letDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.name();
			this.state = 544;
			this.match(ForgeParser.EQ_TOK);
			this.state = 545;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ForgeParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(ForgeParser.LEFT_CURLY_TOK);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (ForgeParser.LEFT_CURLY_TOK - 9)) | (1 << (ForgeParser.LONE_TOK - 9)) | (1 << (ForgeParser.SOME_TOK - 9)) | (1 << (ForgeParser.ONE_TOK - 9)) | (1 << (ForgeParser.TWO_TOK - 9)) | (1 << (ForgeParser.SET_TOK - 9)) | (1 << (ForgeParser.LEFT_PAREN_TOK - 9)) | (1 << (ForgeParser.NONE_TOK - 9)) | (1 << (ForgeParser.UNIV_TOK - 9)) | (1 << (ForgeParser.IDEN_TOK - 9)) | (1 << (ForgeParser.MINUS_TOK - 9)))) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (ForgeParser.ALL_TOK - 49)) | (1 << (ForgeParser.LET_TOK - 49)) | (1 << (ForgeParser.BIND_TOK - 49)) | (1 << (ForgeParser.NEG_TOK - 49)) | (1 << (ForgeParser.ALWAYS_TOK - 49)) | (1 << (ForgeParser.EVENTUALLY_TOK - 49)) | (1 << (ForgeParser.AFTER_TOK - 49)) | (1 << (ForgeParser.BEFORE_TOK - 49)) | (1 << (ForgeParser.ONCE_TOK - 49)) | (1 << (ForgeParser.HISTORICALLY_TOK - 49)) | (1 << (ForgeParser.CARD_TOK - 49)) | (1 << (ForgeParser.TILDE_TOK - 49)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (ForgeParser.EXP_TOK - 81)) | (1 << (ForgeParser.STAR_TOK - 81)) | (1 << (ForgeParser.AT_TOK - 81)) | (1 << (ForgeParser.BACKQUOTE_TOK - 81)) | (1 << (ForgeParser.THIS_TOK - 81)) | (1 << (ForgeParser.SEXPR_TOK - 81)) | (1 << (ForgeParser.NO_TOK - 81)) | (1 << (ForgeParser.SUM_TOK - 81)) | (1 << (ForgeParser.INT_TOK - 81)) | (1 << (ForgeParser.NUM_CONST_TOK - 81)) | (1 << (ForgeParser.IDENTIFIER_TOK - 81)))) !== 0)) {
				{
				{
				this.state = 548;
				this.expr();
				}
				}
				this.state = 553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 554;
			this.match(ForgeParser.RIGHT_CURLY_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockOrBar(): BlockOrBarContext {
		let _localctx: BlockOrBarContext = new BlockOrBarContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ForgeParser.RULE_blockOrBar);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 556;
				this.block();
				}
				break;
			case ForgeParser.BAR_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.match(ForgeParser.BAR_TOK);
				this.state = 558;
				this.expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quant(): QuantContext {
		let _localctx: QuantContext = new QuantContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ForgeParser.RULE_quant);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.ALL_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.match(ForgeParser.ALL_TOK);
				}
				break;
			case ForgeParser.NO_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.match(ForgeParser.NO_TOK);
				}
				break;
			case ForgeParser.SUM_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.match(ForgeParser.SUM_TOK);
				}
				break;
			case ForgeParser.LONE_TOK:
			case ForgeParser.SOME_TOK:
			case ForgeParser.ONE_TOK:
			case ForgeParser.TWO_TOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.mult();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualName(): QualNameContext {
		let _localctx: QualNameContext = new QualNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ForgeParser.RULE_qualName);
		let _la: number;
		try {
			let _alt: number;
			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.THIS_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.THIS_TOK) {
					{
					this.state = 567;
					this.match(ForgeParser.THIS_TOK);
					this.state = 568;
					this.match(ForgeParser.SLASH_TOK);
					}
				}

				this.state = 576;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 571;
						this.name();
						this.state = 572;
						this.match(ForgeParser.SLASH_TOK);
						}
						}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 579;
				this.name();
				}
				break;
			case ForgeParser.INT_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
				this.match(ForgeParser.INT_TOK);
				}
				break;
			case ForgeParser.SUM_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 581;
				this.match(ForgeParser.SUM_TOK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionDecl(): OptionDeclContext {
		let _localctx: OptionDeclContext = new OptionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ForgeParser.RULE_optionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(ForgeParser.OPTION_TOK);
			this.state = 585;
			this.qualName();
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.THIS_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				{
				this.state = 586;
				this.qualName();
				}
				break;
			case ForgeParser.FILE_PATH_TOK:
				{
				this.state = 587;
				this.match(ForgeParser.FILE_PATH_TOK);
				}
				break;
			case ForgeParser.MINUS_TOK:
			case ForgeParser.NUM_CONST_TOK:
				{
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.MINUS_TOK) {
					{
					this.state = 588;
					this.match(ForgeParser.MINUS_TOK);
					}
				}

				this.state = 591;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ForgeParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(ForgeParser.IDENTIFIER_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameList(): NameListContext {
		let _localctx: NameListContext = new NameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ForgeParser.RULE_nameList);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 597;
				this.name();
				this.state = 598;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 599;
				this.nameList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualNameList(): QualNameListContext {
		let _localctx: QualNameListContext = new QualNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ForgeParser.RULE_qualNameList);
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.qualName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.qualName();
				this.state = 605;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 606;
				this.qualNameList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paraDeclList(): ParaDeclListContext {
		let _localctx: ParaDeclListContext = new ParaDeclListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ForgeParser.RULE_paraDeclList);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 610;
				this.paraDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 611;
				this.paraDecl();
				this.state = 612;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 613;
				this.paraDeclList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantDeclList(): QuantDeclListContext {
		let _localctx: QuantDeclListContext = new QuantDeclListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ForgeParser.RULE_quantDeclList);
		try {
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 617;
				this.quantDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 618;
				this.quantDecl();
				this.state = 619;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 620;
				this.quantDeclList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowDeclList(): ArrowDeclListContext {
		let _localctx: ArrowDeclListContext = new ArrowDeclListContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ForgeParser.RULE_arrowDeclList);
		try {
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 624;
				this.arrowDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.arrowDecl();
				this.state = 626;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 627;
				this.arrowDeclList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letDeclList(): LetDeclListContext {
		let _localctx: LetDeclListContext = new LetDeclListContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ForgeParser.RULE_letDeclList);
		try {
			this.state = 636;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				this.letDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 632;
				this.letDecl();
				this.state = 633;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 634;
				this.letDeclList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typescopeList(): TypescopeListContext {
		let _localctx: TypescopeListContext = new TypescopeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ForgeParser.RULE_typescopeList);
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.typescope();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.typescope();
				this.state = 640;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 641;
				this.typescopeList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ForgeParser.RULE_exprList);
		try {
			this.state = 650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 645;
				this.expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 646;
				this.expr();
				this.state = 647;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 648;
				this.exprList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ForgeParser.RULE_expr);
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 652;
				this.expr1(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 653;
				this.match(ForgeParser.LET_TOK);
				this.state = 654;
				this.letDeclList();
				this.state = 655;
				this.blockOrBar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 657;
				this.match(ForgeParser.BIND_TOK);
				this.state = 658;
				this.letDeclList();
				this.state = 659;
				this.blockOrBar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 661;
				this.quant();
				this.state = 663;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 662;
					this.match(ForgeParser.DISJ_TOK);
					}
					break;
				}
				this.state = 665;
				this.quantDeclList();
				this.state = 666;
				this.blockOrBar();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr1(): Expr1Context;
	public expr1(_p: number): Expr1Context;
	// @RuleVersion(0)
	public expr1(_p?: number): Expr1Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr1Context = new Expr1Context(this._ctx, _parentState);
		let _prevctx: Expr1Context = _localctx;
		let _startState: number = 94;
		this.enterRecursionRule(_localctx, 94, ForgeParser.RULE_expr1, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 671;
			this.expr1_5(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 678;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr1Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr1);
					this.state = 673;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 674;
					this.match(ForgeParser.OR_TOK);
					this.state = 675;
					this.expr1_5(0);
					}
					}
				}
				this.state = 680;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr1_5(): Expr1_5Context;
	public expr1_5(_p: number): Expr1_5Context;
	// @RuleVersion(0)
	public expr1_5(_p?: number): Expr1_5Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr1_5Context = new Expr1_5Context(this._ctx, _parentState);
		let _prevctx: Expr1_5Context = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, ForgeParser.RULE_expr1_5, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 682;
			this.expr2(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 689;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr1_5Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr1_5);
					this.state = 684;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 685;
					this.match(ForgeParser.XOR_TOK);
					this.state = 686;
					this.expr2(0);
					}
					}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr2(): Expr2Context;
	public expr2(_p: number): Expr2Context;
	// @RuleVersion(0)
	public expr2(_p?: number): Expr2Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr2Context = new Expr2Context(this._ctx, _parentState);
		let _prevctx: Expr2Context = _localctx;
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, ForgeParser.RULE_expr2, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 693;
			this.expr3();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 700;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr2Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr2);
					this.state = 695;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 696;
					this.match(ForgeParser.IFF_TOK);
					this.state = 697;
					this.expr3();
					}
					}
				}
				this.state = 702;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr3(): Expr3Context {
		let _localctx: Expr3Context = new Expr3Context(this._ctx, this.state);
		this.enterRule(_localctx, 100, ForgeParser.RULE_expr3);
		try {
			this.state = 711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.expr4(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.expr4(0);
				this.state = 705;
				this.match(ForgeParser.IMP_TOK);
				this.state = 706;
				this.expr3();
				this.state = 709;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 707;
					this.match(ForgeParser.ELSE_TOK);
					this.state = 708;
					this.expr3();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr4(): Expr4Context;
	public expr4(_p: number): Expr4Context;
	// @RuleVersion(0)
	public expr4(_p?: number): Expr4Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr4Context = new Expr4Context(this._ctx, _parentState);
		let _prevctx: Expr4Context = _localctx;
		let _startState: number = 102;
		this.enterRecursionRule(_localctx, 102, ForgeParser.RULE_expr4, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 714;
			this.expr4_5();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 721;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr4Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr4);
					this.state = 716;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 717;
					this.match(ForgeParser.AND_TOK);
					this.state = 718;
					this.expr4_5();
					}
					}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr4_5(): Expr4_5Context {
		let _localctx: Expr4_5Context = new Expr4_5Context(this._ctx, this.state);
		this.enterRule(_localctx, 104, ForgeParser.RULE_expr4_5);
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 724;
				this.expr5();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.expr5();
				this.state = 726;
				this.match(ForgeParser.UNTIL_TOK);
				this.state = 727;
				this.expr5();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 729;
				this.expr5();
				this.state = 730;
				this.match(ForgeParser.RELEASE_TOK);
				this.state = 731;
				this.expr5();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 733;
				this.expr5();
				this.state = 734;
				this.match(ForgeParser.SINCE_TOK);
				this.state = 735;
				this.expr5();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 737;
				this.expr5();
				this.state = 738;
				this.match(ForgeParser.TRIGGERED_TOK);
				this.state = 739;
				this.expr5();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr5(): Expr5Context {
		let _localctx: Expr5Context = new Expr5Context(this._ctx, this.state);
		this.enterRule(_localctx, 106, ForgeParser.RULE_expr5);
		try {
			this.state = 758;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
			case ForgeParser.LONE_TOK:
			case ForgeParser.SOME_TOK:
			case ForgeParser.ONE_TOK:
			case ForgeParser.TWO_TOK:
			case ForgeParser.SET_TOK:
			case ForgeParser.LEFT_PAREN_TOK:
			case ForgeParser.NONE_TOK:
			case ForgeParser.UNIV_TOK:
			case ForgeParser.IDEN_TOK:
			case ForgeParser.MINUS_TOK:
			case ForgeParser.CARD_TOK:
			case ForgeParser.TILDE_TOK:
			case ForgeParser.EXP_TOK:
			case ForgeParser.STAR_TOK:
			case ForgeParser.AT_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SEXPR_TOK:
			case ForgeParser.NO_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.NUM_CONST_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 743;
				this.expr6(0);
				}
				break;
			case ForgeParser.NEG_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 744;
				this.match(ForgeParser.NEG_TOK);
				this.state = 745;
				this.expr5();
				}
				break;
			case ForgeParser.ALWAYS_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 746;
				this.match(ForgeParser.ALWAYS_TOK);
				this.state = 747;
				this.expr5();
				}
				break;
			case ForgeParser.EVENTUALLY_TOK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 748;
				this.match(ForgeParser.EVENTUALLY_TOK);
				this.state = 749;
				this.expr5();
				}
				break;
			case ForgeParser.AFTER_TOK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 750;
				this.match(ForgeParser.AFTER_TOK);
				this.state = 751;
				this.expr5();
				}
				break;
			case ForgeParser.BEFORE_TOK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 752;
				this.match(ForgeParser.BEFORE_TOK);
				this.state = 753;
				this.expr5();
				}
				break;
			case ForgeParser.ONCE_TOK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 754;
				this.match(ForgeParser.ONCE_TOK);
				this.state = 755;
				this.expr5();
				}
				break;
			case ForgeParser.HISTORICALLY_TOK:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 756;
				this.match(ForgeParser.HISTORICALLY_TOK);
				this.state = 757;
				this.expr5();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr6(): Expr6Context;
	public expr6(_p: number): Expr6Context;
	// @RuleVersion(0)
	public expr6(_p?: number): Expr6Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr6Context = new Expr6Context(this._ctx, _parentState);
		let _prevctx: Expr6Context = _localctx;
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, ForgeParser.RULE_expr6, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 761;
			this.expr7();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 772;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr6Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr6);
					this.state = 763;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ForgeParser.NEG_TOK) {
						{
						this.state = 764;
						this.match(ForgeParser.NEG_TOK);
						}
					}

					this.state = 767;
					this.compareOp();
					this.state = 768;
					this.expr7();
					}
					}
				}
				this.state = 774;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr7(): Expr7Context {
		let _localctx: Expr7Context = new Expr7Context(this._ctx, this.state);
		this.enterRule(_localctx, 110, ForgeParser.RULE_expr7);
		let _la: number;
		try {
			this.state = 778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
			case ForgeParser.LEFT_PAREN_TOK:
			case ForgeParser.NONE_TOK:
			case ForgeParser.UNIV_TOK:
			case ForgeParser.IDEN_TOK:
			case ForgeParser.MINUS_TOK:
			case ForgeParser.CARD_TOK:
			case ForgeParser.TILDE_TOK:
			case ForgeParser.EXP_TOK:
			case ForgeParser.STAR_TOK:
			case ForgeParser.AT_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SEXPR_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.NUM_CONST_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 775;
				this.expr8(0);
				}
				break;
			case ForgeParser.LONE_TOK:
			case ForgeParser.SOME_TOK:
			case ForgeParser.ONE_TOK:
			case ForgeParser.TWO_TOK:
			case ForgeParser.SET_TOK:
			case ForgeParser.NO_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 776;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ForgeParser.LONE_TOK) | (1 << ForgeParser.SOME_TOK) | (1 << ForgeParser.ONE_TOK) | (1 << ForgeParser.TWO_TOK) | (1 << ForgeParser.SET_TOK))) !== 0) || _la === ForgeParser.NO_TOK)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 777;
				this.expr8(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr8(): Expr8Context;
	public expr8(_p: number): Expr8Context;
	// @RuleVersion(0)
	public expr8(_p?: number): Expr8Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr8Context = new Expr8Context(this._ctx, _parentState);
		let _prevctx: Expr8Context = _localctx;
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, ForgeParser.RULE_expr8, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 781;
			this.expr9();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 788;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr8Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr8);
					this.state = 783;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 784;
					_la = this._input.LA(1);
					if (!(_la === ForgeParser.PLUS_TOK || _la === ForgeParser.MINUS_TOK)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 785;
					this.expr10(0);
					}
					}
				}
				this.state = 790;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr9(): Expr9Context {
		let _localctx: Expr9Context = new Expr9Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, ForgeParser.RULE_expr9);
		try {
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
			case ForgeParser.LEFT_PAREN_TOK:
			case ForgeParser.NONE_TOK:
			case ForgeParser.UNIV_TOK:
			case ForgeParser.IDEN_TOK:
			case ForgeParser.MINUS_TOK:
			case ForgeParser.TILDE_TOK:
			case ForgeParser.EXP_TOK:
			case ForgeParser.STAR_TOK:
			case ForgeParser.AT_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SEXPR_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.NUM_CONST_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 791;
				this.expr10(0);
				}
				break;
			case ForgeParser.CARD_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 792;
				this.match(ForgeParser.CARD_TOK);
				this.state = 793;
				this.expr9();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr10(): Expr10Context;
	public expr10(_p: number): Expr10Context;
	// @RuleVersion(0)
	public expr10(_p?: number): Expr10Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr10Context = new Expr10Context(this._ctx, _parentState);
		let _prevctx: Expr10Context = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, ForgeParser.RULE_expr10, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 797;
			this.expr11(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr10Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr10);
					this.state = 799;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 800;
					this.match(ForgeParser.PPLUS_TOK);
					this.state = 801;
					this.expr11(0);
					}
					}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr11(): Expr11Context;
	public expr11(_p: number): Expr11Context;
	// @RuleVersion(0)
	public expr11(_p?: number): Expr11Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr11Context = new Expr11Context(this._ctx, _parentState);
		let _prevctx: Expr11Context = _localctx;
		let _startState: number = 118;
		this.enterRecursionRule(_localctx, 118, ForgeParser.RULE_expr11, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 808;
			this.expr12(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr11Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr11);
					this.state = 810;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 811;
					this.match(ForgeParser.AMP_TOK);
					this.state = 812;
					this.expr12(0);
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr12(): Expr12Context;
	public expr12(_p: number): Expr12Context;
	// @RuleVersion(0)
	public expr12(_p?: number): Expr12Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr12Context = new Expr12Context(this._ctx, _parentState);
		let _prevctx: Expr12Context = _localctx;
		let _startState: number = 120;
		this.enterRecursionRule(_localctx, 120, ForgeParser.RULE_expr12, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 819;
			this.expr13(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 827;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr12Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr12);
					this.state = 821;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 822;
					this.arrowOp();
					this.state = 823;
					this.expr13(0);
					}
					}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr13(): Expr13Context;
	public expr13(_p: number): Expr13Context;
	// @RuleVersion(0)
	public expr13(_p?: number): Expr13Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr13Context = new Expr13Context(this._ctx, _parentState);
		let _prevctx: Expr13Context = _localctx;
		let _startState: number = 122;
		this.enterRecursionRule(_localctx, 122, ForgeParser.RULE_expr13, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 831;
			this.expr14(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 838;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr13Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr13);
					this.state = 833;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 834;
					_la = this._input.LA(1);
					if (!(_la === ForgeParser.SUBT_TOK || _la === ForgeParser.SUPT_TOK)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 835;
					this.expr14(0);
					}
					}
				}
				this.state = 840;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr14(): Expr14Context;
	public expr14(_p: number): Expr14Context;
	// @RuleVersion(0)
	public expr14(_p?: number): Expr14Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr14Context = new Expr14Context(this._ctx, _parentState);
		let _prevctx: Expr14Context = _localctx;
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, ForgeParser.RULE_expr14, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 842;
			this.expr15(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 851;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr14Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr14);
					this.state = 844;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 845;
					this.match(ForgeParser.LEFT_SQUARE_TOK);
					this.state = 846;
					this.exprList();
					this.state = 847;
					this.match(ForgeParser.RIGHT_SQUARE_TOK);
					}
					}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr15(): Expr15Context;
	public expr15(_p: number): Expr15Context;
	// @RuleVersion(0)
	public expr15(_p?: number): Expr15Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr15Context = new Expr15Context(this._ctx, _parentState);
		let _prevctx: Expr15Context = _localctx;
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, ForgeParser.RULE_expr15, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 855;
				this.expr16(0);
				}
				break;

			case 2:
				{
				this.state = 856;
				this.name();
				this.state = 857;
				this.match(ForgeParser.LEFT_SQUARE_TOK);
				this.state = 858;
				this.exprList();
				this.state = 859;
				this.match(ForgeParser.RIGHT_SQUARE_TOK);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 868;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr15Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr15);
					this.state = 863;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 864;
					this.match(ForgeParser.DOT_TOK);
					this.state = 865;
					this.expr16(0);
					}
					}
				}
				this.state = 870;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expr16(): Expr16Context;
	public expr16(_p: number): Expr16Context;
	// @RuleVersion(0)
	public expr16(_p?: number): Expr16Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr16Context = new Expr16Context(this._ctx, _parentState);
		let _prevctx: Expr16Context = _localctx;
		let _startState: number = 128;
		this.enterRecursionRule(_localctx, 128, ForgeParser.RULE_expr16, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 872;
			this.expr17();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 878;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr16Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_expr16);
					this.state = 874;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 875;
					this.match(ForgeParser.PRIME_TOK);
					}
					}
				}
				this.state = 880;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr17(): Expr17Context {
		let _localctx: Expr17Context = new Expr17Context(this._ctx, this.state);
		this.enterRule(_localctx, 130, ForgeParser.RULE_expr17);
		let _la: number;
		try {
			this.state = 884;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
			case ForgeParser.LEFT_PAREN_TOK:
			case ForgeParser.NONE_TOK:
			case ForgeParser.UNIV_TOK:
			case ForgeParser.IDEN_TOK:
			case ForgeParser.MINUS_TOK:
			case ForgeParser.AT_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SEXPR_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.NUM_CONST_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.expr18();
				}
				break;
			case ForgeParser.TILDE_TOK:
			case ForgeParser.EXP_TOK:
			case ForgeParser.STAR_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 882;
				_la = this._input.LA(1);
				if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (ForgeParser.TILDE_TOK - 80)) | (1 << (ForgeParser.EXP_TOK - 80)) | (1 << (ForgeParser.STAR_TOK - 80)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 883;
				this.expr17();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr18(): Expr18Context {
		let _localctx: Expr18Context = new Expr18Context(this._ctx, this.state);
		this.enterRule(_localctx, 132, ForgeParser.RULE_expr18);
		try {
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 886;
				this.const();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 887;
				this.qualName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 888;
				this.match(ForgeParser.AT_TOK);
				this.state = 889;
				this.name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 890;
				this.match(ForgeParser.BACKQUOTE_TOK);
				this.state = 891;
				this.name();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 892;
				this.match(ForgeParser.THIS_TOK);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 893;
				this.match(ForgeParser.LEFT_CURLY_TOK);
				this.state = 894;
				this.quantDeclList();
				this.state = 895;
				this.blockOrBar();
				this.state = 896;
				this.match(ForgeParser.RIGHT_CURLY_TOK);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 898;
				this.match(ForgeParser.LEFT_PAREN_TOK);
				this.state = 899;
				this.expr();
				this.state = 900;
				this.match(ForgeParser.RIGHT_PAREN_TOK);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 902;
				this.block();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 903;
				this.sexpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowExpr(): ArrowExprContext {
		let _localctx: ArrowExprContext = new ArrowExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ForgeParser.RULE_arrowExpr);
		try {
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 906;
				this.qualName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 907;
				this.qualName();
				this.state = 908;
				this.match(ForgeParser.ARROW_TOK);
				this.state = 909;
				this.arrowExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sexprDecl(): SexprDeclContext {
		let _localctx: SexprDeclContext = new SexprDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ForgeParser.RULE_sexprDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.sexpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sexpr(): SexprContext {
		let _localctx: SexprContext = new SexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ForgeParser.RULE_sexpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.match(ForgeParser.SEXPR_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instDecl(): InstDeclContext {
		let _localctx: InstDeclContext = new InstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ForgeParser.RULE_instDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(ForgeParser.INST_TOK);
			this.state = 918;
			this.name();
			this.state = 919;
			this.bounds();
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ForgeParser.FOR_TOK) {
				{
				this.state = 920;
				this.scope();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalRelDecl(): EvalRelDeclContext {
		let _localctx: EvalRelDeclContext = new EvalRelDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ForgeParser.RULE_evalRelDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.arrowDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalDecl(): EvalDeclContext {
		let _localctx: EvalDeclContext = new EvalDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ForgeParser.RULE_evalDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			this.match(ForgeParser.EVAL_TOK);
			this.state = 926;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exampleDecl(): ExampleDeclContext {
		let _localctx: ExampleDeclContext = new ExampleDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ForgeParser.RULE_exampleDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			this.match(ForgeParser.EXAMPLE_TOK);
			this.state = 929;
			this.name();
			this.state = 930;
			this.match(ForgeParser.IS_TOK);
			this.state = 931;
			this.expr();
			this.state = 932;
			this.match(ForgeParser.FOR_TOK);
			this.state = 933;
			this.bounds();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDecl(): QueryDeclContext {
		let _localctx: QueryDeclContext = new QueryDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ForgeParser.RULE_queryDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.name();
			this.state = 936;
			this.match(ForgeParser.COLON_TOK);
			this.state = 937;
			this.arrowExpr();
			this.state = 938;
			this.match(ForgeParser.EQ_TOK);
			this.state = 939;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberList(): NumberListContext {
		let _localctx: NumberListContext = new NumberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ForgeParser.RULE_numberList);
		try {
			this.state = 946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 941;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.number();
				this.state = 943;
				this.match(ForgeParser.COMMA_TOK);
				this.state = 944;
				this.numberList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ForgeParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.match(ForgeParser.NUM_CONST_TOK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bounds(): BoundsContext {
		let _localctx: BoundsContext = new BoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ForgeParser.RULE_bounds);
		let _la: number;
		try {
			this.state = 962;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.LEFT_CURLY_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 950;
				this.match(ForgeParser.LEFT_CURLY_TOK);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ForgeParser.MINUS_TOK || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (ForgeParser.CARD_TOK - 74)) | (1 << (ForgeParser.BACKQUOTE_TOK - 74)) | (1 << (ForgeParser.THIS_TOK - 74)) | (1 << (ForgeParser.NO_TOK - 74)) | (1 << (ForgeParser.SUM_TOK - 74)) | (1 << (ForgeParser.INT_TOK - 74)) | (1 << (ForgeParser.NUM_CONST_TOK - 74)) | (1 << (ForgeParser.IDENTIFIER_TOK - 74)))) !== 0)) {
					{
					{
					this.state = 951;
					this.bound();
					}
					}
					this.state = 956;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 957;
				this.match(ForgeParser.RIGHT_CURLY_TOK);
				}
				break;
			case ForgeParser.EXACTLY_TOK:
			case ForgeParser.THIS_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ForgeParser.EXACTLY_TOK) {
					{
					this.state = 958;
					this.match(ForgeParser.EXACTLY_TOK);
					}
				}

				this.state = 961;
				this.qualName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomNameOrNumber(): AtomNameOrNumberContext {
		let _localctx: AtomNameOrNumberContext = new AtomNameOrNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ForgeParser.RULE_atomNameOrNumber);
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.BACKQUOTE_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 964;
				this.match(ForgeParser.BACKQUOTE_TOK);
				this.state = 965;
				this.name();
				}
				break;
			case ForgeParser.NUM_CONST_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 966;
				this.number();
				}
				break;
			case ForgeParser.MINUS_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 967;
				this.match(ForgeParser.MINUS_TOK);
				this.state = 968;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bound(): BoundContext {
		let _localctx: BoundContext = new BoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ForgeParser.RULE_bound);
		try {
			this.state = 978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 971;
				this.boundLHS();
				this.state = 972;
				this.compareOp();
				this.state = 973;
				this.bindRHSUnion(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 975;
				this.match(ForgeParser.NO_TOK);
				this.state = 976;
				this.boundLHS();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 977;
				this.qualName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boundLHS(): BoundLHSContext {
		let _localctx: BoundLHSContext = new BoundLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ForgeParser.RULE_boundLHS);
		let _la: number;
		try {
			this.state = 990;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.CARD_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 980;
				this.match(ForgeParser.CARD_TOK);
				this.state = 981;
				this.qualName();
				}
				break;
			case ForgeParser.THIS_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.qualName();
				}
				break;
			case ForgeParser.MINUS_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.NUM_CONST_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.atomNameOrNumber();
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 984;
					this.match(ForgeParser.DOT_TOK);
					this.state = 985;
					this.qualName();
					}
					}
					this.state = 988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ForgeParser.DOT_TOK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public bindRHSUnion(): BindRHSUnionContext;
	public bindRHSUnion(_p: number): BindRHSUnionContext;
	// @RuleVersion(0)
	public bindRHSUnion(_p?: number): BindRHSUnionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BindRHSUnionContext = new BindRHSUnionContext(this._ctx, _parentState);
		let _prevctx: BindRHSUnionContext = _localctx;
		let _startState: number = 162;
		this.enterRecursionRule(_localctx, 162, ForgeParser.RULE_bindRHSUnion, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 993;
				this.bindRHSProduct(0);
				}
				break;

			case 2:
				{
				this.state = 994;
				this.match(ForgeParser.LEFT_PAREN_TOK);
				this.state = 995;
				this.bindRHSUnion(0);
				this.state = 996;
				this.match(ForgeParser.RIGHT_PAREN_TOK);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BindRHSUnionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_bindRHSUnion);
					this.state = 1000;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1001;
					this.match(ForgeParser.PLUS_TOK);
					this.state = 1002;
					this.bindRHSProduct(0);
					}
					}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public bindRHSProduct(): BindRHSProductContext;
	public bindRHSProduct(_p: number): BindRHSProductContext;
	// @RuleVersion(0)
	public bindRHSProduct(_p?: number): BindRHSProductContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BindRHSProductContext = new BindRHSProductContext(this._ctx, _parentState);
		let _prevctx: BindRHSProductContext = _localctx;
		let _startState: number = 164;
		this.enterRecursionRule(_localctx, 164, ForgeParser.RULE_bindRHSProduct, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1009;
				this.match(ForgeParser.LEFT_PAREN_TOK);
				this.state = 1010;
				this.bindRHSProduct(0);
				this.state = 1011;
				this.match(ForgeParser.RIGHT_PAREN_TOK);
				}
				break;

			case 2:
				{
				this.state = 1013;
				this.bindRHSProductBase();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1021;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BindRHSProductContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ForgeParser.RULE_bindRHSProduct);
					this.state = 1016;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1017;
					_la = this._input.LA(1);
					if (!(_la === ForgeParser.ARROW_TOK || _la === ForgeParser.COMMA_TOK)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1018;
					this.bindRHSProductBase();
					}
					}
				}
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindRHSProductBase(): BindRHSProductBaseContext {
		let _localctx: BindRHSProductBaseContext = new BindRHSProductBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ForgeParser.RULE_bindRHSProductBase);
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ForgeParser.MINUS_TOK:
			case ForgeParser.BACKQUOTE_TOK:
			case ForgeParser.NUM_CONST_TOK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1024;
				this.atomNameOrNumber();
				}
				break;
			case ForgeParser.THIS_TOK:
			case ForgeParser.SUM_TOK:
			case ForgeParser.INT_TOK:
			case ForgeParser.IDENTIFIER_TOK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1025;
				this.qualName();
				}
				break;
			case ForgeParser.LEFT_PAREN_TOK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1026;
				this.match(ForgeParser.LEFT_PAREN_TOK);
				this.state = 1027;
				this.bindRHSUnion(0);
				this.state = 1028;
				this.match(ForgeParser.RIGHT_PAREN_TOK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 47:
			return this.expr1_sempred(_localctx as Expr1Context, predIndex);

		case 48:
			return this.expr1_5_sempred(_localctx as Expr1_5Context, predIndex);

		case 49:
			return this.expr2_sempred(_localctx as Expr2Context, predIndex);

		case 51:
			return this.expr4_sempred(_localctx as Expr4Context, predIndex);

		case 54:
			return this.expr6_sempred(_localctx as Expr6Context, predIndex);

		case 56:
			return this.expr8_sempred(_localctx as Expr8Context, predIndex);

		case 58:
			return this.expr10_sempred(_localctx as Expr10Context, predIndex);

		case 59:
			return this.expr11_sempred(_localctx as Expr11Context, predIndex);

		case 60:
			return this.expr12_sempred(_localctx as Expr12Context, predIndex);

		case 61:
			return this.expr13_sempred(_localctx as Expr13Context, predIndex);

		case 62:
			return this.expr14_sempred(_localctx as Expr14Context, predIndex);

		case 63:
			return this.expr15_sempred(_localctx as Expr15Context, predIndex);

		case 64:
			return this.expr16_sempred(_localctx as Expr16Context, predIndex);

		case 81:
			return this.bindRHSUnion_sempred(_localctx as BindRHSUnionContext, predIndex);

		case 82:
			return this.bindRHSProduct_sempred(_localctx as BindRHSProductContext, predIndex);
		}
		return true;
	}
	private expr1_sempred(_localctx: Expr1Context, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr1_5_sempred(_localctx: Expr1_5Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr2_sempred(_localctx: Expr2Context, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr4_sempred(_localctx: Expr4Context, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr6_sempred(_localctx: Expr6Context, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr8_sempred(_localctx: Expr8Context, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr10_sempred(_localctx: Expr10Context, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr11_sempred(_localctx: Expr11Context, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr12_sempred(_localctx: Expr12Context, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr13_sempred(_localctx: Expr13Context, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr14_sempred(_localctx: Expr14Context, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expr15_sempred(_localctx: Expr15Context, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr16_sempred(_localctx: Expr16Context, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private bindRHSUnion_sempred(_localctx: BindRHSUnionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private bindRHSProduct_sempred(_localctx: BindRHSProductContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03o\u040B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x07\x02\xAC" +
		"\n\x02\f\x02\x0E\x02\xAF\v\x02\x03\x02\x07\x02\xB2\n\x02\f\x02\x0E\x02" +
		"\xB5\v\x02\x03\x02\x07\x02\xB8\n\x02\f\x02\x0E\x02\xBB\v\x02\x05\x02\xBD" +
		"\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC5\n\x03" +
		"\x03\x03\x03\x03\x05\x03\xC9\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\xCF\n\x03\x05\x03\xD1\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\xE4\n\x04\x03\x05\x05\x05\xE7\n\x05\x03" +
		"\x05\x05\x05\xEA\n\x05\x03\x05\x05\x05\xED\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\xF2\n\x05\x03\x05\x03\x05\x05\x05\xF6\n\x05\x03\x05\x03\x05\x05" +
		"\x05\xFA\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\u0102\n\x06\f\x06\x0E\x06\u0105\v\x06\x05\x06\u0107\n\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x05\n\u0110\n\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0115\n\n\x03\n\x03\n\x03\v\x05\v\u011A\n\v\x03\v\x03\v\x03\v\x05\v" +
		"\u011F\n\v\x03\v\x03\v\x03\f\x05\f\u0124\n\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u012F\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0134\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0138\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0140\n\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0144\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0148\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u0151\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u0156\n\x10\x03\x10\x05\x10\u0159\n\x10\x03\x11\x03" +
		"\x11\x05\x11\u015D\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0164\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0169\n\x12\x03\x12\x05\x12" +
		"\u016C\n\x12\x03\x12\x03\x12\x05\x12\u0170\n\x12\x03\x13\x03\x13\x03\x13" +
		"\x05\x13\u0175\n\x13\x03\x13\x03\x13\x05\x13\u0179\n\x13\x03\x13\x05\x13" +
		"\u017C\n\x13\x03\x13\x03\x13\x05\x13\u0180\n\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x05\x14\u0186\n\x14\x03\x14\x03\x14\x05\x14\u018A\n\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x07\x15\u0190\n\x15\f\x15\x0E\x15\u0193\v\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u019B\n\x16\x03" +
		"\x16\x03\x16\x05\x16\u019F\n\x16\x03\x17\x05\x17\u01A2\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01AB\n\x18\x03\x18" +
		"\x05\x18\u01AE\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u01B3\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01BA\n\x19\x03\x19\x03\x19\x05" +
		"\x19\u01BE\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01C3\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u01C8\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01D5\n\x1A\x03" +
		"\x1A\x05\x1A\u01D8\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01DC\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u01E1\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u01EA\n\x1B\x03\x1B\x03\x1B\x05\x1B\u01EE\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01F3\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01FC\n\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u0200\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0208" +
		"\n\x1D\f\x1D\x0E\x1D\u020B\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0215\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0219" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u021E\n\x1F\x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x03\"\x03\"\x07\"\u0228\n\"\f\"\x0E\"\u022B\v\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x05#\u0232\n#\x03$\x03$\x03$\x03$\x05$\u0238\n$\x03" +
		"%\x03%\x05%\u023C\n%\x03%\x03%\x03%\x07%\u0241\n%\f%\x0E%\u0244\v%\x03" +
		"%\x03%\x03%\x05%\u0249\n%\x03&\x03&\x03&\x03&\x03&\x05&\u0250\n&\x03&" +
		"\x05&\u0253\n&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(\u025C\n(\x03" +
		")\x03)\x03)\x03)\x03)\x05)\u0263\n)\x03*\x03*\x03*\x03*\x03*\x05*\u026A" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x05+\u0271\n+\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u0278\n,\x03-\x03-\x03-\x03-\x03-\x05-\u027F\n-\x03.\x03.\x03.\x03." +
		"\x03.\x05.\u0286\n.\x03/\x03/\x03/\x03/\x03/\x05/\u028D\n/\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x050\u029A\n0\x030\x030\x03" +
		"0\x050\u029F\n0\x031\x031\x031\x031\x031\x031\x071\u02A7\n1\f1\x0E1\u02AA" +
		"\v1\x032\x032\x032\x032\x032\x032\x072\u02B2\n2\f2\x0E2\u02B5\v2\x033" +
		"\x033\x033\x033\x033\x033\x073\u02BD\n3\f3\x0E3\u02C0\v3\x034\x034\x03" +
		"4\x034\x034\x034\x054\u02C8\n4\x054\u02CA\n4\x035\x035\x035\x035\x035" +
		"\x035\x075\u02D2\n5\f5\x0E5\u02D5\v5\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x056\u02E8\n6\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x057\u02F9\n7\x038\x038\x038\x038\x038\x058\u0300\n8\x038\x038\x038" +
		"\x078\u0305\n8\f8\x0E8\u0308\v8\x039\x039\x039\x059\u030D\n9\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x07:\u0315\n:\f:\x0E:\u0318\v:\x03;\x03;\x03;\x05" +
		";\u031D\n;\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0325\n<\f<\x0E<\u0328\v" +
		"<\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u0330\n=\f=\x0E=\u0333\v=\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x07>\u033C\n>\f>\x0E>\u033F\v>\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x07?\u0347\n?\f?\x0E?\u034A\v?\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x07@\u0354\n@\f@\x0E@\u0357\v@\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x05A\u0360\nA\x03A\x03A\x03A\x07A\u0365\nA\fA\x0EA\u0368\v" +
		"A\x03B\x03B\x03B\x03B\x03B\x07B\u036F\nB\fB\x0EB\u0372\vB\x03C\x03C\x03" +
		"C\x05C\u0377\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u038B\nD\x03E\x03E\x03E\x03" +
		"E\x03E\x05E\u0392\nE\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03H\x05H\u039C" +
		"\nH\x03I\x03I\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x05M\u03B5\nM\x03N\x03" +
		"N\x03O\x03O\x07O\u03BB\nO\fO\x0EO\u03BE\vO\x03O\x03O\x05O\u03C2\nO\x03" +
		"O\x05O\u03C5\nO\x03P\x03P\x03P\x03P\x03P\x05P\u03CC\nP\x03Q\x03Q\x03Q" +
		"\x03Q\x03Q\x03Q\x03Q\x05Q\u03D5\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x06R" +
		"\u03DD\nR\rR\x0ER\u03DE\x05R\u03E1\nR\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
		"S\u03E9\nS\x03S\x03S\x03S\x07S\u03EE\nS\fS\x0ES\u03F1\vS\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x05T\u03F9\nT\x03T\x03T\x03T\x07T\u03FE\nT\fT\x0ET\u0401" +
		"\vT\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u0409\nU\x03U\x02\x02\x11`bdhn" +
		"rvxz|~\x80\x82\xA4\xA6V\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x10\x03\x02" +
		"\x10\x13\x04\x02\x10\x10\x12\x16\x05\x02\x10\x10\x12\x12\x14\x16\x03\x02" +
		" !\x03\x02*.\x04\x02*+--\x03\x0245\x03\x0267\x05\x02\x0E\x0E))]b\x04\x02" +
		"\x10\x14cc\x04\x02\x0F\x0F((\x03\x02OP\x03\x02RT\x04\x02\\\\gg\x02\u0462" +
		"\x02\xBC\x03\x02\x02\x02\x04\xD0\x03\x02\x02\x02\x06\xE3\x03\x02\x02\x02" +
		"\b\xE6\x03\x02\x02\x02\n\u0106\x03\x02\x02\x02\f\u0108\x03\x02\x02\x02" +
		"\x0E\u010A\x03\x02\x02\x02\x10\u010C\x03\x02\x02\x02\x12\u010F\x03\x02" +
		"\x02\x02\x14\u0119\x03\x02\x02\x02\x16\u0123\x03\x02\x02\x02\x18\u012A" +
		"\x03\x02\x02\x02\x1A\u012C\x03\x02\x02\x02\x1C\u013B\x03\x02\x02\x02\x1E" +
		"\u0158\x03\x02\x02\x02 \u015A\x03\x02\x02\x02\"\u0163\x03\x02\x02\x02" +
		"$\u0174\x03\x02\x02\x02&\u0185\x03\x02\x02\x02(\u018D\x03\x02\x02\x02" +
		"*\u019E\x03\x02\x02\x02,\u01A1\x03\x02\x02\x02.\u01AD\x03\x02\x02\x02" +
		"0\u01B2\x03\x02\x02\x022\u01C2\x03\x02\x02\x024\u01E0\x03\x02\x02\x02" +
		"6\u01F2\x03\x02\x02\x028\u0201\x03\x02\x02\x02:\u0214\x03\x02\x02\x02" +
		"<\u0218\x03\x02\x02\x02>\u021F\x03\x02\x02\x02@\u0221\x03\x02\x02\x02" +
		"B\u0225\x03\x02\x02\x02D\u0231\x03\x02\x02\x02F\u0237\x03\x02\x02\x02" +
		"H\u0248\x03\x02\x02\x02J\u024A\x03\x02\x02\x02L\u0254\x03\x02\x02\x02" +
		"N\u025B\x03\x02\x02\x02P\u0262\x03\x02\x02\x02R\u0269\x03\x02\x02\x02" +
		"T\u0270\x03\x02\x02\x02V\u0277\x03\x02\x02\x02X\u027E\x03\x02\x02\x02" +
		"Z\u0285\x03\x02\x02\x02\\\u028C\x03\x02\x02\x02^\u029E\x03\x02\x02\x02" +
		"`\u02A0\x03\x02\x02\x02b\u02AB\x03\x02\x02\x02d\u02B6\x03\x02\x02\x02" +
		"f\u02C9\x03\x02\x02\x02h\u02CB\x03\x02\x02\x02j\u02E7\x03\x02\x02\x02" +
		"l\u02F8\x03\x02\x02\x02n\u02FA\x03\x02\x02\x02p\u030C\x03\x02\x02\x02" +
		"r\u030E\x03\x02\x02\x02t\u031C\x03\x02\x02\x02v\u031E\x03\x02\x02\x02" +
		"x\u0329\x03\x02\x02\x02z\u0334\x03\x02\x02\x02|\u0340\x03\x02\x02\x02" +
		"~\u034B\x03\x02\x02\x02\x80\u035F\x03\x02\x02\x02\x82\u0369\x03\x02\x02" +
		"\x02\x84\u0376\x03\x02\x02\x02\x86\u038A\x03\x02\x02\x02\x88\u0391\x03" +
		"\x02\x02\x02\x8A\u0393\x03\x02\x02\x02\x8C\u0395\x03\x02\x02\x02\x8E\u0397" +
		"\x03\x02\x02\x02\x90\u039D\x03\x02\x02\x02\x92\u039F\x03\x02\x02\x02\x94" +
		"\u03A2\x03\x02\x02\x02\x96\u03A9\x03\x02\x02\x02\x98\u03B4\x03\x02\x02" +
		"\x02\x9A\u03B6\x03\x02\x02\x02\x9C\u03C4\x03\x02\x02\x02\x9E\u03CB\x03" +
		"\x02\x02\x02\xA0\u03D4\x03\x02\x02\x02\xA2\u03E0\x03\x02\x02\x02\xA4\u03E8" +
		"\x03\x02\x02\x02\xA6\u03F8\x03\x02\x02\x02\xA8\u0408\x03\x02\x02\x02\xAA" +
		"\xAC\x05\x04\x03\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB3\x03\x02\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xB0\xB2\x05\x06\x04\x02\xB1\xB0\x03\x02\x02\x02\xB2" +
		"\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4" +
		"\xBD\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB8\x05\x92J\x02\xB7" +
		"\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9" +
		"\xBA\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC" +
		"\xAD\x03\x02\x02\x02\xBC\xB9\x03\x02\x02\x02\xBD\x03\x03\x02\x02\x02\xBE" +
		"\xBF\x07\x03\x02\x02\xBF\xC4\x05H%\x02\xC0\xC1\x07\x04\x02\x02\xC1\xC2" +
		"\x05P)\x02\xC2\xC3\x07\x05\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC0\x03" +
		"\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC7\x07" +
		"\x06\x02\x02\xC7\xC9\x05L\'\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xD1\x03\x02\x02\x02\xCA\xCB\x07\x03\x02\x02\xCB\xCE\x07\x07" +
		"\x02\x02\xCC\xCD\x07\x06\x02\x02\xCD\xCF\x05L\'\x02\xCE\xCC\x03\x02\x02" +
		"\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xBE\x03\x02\x02" +
		"\x02\xD0\xCA\x03\x02\x02\x02\xD1\x05\x03\x02\x02\x02\xD2\xE4\x05\b\x05" +
		"\x02\xD3\xE4\x05\x1A\x0E\x02\xD4\xE4\x05\x1C\x0F\x02\xD5\xE4\x05 \x11" +
		"\x02\xD6\xE4\x05\"\x12\x02\xD7\xE4\x05&\x14\x02\xD8\xE4\x05\x8AF\x02\xD9" +
		"\xE4\x05\x96L\x02\xDA\xE4\x05\x90I\x02\xDB\xE4\x05J&\x02\xDC\xE4\x05\x8E" +
		"H\x02\xDD\xE4\x05\x94K\x02\xDE\xE4\x054\x1B\x02\xDF\xE4\x052\x1A\x02\xE0" +
		"\xE4\x050\x19\x02\xE1\xE4\x056\x1C\x02\xE2\xE4\x058\x1D\x02\xE3\xD2\x03" +
		"\x02\x02\x02\xE3\xD3\x03\x02\x02\x02\xE3\xD4\x03\x02\x02\x02\xE3\xD5\x03" +
		"\x02\x02\x02\xE3\xD6\x03\x02\x02\x02\xE3\xD7\x03\x02\x02\x02\xE3\xD8\x03" +
		"\x02\x02\x02\xE3\xD9\x03\x02\x02\x02\xE3\xDA\x03\x02\x02\x02\xE3\xDB\x03" +
		"\x02\x02\x02\xE3\xDC\x03\x02\x02\x02\xE3\xDD\x03\x02\x02\x02\xE3\xDE\x03" +
		"\x02\x02\x02\xE3\xDF\x03\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE3\xE1\x03" +
		"\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\x07\x03\x02\x02\x02\xE5\xE7\x07" +
		"\b\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03" +
		"\x02\x02\x02\xE8\xEA\x07\t\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03" +
		"\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xED\x05\f\x07\x02\xEC\xEB\x03" +
		"\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x07" +
		"\n\x02\x02\xEF\xF1\x05N(\x02\xF0\xF2\x05\n\x06\x02\xF1\xF0\x03\x02\x02" +
		"\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x07\v\x02" +
		"\x02\xF4\xF6\x05V,\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x07\f\x02\x02\xF8\xFA\x05B\"\x02\xF9" +
		"\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\t\x03\x02\x02\x02\xFB" +
		"\xFC\x07\r\x02\x02\xFC\u0107\x05H%\x02\xFD\xFE\x07\x0E\x02\x02\xFE\u0103" +
		"\x05H%\x02\xFF\u0100\x07\x0F\x02\x02\u0100\u0102\x05H%\x02\u0101\xFF\x03" +
		"\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02" +
		"\x02\x02\u0106\xFB\x03\x02\x02\x02\u0106\xFD\x03\x02\x02\x02\u0107\v\x03" +
		"\x02\x02\x02\u0108\u0109\t\x02\x02\x02\u0109\r\x03\x02\x02\x02\u010A\u010B" +
		"\t\x03\x02\x02\u010B\x0F\x03\x02\x02\x02\u010C\u010D\t\x04\x02\x02\u010D" +
		"\x11\x03\x02\x02\x02\u010E\u0110\x07\x17\x02\x02\u010F\u010E\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112" +
		"\x05N(\x02\u0112\u0114\x07\x18\x02\x02\u0113\u0115\x05\x10\t\x02\u0114" +
		"\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u0117\x05^0\x02\u0117\x13\x03\x02\x02\x02\u0118\u011A\x07" +
		"\x17\x02\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011C\x05N(\x02\u011C\u011E\x07\x18\x02\x02" +
		"\u011D\u011F\x07\x14\x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x05^0\x02\u0121\x15" +
		"\x03\x02\x02\x02\u0122\u0124\x07\b\x02\x02\u0123\u0122\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x05" +
		"N(\x02\u0126\u0127\x07\x18\x02\x02\u0127\u0128\x05\x0E\b\x02\u0128\u0129" +
		"\x05\x88E\x02\u0129\x17\x03\x02\x02\x02\u012A\u012B\x07\x19\x02\x02\u012B" +
		"\x19\x03\x02\x02\x02\u012C\u012E\x07\x1A\x02\x02\u012D\u012F\x05\x18\r" +
		"\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0133" +
		"\x03\x02\x02\x02\u0130\u0131\x05H%\x02\u0131\u0132\x07\x1B\x02\x02\u0132" +
		"\u0134\x03\x02\x02\x02\u0133\u0130\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137\x05L\'\x02\u0136\u0138" +
		"\x05\x1E\x10\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x05B\"\x02\u013A\x1B\x03\x02" +
		"\x02\x02\u013B\u013F\x07\x1C\x02\x02\u013C\u013D\x05H%\x02\u013D\u013E" +
		"\x07\x1B\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F\u013C\x03\x02\x02\x02" +
		"\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143\x05" +
		"L\'\x02\u0142\u0144\x05\x1E\x10\x02\u0143\u0142\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x07\x18" +
		"\x02\x02\u0146\u0148\x05\x10\t\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x05^0\x02\u014A" +
		"\u014B\x07\v\x02\x02\u014B\u014C\x05^0\x02\u014C\u014D\x07\f\x02\x02\u014D" +
		"\x1D\x03\x02\x02\x02\u014E\u0150\x07\x1D\x02\x02\u014F\u0151\x05R*\x02" +
		"\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03" +
		"\x02\x02\x02\u0152\u0159\x07\x1E\x02\x02\u0153\u0155\x07\x04\x02\x02\u0154" +
		"\u0156\x05R*\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
		"\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x07\x05\x02\x02\u0158\u014E\x03" +
		"\x02\x02\x02\u0158\u0153\x03\x02\x02\x02\u0159\x1F\x03\x02\x02\x02\u015A" +
		"\u015C\x07\x1F\x02\x02\u015B\u015D\x05L\'\x02\u015C\u015B\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F" +
		"\x05B\"\x02\u015F!\x03\x02\x02\x02\u0160\u0161\x05L\'\x02\u0161\u0162" +
		"\x07\x18\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0160\x03\x02\x02\x02" +
		"\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\t" +
		"\x05\x02\x02\u0166\u0169\x05H%\x02\u0167\u0169\x05B\"\x02\u0168\u0166" +
		"\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169\u016B\x03\x02\x02\x02\u016A\u016C\x05*\x16\x02\u016B\u016A\x03" +
		"\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D" +
		"\u016E\x07\"\x02\x02\u016E\u0170\x05\x9CO\x02\u016F\u016D\x03\x02\x02" +
		"\x02\u016F\u0170\x03\x02\x02\x02\u0170#\x03\x02\x02\x02\u0171\u0172\x05" +
		"L\'\x02\u0172\u0173\x07\x18\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174" +
		"\u0171\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0178\x03\x02" +
		"\x02\x02\u0176\u0179\x05H%\x02\u0177\u0179\x05B\"\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A" +
		"\u017C\x05*\x16\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02" +
		"\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017E\x07\"\x02\x02\u017E\u0180" +
		"\x05\x9CO\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x07)\x02\x02\u0182\u0183\t\x06" +
		"\x02\x02\u0183%\x03\x02\x02\x02\u0184\u0186\x07/\x02\x02\u0185\u0184\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187" +
		"\u0189\x070\x02\x02\u0188\u018A\x05L\'\x02\u0189\u0188\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x05" +
		"(\x15\x02\u018C\'\x03\x02\x02\x02\u018D\u0191\x07\v\x02\x02\u018E\u0190" +
		"\x05$\x13\x02\u018F\u018E\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02" +
		"\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03" +
		"\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x07\f\x02\x02\u0195" +
		")\x03\x02\x02\x02\u0196\u0197\x07\"\x02\x02\u0197\u019A\x05\x9AN\x02\u0198" +
		"\u0199\x07#\x02\x02\u0199\u019B\x05Z.\x02\u019A\u0198\x03\x02\x02\x02" +
		"\u019A\u019B\x03\x02\x02\x02\u019B\u019F\x03\x02\x02\x02\u019C\u019D\x07" +
		"\"\x02\x02\u019D\u019F\x05Z.\x02\u019E\u0196\x03\x02\x02\x02\u019E\u019C" +
		"\x03\x02\x02\x02\u019F+\x03\x02\x02\x02\u01A0\u01A2\x07$\x02\x02\u01A1" +
		"\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02" +
		"\x02\x02\u01A3\u01A4\x05\x9AN\x02\u01A4\u01A5\x05H%\x02\u01A5-\x03\x02" +
		"\x02\x02\u01A6\u01AE\x07%\x02\x02\u01A7\u01AE\x07&\x02\x02\u01A8\u01AE" +
		"\x07\'\x02\x02\u01A9\u01AB\x07(\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA" +
		"\u01AB\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x05\x9A" +
		"N\x02\u01AD\u01A6\x03\x02\x02\x02\u01AD\u01A7\x03\x02\x02\x02\u01AD\u01A8" +
		"\x03\x02\x02\x02\u01AD\u01AA\x03\x02\x02\x02\u01AE/\x03\x02\x02\x02\u01AF" +
		"\u01B0\x05L\'\x02\u01B0\u01B1\x07\x18\x02\x02\u01B1\u01B3\x03\x02\x02" +
		"\x02\u01B2\u01AF\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B5\x07\x1F\x02\x02\u01B5\u01B6";
	private static readonly _serializedATNSegment1: string =
		"\x05^0\x02\u01B6\u01B7\x07)\x02\x02\u01B7\u01B9\t\x07\x02\x02\u01B8\u01BA" +
		"\x05*\x16\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02" +
		"\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01BC\x07\"\x02\x02\u01BC\u01BE\x05" +
		"\x9CO\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
		"1\x03\x02\x02\x02\u01BF\u01C0\x05L\'\x02\u01C0\u01C1\x07\x18\x02\x02\u01C1" +
		"\u01C3\x03\x02\x02\x02\u01C2\u01BF\x03\x02\x02\x02\u01C2\u01C3\x03\x02" +
		"\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x07\x1F\x02\x02\u01C5" +
		"\u01C7\x073\x02\x02\u01C6\u01C8\x07\x17\x02\x02\u01C7\u01C6\x03\x02\x02" +
		"\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA" +
		"\x05T+\x02\u01CA\u01CB\x072\x02\x02\u01CB\u01CC\x05^0\x02\u01CC\u01CD" +
		"\x07)\x02\x02\u01CD\u01CE\t\b\x02\x02\u01CE\u01CF\x07\"\x02\x02\u01CF" +
		"\u01D4\x05L\'\x02\u01D0\u01D1\x07\x04\x02\x02\u01D1\u01D2\x05\\/\x02\u01D2" +
		"\u01D3\x07\x05\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D0\x03\x02" +
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x03\x02\x02\x02\u01D6" +
		"\u01D8\x05*\x16\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02" +
		"\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01DA\x07\"\x02\x02\u01DA\u01DC" +
		"\x05\x9CO\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02" +
		"\u01DC3\x03\x02\x02\x02\u01DD\u01DE\x05L\'\x02\u01DE\u01DF\x07\x18\x02" +
		"\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01DD\x03\x02\x02\x02\u01E0\u01E1" +
		"\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\x1F\x02\x02" +
		"\u01E3\u01E4\x05^0\x02\u01E4\u01E5\x07)\x02\x02\u01E5\u01E6\t\b\x02\x02" +
		"\u01E6\u01E7\x07\"\x02\x02\u01E7\u01E9\x05L\'\x02\u01E8\u01EA\x05*\x16" +
		"\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01ED" +
		"\x03\x02\x02\x02\u01EB\u01EC\x07\"\x02\x02\u01EC\u01EE\x05\x9CO\x02\u01ED" +
		"\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE5\x03\x02\x02" +
		"\x02\u01EF\u01F0\x05L\'\x02\u01F0\u01F1\x07\x18\x02\x02\u01F1\u01F3\x03" +
		"\x02\x02\x02\u01F2\u01EF\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
		"\u01F4\x03\x02\x02\x02\u01F4\u01F5\x07\x1F\x02\x02\u01F5\u01F6\x05^0\x02" +
		"\u01F6\u01F7\x07)\x02\x02\u01F7\u01F8\t\t\x02\x02\u01F8\u01F9\x078\x02" +
		"\x02\u01F9\u01FB\x05L\'\x02\u01FA\u01FC\x05*\x16\x02\u01FB\u01FA\x03\x02" +
		"\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD" +
		"\u01FE\x07\"\x02\x02\u01FE\u0200\x05\x9CO\x02\u01FF\u01FD\x03\x02\x02" +
		"\x02\u01FF\u0200\x03\x02\x02\x02\u02007\x03\x02\x02\x02\u0201\u0202\x07" +
		"/\x02\x02\u0202\u0203\x071\x02\x02\u0203\u0204\x07\"\x02\x02\u0204\u0205" +
		"\x05L\'\x02\u0205\u0209\x07\v\x02\x02\u0206\u0208\x05:\x1E\x02\u0207\u0206" +
		"\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02" +
		"\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u0209\x03" +
		"\x02\x02\x02\u020C\u020D\x07\f\x02\x02\u020D9\x03\x02\x02\x02\u020E\u0215" +
		"\x05\x94K\x02\u020F\u0215\x05&\x14\x02\u0210\u0215\x052\x1A\x02\u0211" +
		"\u0215\x054\x1B\x02\u0212\u0215\x050\x19\x02\u0213\u0215\x056\x1C\x02" +
		"\u0214\u020E\x03\x02\x02\x02\u0214\u020F\x03\x02\x02\x02\u0214\u0210\x03" +
		"\x02\x02\x02\u0214\u0211\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214" +
		"\u0213\x03\x02\x02\x02\u0215;\x03\x02\x02\x02\u0216\u0219\x05\f\x07\x02" +
		"\u0217\u0219\x07\x14\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"\u021D\x07\\\x02\x02\u021B\u021E\x05\f\x07\x02\u021C\u021E\x07\x14\x02" +
		"\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E" +
		"\x03\x02\x02\x02\u021E=\x03\x02\x02\x02\u021F\u0220\t\n\x02\x02\u0220" +
		"?\x03\x02\x02\x02\u0221\u0222\x05L\'\x02\u0222\u0223\x07]\x02\x02\u0223" +
		"\u0224\x05^0\x02\u0224A\x03\x02\x02\x02\u0225\u0229\x07\v\x02\x02\u0226" +
		"\u0228\x05^0\x02\u0227\u0226\x03\x02\x02\x02\u0228\u022B\x03\x02\x02\x02" +
		"\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022C\x03" +
		"\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022D\x07\f\x02\x02\u022D" +
		"C\x03\x02\x02\x02\u022E\u0232\x05B\"\x02\u022F\u0230\x072\x02\x02\u0230" +
		"\u0232\x05^0\x02\u0231\u022E\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02" +
		"\u0232E\x03\x02\x02\x02\u0233\u0238\x073\x02\x02\u0234\u0238\x07c\x02" +
		"\x02\u0235\u0238\x07d\x02\x02\u0236\u0238\x05\f\x07\x02\u0237\u0233\x03" +
		"\x02\x02\x02\u0237\u0234\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237" +
		"\u0236\x03\x02\x02\x02\u0238G\x03\x02\x02\x02\u0239\u023A\x07W\x02\x02" +
		"\u023A\u023C\x07h\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03" +
		"\x02\x02\x02\u023C\u0242\x03\x02\x02\x02\u023D\u023E\x05L\'\x02\u023E" +
		"\u023F\x07h\x02\x02\u023F\u0241\x03\x02\x02\x02\u0240\u023D\x03\x02\x02" +
		"\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243" +
		"\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02" +
		"\u0245\u0249\x05L\'\x02\u0246\u0249\x07e\x02\x02\u0247\u0249\x07d\x02" +
		"\x02\u0248\u023B\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0247" +
		"\x03\x02\x02\x02\u0249I\x03\x02\x02\x02\u024A\u024B\x07f\x02\x02\u024B" +
		"\u0252\x05H%\x02\u024C\u0253\x05H%\x02\u024D\u0253\x07\x07\x02\x02\u024E" +
		"\u0250\x07(\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02" +
		"\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0253\x05\x9AN\x02\u0252\u024C" +
		"\x03\x02\x02\x02\u0252\u024D\x03\x02\x02\x02\u0252\u024F\x03\x02\x02\x02" +
		"\u0253K\x03\x02\x02\x02\u0254\u0255\x07j\x02\x02\u0255M\x03\x02\x02\x02" +
		"\u0256\u025C\x05L\'\x02\u0257\u0258\x05L\'\x02\u0258\u0259\x07g\x02\x02" +
		"\u0259\u025A\x05N(\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0256\x03\x02" +
		"\x02\x02\u025B\u0257\x03\x02\x02\x02\u025CO\x03\x02\x02\x02\u025D\u0263" +
		"\x05H%\x02\u025E\u025F\x05H%\x02\u025F\u0260\x07g\x02\x02\u0260\u0261" +
		"\x05P)\x02\u0261\u0263\x03\x02\x02\x02\u0262\u025D\x03\x02\x02\x02\u0262" +
		"\u025E\x03\x02\x02\x02\u0263Q\x03\x02\x02\x02\u0264\u026A\x05\x12\n\x02" +
		"\u0265\u0266\x05\x12\n\x02\u0266\u0267\x07g\x02\x02\u0267\u0268\x05R*" +
		"\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0264\x03\x02\x02\x02\u0269\u0265" +
		"\x03\x02\x02\x02\u026AS\x03\x02\x02\x02\u026B\u0271\x05\x14\v\x02\u026C" +
		"\u026D\x05\x14\v\x02\u026D\u026E\x07g\x02\x02\u026E\u026F\x05T+\x02\u026F" +
		"\u0271\x03\x02\x02\x02\u0270\u026B\x03\x02\x02\x02\u0270\u026C\x03\x02" +
		"\x02\x02\u0271U\x03\x02\x02\x02\u0272\u0278\x05\x16\f\x02\u0273\u0274" +
		"\x05\x16\f\x02\u0274\u0275\x07g\x02\x02\u0275\u0276\x05V,\x02\u0276\u0278" +
		"\x03\x02\x02\x02\u0277\u0272\x03\x02\x02\x02\u0277\u0273\x03\x02\x02\x02" +
		"\u0278W\x03\x02\x02\x02\u0279\u027F\x05@!\x02\u027A\u027B\x05@!\x02\u027B" +
		"\u027C\x07g\x02\x02\u027C\u027D\x05X-\x02\u027D\u027F\x03\x02\x02\x02" +
		"\u027E\u0279\x03\x02\x02\x02\u027E\u027A\x03\x02\x02\x02\u027FY\x03\x02" +
		"\x02\x02\u0280\u0286\x05,\x17\x02\u0281\u0282\x05,\x17\x02\u0282\u0283" +
		"\x07g\x02\x02\u0283\u0284\x05Z.\x02\u0284\u0286\x03\x02\x02\x02\u0285" +
		"\u0280\x03\x02\x02\x02\u0285\u0281\x03\x02\x02\x02\u0286[\x03\x02\x02" +
		"\x02\u0287\u028D\x05^0\x02\u0288\u0289\x05^0\x02\u0289\u028A\x07g\x02" +
		"\x02\u028A\u028B\x05\\/\x02\u028B\u028D\x03\x02\x02\x02\u028C\u0287\x03" +
		"\x02\x02\x02\u028C\u0288\x03\x02\x02\x02\u028D]\x03\x02\x02\x02\u028E" +
		"\u029F\x05`1\x02\u028F\u0290\x079\x02\x02\u0290\u0291\x05X-\x02\u0291" +
		"\u0292\x05D#\x02\u0292\u029F\x03\x02\x02\x02\u0293\u0294\x07:\x02\x02" +
		"\u0294\u0295\x05X-\x02\u0295\u0296\x05D#\x02\u0296\u029F\x03\x02\x02\x02" +
		"\u0297\u0299\x05F$\x02\u0298\u029A\x07\x17\x02\x02\u0299\u0298\x03\x02" +
		"\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		"\u029C\x05T+\x02\u029C\u029D\x05D#\x02\u029D\u029F\x03\x02\x02\x02\u029E" +
		"\u028E\x03\x02\x02\x02\u029E\u028F\x03\x02\x02\x02\u029E\u0293\x03\x02" +
		"\x02\x02\u029E\u0297\x03\x02\x02\x02\u029F_\x03\x02\x02\x02\u02A0\u02A1" +
		"\b1\x01\x02\u02A1\u02A2\x05b2\x02\u02A2\u02A8\x03\x02\x02\x02\u02A3\u02A4" +
		"\f\x03\x02\x02\u02A4\u02A5\x07;\x02\x02\u02A5\u02A7\x05b2\x02\u02A6\u02A3" +
		"\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02" +
		"\u02A8\u02A9\x03\x02\x02\x02\u02A9a\x03\x02\x02\x02\u02AA\u02A8\x03\x02" +
		"\x02\x02\u02AB\u02AC\b2\x01\x02\u02AC\u02AD\x05d3\x02\u02AD\u02B3\x03" +
		"\x02\x02\x02\u02AE\u02AF\f\x03\x02\x02\u02AF\u02B0\x07<\x02\x02\u02B0" +
		"\u02B2\x05d3\x02\u02B1\u02AE\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02" +
		"\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4c\x03\x02" +
		"\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B7\b3\x01\x02\u02B7\u02B8" +
		"\x05f4\x02\u02B8\u02BE\x03\x02\x02\x02\u02B9\u02BA\f\x03\x02\x02\u02BA" +
		"\u02BB\x07=\x02\x02\u02BB\u02BD\x05f4\x02\u02BC\u02B9\x03\x02\x02\x02" +
		"\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03" +
		"\x02\x02\x02\u02BFe\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1" +
		"\u02CA\x05h5\x02\u02C2\u02C3\x05h5\x02\u02C3\u02C4\x07>\x02\x02\u02C4" +
		"\u02C7\x05f4\x02\u02C5\u02C6\x07?\x02\x02\u02C6\u02C8\x05f4\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CA\x03\x02" +
		"\x02\x02\u02C9\u02C1\x03\x02\x02\x02\u02C9\u02C2\x03\x02\x02\x02\u02CA" +
		"g\x03\x02\x02\x02\u02CB\u02CC\b5\x01\x02\u02CC\u02CD\x05j6\x02\u02CD\u02D3" +
		"\x03\x02\x02\x02\u02CE\u02CF\f\x03\x02\x02\u02CF\u02D0\x07@\x02\x02\u02D0" +
		"\u02D2\x05j6\x02\u02D1\u02CE\x03\x02\x02\x02\u02D2\u02D5\x03\x02\x02\x02" +
		"\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4i\x03\x02" +
		"\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02E8\x05l7\x02\u02D7\u02D8" +
		"\x05l7\x02\u02D8\u02D9\x07A\x02\x02\u02D9\u02DA\x05l7\x02\u02DA\u02E8" +
		"\x03\x02\x02\x02\u02DB\u02DC\x05l7\x02\u02DC\u02DD\x07B\x02\x02\u02DD" +
		"\u02DE\x05l7\x02\u02DE\u02E8\x03\x02\x02\x02\u02DF\u02E0\x05l7\x02\u02E0" +
		"\u02E1\x07C\x02\x02\u02E1\u02E2\x05l7\x02\u02E2\u02E8\x03\x02\x02\x02" +
		"\u02E3\u02E4\x05l7\x02\u02E4\u02E5\x07D\x02\x02\u02E5\u02E6\x05l7\x02" +
		"\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02D6\x03\x02\x02\x02\u02E7\u02D7\x03" +
		"\x02\x02\x02\u02E7\u02DB\x03\x02\x02\x02\u02E7\u02DF\x03\x02\x02\x02\u02E7" +
		"\u02E3\x03\x02\x02\x02\u02E8k\x03\x02\x02\x02\u02E9\u02F9\x05n8\x02\u02EA" +
		"\u02EB\x07E\x02\x02\u02EB\u02F9\x05l7\x02\u02EC\u02ED\x07F\x02\x02\u02ED" +
		"\u02F9\x05l7\x02\u02EE\u02EF\x07G\x02\x02\u02EF\u02F9\x05l7\x02\u02F0" +
		"\u02F1\x07H\x02\x02\u02F1\u02F9\x05l7\x02\u02F2\u02F3\x07I\x02\x02\u02F3" +
		"\u02F9\x05l7\x02\u02F4\u02F5\x07J\x02\x02\u02F5\u02F9\x05l7\x02\u02F6" +
		"\u02F7\x07K\x02\x02\u02F7\u02F9\x05l7\x02\u02F8\u02E9\x03\x02\x02\x02" +
		"\u02F8\u02EA\x03\x02\x02\x02\u02F8\u02EC\x03\x02\x02\x02\u02F8\u02EE\x03" +
		"\x02\x02\x02\u02F8\u02F0\x03\x02\x02\x02\u02F8\u02F2\x03\x02\x02\x02\u02F8" +
		"\u02F4\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9m\x03\x02\x02" +
		"\x02\u02FA\u02FB\b8\x01\x02\u02FB\u02FC\x05p9\x02\u02FC\u0306\x03\x02" +
		"\x02\x02\u02FD\u02FF\f\x03\x02\x02\u02FE\u0300\x07E\x02\x02\u02FF\u02FE" +
		"\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02" +
		"\u0301\u0302\x05> \x02\u0302\u0303\x05p9\x02\u0303\u0305\x03\x02\x02\x02" +
		"\u0304\u02FD\x03\x02\x02\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304\x03" +
		"\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307o\x03\x02\x02\x02\u0308" +
		"\u0306\x03\x02\x02\x02\u0309\u030D\x05r:\x02\u030A\u030B\t\v\x02\x02\u030B" +
		"\u030D\x05r:\x02\u030C\u0309\x03\x02\x02\x02\u030C\u030A\x03\x02\x02\x02" +
		"\u030Dq\x03\x02\x02\x02\u030E\u030F\b:\x01\x02\u030F\u0310\x05t;\x02\u0310" +
		"\u0316\x03\x02\x02\x02\u0311\u0312\f\x03\x02\x02\u0312\u0313\t\f\x02\x02" +
		"\u0313\u0315\x05v<\x02\u0314\u0311\x03\x02\x02\x02\u0315\u0318\x03\x02" +
		"\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317" +
		"s\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031D\x05v<\x02\u031A" +
		"\u031B\x07L\x02\x02\u031B\u031D\x05t;\x02\u031C\u0319\x03\x02\x02\x02" +
		"\u031C\u031A\x03\x02\x02\x02\u031Du\x03\x02\x02\x02\u031E\u031F\b<\x01" +
		"\x02\u031F\u0320\x05x=\x02\u0320\u0326\x03\x02\x02\x02\u0321\u0322\f\x03" +
		"\x02\x02\u0322\u0323\x07M\x02\x02\u0323\u0325\x05x=\x02\u0324\u0321\x03" +
		"\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326" +
		"\u0327\x03\x02\x02\x02\u0327w\x03\x02\x02\x02\u0328\u0326\x03\x02\x02" +
		"\x02\u0329\u032A\b=\x01\x02\u032A\u032B\x05z>\x02\u032B\u0331\x03\x02" +
		"\x02\x02\u032C\u032D\f\x03\x02\x02\u032D\u032E\x07N\x02\x02\u032E\u0330" +
		"\x05z>\x02\u032F\u032C\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331" +
		"\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332y\x03\x02\x02" +
		"\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0335\b>\x01\x02\u0335\u0336\x05" +
		"|?\x02\u0336\u033D\x03\x02\x02\x02\u0337\u0338\f\x03\x02\x02\u0338\u0339" +
		"\x05<\x1F\x02\u0339\u033A\x05|?\x02\u033A\u033C\x03\x02\x02\x02\u033B" +
		"\u0337\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B\x03\x02" +
		"\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E{\x03\x02\x02\x02\u033F\u033D" +
		"\x03\x02\x02\x02\u0340\u0341\b?\x01\x02\u0341\u0342\x05~@\x02\u0342\u0348" +
		"\x03\x02\x02\x02\u0343\u0344\f\x03\x02\x02\u0344\u0345\t\r\x02\x02\u0345" +
		"\u0347\x05~@\x02\u0346\u0343\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02" +
		"\u0348\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349}\x03\x02" +
		"\x02\x02\u034A\u0348\x03\x02\x02\x02\u034B\u034C\b@\x01\x02\u034C\u034D" +
		"\x05\x80A\x02\u034D\u0355\x03\x02\x02\x02\u034E\u034F\f\x03\x02\x02\u034F" +
		"\u0350\x07\x04\x02\x02\u0350\u0351\x05\\/\x02\u0351\u0352\x07\x05\x02" +
		"\x02\u0352\u0354\x03\x02\x02\x02\u0353\u034E\x03\x02\x02\x02\u0354\u0357" +
		"\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02" +
		"\u0356\x7F\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0358\u0359\bA" +
		"\x01\x02\u0359\u0360\x05\x82B\x02\u035A\u035B\x05L\'\x02\u035B\u035C\x07" +
		"\x04\x02\x02\u035C\u035D\x05\\/\x02\u035D\u035E\x07\x05\x02\x02\u035E" +
		"\u0360\x03\x02\x02\x02\u035F\u0358\x03\x02\x02\x02\u035F\u035A\x03\x02" +
		"\x02\x02\u0360\u0366\x03\x02\x02\x02\u0361\u0362\f\x04\x02\x02\u0362\u0363" +
		"\x07\x1B\x02\x02\u0363\u0365\x05\x82B\x02\u0364\u0361\x03\x02\x02\x02" +
		"\u0365\u0368\x03\x02\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367\x03" +
		"\x02\x02\x02\u0367\x81\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369" +
		"\u036A\bB\x01\x02\u036A\u036B\x05\x84C\x02\u036B\u0370\x03\x02\x02\x02" +
		"\u036C\u036D\f\x03\x02\x02\u036D\u036F\x07Q\x02\x02\u036E\u036C\x03\x02" +
		"\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370" +
		"\u0371\x03\x02\x02\x02\u0371\x83\x03\x02\x02\x02\u0372\u0370\x03\x02\x02" +
		"\x02\u0373\u0377\x05\x86D\x02\u0374\u0375\t\x0E\x02\x02\u0375\u0377\x05" +
		"\x84C\x02\u0376\u0373\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377" +
		"\x85\x03\x02\x02\x02\u0378\u038B\x05.\x18\x02\u0379\u038B\x05H%\x02\u037A" +
		"\u037B\x07U\x02\x02\u037B\u038B\x05L\'\x02\u037C\u037D\x07V\x02\x02\u037D" +
		"\u038B\x05L\'\x02\u037E\u038B\x07W\x02\x02\u037F\u0380\x07\v\x02\x02\u0380" +
		"\u0381\x05T+\x02\u0381\u0382\x05D#\x02\u0382\u0383\x07\f\x02\x02\u0383" +
		"\u038B\x03\x02\x02\x02\u0384\u0385\x07\x1D\x02\x02\u0385\u0386\x05^0\x02" +
		"\u0386\u0387\x07\x1E\x02\x02\u0387\u038B\x03\x02\x02\x02\u0388\u038B\x05" +
		"B\"\x02\u0389\u038B\x05\x8CG\x02\u038A\u0378\x03\x02\x02\x02\u038A\u0379" +
		"\x03\x02\x02\x02\u038A\u037A\x03\x02\x02\x02\u038A\u037C\x03\x02\x02\x02" +
		"\u038A\u037E\x03\x02\x02\x02\u038A\u037F\x03\x02\x02\x02\u038A\u0384\x03" +
		"\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u0389\x03\x02\x02\x02\u038B" +
		"\x87\x03\x02\x02\x02\u038C\u0392\x05H%\x02\u038D\u038E\x05H%\x02\u038E" +
		"\u038F\x07\\\x02\x02\u038F\u0390\x05\x88E\x02\u0390\u0392\x03\x02\x02" +
		"\x02\u0391\u038C\x03\x02\x02\x02\u0391\u038D\x03\x02\x02\x02\u0392\x89" +
		"\x03\x02\x02\x02\u0393\u0394\x05\x8CG\x02\u0394\x8B\x03\x02\x02\x02\u0395" +
		"\u0396\x07X\x02\x02\u0396\x8D\x03\x02\x02\x02\u0397\u0398\x07Y\x02\x02" +
		"\u0398\u0399\x05L\'\x02\u0399\u039B\x05\x9CO\x02\u039A\u039C\x05*\x16" +
		"\x02\u039B\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\x8F" +
		"\x03\x02\x02\x02\u039D\u039E\x05\x16\f\x02\u039E\x91\x03\x02\x02\x02\u039F" +
		"\u03A0\x07Z\x02\x02\u03A0\u03A1\x05^0\x02\u03A1\x93\x03\x02\x02\x02\u03A2" +
		"\u03A3\x07[\x02\x02\u03A3\u03A4\x05L\'\x02\u03A4\u03A5\x07)\x02\x02\u03A5" +
		"\u03A6\x05^0\x02\u03A6\u03A7\x07\"\x02\x02\u03A7\u03A8\x05\x9CO\x02\u03A8" +
		"\x95\x03\x02\x02\x02\u03A9\u03AA\x05L\'\x02\u03AA\u03AB\x07\x18\x02\x02" +
		"\u03AB\u03AC\x05\x88E\x02\u03AC\u03AD\x07]\x02\x02\u03AD\u03AE\x05^0\x02" +
		"\u03AE\x97\x03\x02\x02\x02\u03AF\u03B5\x05\x9AN\x02\u03B0\u03B1\x05\x9A" +
		"N\x02\u03B1\u03B2\x07g\x02\x02\u03B2\u03B3\x05\x98M\x02\u03B3\u03B5\x03" +
		"\x02\x02\x02\u03B4\u03AF\x03\x02\x02\x02\u03B4\u03B0\x03\x02\x02\x02\u03B5" +
		"\x99\x03\x02\x02\x02\u03B6\u03B7\x07i\x02\x02\u03B7\x9B\x03\x02\x02\x02" +
		"\u03B8\u03BC\x07\v\x02\x02\u03B9\u03BB\x05\xA0Q\x02\u03BA\u03B9\x03\x02" +
		"\x02\x02\u03BB\u03BE\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC" +
		"\u03BD\x03\x02\x02\x02\u03BD\u03BF\x03\x02\x02\x02\u03BE\u03BC\x03\x02" +
		"\x02\x02\u03BF\u03C5\x07\f\x02\x02\u03C0\u03C2\x07$\x02\x02\u03C1\u03C0" +
		"\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02" +
		"\u03C3\u03C5\x05H%\x02\u03C4\u03B8\x03\x02\x02\x02\u03C4\u03C1\x03\x02" +
		"\x02\x02\u03C5\x9D\x03\x02\x02\x02\u03C6\u03C7\x07V\x02\x02\u03C7\u03CC" +
		"\x05L\'\x02\u03C8\u03CC\x05\x9AN\x02\u03C9\u03CA\x07(\x02\x02\u03CA\u03CC" +
		"\x05\x9AN\x02\u03CB\u03C6\x03\x02\x02\x02\u03CB\u03C8\x03\x02\x02\x02" +
		"\u03CB\u03C9\x03\x02\x02\x02\u03CC\x9F\x03\x02\x02\x02\u03CD\u03CE\x05" +
		"\xA2R\x02\u03CE\u03CF\x05> \x02\u03CF\u03D0\x05\xA4S\x02\u03D0\u03D5\x03" +
		"\x02\x02\x02\u03D1\u03D2\x07c\x02\x02\u03D2\u03D5\x05\xA2R\x02\u03D3\u03D5" +
		"\x05H%\x02\u03D4\u03CD\x03\x02\x02\x02\u03D4\u03D1\x03\x02\x02\x02\u03D4" +
		"\u03D3\x03\x02\x02\x02\u03D5\xA1\x03\x02\x02\x02\u03D6\u03D7\x07L\x02" +
		"\x02\u03D7\u03E1\x05H%\x02\u03D8\u03E1\x05H%\x02\u03D9\u03DC\x05\x9EP" +
		"\x02\u03DA\u03DB\x07\x1B\x02\x02\u03DB\u03DD\x05H%\x02\u03DC\u03DA\x03" +
		"\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE" +
		"\u03DF\x03\x02\x02\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03D6\x03\x02" +
		"\x02\x02\u03E0\u03D8\x03\x02\x02\x02\u03E0\u03D9\x03\x02\x02\x02\u03E1" +
		"\xA3\x03\x02\x02\x02\u03E2\u03E3\bS\x01\x02\u03E3\u03E9\x05\xA6T\x02\u03E4" +
		"\u03E5\x07\x1D\x02\x02\u03E5\u03E6\x05\xA4S\x02\u03E6\u03E7\x07\x1E\x02" +
		"\x02\u03E7\u03E9\x03\x02\x02\x02\u03E8\u03E2\x03\x02\x02\x02\u03E8\u03E4" +
		"\x03\x02\x02\x02\u03E9\u03EF\x03\x02\x02\x02\u03EA\u03EB\f\x04\x02\x02" +
		"\u03EB\u03EC\x07\x0F\x02\x02\u03EC\u03EE\x05\xA6T\x02\u03ED\u03EA\x03" +
		"\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF" +
		"\u03F0\x03\x02\x02\x02\u03F0\xA5\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02" +
		"\x02\u03F2\u03F3\bT\x01\x02\u03F3\u03F4\x07\x1D\x02\x02\u03F4\u03F5\x05" +
		"\xA6T\x02\u03F5\u03F6\x07\x1E\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7" +
		"\u03F9\x05\xA8U\x02\u03F8\u03F2\x03\x02\x02\x02\u03F8\u03F7\x03\x02\x02" +
		"\x02\u03F9\u03FF\x03\x02\x02\x02\u03FA\u03FB\f\x04\x02\x02\u03FB\u03FC" +
		"\t\x0F\x02\x02\u03FC\u03FE\x05\xA8U\x02\u03FD\u03FA\x03\x02\x02\x02\u03FE" +
		"\u0401\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02" +
		"\x02\x02\u0400\xA7\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0409" +
		"\x05\x9EP\x02\u0403\u0409\x05H%\x02\u0404\u0405\x07\x1D\x02\x02\u0405" +
		"\u0406\x05\xA4S\x02\u0406\u0407\x07\x1E\x02\x02\u0407\u0409\x03\x02\x02" +
		"\x02\u0408\u0402\x03\x02\x02\x02\u0408\u0403\x03\x02\x02\x02\u0408\u0404" +
		"\x03\x02\x02\x02\u0409\xA9\x03\x02\x02\x02|\xAD\xB3\xB9\xBC\xC4\xC8\xCE" +
		"\xD0\xE3\xE6\xE9\xEC\xF1\xF5\xF9\u0103\u0106\u010F\u0114\u0119\u011E\u0123" +
		"\u012E\u0133\u0137\u013F\u0143\u0147\u0150\u0155\u0158\u015C\u0163\u0168" +
		"\u016B\u016F\u0174\u0178\u017B\u017F\u0185\u0189\u0191\u019A\u019E\u01A1" +
		"\u01AA\u01AD\u01B2\u01B9\u01BD\u01C2\u01C7\u01D4\u01D7\u01DB\u01E0\u01E9" +
		"\u01ED\u01F2\u01FB\u01FF\u0209\u0214\u0218\u021D\u0229\u0231\u0237\u023B" +
		"\u0242\u0248\u024F\u0252\u025B\u0262\u0269\u0270\u0277\u027E\u0285\u028C" +
		"\u0299\u029E\u02A8\u02B3\u02BE\u02C7\u02C9\u02D3\u02E7\u02F8\u02FF\u0306" +
		"\u030C\u0316\u031C\u0326\u0331\u033D\u0348\u0355\u035F\u0366\u0370\u0376" +
		"\u038A\u0391\u039B\u03B4\u03BC\u03C1\u03C4\u03CB\u03D4\u03DE\u03E0\u03E8" +
		"\u03EF\u03F8\u03FF\u0408";
	public static readonly _serializedATN: string = Utils.join(
		[
			ForgeParser._serializedATNSegment0,
			ForgeParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ForgeParser.__ATN) {
			ForgeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ForgeParser._serializedATN));
		}

		return ForgeParser.__ATN;
	}

}

export class AlloyModuleContext extends ParserRuleContext {
	public importDecl(): ImportDeclContext[];
	public importDecl(i: number): ImportDeclContext;
	public importDecl(i?: number): ImportDeclContext | ImportDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclContext);
		} else {
			return this.getRuleContext(i, ImportDeclContext);
		}
	}
	public paragraph(): ParagraphContext[];
	public paragraph(i: number): ParagraphContext;
	public paragraph(i?: number): ParagraphContext | ParagraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParagraphContext);
		} else {
			return this.getRuleContext(i, ParagraphContext);
		}
	}
	public evalDecl(): EvalDeclContext[];
	public evalDecl(i: number): EvalDeclContext;
	public evalDecl(i?: number): EvalDeclContext | EvalDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EvalDeclContext);
		} else {
			return this.getRuleContext(i, EvalDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_alloyModule; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterAlloyModule) {
			listener.enterAlloyModule(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitAlloyModule) {
			listener.exitAlloyModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitAlloyModule) {
			return visitor.visitAlloyModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclContext extends ParserRuleContext {
	public OPEN_TOK(): TerminalNode { return this.getToken(ForgeParser.OPEN_TOK, 0); }
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public LEFT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_SQUARE_TOK, 0); }
	public qualNameList(): QualNameListContext | undefined {
		return this.tryGetRuleContext(0, QualNameListContext);
	}
	public RIGHT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_SQUARE_TOK, 0); }
	public AS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.AS_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public FILE_PATH_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FILE_PATH_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_importDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterImportDecl) {
			listener.enterImportDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitImportDecl) {
			listener.exitImportDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitImportDecl) {
			return visitor.visitImportDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParagraphContext extends ParserRuleContext {
	public sigDecl(): SigDeclContext | undefined {
		return this.tryGetRuleContext(0, SigDeclContext);
	}
	public predDecl(): PredDeclContext | undefined {
		return this.tryGetRuleContext(0, PredDeclContext);
	}
	public funDecl(): FunDeclContext | undefined {
		return this.tryGetRuleContext(0, FunDeclContext);
	}
	public assertDecl(): AssertDeclContext | undefined {
		return this.tryGetRuleContext(0, AssertDeclContext);
	}
	public cmdDecl(): CmdDeclContext | undefined {
		return this.tryGetRuleContext(0, CmdDeclContext);
	}
	public testExpectDecl(): TestExpectDeclContext | undefined {
		return this.tryGetRuleContext(0, TestExpectDeclContext);
	}
	public sexprDecl(): SexprDeclContext | undefined {
		return this.tryGetRuleContext(0, SexprDeclContext);
	}
	public queryDecl(): QueryDeclContext | undefined {
		return this.tryGetRuleContext(0, QueryDeclContext);
	}
	public evalRelDecl(): EvalRelDeclContext | undefined {
		return this.tryGetRuleContext(0, EvalRelDeclContext);
	}
	public optionDecl(): OptionDeclContext | undefined {
		return this.tryGetRuleContext(0, OptionDeclContext);
	}
	public instDecl(): InstDeclContext | undefined {
		return this.tryGetRuleContext(0, InstDeclContext);
	}
	public exampleDecl(): ExampleDeclContext | undefined {
		return this.tryGetRuleContext(0, ExampleDeclContext);
	}
	public propertyDecl(): PropertyDeclContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclContext);
	}
	public quantifiedPropertyDecl(): QuantifiedPropertyDeclContext | undefined {
		return this.tryGetRuleContext(0, QuantifiedPropertyDeclContext);
	}
	public satisfiabilityDecl(): SatisfiabilityDeclContext | undefined {
		return this.tryGetRuleContext(0, SatisfiabilityDeclContext);
	}
	public consistencyDecl(): ConsistencyDeclContext | undefined {
		return this.tryGetRuleContext(0, ConsistencyDeclContext);
	}
	public testSuiteDecl(): TestSuiteDeclContext | undefined {
		return this.tryGetRuleContext(0, TestSuiteDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_paragraph; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterParagraph) {
			listener.enterParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitParagraph) {
			listener.exitParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitParagraph) {
			return visitor.visitParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SigDeclContext extends ParserRuleContext {
	public SIG_TOK(): TerminalNode { return this.getToken(ForgeParser.SIG_TOK, 0); }
	public nameList(): NameListContext {
		return this.getRuleContext(0, NameListContext);
	}
	public LEFT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public VAR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.VAR_TOK, 0); }
	public ABSTRACT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ABSTRACT_TOK, 0); }
	public mult(): MultContext | undefined {
		return this.tryGetRuleContext(0, MultContext);
	}
	public sigExt(): SigExtContext | undefined {
		return this.tryGetRuleContext(0, SigExtContext);
	}
	public arrowDeclList(): ArrowDeclListContext | undefined {
		return this.tryGetRuleContext(0, ArrowDeclListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_sigDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterSigDecl) {
			listener.enterSigDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitSigDecl) {
			listener.exitSigDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitSigDecl) {
			return visitor.visitSigDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SigExtContext extends ParserRuleContext {
	public EXTENDS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EXTENDS_TOK, 0); }
	public qualName(): QualNameContext[];
	public qualName(i: number): QualNameContext;
	public qualName(i?: number): QualNameContext | QualNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualNameContext);
		} else {
			return this.getRuleContext(i, QualNameContext);
		}
	}
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IN_TOK, 0); }
	public PLUS_TOK(): TerminalNode[];
	public PLUS_TOK(i: number): TerminalNode;
	public PLUS_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.PLUS_TOK);
		} else {
			return this.getToken(ForgeParser.PLUS_TOK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_sigExt; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterSigExt) {
			listener.enterSigExt(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitSigExt) {
			listener.exitSigExt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitSigExt) {
			return visitor.visitSigExt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultContext extends ParserRuleContext {
	public LONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LONE_TOK, 0); }
	public SOME_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SOME_TOK, 0); }
	public ONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ONE_TOK, 0); }
	public TWO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TWO_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_mult; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterMult) {
			listener.enterMult(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitMult) {
			listener.exitMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitMult) {
			return visitor.visitMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowMultContext extends ParserRuleContext {
	public LONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LONE_TOK, 0); }
	public SET_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SET_TOK, 0); }
	public ONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ONE_TOK, 0); }
	public TWO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TWO_TOK, 0); }
	public FUNC_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FUNC_TOK, 0); }
	public PFUNC_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PFUNC_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_arrowMult; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterArrowMult) {
			listener.enterArrowMult(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitArrowMult) {
			listener.exitArrowMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitArrowMult) {
			return visitor.visitArrowMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelperMultContext extends ParserRuleContext {
	public LONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LONE_TOK, 0); }
	public SET_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SET_TOK, 0); }
	public ONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ONE_TOK, 0); }
	public FUNC_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FUNC_TOK, 0); }
	public PFUNC_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PFUNC_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_helperMult; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterHelperMult) {
			listener.enterHelperMult(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitHelperMult) {
			listener.exitHelperMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitHelperMult) {
			return visitor.visitHelperMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParaDeclContext extends ParserRuleContext {
	public nameList(): NameListContext {
		return this.getRuleContext(0, NameListContext);
	}
	public COLON_TOK(): TerminalNode { return this.getToken(ForgeParser.COLON_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DISJ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DISJ_TOK, 0); }
	public helperMult(): HelperMultContext | undefined {
		return this.tryGetRuleContext(0, HelperMultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_paraDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterParaDecl) {
			listener.enterParaDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitParaDecl) {
			listener.exitParaDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitParaDecl) {
			return visitor.visitParaDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantDeclContext extends ParserRuleContext {
	public nameList(): NameListContext {
		return this.getRuleContext(0, NameListContext);
	}
	public COLON_TOK(): TerminalNode { return this.getToken(ForgeParser.COLON_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DISJ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DISJ_TOK, 0); }
	public SET_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SET_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_quantDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQuantDecl) {
			listener.enterQuantDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQuantDecl) {
			listener.exitQuantDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQuantDecl) {
			return visitor.visitQuantDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowDeclContext extends ParserRuleContext {
	public nameList(): NameListContext {
		return this.getRuleContext(0, NameListContext);
	}
	public COLON_TOK(): TerminalNode { return this.getToken(ForgeParser.COLON_TOK, 0); }
	public arrowMult(): ArrowMultContext {
		return this.getRuleContext(0, ArrowMultContext);
	}
	public arrowExpr(): ArrowExprContext {
		return this.getRuleContext(0, ArrowExprContext);
	}
	public VAR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.VAR_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_arrowDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterArrowDecl) {
			listener.enterArrowDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitArrowDecl) {
			listener.exitArrowDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitArrowDecl) {
			return visitor.visitArrowDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredTypeContext extends ParserRuleContext {
	public WHEAT_TOK(): TerminalNode { return this.getToken(ForgeParser.WHEAT_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_predType; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterPredType) {
			listener.enterPredType(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitPredType) {
			listener.exitPredType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitPredType) {
			return visitor.visitPredType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredDeclContext extends ParserRuleContext {
	public PRED_TOK(): TerminalNode { return this.getToken(ForgeParser.PRED_TOK, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public predType(): PredTypeContext | undefined {
		return this.tryGetRuleContext(0, PredTypeContext);
	}
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public DOT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DOT_TOK, 0); }
	public paraDecls(): ParaDeclsContext | undefined {
		return this.tryGetRuleContext(0, ParaDeclsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_predDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterPredDecl) {
			listener.enterPredDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitPredDecl) {
			listener.exitPredDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitPredDecl) {
			return visitor.visitPredDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunDeclContext extends ParserRuleContext {
	public FUN_TOK(): TerminalNode { return this.getToken(ForgeParser.FUN_TOK, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON_TOK(): TerminalNode { return this.getToken(ForgeParser.COLON_TOK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LEFT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public DOT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DOT_TOK, 0); }
	public paraDecls(): ParaDeclsContext | undefined {
		return this.tryGetRuleContext(0, ParaDeclsContext);
	}
	public helperMult(): HelperMultContext | undefined {
		return this.tryGetRuleContext(0, HelperMultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_funDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterFunDecl) {
			listener.enterFunDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitFunDecl) {
			listener.exitFunDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitFunDecl) {
			return visitor.visitFunDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParaDeclsContext extends ParserRuleContext {
	public LEFT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_PAREN_TOK, 0); }
	public RIGHT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_PAREN_TOK, 0); }
	public paraDeclList(): ParaDeclListContext | undefined {
		return this.tryGetRuleContext(0, ParaDeclListContext);
	}
	public LEFT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_SQUARE_TOK, 0); }
	public RIGHT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_SQUARE_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_paraDecls; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterParaDecls) {
			listener.enterParaDecls(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitParaDecls) {
			listener.exitParaDecls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitParaDecls) {
			return visitor.visitParaDecls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertDeclContext extends ParserRuleContext {
	public ASSERT_TOK(): TerminalNode { return this.getToken(ForgeParser.ASSERT_TOK, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_assertDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterAssertDecl) {
			listener.enterAssertDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitAssertDecl) {
			listener.exitAssertDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitAssertDecl) {
			return visitor.visitAssertDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDeclContext extends ParserRuleContext {
	public RUN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RUN_TOK, 0); }
	public CHECK_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.CHECK_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public FOR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FOR_TOK, 0); }
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_cmdDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterCmdDecl) {
			listener.enterCmdDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitCmdDecl) {
			listener.exitCmdDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitCmdDecl) {
			return visitor.visitCmdDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestDeclContext extends ParserRuleContext {
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public SAT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SAT_TOK, 0); }
	public UNSAT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.UNSAT_TOK, 0); }
	public THEOREM_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.THEOREM_TOK, 0); }
	public CHECKED_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.CHECKED_TOK, 0); }
	public FORGE_ERROR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FORGE_ERROR_TOK, 0); }
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public FOR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FOR_TOK, 0); }
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_testDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTestDecl) {
			listener.enterTestDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTestDecl) {
			listener.exitTestDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTestDecl) {
			return visitor.visitTestDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestExpectDeclContext extends ParserRuleContext {
	public EXPECT_TOK(): TerminalNode { return this.getToken(ForgeParser.EXPECT_TOK, 0); }
	public testBlock(): TestBlockContext {
		return this.getRuleContext(0, TestBlockContext);
	}
	public TEST_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TEST_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_testExpectDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTestExpectDecl) {
			listener.enterTestExpectDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTestExpectDecl) {
			listener.exitTestExpectDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTestExpectDecl) {
			return visitor.visitTestExpectDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestBlockContext extends ParserRuleContext {
	public LEFT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public testDecl(): TestDeclContext[];
	public testDecl(i: number): TestDeclContext;
	public testDecl(i?: number): TestDeclContext | TestDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestDeclContext);
		} else {
			return this.getRuleContext(i, TestDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_testBlock; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTestBlock) {
			listener.enterTestBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTestBlock) {
			listener.exitTestBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTestBlock) {
			return visitor.visitTestBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	public FOR_TOK(): TerminalNode { return this.getToken(ForgeParser.FOR_TOK, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public BUT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BUT_TOK, 0); }
	public typescopeList(): TypescopeListContext | undefined {
		return this.tryGetRuleContext(0, TypescopeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_scope; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterScope) {
			listener.enterScope(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitScope) {
			listener.exitScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypescopeContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public qualName(): QualNameContext {
		return this.getRuleContext(0, QualNameContext);
	}
	public EXACTLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EXACTLY_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_typescope; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTypescope) {
			listener.enterTypescope(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTypescope) {
			listener.exitTypescope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTypescope) {
			return visitor.visitTypescope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstContext extends ParserRuleContext {
	public NONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NONE_TOK, 0); }
	public UNIV_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.UNIV_TOK, 0); }
	public IDEN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IDEN_TOK, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public MINUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.MINUS_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_const; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterConst) {
			listener.enterConst(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitConst) {
			listener.exitConst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitConst) {
			return visitor.visitConst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SatisfiabilityDeclContext extends ParserRuleContext {
	public ASSERT_TOK(): TerminalNode { return this.getToken(ForgeParser.ASSERT_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public SAT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SAT_TOK, 0); }
	public UNSAT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.UNSAT_TOK, 0); }
	public FORGE_ERROR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FORGE_ERROR_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public FOR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FOR_TOK, 0); }
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_satisfiabilityDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterSatisfiabilityDecl) {
			listener.enterSatisfiabilityDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitSatisfiabilityDecl) {
			listener.exitSatisfiabilityDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitSatisfiabilityDecl) {
			return visitor.visitSatisfiabilityDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifiedPropertyDeclContext extends ParserRuleContext {
	public ASSERT_TOK(): TerminalNode { return this.getToken(ForgeParser.ASSERT_TOK, 0); }
	public ALL_TOK(): TerminalNode { return this.getToken(ForgeParser.ALL_TOK, 0); }
	public quantDeclList(): QuantDeclListContext {
		return this.getRuleContext(0, QuantDeclListContext);
	}
	public BAR_TOK(): TerminalNode { return this.getToken(ForgeParser.BAR_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public FOR_TOK(): TerminalNode[];
	public FOR_TOK(i: number): TerminalNode;
	public FOR_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.FOR_TOK);
		} else {
			return this.getToken(ForgeParser.FOR_TOK, i);
		}
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public SUFFICIENT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUFFICIENT_TOK, 0); }
	public NECESSARY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NECESSARY_TOK, 0); }
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public DISJ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DISJ_TOK, 0); }
	public LEFT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_SQUARE_TOK, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	public RIGHT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_SQUARE_TOK, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_quantifiedPropertyDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQuantifiedPropertyDecl) {
			listener.enterQuantifiedPropertyDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQuantifiedPropertyDecl) {
			listener.exitQuantifiedPropertyDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQuantifiedPropertyDecl) {
			return visitor.visitQuantifiedPropertyDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclContext extends ParserRuleContext {
	public ASSERT_TOK(): TerminalNode { return this.getToken(ForgeParser.ASSERT_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public FOR_TOK(): TerminalNode[];
	public FOR_TOK(i: number): TerminalNode;
	public FOR_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.FOR_TOK);
		} else {
			return this.getToken(ForgeParser.FOR_TOK, i);
		}
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public SUFFICIENT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUFFICIENT_TOK, 0); }
	public NECESSARY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NECESSARY_TOK, 0); }
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_propertyDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterPropertyDecl) {
			listener.enterPropertyDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitPropertyDecl) {
			listener.exitPropertyDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitPropertyDecl) {
			return visitor.visitPropertyDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsistencyDeclContext extends ParserRuleContext {
	public ASSERT_TOK(): TerminalNode { return this.getToken(ForgeParser.ASSERT_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public WITH_TOK(): TerminalNode { return this.getToken(ForgeParser.WITH_TOK, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public CONSISTENT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.CONSISTENT_TOK, 0); }
	public INCONSISTENT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.INCONSISTENT_TOK, 0); }
	public COLON_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COLON_TOK, 0); }
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	public FOR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FOR_TOK, 0); }
	public bounds(): BoundsContext | undefined {
		return this.tryGetRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_consistencyDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterConsistencyDecl) {
			listener.enterConsistencyDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitConsistencyDecl) {
			listener.exitConsistencyDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitConsistencyDecl) {
			return visitor.visitConsistencyDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestSuiteDeclContext extends ParserRuleContext {
	public TEST_TOK(): TerminalNode { return this.getToken(ForgeParser.TEST_TOK, 0); }
	public SUITE_TOK(): TerminalNode { return this.getToken(ForgeParser.SUITE_TOK, 0); }
	public FOR_TOK(): TerminalNode { return this.getToken(ForgeParser.FOR_TOK, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public LEFT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public testConstruct(): TestConstructContext[];
	public testConstruct(i: number): TestConstructContext;
	public testConstruct(i?: number): TestConstructContext | TestConstructContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestConstructContext);
		} else {
			return this.getRuleContext(i, TestConstructContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_testSuiteDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTestSuiteDecl) {
			listener.enterTestSuiteDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTestSuiteDecl) {
			listener.exitTestSuiteDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTestSuiteDecl) {
			return visitor.visitTestSuiteDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestConstructContext extends ParserRuleContext {
	public exampleDecl(): ExampleDeclContext | undefined {
		return this.tryGetRuleContext(0, ExampleDeclContext);
	}
	public testExpectDecl(): TestExpectDeclContext | undefined {
		return this.tryGetRuleContext(0, TestExpectDeclContext);
	}
	public quantifiedPropertyDecl(): QuantifiedPropertyDeclContext | undefined {
		return this.tryGetRuleContext(0, QuantifiedPropertyDeclContext);
	}
	public propertyDecl(): PropertyDeclContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclContext);
	}
	public satisfiabilityDecl(): SatisfiabilityDeclContext | undefined {
		return this.tryGetRuleContext(0, SatisfiabilityDeclContext);
	}
	public consistencyDecl(): ConsistencyDeclContext | undefined {
		return this.tryGetRuleContext(0, ConsistencyDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_testConstruct; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTestConstruct) {
			listener.enterTestConstruct(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTestConstruct) {
			listener.exitTestConstruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTestConstruct) {
			return visitor.visitTestConstruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowOpContext extends ParserRuleContext {
	public ARROW_TOK(): TerminalNode { return this.getToken(ForgeParser.ARROW_TOK, 0); }
	public mult(): MultContext[];
	public mult(i: number): MultContext;
	public mult(i?: number): MultContext | MultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultContext);
		} else {
			return this.getRuleContext(i, MultContext);
		}
	}
	public SET_TOK(): TerminalNode[];
	public SET_TOK(i: number): TerminalNode;
	public SET_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.SET_TOK);
		} else {
			return this.getToken(ForgeParser.SET_TOK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_arrowOp; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterArrowOp) {
			listener.enterArrowOp(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitArrowOp) {
			listener.exitArrowOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitArrowOp) {
			return visitor.visitArrowOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompareOpContext extends ParserRuleContext {
	public IN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IN_TOK, 0); }
	public EQ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EQ_TOK, 0); }
	public LT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LT_TOK, 0); }
	public GT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.GT_TOK, 0); }
	public LEQ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEQ_TOK, 0); }
	public GEQ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.GEQ_TOK, 0); }
	public IS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IS_TOK, 0); }
	public NI_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NI_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_compareOp; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterCompareOp) {
			listener.enterCompareOp(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitCompareOp) {
			listener.exitCompareOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitCompareOp) {
			return visitor.visitCompareOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetDeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public EQ_TOK(): TerminalNode { return this.getToken(ForgeParser.EQ_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_letDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterLetDecl) {
			listener.enterLetDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitLetDecl) {
			listener.exitLetDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitLetDecl) {
			return visitor.visitLetDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LEFT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode { return this.getToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_block; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockOrBarContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public BAR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BAR_TOK, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_blockOrBar; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBlockOrBar) {
			listener.enterBlockOrBar(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBlockOrBar) {
			listener.exitBlockOrBar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBlockOrBar) {
			return visitor.visitBlockOrBar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantContext extends ParserRuleContext {
	public ALL_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ALL_TOK, 0); }
	public NO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NO_TOK, 0); }
	public SUM_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUM_TOK, 0); }
	public mult(): MultContext | undefined {
		return this.tryGetRuleContext(0, MultContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_quant; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQuant) {
			listener.enterQuant(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQuant) {
			listener.exitQuant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQuant) {
			return visitor.visitQuant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualNameContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public THIS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.THIS_TOK, 0); }
	public SLASH_TOK(): TerminalNode[];
	public SLASH_TOK(i: number): TerminalNode;
	public SLASH_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.SLASH_TOK);
		} else {
			return this.getToken(ForgeParser.SLASH_TOK, i);
		}
	}
	public INT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.INT_TOK, 0); }
	public SUM_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUM_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_qualName; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQualName) {
			listener.enterQualName(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQualName) {
			listener.exitQualName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQualName) {
			return visitor.visitQualName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionDeclContext extends ParserRuleContext {
	public OPTION_TOK(): TerminalNode { return this.getToken(ForgeParser.OPTION_TOK, 0); }
	public qualName(): QualNameContext[];
	public qualName(i: number): QualNameContext;
	public qualName(i?: number): QualNameContext | QualNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualNameContext);
		} else {
			return this.getRuleContext(i, QualNameContext);
		}
	}
	public FILE_PATH_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.FILE_PATH_TOK, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public MINUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.MINUS_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_optionDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterOptionDecl) {
			listener.enterOptionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitOptionDecl) {
			listener.exitOptionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitOptionDecl) {
			return visitor.visitOptionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public IDENTIFIER_TOK(): TerminalNode { return this.getToken(ForgeParser.IDENTIFIER_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_name; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameListContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public nameList(): NameListContext | undefined {
		return this.tryGetRuleContext(0, NameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_nameList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterNameList) {
			listener.enterNameList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitNameList) {
			listener.exitNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitNameList) {
			return visitor.visitNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualNameListContext extends ParserRuleContext {
	public qualName(): QualNameContext {
		return this.getRuleContext(0, QualNameContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public qualNameList(): QualNameListContext | undefined {
		return this.tryGetRuleContext(0, QualNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_qualNameList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQualNameList) {
			listener.enterQualNameList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQualNameList) {
			listener.exitQualNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQualNameList) {
			return visitor.visitQualNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParaDeclListContext extends ParserRuleContext {
	public paraDecl(): ParaDeclContext {
		return this.getRuleContext(0, ParaDeclContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public paraDeclList(): ParaDeclListContext | undefined {
		return this.tryGetRuleContext(0, ParaDeclListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_paraDeclList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterParaDeclList) {
			listener.enterParaDeclList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitParaDeclList) {
			listener.exitParaDeclList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitParaDeclList) {
			return visitor.visitParaDeclList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantDeclListContext extends ParserRuleContext {
	public quantDecl(): QuantDeclContext {
		return this.getRuleContext(0, QuantDeclContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public quantDeclList(): QuantDeclListContext | undefined {
		return this.tryGetRuleContext(0, QuantDeclListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_quantDeclList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQuantDeclList) {
			listener.enterQuantDeclList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQuantDeclList) {
			listener.exitQuantDeclList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQuantDeclList) {
			return visitor.visitQuantDeclList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowDeclListContext extends ParserRuleContext {
	public arrowDecl(): ArrowDeclContext {
		return this.getRuleContext(0, ArrowDeclContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public arrowDeclList(): ArrowDeclListContext | undefined {
		return this.tryGetRuleContext(0, ArrowDeclListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_arrowDeclList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterArrowDeclList) {
			listener.enterArrowDeclList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitArrowDeclList) {
			listener.exitArrowDeclList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitArrowDeclList) {
			return visitor.visitArrowDeclList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetDeclListContext extends ParserRuleContext {
	public letDecl(): LetDeclContext {
		return this.getRuleContext(0, LetDeclContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public letDeclList(): LetDeclListContext | undefined {
		return this.tryGetRuleContext(0, LetDeclListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_letDeclList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterLetDeclList) {
			listener.enterLetDeclList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitLetDeclList) {
			listener.exitLetDeclList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitLetDeclList) {
			return visitor.visitLetDeclList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypescopeListContext extends ParserRuleContext {
	public typescope(): TypescopeContext {
		return this.getRuleContext(0, TypescopeContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public typescopeList(): TypescopeListContext | undefined {
		return this.tryGetRuleContext(0, TypescopeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_typescopeList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterTypescopeList) {
			listener.enterTypescopeList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitTypescopeList) {
			listener.exitTypescopeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitTypescopeList) {
			return visitor.visitTypescopeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_exprList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr1(): Expr1Context | undefined {
		return this.tryGetRuleContext(0, Expr1Context);
	}
	public LET_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LET_TOK, 0); }
	public letDeclList(): LetDeclListContext | undefined {
		return this.tryGetRuleContext(0, LetDeclListContext);
	}
	public blockOrBar(): BlockOrBarContext | undefined {
		return this.tryGetRuleContext(0, BlockOrBarContext);
	}
	public BIND_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BIND_TOK, 0); }
	public quant(): QuantContext | undefined {
		return this.tryGetRuleContext(0, QuantContext);
	}
	public quantDeclList(): QuantDeclListContext | undefined {
		return this.tryGetRuleContext(0, QuantDeclListContext);
	}
	public DISJ_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DISJ_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr1Context extends ParserRuleContext {
	public expr1_5(): Expr1_5Context {
		return this.getRuleContext(0, Expr1_5Context);
	}
	public expr1(): Expr1Context | undefined {
		return this.tryGetRuleContext(0, Expr1Context);
	}
	public OR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.OR_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr1; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr1) {
			listener.enterExpr1(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr1) {
			listener.exitExpr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr1) {
			return visitor.visitExpr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr1_5Context extends ParserRuleContext {
	public expr2(): Expr2Context {
		return this.getRuleContext(0, Expr2Context);
	}
	public expr1_5(): Expr1_5Context | undefined {
		return this.tryGetRuleContext(0, Expr1_5Context);
	}
	public XOR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.XOR_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr1_5; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr1_5) {
			listener.enterExpr1_5(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr1_5) {
			listener.exitExpr1_5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr1_5) {
			return visitor.visitExpr1_5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr2Context extends ParserRuleContext {
	public expr3(): Expr3Context {
		return this.getRuleContext(0, Expr3Context);
	}
	public expr2(): Expr2Context | undefined {
		return this.tryGetRuleContext(0, Expr2Context);
	}
	public IFF_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IFF_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr2; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr2) {
			listener.enterExpr2(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr2) {
			listener.exitExpr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr2) {
			return visitor.visitExpr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr3Context extends ParserRuleContext {
	public expr4(): Expr4Context {
		return this.getRuleContext(0, Expr4Context);
	}
	public IMP_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.IMP_TOK, 0); }
	public expr3(): Expr3Context[];
	public expr3(i: number): Expr3Context;
	public expr3(i?: number): Expr3Context | Expr3Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr3Context);
		} else {
			return this.getRuleContext(i, Expr3Context);
		}
	}
	public ELSE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ELSE_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr3; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr3) {
			listener.enterExpr3(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr3) {
			listener.exitExpr3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr3) {
			return visitor.visitExpr3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr4Context extends ParserRuleContext {
	public expr4_5(): Expr4_5Context {
		return this.getRuleContext(0, Expr4_5Context);
	}
	public expr4(): Expr4Context | undefined {
		return this.tryGetRuleContext(0, Expr4Context);
	}
	public AND_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.AND_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr4; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr4) {
			listener.enterExpr4(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr4) {
			listener.exitExpr4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr4) {
			return visitor.visitExpr4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr4_5Context extends ParserRuleContext {
	public expr5(): Expr5Context[];
	public expr5(i: number): Expr5Context;
	public expr5(i?: number): Expr5Context | Expr5Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expr5Context);
		} else {
			return this.getRuleContext(i, Expr5Context);
		}
	}
	public UNTIL_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.UNTIL_TOK, 0); }
	public RELEASE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RELEASE_TOK, 0); }
	public SINCE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SINCE_TOK, 0); }
	public TRIGGERED_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TRIGGERED_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr4_5; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr4_5) {
			listener.enterExpr4_5(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr4_5) {
			listener.exitExpr4_5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr4_5) {
			return visitor.visitExpr4_5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr5Context extends ParserRuleContext {
	public expr6(): Expr6Context | undefined {
		return this.tryGetRuleContext(0, Expr6Context);
	}
	public NEG_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NEG_TOK, 0); }
	public expr5(): Expr5Context | undefined {
		return this.tryGetRuleContext(0, Expr5Context);
	}
	public ALWAYS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ALWAYS_TOK, 0); }
	public EVENTUALLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EVENTUALLY_TOK, 0); }
	public AFTER_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.AFTER_TOK, 0); }
	public BEFORE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BEFORE_TOK, 0); }
	public ONCE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ONCE_TOK, 0); }
	public HISTORICALLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.HISTORICALLY_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr5; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr5) {
			listener.enterExpr5(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr5) {
			listener.exitExpr5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr5) {
			return visitor.visitExpr5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr6Context extends ParserRuleContext {
	public expr7(): Expr7Context {
		return this.getRuleContext(0, Expr7Context);
	}
	public expr6(): Expr6Context | undefined {
		return this.tryGetRuleContext(0, Expr6Context);
	}
	public compareOp(): CompareOpContext | undefined {
		return this.tryGetRuleContext(0, CompareOpContext);
	}
	public NEG_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NEG_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr6; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr6) {
			listener.enterExpr6(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr6) {
			listener.exitExpr6(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr6) {
			return visitor.visitExpr6(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr7Context extends ParserRuleContext {
	public expr8(): Expr8Context {
		return this.getRuleContext(0, Expr8Context);
	}
	public NO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NO_TOK, 0); }
	public SOME_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SOME_TOK, 0); }
	public LONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LONE_TOK, 0); }
	public ONE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ONE_TOK, 0); }
	public TWO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TWO_TOK, 0); }
	public SET_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SET_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr7; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr7) {
			listener.enterExpr7(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr7) {
			listener.exitExpr7(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr7) {
			return visitor.visitExpr7(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr8Context extends ParserRuleContext {
	public expr9(): Expr9Context | undefined {
		return this.tryGetRuleContext(0, Expr9Context);
	}
	public expr8(): Expr8Context | undefined {
		return this.tryGetRuleContext(0, Expr8Context);
	}
	public expr10(): Expr10Context | undefined {
		return this.tryGetRuleContext(0, Expr10Context);
	}
	public PLUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PLUS_TOK, 0); }
	public MINUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.MINUS_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr8; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr8) {
			listener.enterExpr8(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr8) {
			listener.exitExpr8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr8) {
			return visitor.visitExpr8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr9Context extends ParserRuleContext {
	public expr10(): Expr10Context | undefined {
		return this.tryGetRuleContext(0, Expr10Context);
	}
	public CARD_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.CARD_TOK, 0); }
	public expr9(): Expr9Context | undefined {
		return this.tryGetRuleContext(0, Expr9Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr9; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr9) {
			listener.enterExpr9(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr9) {
			listener.exitExpr9(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr9) {
			return visitor.visitExpr9(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr10Context extends ParserRuleContext {
	public expr11(): Expr11Context {
		return this.getRuleContext(0, Expr11Context);
	}
	public expr10(): Expr10Context | undefined {
		return this.tryGetRuleContext(0, Expr10Context);
	}
	public PPLUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PPLUS_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr10; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr10) {
			listener.enterExpr10(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr10) {
			listener.exitExpr10(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr10) {
			return visitor.visitExpr10(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr11Context extends ParserRuleContext {
	public expr12(): Expr12Context {
		return this.getRuleContext(0, Expr12Context);
	}
	public expr11(): Expr11Context | undefined {
		return this.tryGetRuleContext(0, Expr11Context);
	}
	public AMP_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.AMP_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr11; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr11) {
			listener.enterExpr11(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr11) {
			listener.exitExpr11(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr11) {
			return visitor.visitExpr11(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr12Context extends ParserRuleContext {
	public expr13(): Expr13Context {
		return this.getRuleContext(0, Expr13Context);
	}
	public expr12(): Expr12Context | undefined {
		return this.tryGetRuleContext(0, Expr12Context);
	}
	public arrowOp(): ArrowOpContext | undefined {
		return this.tryGetRuleContext(0, ArrowOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr12; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr12) {
			listener.enterExpr12(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr12) {
			listener.exitExpr12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr12) {
			return visitor.visitExpr12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr13Context extends ParserRuleContext {
	public expr14(): Expr14Context {
		return this.getRuleContext(0, Expr14Context);
	}
	public expr13(): Expr13Context | undefined {
		return this.tryGetRuleContext(0, Expr13Context);
	}
	public SUBT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUBT_TOK, 0); }
	public SUPT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.SUPT_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr13; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr13) {
			listener.enterExpr13(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr13) {
			listener.exitExpr13(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr13) {
			return visitor.visitExpr13(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr14Context extends ParserRuleContext {
	public expr15(): Expr15Context | undefined {
		return this.tryGetRuleContext(0, Expr15Context);
	}
	public expr14(): Expr14Context | undefined {
		return this.tryGetRuleContext(0, Expr14Context);
	}
	public LEFT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_SQUARE_TOK, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	public RIGHT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_SQUARE_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr14; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr14) {
			listener.enterExpr14(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr14) {
			listener.exitExpr14(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr14) {
			return visitor.visitExpr14(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr15Context extends ParserRuleContext {
	public expr16(): Expr16Context | undefined {
		return this.tryGetRuleContext(0, Expr16Context);
	}
	public expr15(): Expr15Context | undefined {
		return this.tryGetRuleContext(0, Expr15Context);
	}
	public DOT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.DOT_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public LEFT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_SQUARE_TOK, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	public RIGHT_SQUARE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_SQUARE_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr15; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr15) {
			listener.enterExpr15(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr15) {
			listener.exitExpr15(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr15) {
			return visitor.visitExpr15(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr16Context extends ParserRuleContext {
	public expr17(): Expr17Context | undefined {
		return this.tryGetRuleContext(0, Expr17Context);
	}
	public expr16(): Expr16Context | undefined {
		return this.tryGetRuleContext(0, Expr16Context);
	}
	public PRIME_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PRIME_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr16; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr16) {
			listener.enterExpr16(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr16) {
			listener.exitExpr16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr16) {
			return visitor.visitExpr16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr17Context extends ParserRuleContext {
	public expr18(): Expr18Context | undefined {
		return this.tryGetRuleContext(0, Expr18Context);
	}
	public expr17(): Expr17Context | undefined {
		return this.tryGetRuleContext(0, Expr17Context);
	}
	public TILDE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.TILDE_TOK, 0); }
	public EXP_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EXP_TOK, 0); }
	public STAR_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.STAR_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr17; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr17) {
			listener.enterExpr17(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr17) {
			listener.exitExpr17(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr17) {
			return visitor.visitExpr17(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr18Context extends ParserRuleContext {
	public const(): ConstContext | undefined {
		return this.tryGetRuleContext(0, ConstContext);
	}
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public AT_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.AT_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public BACKQUOTE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BACKQUOTE_TOK, 0); }
	public THIS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.THIS_TOK, 0); }
	public LEFT_CURLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public quantDeclList(): QuantDeclListContext | undefined {
		return this.tryGetRuleContext(0, QuantDeclListContext);
	}
	public blockOrBar(): BlockOrBarContext | undefined {
		return this.tryGetRuleContext(0, BlockOrBarContext);
	}
	public RIGHT_CURLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public LEFT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_PAREN_TOK, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public RIGHT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_PAREN_TOK, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public sexpr(): SexprContext | undefined {
		return this.tryGetRuleContext(0, SexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_expr18; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExpr18) {
			listener.enterExpr18(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExpr18) {
			listener.exitExpr18(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExpr18) {
			return visitor.visitExpr18(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowExprContext extends ParserRuleContext {
	public qualName(): QualNameContext {
		return this.getRuleContext(0, QualNameContext);
	}
	public ARROW_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ARROW_TOK, 0); }
	public arrowExpr(): ArrowExprContext | undefined {
		return this.tryGetRuleContext(0, ArrowExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_arrowExpr; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterArrowExpr) {
			listener.enterArrowExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitArrowExpr) {
			listener.exitArrowExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitArrowExpr) {
			return visitor.visitArrowExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SexprDeclContext extends ParserRuleContext {
	public sexpr(): SexprContext {
		return this.getRuleContext(0, SexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_sexprDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterSexprDecl) {
			listener.enterSexprDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitSexprDecl) {
			listener.exitSexprDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitSexprDecl) {
			return visitor.visitSexprDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SexprContext extends ParserRuleContext {
	public SEXPR_TOK(): TerminalNode { return this.getToken(ForgeParser.SEXPR_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_sexpr; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterSexpr) {
			listener.enterSexpr(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitSexpr) {
			listener.exitSexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitSexpr) {
			return visitor.visitSexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstDeclContext extends ParserRuleContext {
	public INST_TOK(): TerminalNode { return this.getToken(ForgeParser.INST_TOK, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public bounds(): BoundsContext {
		return this.getRuleContext(0, BoundsContext);
	}
	public scope(): ScopeContext | undefined {
		return this.tryGetRuleContext(0, ScopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_instDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterInstDecl) {
			listener.enterInstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitInstDecl) {
			listener.exitInstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitInstDecl) {
			return visitor.visitInstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvalRelDeclContext extends ParserRuleContext {
	public arrowDecl(): ArrowDeclContext {
		return this.getRuleContext(0, ArrowDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_evalRelDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterEvalRelDecl) {
			listener.enterEvalRelDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitEvalRelDecl) {
			listener.exitEvalRelDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitEvalRelDecl) {
			return visitor.visitEvalRelDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvalDeclContext extends ParserRuleContext {
	public EVAL_TOK(): TerminalNode { return this.getToken(ForgeParser.EVAL_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_evalDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterEvalDecl) {
			listener.enterEvalDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitEvalDecl) {
			listener.exitEvalDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitEvalDecl) {
			return visitor.visitEvalDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExampleDeclContext extends ParserRuleContext {
	public EXAMPLE_TOK(): TerminalNode { return this.getToken(ForgeParser.EXAMPLE_TOK, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public IS_TOK(): TerminalNode { return this.getToken(ForgeParser.IS_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public FOR_TOK(): TerminalNode { return this.getToken(ForgeParser.FOR_TOK, 0); }
	public bounds(): BoundsContext {
		return this.getRuleContext(0, BoundsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_exampleDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterExampleDecl) {
			listener.enterExampleDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitExampleDecl) {
			listener.exitExampleDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitExampleDecl) {
			return visitor.visitExampleDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public COLON_TOK(): TerminalNode { return this.getToken(ForgeParser.COLON_TOK, 0); }
	public arrowExpr(): ArrowExprContext {
		return this.getRuleContext(0, ArrowExprContext);
	}
	public EQ_TOK(): TerminalNode { return this.getToken(ForgeParser.EQ_TOK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_queryDecl; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterQueryDecl) {
			listener.enterQueryDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitQueryDecl) {
			listener.exitQueryDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitQueryDecl) {
			return visitor.visitQueryDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberListContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public numberList(): NumberListContext | undefined {
		return this.tryGetRuleContext(0, NumberListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_numberList; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterNumberList) {
			listener.enterNumberList(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitNumberList) {
			listener.exitNumberList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitNumberList) {
			return visitor.visitNumberList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUM_CONST_TOK(): TerminalNode { return this.getToken(ForgeParser.NUM_CONST_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_number; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundsContext extends ParserRuleContext {
	public LEFT_CURLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_CURLY_TOK, 0); }
	public RIGHT_CURLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_CURLY_TOK, 0); }
	public bound(): BoundContext[];
	public bound(i: number): BoundContext;
	public bound(i?: number): BoundContext | BoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BoundContext);
		} else {
			return this.getRuleContext(i, BoundContext);
		}
	}
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public EXACTLY_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.EXACTLY_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_bounds; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBounds) {
			listener.enterBounds(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBounds) {
			listener.exitBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBounds) {
			return visitor.visitBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomNameOrNumberContext extends ParserRuleContext {
	public BACKQUOTE_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.BACKQUOTE_TOK, 0); }
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public MINUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.MINUS_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_atomNameOrNumber; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterAtomNameOrNumber) {
			listener.enterAtomNameOrNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitAtomNameOrNumber) {
			listener.exitAtomNameOrNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitAtomNameOrNumber) {
			return visitor.visitAtomNameOrNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundContext extends ParserRuleContext {
	public boundLHS(): BoundLHSContext | undefined {
		return this.tryGetRuleContext(0, BoundLHSContext);
	}
	public compareOp(): CompareOpContext | undefined {
		return this.tryGetRuleContext(0, CompareOpContext);
	}
	public bindRHSUnion(): BindRHSUnionContext | undefined {
		return this.tryGetRuleContext(0, BindRHSUnionContext);
	}
	public NO_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.NO_TOK, 0); }
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_bound; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBound) {
			listener.enterBound(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBound) {
			listener.exitBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBound) {
			return visitor.visitBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundLHSContext extends ParserRuleContext {
	public CARD_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.CARD_TOK, 0); }
	public qualName(): QualNameContext[];
	public qualName(i: number): QualNameContext;
	public qualName(i?: number): QualNameContext | QualNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualNameContext);
		} else {
			return this.getRuleContext(i, QualNameContext);
		}
	}
	public atomNameOrNumber(): AtomNameOrNumberContext | undefined {
		return this.tryGetRuleContext(0, AtomNameOrNumberContext);
	}
	public DOT_TOK(): TerminalNode[];
	public DOT_TOK(i: number): TerminalNode;
	public DOT_TOK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ForgeParser.DOT_TOK);
		} else {
			return this.getToken(ForgeParser.DOT_TOK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_boundLHS; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBoundLHS) {
			listener.enterBoundLHS(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBoundLHS) {
			listener.exitBoundLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBoundLHS) {
			return visitor.visitBoundLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindRHSUnionContext extends ParserRuleContext {
	public bindRHSProduct(): BindRHSProductContext | undefined {
		return this.tryGetRuleContext(0, BindRHSProductContext);
	}
	public bindRHSUnion(): BindRHSUnionContext | undefined {
		return this.tryGetRuleContext(0, BindRHSUnionContext);
	}
	public PLUS_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.PLUS_TOK, 0); }
	public LEFT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_PAREN_TOK, 0); }
	public RIGHT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_PAREN_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_bindRHSUnion; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBindRHSUnion) {
			listener.enterBindRHSUnion(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBindRHSUnion) {
			listener.exitBindRHSUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBindRHSUnion) {
			return visitor.visitBindRHSUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindRHSProductContext extends ParserRuleContext {
	public LEFT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_PAREN_TOK, 0); }
	public bindRHSProduct(): BindRHSProductContext | undefined {
		return this.tryGetRuleContext(0, BindRHSProductContext);
	}
	public RIGHT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_PAREN_TOK, 0); }
	public bindRHSProductBase(): BindRHSProductBaseContext | undefined {
		return this.tryGetRuleContext(0, BindRHSProductBaseContext);
	}
	public COMMA_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.COMMA_TOK, 0); }
	public ARROW_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.ARROW_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_bindRHSProduct; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBindRHSProduct) {
			listener.enterBindRHSProduct(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBindRHSProduct) {
			listener.exitBindRHSProduct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBindRHSProduct) {
			return visitor.visitBindRHSProduct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindRHSProductBaseContext extends ParserRuleContext {
	public atomNameOrNumber(): AtomNameOrNumberContext | undefined {
		return this.tryGetRuleContext(0, AtomNameOrNumberContext);
	}
	public qualName(): QualNameContext | undefined {
		return this.tryGetRuleContext(0, QualNameContext);
	}
	public LEFT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.LEFT_PAREN_TOK, 0); }
	public bindRHSUnion(): BindRHSUnionContext | undefined {
		return this.tryGetRuleContext(0, BindRHSUnionContext);
	}
	public RIGHT_PAREN_TOK(): TerminalNode | undefined { return this.tryGetToken(ForgeParser.RIGHT_PAREN_TOK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ForgeParser.RULE_bindRHSProductBase; }
	// @Override
	public enterRule(listener: ForgeListener): void {
		if (listener.enterBindRHSProductBase) {
			listener.enterBindRHSProductBase(this);
		}
	}
	// @Override
	public exitRule(listener: ForgeListener): void {
		if (listener.exitBindRHSProductBase) {
			listener.exitBindRHSProductBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ForgeVisitor<Result>): Result {
		if (visitor.visitBindRHSProductBase) {
			return visitor.visitBindRHSProductBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


