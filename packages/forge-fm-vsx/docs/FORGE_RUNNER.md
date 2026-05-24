# ForgeRunner: Lightweight Forge Launcher

## Overview

The `ForgeRunner` class provides a robust, lightweight way to launch and manage Forge processes. It replaces the previous fragile `RacketProcess` execution logic with a cleaner, more reliable approach.

## ✅ What Was Implemented

### 1. **Smart Racket Discovery**
Automatically finds Racket installation in this order:
1. User-configured path (`forge.racketPath` setting)
2. System PATH (`which racket`)
3. Common installation locations:
   - `/usr/local/bin/racket`
   - `/opt/homebrew/bin/racket` (macOS Homebrew)
   - `~/.local/bin/racket`
   - Windows Program Files paths

**Validation**: Each candidate path is verified by running `racket --version`.

### 2. **Forge Package Verification**
- Detects if Forge is installed using `raco pkg show forge`
- Attempts to extract version number
- Validates against minimum version requirements
- Clear error messages if Forge is missing

### 3. **Clean Process Management**
- Direct process spawn without shell wrapper (more secure)
- Graceful shutdown: SIGTERM → wait 3s → SIGKILL if needed
- Cross-platform process checking using `process.kill(pid, 0)`
- Proper resource cleanup

### 4. **Simple, Clean API**
```typescript
// Initialize once at extension activation
const runner = ForgeRunner.getInstance(outputChannel);
await runner.initialize();

// Run a Forge file
await runner.runFile(filepath, {
    onStdout: (data) => forgeOutput.appendLine(data),
    onStderr: (data) => errorBuffer += data,
    onExit: (code) => handleCompletion(code)
});

// Send input (for Sterling continuation)
runner.sendInput('\n');

// Stop execution
runner.kill(true);
```

## Configuration

### New VS Code Setting

```json
{
    "forge.racketPath": "",  // Leave empty for auto-detection
    "forge.minVersion": "3.3.0"
}
```

Users can now specify a custom Racket path if auto-detection fails.

## Key Improvements Over Previous Implementation

| Aspect | Old (RacketProcess) | New (ForgeRunner) |
|--------|---------------------|-------------------|
| **Racket Discovery** | Assumed `racket` in PATH | Multi-location search with validation |
| **Error Messages** | "Racket not found" | "Racket not found. Install from https://racket-lang.org or configure forge.racketPath" |
| **Forge Verification** | External utility, checked at runtime | Built-in initialization with clear feedback |
| **Process Spawn** | `spawn('racket', [...], {shell: true})` | `spawn(racketPath, [...])` - no shell |
| **Kill Logic** | 100+ lines of platform-specific code | 20 lines with unified SIGTERM/SIGKILL |
| **Initialization** | Implicit on first run | Explicit `initialize()` with feedback |
| **Type Safety** | Mixed null/undefined handling | Explicit null checks and types |

## Security Benefits

### No Shell Injection Risk
```typescript
// OLD - risky
spawn('racket', [`"${filePath}"`], { shell: true })
// Filenames with "; rm -rf /" could be dangerous

// NEW - safe  
spawn(racketPath, [filePath])
// Arguments are properly isolated
```

## Performance Benefits

- **Cached environment**: After first `initialize()`, no repeated checks
- **No unnecessary shell overhead**: Direct process spawn
- **Faster termination**: Immediate SIGTERM instead of complex platform checks

## Files Changed

### New Files
- [`client/src/forge-runner.ts`](client/src/forge-runner.ts) - Core ForgeRunner implementation

### Modified Files
- [`client/src/extension.ts`](client/src/extension.ts) - Use ForgeRunner instead of RacketProcess for execution
- [`package.json`](package.json) - Added `forge.racketPath` configuration

### Preserved Files
- [`client/src/racketprocess.ts`](client/src/racketprocess.ts) - Kept for error parsing utilities

## Migration Notes

The old `RacketProcess` class is still present because it contains useful utilities:
- `matchForgeError()` - Regex patterns for parsing Forge error messages
- `sendEvalErrors()` - Display diagnostics in VS Code
- `showFileWithOpts()` - Jump to error locations

These utilities are **still used** by the new implementation for error handling.

## What's Next?

With reliable launching in place, the extension can now focus on:

### High Priority
- [ ] **Real-time diagnostics**: Use Racket's syntax checking for live errors
- [ ] **Better error presentation**: Rich diagnostic information
- [ ] **Workspace support**: Handle multi-file Forge projects

### Medium Priority
- [ ] **LSP semantic features**: Go-to-definition, hover, etc.
- [ ] **Integrated Sterling**: Inline visualization in VS Code
- [ ] **Test runner UI**: Show test results with rich formatting

### Low Priority (Nice to Have)
- [ ] Cache Racket path after discovery
- [ ] Auto-install prompts for missing Racket/Forge
- [ ] Workspace-specific Forge versions

## Testing Checklist

Before release, verify:
- [ ] Works with Racket in PATH
- [ ] Works with custom `forge.racketPath`
- [ ] Works when Racket not in PATH (shows helpful error)
- [ ] Works when Forge not installed (shows helpful error)
- [ ] Version check correctly warns about old Forge versions
- [ ] Sterling continuation works (`Continue` button)
- [ ] Stop button kills process
- [ ] Error links still clickable in terminal
- [ ] Cross-platform (macOS, Linux, Windows)

## Known Limitations

1. **Version Detection**: Falls back to "installed" if version can't be parsed
2. **Process Reaping**: On Windows, nested processes may not be killed
3. **Racket Discovery**: Doesn't check all possible non-standard locations

These are acceptable tradeoffs for a lightweight implementation.
