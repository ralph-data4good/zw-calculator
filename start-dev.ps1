Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Zero Waste Asia Calculator - Dev Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Yellow
Write-Host "The app will be available at: " -NoNewline
Write-Host "http://localhost:5200" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

npx vite --port 5200

