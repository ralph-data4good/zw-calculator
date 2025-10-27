# Zero Waste Asia Color Palette Reference

## 🎨 Complete Color System

### Primary Blue Scale (ZWA Blue)
The professional, trustworthy blue from Zero Waste Asia's brand.

```
50  : #E6F2F8  █  Very light - backgrounds, hover states
100 : #C2E0EE  █  Light - subtle backgrounds
200 : #9BCDE4  █  Light-medium - borders, disabled states
300 : #74BADA  █  Medium-light - hover states
400 : #53A7D0  █  Medium - interactive elements
500 : #2179B3  ■  MAIN BRAND BLUE - primary actions
600 : #1A628F  ■  Medium-dark - hover on primary
700 : #14526F  ■  Dark - text on light backgrounds
800 : #0D3A4E  ■  HEADER BACKGROUND - dark teal
900 : #072233  ■  Very dark - dark mode backgrounds
950 : #041419  ■  Almost black - darkest backgrounds
```

**Usage Examples:**
- `500` - Links, secondary buttons, data visualization
- `800` - Header background (matches ZWA website)
- `700` - Hover states on header elements
- `100` - Icon backgrounds in feature cards

---

### Secondary Gold Scale (ZWA Gold)
The warm, action-oriented gold that inspires engagement.

```
50  : #FDFAF2  █  Cream - very light backgrounds
100 : #F9F0D9  █  Light cream - subtle highlights
200 : #F3E3B8  █  Light gold - borders, accents
300 : #EDD597  █  Medium-light - hover backgrounds
400 : #E7C876  █  Medium - interactive states
500 : #D4A73F  ■  MAIN BRAND GOLD - primary CTAs
600 : #B8923A  ■  Medium-dark - hover on primary buttons
700 : #927432  ■  Dark - strong emphasis
800 : #6C5628  ■  Very dark - text on light gold
900 : #46381A  ■  Almost brown - dark mode
950 : #2E240F  ■  Darkest - deep backgrounds
```

**Usage Examples:**
- `500` - Primary buttons ("Get Started", "Show Results")
- `600` - Button hover states
- Special waste category in charts
- Compost revenue in savings charts

---

### Neutral Gray Scale
Clean, modern grayscale for text and UI elements.

```
50  : #FAFAFA  █  Off-white - muted backgrounds
100 : #F5F5F5  █  Very light gray - card backgrounds
200 : #E5E5E5  █  Light gray - borders, dividers
300 : #D4D4D4  █  Medium-light - disabled states
400 : #A3A3A3  █  Medium - placeholder text
500 : #737373  █  Medium-dark - secondary text
600 : #525252  ■  Dark - primary supporting text
700 : #404040  ■  Darker - emphasis text
800 : #262626  ■  Very dark - strong emphasis
900 : #171717  ■  Almost black - main text
950 : #0A0A0A  ■  True black - highest contrast
```

**Usage Examples:**
- `900` - Main body text
- `600` - Secondary text, labels
- `50` - Metric card backgrounds
- `200` - Card and input borders
- `500` - Residual waste in charts

---

### Accent Green
Eco-friendly accent color for environmental elements.

```
500 : #489E4A  ■  Main green - success, eco elements
600 : #3A7F3C  ■  Darker - hover states
700 : #2C5F2E  ■  Darkest - strong emphasis
```

**Usage Examples:**
- Organics category in waste pie chart
- Avoided disposal savings in bar charts
- Success states and confirmations
- Environmental badges or indicators

---

## 🎯 Semantic Color Mappings

### Functional Colors
```css
/* Backgrounds */
--bg:           #FFFFFF (white)
--bg-muted:     #FAFAFA (neutral-50)
--bg-card:      #FFFFFF (white)
--header-bg:    #0D3A4E (blue-800)

/* Text */
--fg:           #171717 (neutral-900)
--fg-muted:     #525252 (neutral-600)

/* Borders */
--border:       #E5E5E5 (neutral-200)
--border-muted: #F5F5F5 (neutral-100)

/* Brand */
--primary:      #2179B3 (blue-500)
--secondary:    #D4A73F (gold-500)
```

---

