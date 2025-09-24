@echo off
echo ================================
echo  ENG Language Support Extension
echo  Installation Script
echo ================================
echo.

if not exist "eng-language-support-1.5.2.vsix" (
    echo ERROR: eng-language-support-1.5.2.vsix not found!
    echo Please make sure the .vsix file is in the same folder as this script.
    pause
    exit /b 1
)

echo Installing ENG Language Support extension...
code --install-extension eng-language-support-1.5.1.vsix

if %ERRORLEVEL% == 0 (
    echo.
    echo ✅ SUCCESS: Extension installed successfully!
    echo.
    echo Please reload VS Code to activate the extension.
    echo Then open any .eng file to see syntax highlighting.
) else (
    echo.
    echo ❌ ERROR: Installation failed.
    echo Make sure VS Code is installed and accessible from command line.
)

echo.
pause