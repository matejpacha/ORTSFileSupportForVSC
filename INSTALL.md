# Installation Instructions for Peers

## Method 1: Install from VSIX file

1. **Download** the `eng-language-support-1.5.4.vsix` file
2. **Open VS Code**
3. **Go to Extensions** (Ctrl+Shift+X)
4. **Click the `...` menu** → "Install from VSIX..."
5. **Select** the downloaded `.vsix` file
6. **Reload VS Code** when prompted

## Method 2: Command Line Installation

```bash
code --install-extension eng-language-support-1.5.4.vsix
```

## Method 3: Manual Installation

1. Copy the `.vsix` file to your VS Code extensions folder:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS**: `~/.vscode/extensions`
   - **Linux**: `~/.vscode/extensions`

## What You Get

- ✅ **Syntax highlighting** for `.eng` files
- ✅ **Code folding** for all ENG sections
- ✅ **Comment support** (both `comment(...)` and `comment(**...**)`)
- ✅ **Bracket matching** and auto-closing
- ✅ **File path navigation** - Ctrl+Click to open referenced files
- ✅ **Language recognition** for Microsoft Train Simulator / OpenRails files (`.eng`, `.inc`, and `.wag`)

## Supported ENG Sections

The extension recognizes and provides folding/highlighting for:
- Engine, Wagon, CabView sections
- ORTSDieselEngines, DieselPowerTab, ThrottleRPMTab
- EngineControllers, Throttle, Brake_Engine, Brake_Train
- And many more Train Simulator specific sections

## Testing

Open any `.eng`, `.inc`, or `.wag` file and you should see:
- 🎨 **Syntax highlighting** for keywords and sections
- 📁 **Folding arrows** next to major sections
- 💬 **Comment highlighting** for both comment styles