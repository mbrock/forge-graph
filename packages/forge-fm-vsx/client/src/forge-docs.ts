/**
 * Bundled Forge documentation from https://forge-fm.github.io/forge-documentation/5.0/
 * 
 * This module contains the complete Forge v5 documentation, organized by topic,
 * for use as context in the @forge chat participant.
 */

export interface ForgeDocSection {
    title: string;
    url: string;
    content: string;
    keywords: string[];
}

export const FORGE_DOCS: ForgeDocSection[] = [
    {
        title: "Overview",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/overview/",
        keywords: ["overview", "model", "system", "instance", "satisfiable", "unsatisfiable", "atoms", "what is forge"],
        content: `Forge is a tool (and a set of languages) for defining models of systems and exploring instances of those models.

A system can be thought of as a particular way that various entities interact. A model is a representation of a system that faithfully includes some but usually not all of the system's complexity.

Forge comprises three sublanguages:
- Froglet (#lang forge/froglet): modeling using only functions and partial functions
- Relational Forge (#lang forge): extends Froglet with relations and relational operators
- Temporal Forge (#lang forge/temporal): extends Forge with linear-temporal operators

An instance is a concrete scenario that abides by the rules of a model, containing specific atoms and their relationships. A model is satisfiable if there exists some satisfying instance; unsatisfiable if no instance satisfies it.

Key difference from programming: given a lack of instructions, a program does nothing; given a lack of constraints, a model allows everything.`
    },
    {
        title: "Sigs",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/sigs/sigs/",
        keywords: ["sig", "signature", "type", "field", "declare", "define"],
        content: `Sigs (short for "signatures") are the basic building block of any model in Forge. They represent the types of the system being modeled.

Syntax:
  sig <name> {}
  sig <name> { <field>, <field>, ... }

Fields define relationships between members of that sig and other atoms. Each field has:
- a name
- a multiplicity (one, lone, pfunc, func, or in Relational/Temporal Forge: set)
- a type (a -> separated list of sig names, including Int)

Example - Person with optional best friend:
  sig Person { bestFriend: lone Person }

Example - Linked list node:
  sig Node { next: one Node }

Example - Binary tree:
  sig Node { left: lone Node, right: lone Node, val: one Int }

Example - No fields:
  sig Student {}
  sig Group { member: set Student }

IMPORTANT: Field names must be unique across all sigs. Commas between fields, no comma after the last one.`
    },
    {
        title: "Inheritance",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/sigs/inheritance/",
        keywords: ["extends", "inherit", "parent", "child", "hierarchy"],
        content: `Sigs may inherit from other sigs via the extends keyword:
  sig <name> extends <parent sig name> { <additional fields> ... }

Rules:
- Sigs may only have at most one parent sig
- No object can belong to more than one immediate child of any sig
- Two sigs A and B will never contain an object in common unless one descends from the other
- Child sigs inherit all fields from their parent

Example:
  sig Cat { favoriteFood: one Food }
  sig ActorCat extends Cat { playName: one Play }
  sig ProgrammerCat extends Cat {}
Any ProgrammerCat is also a Cat and has a favoriteFood. Only ActorCats have playName. A cat may be ActorCat, ProgrammerCat, or neither, but not both.

When using examples/inst, you must specify bounds for parent sigs once child sigs are bound.`
    },
    {
        title: "Singleton, Maybe, and Abstract Sigs",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/sigs/singleton-maybe-sigs/",
        keywords: ["one sig", "lone sig", "abstract sig", "singleton", "abstract"],
        content: `Sig declarations can be annotated:
- one sig: always exactly one object of that sig
- lone sig: never more than one object of that sig
- abstract sig: any object of that sig must also be a member of some child sig

Example - one sig:
  sig Dog {}
  one sig Boatswain extends Dog {}

Example - abstract sig:
  abstract sig Student {}
  sig Undergrad, Grad extends Student {}
Any Student must be either Undergrad or Grad.

Example - lone sig:
  abstract sig Ingredient {}
  lone sig Potatoes extends Ingredient {}
  lone sig Carrots extends Ingredient {}`
    },
    {
        title: "Field Multiplicity",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/sigs/multiplicity/",
        keywords: ["multiplicity", "one", "lone", "set", "func", "pfunc", "function", "partial function", "relation"],
        content: `Multiplicities define how data can be arranged in a field.

Singleton fields:
- one: a singleton value (always contains exactly one object)
- lone: either a singleton or no value (0 or 1 object)

Example:
  sig Student { advisor: one Faculty, concentration: lone Concentration }

Set fields (Relational and Temporal Forge only):
- set: holds a set of atoms (0 or more)
  sig Student { friends: set Student }

Function fields:
- func A -> B -> ... -> Z: total function (every input maps to exactly one output)
- pfunc A -> B -> ... -> Z: partial function (inputs may have 0 or 1 output)

Example:
  sig Student { grades: pfunc Course -> Grade }
pfunc is analogous to maps/dictionaries in OOP.

Relation fields (Relational and Temporal Forge only):
- set used for arbitrary relations that may not be functions:
  sig Student { partnersIn: set Course -> Student }

Froglet does NOT support set multiplicity.`
    },
    {
        title: "Constraints",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/constraints/",
        keywords: ["constraint", "rule", "formula", "expression", "boolean"],
        content: `Constraints limit how objects can behave in a model. Key distinction from programming:
- Given a lack of instructions, a program does nothing.
- Given a lack of constraints, a model allows everything.

Two kinds of syntax:
- Formulas: always evaluate to booleans (true or false)
- Expressions: always evaluate to objects or sets of objects

Forge is NOT 'truthy' - using an expression where a formula is expected (or vice versa) produces an error.

Example:
  all s: Student | s.degreeGranted = AB implies {
    some disj course1, course2: Course | course1.pathway = course2.pathway
  }

An instance contains:
- a set of atoms for each sig definition
- a concrete function (or partial function) for each field`
    },
    {
        title: "Formulas",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/formulas/formulas/",
        keywords: ["formula", "boolean", "true", "false"],
        content: `Formulas are Forge syntax that evaluate to boolean values given an instance. If a formula is true of an instance, the instance satisfies the formula.`
    },
    {
        title: "Formula Operators",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/formulas/operators/",
        keywords: ["not", "and", "or", "implies", "iff", "else", "operator", "negation", "conjunction", "disjunction", "implication"],
        content: `Formula operators combine smaller formulas:

- not (alt: !): true when fmla is false
- and (alt: &&): true when both are true
- or (alt: ||): true when either is true
- implies (alt: =>): true when either fmla-a is false or fmla-b is true
- implies else (alt: => else): if-then-else for formulas
- iff (alt: <=>): true when both have the same truth value

Implicit and: Consecutive formulas within { ... } are implicitly combined with "and".
  { some p.spouse
    p.spouse != p }
is equivalent to: some p.spouse and p.spouse != p`
    },
    {
        title: "Cardinality and Membership",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/formulas/cardinality-membership/",
        keywords: ["no", "lone", "one", "some", "in", "subset", "cardinality", "membership", "empty"],
        content: `Operators producing formulas from expression arguments:

- no <expr>: true when expr is empty
- lone <expr>: true when expr contains zero or one elements
- one <expr>: true when expr contains exactly one element
- some <expr>: true when expr contains at least one element
- <expr-a> in <expr-b>: true when expr-a is a subset of or equal to expr-b
- <expr-a> = <expr-b>: true when both contain exactly the same elements`
    },
    {
        title: "Quantifiers",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/formulas/quantifiers/",
        keywords: ["some", "all", "no", "lone", "one", "quantifier", "for all", "exists", "disj", "disjoint"],
        content: `Quantify over a unary set:
- some <x>: <expr> | { <fmla> }: true when fmla is true for at least one element
- all <x>: <expr> | { <fmla> }: true when fmla is true for all elements

Multiple variables:
  some <x>: <expr-a>, <y>: <expr-b> | { <fmla> }
  some <x>, <y>: <expr> | { <fmla> }

Complex quantifiers:
- no <x>: <expr> | { <fmla> }: true when fmla is false for all elements
- lone <x>: <expr> | { <fmla> }: true when fmla is true for zero or one elements
- one <x>: <expr> | { <fmla> }: true when fmla is true for exactly one element

WARNING: no, one, and lone quantifiers do NOT commute like some and all do.
WARNING: "one x, y: A | ..." means "unique pair <x,y>" which differs from "one x: A | one y: A | ..."

Disjoint quantification:
  some disj x, y: A | ... (adds implicit x != y and ...)
  all disj x, y: A | ... (adds implicit x != y implies ...)`
    },
    {
        title: "Predicates",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/formulas/predicates/",
        keywords: ["pred", "predicate", "reusable", "named constraint"],
        content: `Predicates define reusable named sets of constraints:
  pred <pred-name> {
    <fmla-1>
    <fmla-2>
    ...
  }

Newlines between formulas are implicitly combined with "and".

Predicates can have arguments (evaluated via substitution):
  pred parentOrChildOf[p1, p2: Person] {
    p2 = p1.parent1 or p2 = p1.parent2 or
    p1 = p2.parent1 or p1 = p2.parent1
  }

Usage: some p : Person | parentOrChildOf[Tim, p]
Predicates may be used anywhere a formula can appear.

IMPORTANT: Unless a predicate is explicitly used in run/check, it will not take effect.`
    },
    {
        title: "Expressions",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/expressions/expressions/",
        keywords: ["expression", "set", "atom", "evaluate"],
        content: `Expressions evaluate to sets of atoms given an instance.

In Froglet, expressions must always denote a single atom or the empty set (none), matching the abstraction where fields are always either total (one, func) or partial (lone, pfunc) functions.`
    },
    {
        title: "Functions",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/expressions/functions/",
        keywords: ["fun", "function", "helper", "reusable expression"],
        content: `Functions define reusable expressions (available in Relational and Temporal Forge):
  fun <fun-name>[<args>]: <result-type> { <expr> }

Example:
  fun inLawA[p: Person]: one Person { p.spouse.parent1 }

Usage: all p: Person | some inLawA[p]
Expands to: all p: Person | some (p.spouse.parent1)

Functions may be used anywhere expressions can appear.`
    },
    {
        title: "Let Expressions",
        url: "https://forge-fm.github.io/forge-documentation/5.0/building-models/constraints/expressions/let-expressions/",
        keywords: ["let", "bind", "local", "variable"],
        content: `Bind an expression to an identifier locally:
  let <id> = <expression> | <formula>

Example:
  let s2 = Traces.nextState[s] | canTransition[s, s2]

Useful in Sterling's evaluator for debugging:
  let p = Person0 | some p.spouse

WARNING with temporal operators: let uses substitution, so:
  let oldCount = Counter.count | next_state Counter.count = add[oldCount, 1]
becomes:
  next_state Counter.count = add[Counter.count, 1]
which says counter must be one greater than ITSELF in the next state (unsatisfiable).`
    },
    {
        title: "Running Models",
        url: "https://forge-fm.github.io/forge-documentation/5.0/running-models/running/",
        keywords: ["run", "check", "execute", "command", "instance", "satisfiable", "counterexample"],
        content: `How to Run:
- Use the Forge VSCode extension's play button, or
- Run from terminal: racket <modelname.frg>

Command-line flags:
  -o / -option: set option (file overrides)
  -O / -override: set option (overrides file)

Run command - find satisfying instances:
  <run-name>: run <pred> for <bounds>
  <run-name>: run { <expr> } for <bounds>
Displays instances where predicates evaluate to true. Shows "UNSAT" if none found.

Check command - find counterexamples:
  <check-name>: check <pred> for <bounds>
  <check-name>: check { <expr> } for <bounds>
Shows instances where predicate evaluates to false.

COMMON MISTAKE: Unless a predicate is explicitly used in run/check (or invoked by one that is), it will NOT take effect. E.g., if you defined "wellformed" but run {}, wellformed won't hold.`
    },
    {
        title: "Bounds",
        url: "https://forge-fm.github.io/forge-documentation/5.0/running-models/bounds/",
        keywords: ["bounds", "scope", "numeric", "instance bounds", "exactly", "for", "upper bound"],
        content: `Forge is a bounded model finder - it only looks for instances up to a certain bound.

Numeric bounds (scopes):
  run { ... } for 5 Cat           -- 0 to 5 cats
  run { ... } for 5 Cat, 2 Dog    -- 0-5 cats, 0-2 dogs
  run { ... } for exactly 5 Cat   -- exactly 5 cats
Default: up to 4 of each sig. Default Int bitwidth: 4 (16 integers).

Exceptions:
- Int is always fixed exactly by bitwidth (3 Int = 8 integers: -4 to 3)
- If "is linear" annotation present, the sig becomes exact-bounded

Instance bounds - encode specific partial instances:
  inst exampleInstance {
    Person = \`Person0 + \`Person1 + \`Person2
    spouse = \`Person0 -> \`Person1 + \`Person1 -> \`Person0
  }
Atom names must be prefixed with backtick (\`).
Can be used in run: run {} for 3 Int for exampleInstance`
    },
    {
        title: "Options",
        url: "https://forge-fm.github.io/forge-documentation/5.0/running-models/options/",
        keywords: ["option", "verbose", "solver", "sterling", "setting", "configuration"],
        content: `Forge options: option <key> <value>

Available options:
- verbose: 0 (minimal) to 10 (debug). Default: 1
- solver: SAT4J (default), MiniSat, MiniSatProver, Glucose, or custom path
- logtranslation: 0 (default); set to 1+ for unsat cores
- coregranularity: 0 (default); set to 1 for visible cores
- core_minimization: off (default), rce (minimal), hybrid
- sb: symmetry-breaking size (default 20)
- skolem_depth: 0 (default); -1 to disable
- run_sterling: on (default), off, or filepath to auto-load script
- sterling_port: default picks unused ephemeral port
- test_keep: first (default) stops on first failure; last runs all tests
- no_overflow: false (default); true excludes overflow-dependent instances

Options apply from where they occur onward until changed.`
    },
    {
        title: "Testing",
        url: "https://forge-fm.github.io/forge-documentation/5.0/testing-chapter/testing/",
        keywords: ["test", "example", "assert", "test suite", "test expect", "necessary", "sufficient", "consistent", "sat", "unsat"],
        content: `Forge supports several testing constructs:

1. example - test specific instances against predicates:
  example diagonalPasses is {wellformed} for {
    Board = \`Board0
    X = \`X0
    O = \`O0
    \`Board0.board = (0,0)->\`X + (1,1)->\`X + (2,2)->\`X
  }
Must give values for all sigs and fields. Not supported in Temporal Forge.

2. assert - abstract property tests:
  assert fullFirstRow is sufficient for winning for 1 Board
  assert someMoveTaken is necessary for winning for 1 Board
  assert fullFirstRow is sat
  assert fullFirstRow is consistent with wellformed

Assert types: is necessary for, is sufficient for, is consistent with, is sat, is unsat.
Supports universal quantification: assert all b: Board | fullFirstRow[b] is sufficient for winning

3. test suite - organize tests:
  test suite for winning { ... }

4. test expect - low-level checks:
  test expect { possibleToMove: {someMoveTaken} is sat }
Types: is sat, is unsat, is checked, is forge_error.`
    },
    {
        title: "Temporal Forge (Electrum)",
        url: "https://forge-fm.github.io/forge-documentation/5.0/electrum/electrum-overview/",
        keywords: ["temporal", "electrum", "var", "always", "eventually", "next_state", "prev_state", "until", "trace", "lasso", "LTL", "state"],
        content: `Temporal Forge extends Forge with temporal operators for dynamic systems.
Use #lang forge/temporal.

Traces are always lasso-shaped (end in a loop). Options:
  option max_tracelength <k>  (default: 5)
  option min_tracelength <k>  (default: 1)

Variable state (var):
  sig Vertex { var edges: set Vertex }  -- edges may change over time
  var sig Student {}                     -- set of students may change

Priming operator ('): expression in the next state
  cookies' in cookies  -- cookies never grows

Future-time LTL operators:
- next_state <fmla>: true if fmla holds in state i+1
- always <fmla>: true if fmla holds in every state >= i
- eventually <fmla>: true if fmla holds in some state >= i
- <fmla-a> until <fmla-b>: fmla-a holds until fmla-b becomes true
- <fmla-a> releases <fmla-b>: dual of until

Past-time LTL operators:
- prev_state <fmla>: true if fmla holds in state i-1 (false at state 0)
- historically <fmla>: true if fmla holds in every state <= i
- once <fmla>: true if fmla holds in some state <= i

WARNING: Don't use let with temporal operators (substitution issue):
  let oldCount = Counter.count | next_state Counter.count = add[oldCount, 1]
This becomes unsatisfiable because let substitutes Counter.count in the next state.

Note for Alloy users: Forge uses next_state/prev_state instead of after/before.`
    },
    {
        title: "Integers",
        url: "https://forge-fm.github.io/forge-documentation/5.0/forge-standard-library/integers/",
        keywords: ["int", "integer", "number", "add", "subtract", "multiply", "divide", "bitwidth", "overflow", "counting", "sum", "min", "max", "remainder"],
        content: `Forge uses bit-vector integers with two's complement encoding.
With bitwidth k, integers are in [-2^(k-1), 2^(k-1)-1]. Default bitwidth: 4.

WARNING: add[7,1] = -8 at bitwidth 4 (overflow/wrap-around)!

Integer Operators:
- add[a, b, ...]: sum
- subtract[a, b, ...]: difference
- multiply[a, b, ...]: product
- divide[a, b, ...]: integer quotient
- remainder[a, b]: modulo
- abs[value]: absolute value
- sign[value]: 1, 0, or -1

Comparison: =, <, <=, >, >=

Counting:
- #expr: cardinality of expression
- #{x1: T1, ..., xn: Tn | fmla}: count tuples satisfying fmla (works in Froglet too)

Aggregation:
- sum[atoms]: sum of int atom values
- max[atoms], min[atoms]: max/min of int atom values
- sum x: set | { int-expr }: sum aggregator (counts duplicates, unlike sum[A.i])

succ: successor relation (Int -> Int), each Int points to its successor.`
    },
    {
        title: "Constants and Keywords",
        url: "https://forge-fm.github.io/forge-documentation/5.0/forge-standard-library/constants-and-keywords/",
        keywords: ["univ", "none", "iden", "constant", "keyword", "reserved"],
        content: `Built-in constants:
- univ (arity 1): set of all objects in the universe (including Ints)
- none (arity 1): the empty set (for higher arity: none -> none)
- iden: identity relation (total function from all objects to themselves)
- Int: set of available integer objects (default: -8 to 7)

Reserved keywords (cannot be used as names):
state, transition, sig, pred, fun, test, expect, assert, run, check, is, for,
and names of arithmetic operators, helpers, and built-in constants.`
    },
    {
        title: "Helpers - Sequences and Reachability",
        url: "https://forge-fm.github.io/forge-documentation/5.0/forge-standard-library/helpers/",
        keywords: ["reachable", "sequence", "isSeqOf", "seqFirst", "seqLast", "elems", "inds", "helper"],
        content: `Sequences:
A sequence is a field f: pfunc Int -> A where:
- f is a partial function
- no index is less than zero
- indexes are contiguous

Use isSeqOf[f, A] to enforce sequence constraints.

Sequence helpers:
- seqFirst[f]: first element (f[0])
- seqLast[f]: last element
- indsOf[f, e]: all indices of element e
- idxOf[f, e]: first index of e
- lastIdxOf[f, e]: last index of e
- elems[f]: all elements
- inds[f]: all indices
- isEmpty[f]: true if empty
- hasDups[f]: true if has duplicates

Reachability:
- reachable[a, b, f]: a is reachable from b through field f (one or more steps)
- reachable[a, b, f1, f2, ...]: using multiple fields (e.g., left, right in binary trees)

WARNING: Order matters! First arg is destination, second is source.
WARNING: none is reachable from anything (reachable evaluates to true if first arg is none).`
    },
    {
        title: "Glossary and Common Errors",
        url: "https://forge-fm.github.io/forge-documentation/5.0/glossary/",
        keywords: ["error", "glossary", "arity", "atom", "instance", "model", "contract violation", "unexpected type", "upper bound"],
        content: `Terms:
- Arity: number of columns in a relation
- Atom: a distinct object within an instance
- Instance: concrete scenario with specific atoms and relationships
- Model: representation of a system (sigs, fields, constraints)

Common Errors:

"Please specify an upper bound for ancestors of A":
You defined contents of child sig A but Forge can't infer parent sig contents. Fix: add bounds for the parent sig.

"Invalid example ... the instance specified is impossible":
Your example violates type declarations (like a total function missing entries), separate from the predicate being tested.

"Contract violation" or "Unexpected type":
You used an expression where a formula was expected, or vice versa.
Example: "some p: Person | p.spouse" -- p.spouse is an expression, not a formula.
Fix: "some p: Person | some p.spouse"

"=>: argument to => had unexpected type":
implies expects formulas on both sides. Check that you're not passing an expression.`
    }
];

