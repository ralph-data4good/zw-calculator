# Eco-Centric Design System

This project now uses a comprehensive eco-centric design system based on `eco_design_system.json`.

## Overview

The design system focuses on environmental sustainability with a nature-inspired, organic aesthetic. It uses:
- **Sage greens** for primary colors
- **Warm yellows** for accents
- **Organic shapes** with generous border radius
- **Soft shadows** with low opacity
- **Clean typography** with system fonts

## Color Palette

### Primary Colors

#### Soft Greens (Backgrounds, Secondary Elements)
```css
--eco-soft-green-1: #A8C5A3
--eco-soft-green-2: #B8D4B8
--eco-soft-green-3: #9BB89B
--eco-soft-green-4: #E8F0E8
```

**Usage in Tailwind:**
- `bg-eco-soft-1` through `bg-eco-soft-4`
- `text-eco-soft-1` through `text-eco-soft-4`

#### Vibrant Greens (Primary Actions, CTAs)
```css
--eco-vibrant-green-1: #4A7C59 (Primary)
--eco-vibrant-green-2: #5A8C69 (Hover)
--eco-vibrant-green-3: #3A6C49 (Active)
```

**Usage in Tailwind:**
- `bg-eco-vibrant-1` through `bg-eco-vibrant-3`
- `text-eco-vibrant-1` through `text-eco-vibrant-3`
- Also mapped to: `bg-primary`, `bg-primary-light`, `bg-primary-dark`

#### Accent Yellows (Highlights, Important Info)
```css
--eco-accent-yellow-1: #F5C563
--eco-accent-yellow-2: #E8B84D
--eco-accent-yellow-3: #D4A440
```

**Usage in Tailwind:**
- `bg-eco-accent-1` through `bg-eco-accent-3`
- `text-eco-accent-1` through `text-eco-accent-3`
- Also mapped to: `bg-accent`, `bg-accent-dark`

### Neutral Colors

#### Backgrounds
```css
--eco-bg-white: #FFFFFF
--eco-bg-light-1: #F8F9F8
--eco-bg-light-2: #F5F7F5
--eco-bg-light-3: #FEFFFE
```

**Usage in Tailwind:**
- `bg-bg` (White)
- `bg-bg-muted` (Light gray-green)
- `bg-bg-card` (Card backgrounds)

#### Text
```css
--eco-text-dark-1: #1A1A1A (Primary text)
--eco-text-dark-2: #2D3E2D (Secondary text)
--eco-text-dark-3: #3F4F3F (Muted text)
```

**Usage in Tailwind:**
- `text-fg` (Primary text)
- `text-fg-muted` (Muted text)

#### Borders
```css
--eco-border-1: #E0E5E0
--eco-border-2: #D5DAD5
--eco-border-3: #C8CEC8
```

**Usage in Tailwind:**
- `border-border` (Default border)
- `border-border-muted` (Subtle border)

### Dark Mode Colors

```css
--eco-navy-1: #2C3E50
--eco-navy-2: #34495E
--eco-navy-3: #1C2833
```

**Usage in Tailwind:**
- `bg-eco-navy-1` through `bg-eco-navy-3`
- Automatically applied in dark mode via CSS variables

## Typography

### Font Family
The design system uses a clean, modern sans-serif stack:
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

**Usage in Tailwind:**
- `font-sans` (already applied by default)

### Type Scale
- **Hero:** 48-72px, weight 700-900
- **H1:** 32-48px, weight 700-800
- **H2:** 24-32px, weight 600-700
- **Body:** 16-18px, weight 400
- **Small:** 14-15px, weight 400

## Spacing

Based on an **8px base unit**:

```css
--spacing-xs: 4px    /* 0.25rem */
--spacing-sm: 8px    /* 0.5rem */
--spacing-md: 16px   /* 1rem */
--spacing-lg: 24px   /* 1.5rem */
--spacing-xl: 32px   /* 2rem */
--spacing-2xl: 48px  /* 3rem */
--spacing-3xl: 64px  /* 4rem */
--spacing-4xl: 96px  /* 6rem */
```

**Usage in Tailwind:**
- `p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`, `p-2xl`, `p-3xl`, `p-4xl`
- Also works with margin, gap, etc.: `m-lg`, `gap-xl`, `space-y-2xl`

## Border Radius

Organic, rounded shapes:

```css
--radius-sm: 8px     /* 0.5rem */
--radius-md: 12px    /* 0.75rem */
--radius-lg: 16px    /* 1rem */
--radius-xl: 24px    /* 1.5rem */
--radius-2xl: 32px   /* 2rem */
--radius-pill: 999px /* Fully rounded */
```

