# 🧪 Local Testing Guide

## 🚀 Preview Server Started!

Your production build is now running locally at:

### 🌐 **http://localhost:4173/zw-calculator/**

**Note**: The `/zw-calculator/` path is required because that's how it's configured for GitHub Pages.

---

## 📋 **Testing Checklist**

Open your browser and navigate to: **http://localhost:4173/zw-calculator/**

### ✅ **Step 0: Welcome Screen**
- [ ] Welcome message displays
- [ ] Feature cards show (Scenario Mapping, Transparent Math, Data Export)
- [ ] "How It Works" section visible
- [ ] "Get Started" button works
- [ ] Optional: Try Scenario Mapper
  - Fill out the form (country, area type, etc.)
  - Click "Get Suggestion"
  - See recommended scenario
  - Click "Continue with Suggested Scenario"

### ✅ **Step 1: Scenario Selection**
- [ ] 5 scenario cards display:
  1. Urban LGU — Organics + Recycling
  2. Island LGU — Organics + Recycling
  3. Rural LGU — Organics Focus
  4. Mountain LGU — Organics Focus
  5. Custom Scenario
- [ ] Click on "Urban LGU" scenario
- [ ] Input fields auto-populate with scenario values
- [ ] Can manually adjust values:
  - Population slider/input
  - Waste per capita
  - Characterization sliders (Organics, Recyclables, Residuals, Special)
  - Baseline cost
  - Composting adoption
  - Diversion efficiency
  - Compost price
- [ ] Characterization percentages show in real-time
- [ ] Click "Continue" to proceed

### ✅ **Step 2: Waste Generation**
- [ ] Total daily waste displays (kg)
- [ ] Total annual waste displays (tons)
- [ ] Waste breakdown by type displays:
  - Organics (tons/year)
  - Recyclables (tons/year)
  - Residuals (tons/year)
  - Special (tons/year)
- [ ] Numbers are reasonable for the population
- [ ] "Edit Inputs" button appears
- [ ] Click "Continue"

### ✅ **Step 3: Charts & Visualizations**
- [ ] **Waste Composition Pie Chart** renders
  - Shows 4 segments with different colors
  - Has labels with values
  - Hover shows tooltips
  - Legend displays below

- [ ] **Cost Comparison Bar Chart** renders
  - Two bars: Baseline vs After Zero Waste
  - Shows cost reduction clearly
  - Hover shows exact values

- [ ] **Savings Breakdown Bar Chart** renders
  - Shows compost revenue
  - Shows avoided disposal savings
  - Interactive tooltips

- [ ] All charts are responsive (try resizing window)
- [ ] Click "Continue"

### ✅ **Step 4: Math Walkthrough**
- [ ] Detailed calculations section displays
- [ ] All equations shown with actual values:
  - Daily waste calculation
  - Annual waste calculation
  - Characterization breakdown
  - Baseline cost
  - Diverted organics
  - Compost production
  - Compost revenue
  - Avoided disposal savings
  - After Zero Waste cost
  - Net savings
- [ ] Expandable explainer sections work
- [ ] Math is transparent and clear
- [ ] Click "Continue"

### ✅ **Step 5: Savings & Income**
- [ ] Financial summary displays
- [ ] Total savings shown
- [ ] Compost revenue highlighted
- [ ] Avoided disposal costs shown
- [ ] Net benefit calculated
- [ ] "Save Snapshot" button appears

### ✅ **Edit Drawer**
From Step 2 onwards, click "Edit Inputs" button:
- [ ] Drawer/dialog opens
- [ ] All input fields are editable
- [ ] Can change:
  - Population
  - Waste per capita
  - Characterization (with sliders)
  - Baseline cost
  - Composting adoption
  - Diversion efficiency
  - Compost price
- [ ] Sum checker shows current characterization total
- [ ] If sum ≠ 100%, shows warning
- [ ] "Save" button updates all calculations
- [ ] "Cancel" button closes without changes
- [ ] After saving, all charts and numbers update immediately

### ✅ **Snapshot Export**
- [ ] Click "Save Snapshot" button
- [ ] JSON file downloads automatically
- [ ] Filename includes timestamp (e.g., `zwa-calculator-snapshot-1729461234567.json`)
- [ ] Open the JSON file:
  - Contains all inputs
  - Contains all derived values
  - Has timestamp
  - Has version number

### ✅ **Navigation**
- [ ] Back button works (goes to previous step)
- [ ] Continue button works (goes to next step)
- [ ] Can jump directly by URL (e.g., add `#step-3` to URL)
- [ ] URL updates as you navigate
- [ ] Browser back/forward buttons work

### ✅ **Validation**
Test validation by editing inputs:
- [ ] Try setting characterization that doesn't sum to 100%
  - Should show error message
  - Save button should not work
- [ ] Try negative population
  - Should show error
- [ ] Try zero waste per capita
  - Should show error
- [ ] Try setting adoption > 100%
  - Should show error

