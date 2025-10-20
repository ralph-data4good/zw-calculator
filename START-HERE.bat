@echo off
REM Always navigate to the correct directory first
cd /d "%~dp0"

echo ========================================
echo Zero Waste Asia Calculator
echo Starting from: %CD%
echo ========================================
echo.

REM Start the dev server
call npx vite --port 5200

pause