**Usage in Tailwind:**
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-pill`

### Recommendations
- **Cards:** Use `rounded-xl` or `rounded-2xl` for organic feel
- **Buttons:** Use `rounded-pill` or `rounded-md`
- **Inputs:** Use `rounded-md` or `rounded-lg`

## Shadows

Soft, organic shadows with low opacity:

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
--shadow-md: 0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)
--shadow-lg: 0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)
```

**Usage in Tailwind:**
- `shadow-sm`, `shadow-md`, `shadow-lg`

## Transitions

```css
--transition-fast: 200ms ease-out
--transition-normal: 300ms ease-out
--transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

**Usage in Tailwind:**
- `duration-fast`, `duration-normal`
- `ease-smooth`

### Hover Effects
- **Scale:** `hover:scale-105` (1.02-1.05)
- **Lift:** `hover:-translate-y-1` (-2px to -4px)
- **Shadow:** `hover:shadow-lg`

## Component Guidelines

### Buttons

#### Primary Button
```tsx
<button className="bg-primary hover:bg-primary-dark text-primary-contrast 
                   rounded-pill px-6 py-3 font-medium 
                   transition-all duration-fast 
                   hover:scale-105 hover:shadow-md">
  Action
</button>
```

#### Secondary Button
```tsx
<button className="bg-transparent border-2 border-primary text-primary 
                   rounded-pill px-6 py-3 font-medium 
                   transition-all duration-fast 
                   hover:bg-primary hover:text-primary-contrast">
  Action
</button>
```

### Cards

```tsx
<div className="bg-bg-card rounded-xl p-8 shadow-md 
                transition-all duration-normal 
                hover:shadow-lg hover:-translate-y-1">
  {/* Card content */}
</div>
```

### Stats Display

```tsx
<div className="grid grid-cols-3 gap-8">
  <div className="text-center">
    <div className="text-5xl font-bold text-fg">42K</div>
    <div className="text-sm text-fg-muted mt-2">Metric Label</div>
  </div>
</div>
```

### Accent Highlights

Use accent colors sparingly for important information:

```tsx
<div className="bg-eco-accent-1 text-eco-navy-3 rounded-lg px-4 py-2">
  Important Info
</div>
```

## Accessibility

- **Color Contrast:** WCAG AA minimum (4.5:1)
- **Focus States:** 2-3px ring with offset (already implemented)
- **Interactive Size:** Minimum 44x44px touch targets
- **Motion:** Respects `prefers-reduced-motion`

## Dark Mode

Dark mode automatically uses the eco-navy palette. Toggle with:

```tsx
import { useTheme } from '@/lib/theme/theme-provider'

const { theme, setTheme } = useTheme()
setTheme(theme === 'dark' ? 'light' : 'dark')
```

## Migration Guide

### Old → New

| Old Class | New Class | Notes |
|-----------|-----------|-------|
| `bg-green-600` | `bg-primary` or `bg-eco-vibrant-1` | Primary green |
| `bg-green-100` | `bg-eco-soft-4` | Light green background |
| `text-green-600` | `text-primary` or `text-eco-vibrant-1` | Primary text color |
| `rounded-lg` | `rounded-xl` | More organic feel |
| Standard shadows | Keep using `shadow-sm/md/lg` | Now softer |

### Brand Colors Still Work

For backwards compatibility, these still work:
- `bg-brand-600` → Primary vibrant green
- `bg-brand-500` → Mid vibrant green  
- `bg-brand-400` → Soft green

## Examples

### Hero Section
```tsx
<section className="bg-eco-soft-4 py-4xl">
  <h1 className="text-6xl font-bold text-fg mb-lg">
    Hero Title
  </h1>
  <p className="text-xl text-fg-muted mb-2xl">
    Supporting text
  </p>
  <button className="bg-primary text-primary-contrast rounded-pill px-xl py-lg">
    Call to Action
  </button>
</section>
```

### Feature Card
```tsx
<div className="bg-bg-card rounded-2xl p-xl shadow-md hover:shadow-lg 
                transition-all duration-normal hover:-translate-y-1">
  <div className="w-12 h-12 bg-eco-vibrant-1 rounded-lg mb-lg" />
  <h3 className="text-2xl font-bold text-fg mb-md">Feature Title</h3>
  <p className="text-fg-muted">Feature description</p>
</div>
```

### Metric Display
```tsx
<div className="text-center">
  <div className="text-5xl font-bold text-eco-vibrant-1">$2,500</div>
  <div className="text-sm font-medium text-fg-muted mt-sm">Cost Savings</div>
</div>
```

## Resources

- Design System JSON: `eco_design_system.json`
- CSS Tokens: `src/lib/theme/tokens.css`
- Tailwind Config: `tailwind.config.js`

## Support

All existing components should automatically inherit the new design system. The colors are mapped to maintain backwards compatibility while providing new eco-specific classes for enhanced design control.