/**
 * Find documentation sections relevant to a query.
 * Uses keyword matching to find the most relevant sections.
 */
export function findRelevantDocs(query: string, maxSections = 6): ForgeDocSection[] {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
    
    const scored = FORGE_DOCS.map(section => {
        let score = 0;
        
        // Check keyword matches
        for (const keyword of section.keywords) {
            if (queryLower.includes(keyword)) {
                score += 3;
            }
            for (const word of queryWords) {
                if (keyword.includes(word) || word.includes(keyword)) {
                    score += 1;
                }
            }
        }
        
        // Check title match
        if (queryLower.includes(section.title.toLowerCase())) {
            score += 5;
        }
        
        // Check content for query words
        const contentLower = section.content.toLowerCase();
        for (const word of queryWords) {
            if (contentLower.includes(word)) {
                score += 0.5;
            }
        }

        return { section, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored
        .filter(s => s.score > 0)
        .slice(0, maxSections)
        .map(s => s.section);
}

/**
 * Build a documentation context string from relevant sections.
 */
export function buildDocsContext(query: string): string {
    const sections = findRelevantDocs(query);
    
    if (sections.length === 0) {
        // Return a general overview if no specific match
        return FORGE_DOCS.slice(0, 4).map(s => 
            `## ${s.title}\n${s.content}`
        ).join('\n\n---\n\n');
    }

    return sections.map(s => 
        `## ${s.title}\nSource: ${s.url}\n\n${s.content}`
    ).join('\n\n---\n\n');
}
