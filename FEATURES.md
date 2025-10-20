# 🎯 Zero Waste Asia Calculator - Feature Guide

## Application Flow

```
Step 0: Welcome & Scenario Mapping
    ↓
Step 1: Input Parameters
    ↓
Step 2: Math Walkthrough
    ↓
Step 3: Waste Characterization Chart
    ↓
Step 4: Cost Comparison Chart
    ↓
Step 5: Savings & Income Chart

[Edit Drawer] ←→ Live updates to all steps
[Export] → Download JSON snapshot
```

## 🏠 Step 0: Welcome & Scenario Mapping

### Welcome Section
- **Hero Title**: "Community Waste Management Program Calculator"
- **Subtitle**: Explains purpose for Philippines & Indonesia contexts
- **Get Started Button**: Smooth scroll or navigate to inputs
- **Time Indicator**: "Takes about 5 minutes to complete"

### Feature Cards (3)
1. **Scenario-Based Estimates**
   - Icon: Map
   - Explains waste characterization and projections

2. **Customized for Your Context**
   - Icon: Settings
   - Find best-fit scenario for your locality

3. **Actionable Insights**
   - Icon: TrendingUp
   - Real-time calculations and visual charts

### How It Works (5 Steps)
Each with checkmark icon:
1. Map your scenario - Answer questions about community
2. Review presets - See default values
3. Explore options - Adjust parameters
4. Get insights - View visualizations
5. Share or print - Export estimates

### Planning Disclaimer
Alert box with:
- Warning icon
- Explains tool provides indicative estimates
- Notes: For formal use, consult professionals

### Scenario Mapping Form
Two-column grid with:
- **Country**: Philippines or Indonesia (required)
- **Area Type**: Urban, Peri-urban, Rural
- **Terrain**: Flatland, Mountainous, Unsure
- **Coastal Island**: Yes/No/Unsure (with helper text)
- **Population Band**: <25k, 25-100k, 100-500k, >500k, Unsure
- **Collection Frequency**: Daily, 3×/week, Weekly, Irregular
- **Segregation Participation**: Low, Medium, High, Unsure
- **Locality Name**: Optional text input

Buttons:
- **Suggest Scenario** (primary) - Runs smart suggestion
- **Skip for Now** (ghost) - Continue with defaults

### Scenario Selection
After "Suggest Scenario":
- Shows recommended scenario with rationale
- 5 scenario chips:
  - Urban LGU — Organics + Recycling
  - Island LGU — Organics + Recycling
  - Mountain LGU — Organics Only
  - Rural LGU — Organics Only
  - Default (Mixed/Unsure)
- Selected scenario highlighted
- "Continue with [Scenario Name]" button

## 📝 Step 1: Input Parameters

### Basic Information
- **Population Served**: Integer input, minimum 1
- **Waste Generation Rate**: Decimal (kg/cap/day)

### Waste Characterization
Real-time sum indicator showing total percentage:
- **Organics**: % (0-100)
- **Recyclables**: % (0-100)
- **Residuals**: % (0-100)
- **Special**: % (0-100)
- **Validation**: Must sum to exactly 100%

### Costs
- **Baseline Cost per Ton**: PHP/ton input

### Composting (Individual)
- **Adoption Rate**: 0-1 decimal (helper: "0.15 = 15%")
- **Diversion Efficiency**: 0-1 decimal (helper: "0.6 = 60% composted")
- **Compost Price per kg**: PHP input

### Validation
- Live error messages for each field
- Summary box showing all errors before submission
- Green checkmark when characterization sums to 100%

### Action
- **Show Results** button → Validates and moves to Step 2

## 🧮 Step 2: Math Walkthrough

Accordion with expandable sections (default: first 2 open):

### 1. Total Waste Generated
```
Daily: population × kg/cap/day = X kg/day
Annual: daily × 365 ÷ 1,000 = Y tons/year
```

### 2. Waste Characterization by Stream
```
Organics: Y tons × 52% = A tons/year
Recyclables: Y tons × 24% = B tons/year
Residuals: Y tons × 20% = C tons/year
Special: Y tons × 4% = D tons/year
```

### 3. Baseline System Cost
```
Y tons/year × ₱3,500/ton = ₱Z/year
```

