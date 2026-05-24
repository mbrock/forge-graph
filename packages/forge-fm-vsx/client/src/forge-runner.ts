import { ChildProcess, spawn, execSync } from 'child_process';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { Diagnostic, DiagnosticCollection, DiagnosticSeverity } from 'vscode';

/**
 * Strip ANSI escape codes from a string.
 */
function stripAnsi(text: string): string {
    return text.replace(/\u001b\[[0-9;]*m/g, '');
}

export interface ForgeRunOptions {
    args?: string[];
    onStdout?: (data: string) => void;
    onStderr?: (data: string) => void;
    onExit?: (code: number | null) => void;
}

export interface ForgeErrorLocation {
    linenum: number;
    colnum: number;
    start: vscode.Position;
    end: vscode.Position;
    range: vscode.Range;
    line: string;
    index: number;
    filename: string;
}

export interface ForgeEnvironment {
    racketPath: string;
    forgeVersion: string;
}

/**
 * Lightweight, robust Forge/Racket runner.
 * Handles discovery, verification, and execution of Forge programs.
 */
export class ForgeRunner {
    private static instance: ForgeRunner | null = null;
    private currentProcess: ChildProcess | null = null;
    private wasKilledManually = false;
    private environment: ForgeEnvironment | null = null;

    private constructor(private output: vscode.OutputChannel) {}

    public static getInstance(output: vscode.OutputChannel): ForgeRunner {
        if (!ForgeRunner.instance) {
            ForgeRunner.instance = new ForgeRunner(output);
        }
        return ForgeRunner.instance;
    }

    /**
     * Discover and verify the Forge environment.
     * Checks: user config → PATH → common install locations
     */
    async initialize(): Promise<void> {
        if (this.environment) {
            return; // Already initialized
        }

        const racketPath = await this.discoverRacket();
        if (!racketPath) {
            throw new Error(
                'Racket not found. Please install Racket from https://racket-lang.org/ or configure "forge.racketPath" in settings.'
            );
        }

        const forgeVersion = await this.verifyForge(racketPath);
        if (!forgeVersion) {
            throw new Error(
                'Forge package not found. Please install it with: raco pkg install forge'
            );
        }

        this.environment = { racketPath, forgeVersion };
        this.output.appendLine(`✓ Racket found: ${racketPath}`);
        this.output.appendLine(`✓ Forge version: ${forgeVersion}`);
    }

    /**
     * Discover Racket executable path.
     * Priority: 1) VS Code setting, 2) PATH, 3) common locations
     */
    private async discoverRacket(): Promise<string | null> {
        // 1. Check user configuration
        const config = vscode.workspace.getConfiguration('forge');
        const configuredPath = config.get<string>('racketPath');
        if (configuredPath && this.isValidRacket(configuredPath)) {
            return configuredPath;
        }

        // 2. Check PATH
        try {
            const pathResult = execSync('which racket', { encoding: 'utf-8' }).trim();
            if (pathResult && this.isValidRacket(pathResult)) {
                return pathResult;
            }
        } catch {
            // Not in PATH, continue to common locations
        }

        // 3. Check common installation locations
        const commonPaths = [
            '/usr/local/bin/racket',
            '/usr/bin/racket',
            '/opt/homebrew/bin/racket',
            path.join(process.env.HOME || '', '.local/bin/racket'),
            'C:\\Program Files\\Racket\\racket.exe',
            'C:\\Program Files (x86)\\Racket\\racket.exe',
        ];

        for (const candidatePath of commonPaths) {
            if (this.isValidRacket(candidatePath)) {
                return candidatePath;
            }
        }

        return null;
    }

    /**
     * Check if a path points to a valid Racket executable.
     */
    private isValidRacket(racketPath: string): boolean {
        try {
            if (!fs.existsSync(racketPath)) {
                return false;
            }
            const result = execSync(`"${racketPath}" --version`, { 
                encoding: 'utf-8',
                timeout: 5000 
            });
            return result.toLowerCase().includes('racket');
        } catch {
            return false;
        }
    }

    /**
     * Verify Forge is installed and get its version.
     */
    private async verifyForge(racketPath: string): Promise<string | null> {
        try {
            // Try to get Forge package info
            const result = execSync(`"${racketPath}" -e "(require forge/info) (display (version))"`, {
                encoding: 'utf-8',
                timeout: 10000,
                stdio: ['pipe', 'pipe', 'pipe']
            });
            
            // Extract version from output
            const versionMatch = result.match(/\d+\.\d+\.\d+/);
            return versionMatch ? versionMatch[0] : 'unknown';
        } catch {
            // Forge might not expose version this way, try alternative
            try {
                execSync(`raco pkg show forge`, { 
                    encoding: 'utf-8',
                    timeout: 5000 
                });
                return 'installed'; // At least it's installed
            } catch {
                return null;
            }
        }
    }

    /**
     * Check if minimum Forge version requirement is met.
     */
    async checkMinVersion(minVersion: string): Promise<boolean> {
        if (!this.environment) {
            await this.initialize();
        }

        const installedVersion = this.environment!.forgeVersion;
        if (installedVersion === 'installed' || installedVersion === 'unknown') {
            // Can't determine version, assume it's okay
            return true;
        }

        return this.compareVersions(installedVersion, minVersion) >= 0;
    }

    /**
     * Compare two semantic version strings.
     */
    private compareVersions(v1: string, v2: string): number {
        const parts1 = v1.split('.').map(Number);
        const parts2 = v2.split('.').map(Number);

        for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
            const num1 = parts1[i] || 0;
            const num2 = parts2[i] || 0;
            if (num1 > num2) return 1;
            if (num1 < num2) return -1;
        }
        return 0;
    }

    /**
     * Run a Forge file.
     */
    async runFile(filePath: string, options: ForgeRunOptions = {}): Promise<void> {
        if (!this.environment) {
            await this.initialize();
        }

        // Kill any existing process
        this.kill(false);
        this.wasKilledManually = false;

        return new Promise((resolve, reject) => {
            const racketPath = this.environment!.racketPath;

            // Spawn Racket process with file
            this.currentProcess = spawn(racketPath, [filePath, ...(options.args ?? [])], {
                cwd: path.dirname(filePath),
                env: { ...process.env }
            });

            // Handle stdout
            this.currentProcess.stdout?.on('data', (data) => {
                if (options.onStdout) {
                    options.onStdout(data.toString());
                }
            });

            // Handle stderr
            this.currentProcess.stderr?.on('data', (data) => {
                if (options.onStderr) {
                    options.onStderr(data.toString());
                }
            });

            // Handle exit
            this.currentProcess.on('exit', (code) => {
                if (options.onExit) {
                    options.onExit(code);
                }
                resolve();
            });

            // Handle errors (e.g., spawn failure)
            this.currentProcess.on('error', (err) => {
                this.output.appendLine(`Error running Forge: ${err.message}`);
                reject(err);
            });
        });
    }

    /**
     * Send input to the running Forge process (e.g., for Sterling continuation).
     */
    sendInput(input: string): boolean {
        if (this.currentProcess && this.currentProcess.stdin) {
            return this.currentProcess.stdin.write(input);
        }
        return false;
    }

    /**
     * Kill the current Forge process.
     */
    kill(manual: boolean): void {
        if (!this.currentProcess) {
            return;
        }

        this.wasKilledManually = manual;

        try {
            // Use SIGTERM for graceful shutdown, let OS handle it
            this.currentProcess.kill('SIGTERM');
            
            // Set a timeout for forceful kill if needed
            const pid = this.currentProcess.pid;
            setTimeout(() => {
                if (pid && this.isProcessStillRunning(pid)) {
                    try {
                        process.kill(pid, 'SIGKILL');
                        this.output.appendLine(`Forcefully killed Forge process (PID: ${pid})`);
                    } catch {
                        // Process already dead
                    }
                }
            }, 3000);
        } catch (err) {
            this.output.appendLine(`Error killing Forge process: ${err}`);
        } finally {
            this.currentProcess = null;
        }
    }

    /**
     * Check if a process is still running.
     */
    private isProcessStillRunning(pid: number): boolean {
        try {
            process.kill(pid, 0); // Signal 0 checks existence without killing
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Check if process was killed manually by user.
     */
    isKilledManually(): boolean {
        return this.wasKilledManually;
    }

    /**
     * Get the current Forge environment info.
     */
    getEnvironment(): ForgeEnvironment | null {
        return this.environment;
    }

    /**
     * Reset the runner (mainly for testing).
     */
    reset(): void {
        this.kill(false);
        this.environment = null;
    }

    // ========== Error Parsing Utilities ==========

    /**
     * Parse Forge error from output line and create diagnostics.
     */
    sendEvalErrors(text: string, fileURI: vscode.Uri, diagnosticCollection: DiagnosticCollection): void {
        this.appendErrorOutput(text);

        const textLines = text.split(/[\n\r]/);
        const errorList = textLines
            .map((line) => ForgeRunner.matchForgeError(line))
            .filter((x) => x != null) as ForgeErrorLocation[];

        const diagnostics: Diagnostic[] = errorList.map((errLocation) => ({
            severity: DiagnosticSeverity.Error,
            range: errLocation.range,
            message: `Forge Evaluation Error: ${errLocation.line}`,
            source: 'Forge'
        }));

        diagnosticCollection.set(fileURI, diagnostics);

        const linenum = errorList.length > 0 ? errorList[0].linenum : null;
        const colnum = errorList.length > 0 ? errorList[0].colnum : null;
        ForgeRunner.showFileWithOpts(fileURI.fsPath, linenum, colnum);
    }

    /**
     * Append errors to the output channel with a clear prefix.
     */
    private appendErrorOutput(text: string): void {
        stripAnsi(text).split(/[\n\r]/)
            .map((line) => line.trimEnd())
            .filter((line) => line.length > 0)
            .forEach((line) => this.output.appendLine(`[error] ${line}`));
    }

    /**
     * Parse Forge error patterns from a line of output.
     * Returns location information if an error is found, null otherwise.
     */
    static matchForgeError(line: string): ForgeErrorLocation | null {
        /* Multiple error patterns from Forge */
        const testFailurePattern = /[\\/]*?([^\\/\n\s]*\.frg):(\d+):(\d+) \(span (\d+)\)\]/;
        const raiseSyntaxErrorPattern = /[\\/]*?([^\\/\n\s]*\.frg):(\d+):(\d+):?/;
        const raiseForgeErrorWithFileNamePattern = /#<path:(.*?)> \[line=(\d+), column=(\d+), offset=(\d+)\]/;
        const raiseForgeErrorPattern = /.*\[line=(\d+), column=(\d+), offset=(\d+)\]/;
        const generalLocPattern = /at loc: line (\d+), col (\d+), span: (\d+)/;
        const generalsrcLocPattern = /.*\(srcloc #<path:(.*?)> (\d+) (\d+) (\d+) (\d+)\)/;

        const testFailureMatch = line.match(testFailurePattern);
        const syntaxErrorMatch = line.match(raiseSyntaxErrorPattern);
        const errorWithFileMatch = line.match(raiseForgeErrorWithFileNamePattern);
        const errorMatch = line.match(raiseForgeErrorPattern);
        const locMatch = line.match(generalLocPattern);
        const srcLocMatch = line.match(generalsrcLocPattern);

        let linenum: number, colnum: number, index: number;
        let span = -1;
        let filename = vscode.window.activeTextEditor?.document.fileName || '';

        if (testFailureMatch) {
            filename = testFailureMatch[1];
            linenum = parseInt(testFailureMatch[2]) - 1;
            colnum = parseInt(testFailureMatch[3]) - 1;
            span = parseInt(testFailureMatch[4]);
            index = testFailureMatch.index!;
        } else if (syntaxErrorMatch) {
            filename = syntaxErrorMatch[1];
            linenum = parseInt(syntaxErrorMatch[2]) - 1;
            colnum = parseInt(syntaxErrorMatch[3]) - 1;
            index = syntaxErrorMatch.index!;
        } else if (errorWithFileMatch) {
            filename = errorWithFileMatch[1];
            linenum = parseInt(errorWithFileMatch[2]) - 1;
            colnum = parseInt(errorWithFileMatch[3]) - 1;
            index = errorWithFileMatch.index!;
        } else if (errorMatch) {
            linenum = parseInt(errorMatch[1]) - 1;
            colnum = parseInt(errorMatch[2]) - 1;
            index = errorMatch.index!;
        } else if (srcLocMatch) {
            filename = srcLocMatch[1];
            linenum = parseInt(srcLocMatch[2]) - 1;
            colnum = parseInt(srcLocMatch[3]) - 1;
            span = parseInt(srcLocMatch[5]) - 1;
            index = srcLocMatch.index!;
        } else if (locMatch) {
            linenum = parseInt(locMatch[1]) - 1;
            colnum = parseInt(locMatch[2]) - 1;
            span = parseInt(locMatch[3]) - 1;
            index = locMatch.index!;
        } else {
            return null;
        }

        linenum = Math.max(0, linenum);
        colnum = Math.max(0, colnum);
        span = Math.max(1, span);

        const start = new vscode.Position(linenum, colnum);
        const end = new vscode.Position(linenum, colnum + span);
        const range = new vscode.Range(start, end);

        return { linenum, colnum, start, end, range, line, index, filename };
    }

    /**
     * Open a file and optionally navigate to a specific line/column.
     */
    static showFileWithOpts(filePath: string, line: number | null, column: number | null): void {
        if (line === null || column === null) {
            vscode.commands.executeCommand('vscode.open', vscode.Uri.file(filePath));
        } else {
            const position = new vscode.Position(line, column);
            const range = new vscode.Range(position, position);
            const opts: vscode.TextDocumentShowOptions = { selection: range };
            vscode.commands.executeCommand('vscode.open', vscode.Uri.file(filePath), opts);
        }
    }
}
