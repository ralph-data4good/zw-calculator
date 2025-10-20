@echo off
echo ========================================
echo Zero Waste Asia Calculator - Dev Server
echo ========================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo The app will be available at: http://localhost:5200
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
call npx vite --port 5200