### 4. Composting Impact
```
Diverted: A tons × 15% adoption × 60% efficiency = E tons/year
Compost produced: E tons × 1,000 = F kg
Revenue: F kg × ₱3/kg = ₱G
Avoided disposal: E tons × ₱3,500/ton = ₱H
```

### 5. After-Program Cost
```
₱Z (baseline) - ₱H (avoided) = ₱I/year
```
Note: Excludes O&M costs and CAPEX

### Action
- **View Charts** button → Navigate to Step 3

## 📊 Step 3: Waste Characterization

### Pie Chart
- **Library**: Recharts
- **Data**: 4 slices (Organics, Recyclables, Residuals, Special)
- **Colors**:
  - Organics: Green (#10b981)
  - Recyclables: Blue (#3b82f6)
  - Residuals: Gray (#6b7280)
  - Special: Orange (#f59e0b)
- **Labels**: Show name and tons/year
- **Tooltip**: Formatted tons per year
- **Legend**: Bottom or right side

### Metrics Cards (4)
Grid layout showing:
- Organics: X.X t/yr
- Recyclables: X.X t/yr
- Residuals: X.X t/yr
- Special: X.X t/yr

### Explainer
Info box explaining the distribution and composting opportunity

### Action
- **Next: Cost Comparison** button → Step 4

## 💰 Step 4: Cost Comparison

### Bar Chart
- **Library**: Recharts
- **Bars**:
  1. "Before ZW Program" (baseline cost)
  2. "After Diversion (Organics)" (reduced cost)
- **Color**: Primary brand color
- **Y-axis**: PHP with K/M suffix (e.g., ₱3.5M)
- **Tooltips**: Full currency formatting
- **Grid**: Light gridlines

### Metrics Cards (2)
- **Before ZW Program**: ₱X,XXX,XXX
- **After Diversion**: ₱Y,YYY,YYY

### Explainer
Explains the savings from diverting organics

### Action
- **Next: Savings & Income** button → Step 5

## 💵 Step 5: Savings & Income

### Bar Chart
- **Library**: Recharts
- **Bars**:
  1. "Avoided Disposal" (green)
  2. "Compost Revenue" (blue)
- **Y-axis**: PHP with K/M suffix
- **Tooltips**: Full currency formatting

### Metrics Cards (2)
- **Avoided Disposal Savings**: ₱X,XXX
- **Compost Revenue**: ₱Y,YYY

### Important Notes (Explainer)
List with cautions:
- Avoided disposal assumes baseline cost
- Revenue assumes all compost sold
- Excludes operational costs
- Conduct feasibility study for formal planning

### Actions
- **Back to Math Review** (secondary)
- **Adjust Parameters** (primary) → Opens Edit Drawer

## ✏️ Edit Drawer

### Design
- Side panel (Radix Dialog)
- Max width: 2xl
- Scrollable content
- Close button (X) top-right
- ESC key closes

### Sections (Same as Step 1)
1. Basic Information
2. Waste Characterization (with live sum)
3. Costs
4. Composting

### Validation
- Real-time error checking
- Error summary box at bottom
- Can't save with errors

### Actions
- **Save Changes** → Updates all charts instantly
- **Cancel** → Discards changes and closes

### Behavior
- Focus trap (keyboard navigation contained)
- Overlay dims background
- Click outside closes (optional)
- All changes update derived values immediately

## 💾 Snapshot Export

### Trigger
"Save Snapshot" button in header (visible after results shown)

### Downloaded File
```json
{
  "inputs": {
    "population": 5000,
    "wastePerCapitaKgDay": 0.4,
    "characterization": { ... },
    "baselineCostPerTon": 3500,
    ...
  },
  "derived": {
    "totalDailyKg": 2000,
    "totalAnnualTons": 730,
    "shares": { ... },
    "baselineCost": 2555000,
    ...
  },
  "createdAt": "2025-10-20T12:00:00Z",
  "version": "1.0.0"
}
```

### Filename
Format: `zwa-calculator-snapshot-[timestamp].json`

## 🧭 Navigation

### Header
Sticky header with:
- App title: "ZWA Calculator"
- Step indicator: "Step X of 5"
- Back button (when step > 0)
- Edit Inputs button (when results shown)
- Save Snapshot button (when results shown)

### URL Hash Sync
- Step 0: `#0`
- Step 1: `#1`
- Step 2: `#2`
- Step 3: `#3`
- Step 4: `#4`
- Step 5: `#5`

Browser back/forward works!

### Progress Flow
```
Welcome (#0)
   ↓ Get Started or Skip
Inputs (#1)
   ↓ Show Results
Math (#2)
   ↓ View Charts
Chart 1 (#3)
   ↓ Next
Chart 2 (#4)
   ↓ Next
Chart 3 (#5)
   ↓ Edit or Back
```

## 🎨 Design Tokens

### Colors
- **Brand Primary**: #059669 (emerald-600)
- **Brand Light**: #34d399 (emerald-400)
- **Background**: #ffffff
- **Background Muted**: #f6f7f9
- **Foreground**: #0b1321
- **Foreground Muted**: #6b7280
- **Border**: #e5e7eb

### Typography
- **Font**: Schibsted Grotesk (Google Fonts)
- **Headings**: 2xl to 5xl, font-semibold or font-bold
- **Body**: base, leading-relaxed

### Spacing
- **Card padding**: 6 (1.5rem) or 8 (2rem)
- **Section gaps**: 6 or 8
- **Input gaps**: 4

### Borders
- **Radius**: 2xl (1.25rem) for cards, lg (1rem) for inputs
- **Width**: 1px default, 2px for focus states

### Shadows
- **sm**: Subtle elevation
- **md**: Cards
- **lg**: Dialogs and modals

## ♿ Accessibility

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- ESC to close dialogs
- Arrow keys in selects

### Focus States
- Visible ring on focus: 2px primary color
- Ring offset: 2px from element
- High contrast against background

### ARIA Labels
- Accordions: `aria-expanded`, `aria-controls`
- Dialogs: `aria-labelledby`, `aria-describedby`
- Inputs: Associated labels with `htmlFor`
- Buttons: Descriptive text or `aria-label`

### Color Contrast
- Text: 4.5:1 minimum (WCAG AA)
- Interactive elements: 3:1 minimum
- Icons paired with text

### Screen Readers
- Semantic HTML (header, main, section)
- Meaningful alt text
- Live regions for dynamic updates (optional enhancement)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (two columns)
- **Desktop**: > 1024px (full layout)

### Adaptations
- **Step 0 cards**: Stack on mobile, grid on desktop
- **Form inputs**: Stack on mobile, 2-col grid on desktop
- **Charts**: Full width on all sizes, height adjusts
- **Header**: Simplified on mobile (fewer buttons)
- **Edit Drawer**: Full screen on mobile, side panel on desktop

## 🧪 Testing

### Unit Tests (Vitest)
**Math calculations** (`math.spec.ts`):
- Total daily waste
- Total annual waste
- Waste shares
- Baseline cost
- Diverted organics
- Compost revenue
- Avoided disposal
- After-program cost

**Validation** (`validation.spec.ts`):
- Population validation
- Waste rate validation
- Characterization sum check
- Adoption rate bounds
- Efficiency bounds
- Negative value checks

**Scenarios** (`scenarios.spec.ts`):
- Island scenario for coastal areas
- Mountain scenario for mountainous terrain
- Rural scenario for small populations
- Urban scenario for large cities
- Default fallback

### Manual Testing Checklist
- [ ] Scenario suggestion works correctly
- [ ] Input validation prevents invalid submissions
- [ ] Characterization sum indicator updates live
- [ ] Charts render correctly with different data
- [ ] Edit drawer updates results instantly
- [ ] Export downloads valid JSON
- [ ] Browser back/forward navigation works
- [ ] Mobile responsive layout works
- [ ] Keyboard navigation functional
- [ ] No console errors

## 🚀 Performance

### Bundle Size
- Optimized with Vite
- Tree-shaking enabled
- Code splitting by route (if needed)

### Load Time
- Fast HMR in development
- Production build optimized
- Lazy load charts if needed

### Runtime
- React 18 with concurrent features
- Efficient re-renders
- Memoization where beneficial

---

**All features are implemented and ready to use!** 🎉