### ✅ **Responsive Design**
- [ ] Resize browser window to narrow width
- [ ] Layout adjusts for mobile
- [ ] Charts remain readable
- [ ] Buttons are touch-friendly
- [ ] All text is readable

### ✅ **Performance**
- [ ] Page loads quickly
- [ ] Navigation between steps is instant
- [ ] Charts render smoothly
- [ ] No lag when editing inputs
- [ ] No visible errors in console (F12 → Console tab)

---

## 🧮 **Sample Test Case**

Try this specific scenario to verify calculations:

### Input Values
- **Population**: 10,000
- **Waste per Capita**: 0.5 kg/day
- **Characterization**:
  - Organics: 50%
  - Recyclables: 25%
  - Residuals: 20%
  - Special: 5%
- **Baseline Cost**: ₱4,000/ton
- **Composting Adoption**: 20% (0.2)
- **Diversion Efficiency**: 70% (0.7)
- **Compost Price**: ₱4/kg

### Expected Results
- **Daily Waste**: 5,000 kg
- **Annual Waste**: 1,825 tons
- **Organics**: 912.5 tons/year (50%)
- **Recyclables**: 456.25 tons/year (25%)
- **Residuals**: 365 tons/year (20%)
- **Special**: 91.25 tons/year (5%)
- **Baseline Cost**: ₱7,300,000
- **Diverted Organics**: ~127.75 tons (912.5 × 0.2 × 0.7)
- **Compost Production**: ~127,750 kg
- **Compost Revenue**: ~₱511,000
- **Avoided Disposal**: ~₱511,000
- **Net Savings**: ~₱1,022,000

Verify these numbers appear correctly in Steps 2-5.

---

## 🎨 **Visual Check**

### Design Elements
- [ ] Zero Waste Asia green colors prominent
- [ ] Schibsted Grotesk font loads correctly
- [ ] Rounded corners on cards and buttons
- [ ] Soft shadows on elevated elements
- [ ] Consistent spacing throughout
- [ ] Icons display correctly (Lucide React icons)

### Color Scheme
- [ ] Primary green: #059669
- [ ] Accent green: #34d399
- [ ] Clean white backgrounds (light mode)
- [ ] Readable text contrast

### Optional: Dark Mode
If you want to test dark mode:
1. Open browser DevTools (F12)
2. In Console, type: `document.documentElement.classList.add('dark')`
3. Press Enter
4. Page should switch to dark theme

---

## 🐛 **Common Issues & Solutions**

### Issue: Page shows 404
**Solution**: Make sure you're accessing `/zw-calculator/` path:
- ✅ Correct: `http://localhost:4173/zw-calculator/`
- ❌ Wrong: `http://localhost:4173/`

### Issue: Charts don't render
**Solution**: 
1. Check browser console (F12)
2. Look for JavaScript errors
3. Make sure Recharts loaded properly

### Issue: Export doesn't download
**Solution**:
1. Check browser download settings
2. Allow downloads from localhost
3. Check if pop-up blocker is active

### Issue: Styles look broken
**Solution**:
1. Hard refresh: Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)
2. Clear browser cache
3. Restart preview server

---

## 🔄 **Restarting Preview Server**

If you need to restart the server:

1. **Stop the server**:
   - In the terminal, press `Ctrl+C`
   
2. **Rebuild** (if you made code changes):
   ```bash
   npm run build
   ```

3. **Start preview again**:
   ```bash
   npm run preview
   ```

---

## 📊 **Compare with Dev Server**

Want to test the development version instead?

**Development server** (with hot reload):
```bash
npm run dev
```
Then visit: `http://localhost:5200/`

**Preview server** (production build):
```bash
npm run preview
```
Then visit: `http://localhost:4173/zw-calculator/`

**Difference**:
- Dev server: Fast refresh, source maps, debugging tools
- Preview server: Optimized build, minified code (matches GitHub Pages)

---

## ✅ **Testing Complete?**

Once you've tested all features, you can:

1. **Stop the preview server**: Press `Ctrl+C` in the terminal
2. **Check GitHub Pages deployment**: Should be live now at https://ralph-data4good.github.io/zw-calculator/
3. **Test the live site** to confirm it matches your local testing

---

## 📝 **Report Results**

After testing, note:
- ✅ **Working perfectly**: All features functional
- ⚠️ **Issues found**: List any problems
- 💡 **Suggestions**: Any improvements or feedback

---

## 🎯 **Key Things to Verify**

1. ✅ All 5 scenarios work
2. ✅ Charts render and are interactive
3. ✅ Edit Drawer updates calculations live
4. ✅ Export downloads JSON file
5. ✅ Navigation works smoothly
6. ✅ Validation catches errors
7. ✅ Math is correct (use sample test case)
8. ✅ No console errors

**Happy testing!** 🎉

---

## 🌐 **Preview URL**

### **http://localhost:4173/zw-calculator/**

Click or copy this link to your browser to start testing!