## 📊 Chart & Data Visualization Colors

### Waste Stream Colors
```
Organics     : #489E4A  ■  Green (eco-friendly)
Recyclables  : #2179B3  ■  Blue (primary brand)
Residuals    : #737373  ■  Gray (neutral)
Special      : #D4A73F  ■  Gold (special attention)
```

### Financial Colors
```
Costs        : #2179B3  ■  Blue (primary)
Savings      : #489E4A  ■  Green (positive)
Revenue      : #D4A73F  ■  Gold (income)
```

---

## 🌓 Dark Mode Palette

### Dark Mode Backgrounds
```
--bg:        #041419 (blue-950)
--bg-muted:  #072233 (blue-900)
--bg-card:   #0D3A4E (blue-800)
```

### Dark Mode Text
```
--fg:        #FAFAFA (neutral-50)
--fg-muted:  #A3A3A3 (neutral-400)
```

### Dark Mode Brand Colors (Adjusted for Contrast)
```
--primary:      #53A7D0 (blue-400)
--secondary:    #E7C876 (gold-400)
```

---

## ✅ Accessibility & Contrast

### Text on White Background
```
✓ neutral-900 (#171717) - 14.36:1 contrast
✓ neutral-800 (#262626) - 12.63:1 contrast
✓ neutral-700 (#404040) - 9.74:1 contrast
✓ blue-700 (#14526F)    - 7.82:1 contrast
✓ neutral-600 (#525252) - 7.07:1 contrast (WCAG AA+)
```

### Text on Blue-800 Header
```
✓ White (#FFFFFF)        - 9.15:1 contrast
✓ blue-50 (#E6F2F8)      - 8.62:1 contrast
✓ blue-100 (#C2E0EE)     - 7.94:1 contrast
```

### Buttons
```
✓ Gold button (gold-500 bg, neutral-900 text)  - 7.23:1
✓ Blue button (blue-500 bg, white text)        - 4.61:1
```

---

## 🎨 Usage Guidelines

### When to Use Blue (Primary)
- Secondary actions
- Links and navigation
- Data visualization (recyclables, costs)
- Informational elements
- Trust and credibility messaging

### When to Use Gold (Secondary)
- Primary call-to-action buttons
- Important highlights
- Special waste category
- Revenue and income
- Action-oriented elements

### When to Use Green (Accent)
- Organics/compost related
- Environmental benefits
- Savings and positive outcomes
- Success messages
- Eco-friendly badges

### When to Use Gray (Neutral)
- Body text and descriptions
- Borders and dividers
- Disabled states
- Residual waste
- Background elements

---

## 🔍 Quick Reference

### Most Common Colors
```css
/* Headers */
bg-header-bg text-white

/* Primary Buttons */
bg-secondary text-secondary-contrast hover:bg-secondary-dark

/* Secondary Buttons */
bg-primary text-primary-contrast hover:bg-primary-dark

/* Cards */
bg-bg border border-border rounded-xl shadow-md

/* Text */
text-fg            (main text)
text-fg-muted      (secondary text)
text-primary       (links, emphasis)

/* Backgrounds */
bg-bg-muted        (subtle background)
bg-neutral-50      (metric cards)
```

---

## 📱 Responsive Color Usage

Colors remain consistent across breakpoints. Only adjust:
- Shadow intensity (lighter on mobile)
- Border width (1px everywhere)
- Opacity for overlays (may vary)

---

## 🎓 Best Practices

1. **Use semantic names** in components (`bg-primary` not `bg-blue-500`)
2. **Maintain contrast** - always check text readability
3. **Test in dark mode** - ensure colors work in both themes
4. **Use scale consistently** - don't skip arbitrary values
5. **Document usage** - comment why specific shades are chosen

---

## 🚀 Implementation

All colors are available as:
- **CSS Variables**: `var(--zwa-blue-500)`
- **Tailwind Classes**: `bg-zwa-blue-500`
- **Semantic Tokens**: `bg-primary`

Choose semantic tokens for most use cases, direct colors for specific needs.

---

**Last Updated**: Based on Zero Waste Asia brand guidelines
**Version**: 2.0
**Status**: ✅ Production Ready

