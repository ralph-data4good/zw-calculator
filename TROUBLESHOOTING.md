# 🔧 Troubleshooting Guide - ZWA Calculator

## ✅ Quick Fixes

### Issue: "localhost:5173 not loading" or "Cannot GET /"

**Solution 1: Make sure you're in the right directory**
```powershell
cd "C:\Users\Ralph\ZW.asia Calculator Cursor_React"
```

**Solution 2: Restart the server**
```powershell
# Stop any running servers
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Start fresh
npx vite
```

**Solution 3: Use the start script**
```cmd
start-dev.bat
```

### Issue: "Module not found" errors

**Solution: Install dependencies**
```bash
npm install
```

### Issue: Port 5173 already in use

**Solution: Use a different port**
```bash
npx vite --port 3000
```

Then open http://localhost:3000

### Issue: White screen or React errors

**Solution 1: Clear cache and hard refresh**
- Press `Ctrl + Shift + R` (Windows)
- Or open DevTools (F12) → Right-click refresh → "Empty Cache and Hard Refresh"

**Solution 2: Check browser console**
- Press `F12` to open DevTools
- Look for error messages in the Console tab
- Share the error message for specific help

### Issue: TypeScript errors

**Solution: Rebuild the project**
```bash
npm run build
```

### Issue: Styles not loading

**Solution: Verify Tailwind is working**
```bash
# Check if tailwind.config.js exists
dir tailwind.config.js

# Restart the dev server
npx vite
```

## 📊 Verify Setup

**Check if all files exist:**
```powershell
Test-Path package.json
Test-Path src\main.tsx
Test-Path src\App.tsx
Test-Path tailwind.config.js
Test-Path vite.config.ts
```

All should return `True`

**Check if server is running:**
```powershell
# Should show node.exe running
Get-Process -Name "node" -ErrorAction SilentlyContinue
```

**Check if port is open:**
```powershell
# Should respond with HTML
Invoke-WebRequest -Uri "http://localhost:5173" -UseBasicParsing
```

## 🌐 Browser-Specific Issues

### Chrome/Edge
- Clear site data: DevTools → Application → Clear storage
- Disable extensions that might block scripts

### Firefox
- Clear cache: Ctrl+Shift+Delete
- Check if JavaScript is enabled

## 🚨 Common Error Messages

### "Failed to resolve module specifier"
**Cause:** Import paths are incorrect
**Fix:** Check that imports use `@/` prefix:
```typescript
import { Button } from '@/components/ui/button'
```

### "Cannot find module 'react'"
**Cause:** Dependencies not installed
**Fix:**
```bash
npm install
```

### "Unexpected token '<'"
**Cause:** TypeScript/JSX not being processed
**Fix:** Check vite.config.ts has React plugin

## 📱 Mobile Testing Issues

### Can't access from phone
**Solution: Expose server to network**
```bash
npx vite --host
```

Then use your computer's IP address:
```
http://192.168.1.XXX:5173
```

Find your IP:
```powershell
ipconfig | Select-String -Pattern "IPv4"
```

## 🔄 Complete Reset

If nothing works, do a complete reset:

```powershell
# 1. Stop all servers
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# 2. Clean everything
Remove-Item node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item package-lock.json -Force -ErrorAction SilentlyContinue

# 3. Reinstall
npm install

# 4. Start fresh
npx vite
```

## 📞 Need More Help?

1. **Check the browser console (F12)** - This shows the actual error
2. **Check the terminal output** - Look for red error messages
3. **Verify Node version:** `node --version` (should be 18+)
4. **Verify npm version:** `npm --version` (should be 9+)

## ✨ Success Indicators

When everything is working, you should see:

**In Terminal:**
```
VITE v6.x.x  ready in XXX ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**In Browser:**
- Welcome screen with "Community Waste Management Program Calculator"
- Three feature cards
- "Get Started" button
- No errors in console (F12)

---

**Still having issues?** Share the error message from your browser console (F12) or terminal output for specific help!

