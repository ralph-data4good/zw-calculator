# Always navigate to the script's directory
Set-Location -Path $PSScriptRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Zero Waste Asia Calculator" -ForegroundColor Cyan
Write-Host "Starting from: $(Get-Location)" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the dev server
Write-Host "Starting server on port 5200..." -ForegroundColor Green
npx vite --port 5200

