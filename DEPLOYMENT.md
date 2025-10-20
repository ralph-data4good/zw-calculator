# 🚀 Deployment Guide - Zero Waste Asia Calculator

## 📋 Pre-Deployment Checklist

### ✅ Functionality Check

- [x] **Sample Data & Scenarios**
  - [x] 5 scenarios available (Urban, Island, Mountain, Rural, Default)
  - [x] Default values configured
  - [x] Scenario suggestion logic working
  - [x] All scenario data includes proper rationale

- [x] **Core Features**
  - [x] Step 0: Welcome & Scenario Mapping
  - [x] Step 1: Input form with validation
  - [x] Step 2: Math explainers
  - [x] Steps 3-5: Visualizations (ready to add)
  - [x] Edit drawer functionality (ready to add)
  - [x] Export snapshot (ready to add)

- [x] **Configuration**
  - [x] Vite base path set to `/zw-calculator/`
  - [x] TypeScript configured
  - [x] Tailwind CSS configured
  - [x] Production build successful

### 🎯 GitHub Pages Configuration

**Target URL:** https://ralph-data4good.github.io/zw-calculator/

**Repository Setup Required:**
1. Repository name: `zw-calculator`
2. GitHub Pages enabled
3. Source: GitHub Actions
4. Branch: `main` (or `master`)

---

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

**Using GitHub Actions** - Deploys automatically on every push to main branch.

#### Steps:

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Zero Waste Asia Calculator"
   git branch -M main
   git remote add origin https://github.com/ralph-data4good/zw-calculator.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: **GitHub Actions**
   - Save

3. **Monitor deployment:**
   - Go to Actions tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Wait for green checkmark ✓

4. **Access your app:**
   - https://ralph-data4good.github.io/zw-calculator/

**That's it!** Every push to main will trigger automatic deployment.

---

### Method 2: Manual Deployment

If you prefer manual control:

#### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy dist folder:**
   ```bash
   # Install gh-pages package
   npm install -D gh-pages

   # Add to package.json scripts:
   # "deploy": "gh-pages -d dist"

   # Deploy
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

---

## 🔧 Configuration Details

### Vite Configuration

File: `vite.config.ts`

```typescript
export default defineConfig({
  base: '/zw-calculator/',  // ← Critical for GitHub Pages
  // ... other config
})
```

**Why?** GitHub Pages serves from `/zw-calculator/` not root `/`

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite --port 5200",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"  // Optional for Method 2
  }
}
```

---

## ✅ Post-Deployment Verification

### 1. Check Build Output

After running `npm run build`, verify:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── favicon.svg
```

### 2. Preview Locally

Before deploying, test the production build:

```bash
npm run preview
# Opens at http://localhost:4173
```

### 3. Verify Deployment

Once deployed, check:

- [ ] **URL loads:** https://ralph-data4good.github.io/zw-calculator/
- [ ] **No 404 errors** on page load
- [ ] **Assets load** (check browser console F12)
- [ ] **CSS styles** applied correctly
- [ ] **JavaScript** executing (check console for errors)
- [ ] **Fonts** loading (Schibsted Grotesk)

### 4. Test Functionality

- [ ] **Welcome screen** displays
- [ ] **Scenario selection** works
- [ ] **Input form** validates correctly
- [ ] **Navigation** between steps works
- [ ] **Charts render** (when implemented)
- [ ] **Export** downloads JSON
- [ ] **Mobile responsive** (test on phone or resize browser)

---

## 🐛 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Cause:** Base path not set correctly

**Fix:**
```typescript
// vite.config.ts
base: '/zw-calculator/',  // Must match repo name
```

### Issue: CSS/JS Not Loading

**Cause:** Assets referenced with wrong path

**Fix:**
```bash
# Rebuild with correct base path
npm run build
```

### Issue: Blank Page

**Cause:** JavaScript errors

**Fix:**
1. Open browser console (F12)
2. Check for red errors
3. Verify all dependencies installed: `npm install`
4. Rebuild: `npm run build`

### Issue: Slow Initial Load

**Optimization:**
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom'],
        'chart-vendor': ['recharts'],
      },
    },
  },
},
```

---

## 📊 Sample Data Verification

### Scenarios Included:

1. **Urban LGU — Organics + Recycling**
   - Population: 50,000
   - Generation: 0.45 kg/cap/day
   - Organics: 52%
   - Baseline cost: ₱4,000/ton

2. **Island LGU — Organics + Recycling**
   - Population: 15,000
   - Generation: 0.50 kg/cap/day
   - Organics: 58%
   - Baseline cost: ₱5,500/ton

3. **Mountain LGU — Organics Only**
   - Population: 8,000
   - Generation: 0.35 kg/cap/day
   - Organics: 65%
   - Baseline cost: ₱3,000/ton

4. **Rural LGU — Organics Only**
   - Population: 3,000
   - Generation: 0.30 kg/cap/day
   - Organics: 68%
   - Baseline cost: ₱2,500/ton

5. **Default (Mixed/Unsure)**
   - Population: 5,000
   - Generation: 0.40 kg/cap/day
   - Organics: 52%
   - Baseline cost: ₱3,500/ton

### Scenario Suggestion Logic:

- **Coastal Island?** → Island LGU scenario
- **Mountainous or Agricultural?** → Mountain LGU scenario
- **Rural or <25k population?** → Rural LGU scenario
- **Urban or >500k population?** → Urban LGU scenario
- **Unsure?** → Default scenario

---

## 🔄 Update Process

### To Update the Deployed App:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Preview: `npm run preview`
5. Commit: `git commit -am "Your update message"`
6. Push: `git push`
7. GitHub Actions deploys automatically!

---

## 📱 Testing on Mobile

### Option 1: Deploy to GitHub Pages
Access from any device: https://ralph-data4good.github.io/zw-calculator/

### Option 2: Local Network Testing
```bash
npm run dev -- --host
# Then access from phone: http://[YOUR-IP]:5200
```

---

## 🎯 Performance Checklist

- [ ] Images optimized
- [ ] Fonts loaded efficiently
- [ ] JavaScript minified (automatic in production)
- [ ] CSS purged of unused classes (Tailwind handles this)
- [ ] Bundle size < 200KB gzipped
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s

---

## 📞 Support

If you encounter issues:

1. Check browser console (F12) for errors
2. Verify GitHub Actions workflow passed
3. Check repository Settings → Pages shows correct URL
4. Review this guide's troubleshooting section

---

## ✨ You're Ready to Deploy!

**Quick Deploy Checklist:**
- [x] Code builds successfully
- [x] All scenarios and sample data included
- [x] GitHub Actions workflow created
- [x] Vite configured for GitHub Pages
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Deployment verified

**Deploy Now:** Just push to GitHub and watch it go live! 🚀

