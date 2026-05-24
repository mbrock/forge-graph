import * as vscode from 'vscode';
import { buildDocsContext, FORGE_DOCS } from './forge-docs';

const FORGE_PARTICIPANT_ID = 'forge-fm.forge-assistant';

const BASE_PROMPT = `You are the Forge Assistant, an expert on the Forge modeling language (used in Brown University's CSCI 1710 course and beyond). Forge is a lightweight modeling language similar to Alloy, used for teaching formal methods and modeling.

Your role:
- Answer questions about Forge syntax, semantics, and usage
- Help debug Forge models and explain error messages
- Explain concepts like sigs, fields, constraints, predicates, functions, quantifiers, bounds, testing, and temporal operators
- Provide code examples in Forge when helpful
- Reference the official documentation when appropriate
- Be pedagogically minded: guide students toward understanding rather than just giving answers
- When showing Forge code, use proper Forge syntax (not Alloy or other languages)

Forge has three sublanguages:
- Froglet (#lang forge/froglet): functions and partial functions only
- Relational Forge (#lang forge): adds relations and relational operators  
- Temporal Forge (#lang forge/temporal): adds linear-temporal operators

Important Forge conventions:
- Sigs define types: sig Name { fields... }
- Fields have multiplicities: one, lone, set, func, pfunc
- Predicates (pred) define reusable constraint blocks
- Functions (fun) define reusable expressions
- Quantifiers: some, all, no, lone, one
- Run/check commands search for instances/counterexamples
- Testing: example, assert (necessary/sufficient/consistent), test expect
- Constraints are NOT instructions - they define rules the world must satisfy

NEVER provide answers to homework or assignments. If a student seems to be asking for a homework solution, guide them conceptually without giving the answer.`;

interface ForgeResult extends vscode.ChatResult {
    metadata: {
        command: string;
    };
}

export function registerForgeChat(context: vscode.ExtensionContext): void {
    const handler: vscode.ChatRequestHandler = async (
        request: vscode.ChatRequest,
        chatContext: vscode.ChatContext,
        stream: vscode.ChatResponseStream,
        token: vscode.CancellationToken
    ): Promise<ForgeResult> => {
        const command = request.command || '';

        // Handle /docs command - look up specific documentation
        if (command === 'docs') {
            return handleDocsCommand(request, chatContext, stream, token);
        }

        // Handle /explain command - explain Forge code
        if (command === 'explain') {
            return handleExplainCommand(request, chatContext, stream, token);
        }

        // Default: general Forge help with documentation context
        return handleGeneralQuery(request, chatContext, stream, token);
    };

    const participant = vscode.chat.createChatParticipant(FORGE_PARTICIPANT_ID, handler);
    participant.iconPath = vscode.Uri.joinPath(context.extensionUri, 'client', 'images', 'forge-logo.png');

    // Add followup provider
    participant.followupProvider = {
        provideFollowups(
            result: ForgeResult,
            _context: vscode.ChatContext,
            _token: vscode.CancellationToken
        ): vscode.ChatFollowup[] {
            const followups: vscode.ChatFollowup[] = [];

            if (result.metadata?.command !== 'docs') {
                followups.push({
                    prompt: 'Show me the relevant documentation for this topic',
                    command: 'docs',
                    label: 'Look up docs'
                });
            }

            return followups;
        }
    };

    context.subscriptions.push(participant);
}

async function handleDocsCommand(
    request: vscode.ChatRequest,
    chatContext: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
): Promise<ForgeResult> {
    const query = request.prompt;
    const docsContext = buildDocsContext(query);

    const messages = [
        vscode.LanguageModelChatMessage.User(
            `${BASE_PROMPT}\n\nThe user is asking about Forge documentation. Here is the relevant documentation:\n\n${docsContext}`
        ),
    ];

    // Include conversation history
    addHistoryToMessages(messages, chatContext);

    messages.push(
        vscode.LanguageModelChatMessage.User(
            `Based on the documentation above, please answer this question: ${query}\n\nInclude links to the relevant documentation pages when possible.`
        )
    );

    await streamResponse(request, messages, stream, token);

    return { metadata: { command: 'docs' } };
}

async function handleExplainCommand(
    request: vscode.ChatRequest,
    chatContext: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
): Promise<ForgeResult> {
    const query = request.prompt;
    
    // Get the user's active Forge file content if available
    let fileContext = '';
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.languageId === 'forge') {
        const content = editor.document.getText();
        const fileName = editor.document.fileName.split('/').pop();
        fileContext = `\n\nThe user's current Forge file (${fileName}):\n\`\`\`forge\n${content}\n\`\`\``;
    }

    const docsContext = buildDocsContext(query);

    const messages = [
        vscode.LanguageModelChatMessage.User(
            `${BASE_PROMPT}\n\nRelevant Forge documentation:\n\n${docsContext}${fileContext}`
        ),
    ];

    addHistoryToMessages(messages, chatContext);

    messages.push(
        vscode.LanguageModelChatMessage.User(
            `Please explain the following Forge code or concept. Be thorough but accessible:\n\n${query}`
        )
    );

    await streamResponse(request, messages, stream, token);

    return { metadata: { command: 'explain' } };
}

async function handleGeneralQuery(
    request: vscode.ChatRequest,
    chatContext: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
): Promise<ForgeResult> {
    const query = request.prompt;
    const docsContext = buildDocsContext(query);

    // Get the user's active Forge file content if available
    let fileContext = '';
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document.languageId === 'forge') {
        const content = editor.document.getText();
        const fileName = editor.document.fileName.split('/').pop();
        fileContext = `\n\nThe user's current Forge file (${fileName}):\n\`\`\`forge\n${content}\n\`\`\``;
    }

    const messages = [
        vscode.LanguageModelChatMessage.User(
            `${BASE_PROMPT}\n\nRelevant Forge documentation:\n\n${docsContext}${fileContext}`
        ),
    ];

    addHistoryToMessages(messages, chatContext);

    messages.push(
        vscode.LanguageModelChatMessage.User(query)
    );

    await streamResponse(request, messages, stream, token);

    return { metadata: { command: '' } };
}

function addHistoryToMessages(
    messages: vscode.LanguageModelChatMessage[],
    chatContext: vscode.ChatContext
): void {
    for (const turn of chatContext.history) {
        if (turn instanceof vscode.ChatRequestTurn) {
            messages.push(vscode.LanguageModelChatMessage.User(turn.prompt));
        } else if (turn instanceof vscode.ChatResponseTurn) {
            let fullMessage = '';
            for (const part of turn.response) {
                if (part instanceof vscode.ChatResponseMarkdownPart) {
                    fullMessage += part.value.value;
                }
            }
            if (fullMessage) {
                messages.push(vscode.LanguageModelChatMessage.Assistant(fullMessage));
            }
        }
    }
}

async function streamResponse(
    request: vscode.ChatRequest,
    messages: vscode.LanguageModelChatMessage[],
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
): Promise<void> {
    try {
        const chatResponse = await request.model.sendRequest(messages, {}, token);

        for await (const fragment of chatResponse.text) {
            stream.markdown(fragment);
        }
    } catch (err) {
        handleError(err, stream);
    }
}

function handleError(err: unknown, stream: vscode.ChatResponseStream): void {
    if (err instanceof vscode.LanguageModelError) {
        console.error('Forge Assistant LM error:', err.message, err.code);
        stream.markdown(
            "I encountered an error while processing your question. " +
            "Please make sure you have an active language model available (e.g., GitHub Copilot). " +
            "You can also check the [Forge documentation](https://forge-fm.github.io/forge-documentation/5.0/) directly."
        );
    } else {
        throw err;
    }
}
