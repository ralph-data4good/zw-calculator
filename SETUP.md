# Zero Waste Asia Calculator — Setup & Development Guide

## 📦 Installation

### Step 1: Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### Step 2: Start Development Server

```bash
pnpm dev
```

Open your browser to `http://localhost:5173`

## 🏗️ Project Overview

### Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Custom Properties
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: lucide-react
- **Testing**: Vitest
- **Code Quality**: ESLint + Prettier

### File Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base shadcn/ui components (Button, Input, etc.)
│   ├── charts/         # Recharts visualizations
│   ├── StepZero/       # Step 0 specific components
│   └── *.tsx           # App-specific components (Section, Explainer, etc.)
├── data/               # Data layer
│   ├── types.ts        # TypeScript type definitions
│   ├── defaults.ts     # Default input values
│   └── scenarios.ts    # Scenario presets and suggestion logic
├── lib/                # Utilities and helpers
│   ├── theme/          # Theme provider and CSS tokens
│   ├── format.ts       # Number/currency formatting
│   ├── hashStep.ts     # URL hash navigation
│   ├── validation.ts   # Input validation and calculations
│   └── cn.ts           # Class name utility
├── pages/              # Main pages
│   └── Calculator.tsx  # Main calculator page with all steps
├── tests/              # Unit tests
└── styles/             # Global CSS
```

## 🎯 Key Features Implemented

### Step 0: Instructions + Scenario Mapping
- Welcome hero with feature cards
- "How it works" explainer
- Scenario mapping form (country, area type, terrain, etc.)
- Smart scenario suggestion based on user inputs
- 5 pre-configured scenarios (Urban, Island, Mountain, Rural, Default)

### Step 1: Inputs
- Population and waste generation inputs
- Waste characterization (must sum to 100%)
- Baseline disposal costs
- Composting assumptions (adoption, efficiency, price)
- Real-time validation with helpful error messages

### Step 2: Math Review
- Expandable accordion with calculation explainers
- Live values from user inputs
- Transparent formulas for:
  - Total waste generated
  - Waste by stream
  - Baseline costs
  - Composting impact
  - After-program costs

### Steps 3-5: Visualizations
- **Step 3**: Waste characterization pie chart
- **Step 4**: Before/after cost comparison bar chart
- **Step 5**: Savings and income bar chart

### Additional Features
- **Edit Drawer**: Side panel for live parameter editing
- **Snapshot Export**: Download JSON with inputs + results
- **Hash Navigation**: URL sync (e.g., `#0`, `#1`, `#2`)
- **Responsive**: Mobile-first design
- **Accessible**: WCAG-conscious colors, keyboard nav, ARIA labels

## 🧪 Testing

Run unit tests:
```bash
pnpm test
```

Tests cover:
- Math calculations (`math.spec.ts`)
- Input validation (`validation.spec.ts`)
- Scenario suggestion logic (`scenarios.spec.ts`)

## 🎨 Design System

### Colors
The app uses CSS custom properties defined in `src/lib/theme/tokens.css`:
- `--brand-600`, `--brand-400`: Primary brand colors
- `--bg`, `--bg-muted`: Background colors
- `--fg`, `--fg-muted`: Foreground/text colors
- `--border`: Border color
- `--primary`: Primary action color

### Typography
- Font: **Schibsted Grotesk** (loaded from Google Fonts)
- Headings: 2xl to 5xl font sizes
- Body: Base font with leading-relaxed for readability

### Components
All UI components follow the shadcn/ui pattern:
- Consistent `variant` and `size` props
- Composable primitives from Radix UI
- Tailwind utility classes for styling
- Focus-visible states for accessibility

## 🚀 Building for Production

```bash
pnpm build
```

The build output will be in the `dist/` directory.

Preview the production build:
```bash
pnpm preview
```

## 🔧 Development Tips

### Adding a New Scenario

1. Edit `src/data/scenarios.ts`
2. Add a new scenario object to the `SCENARIOS` array
3. Update the `suggestScenario` function if needed

### Modifying Calculations

1. Edit `src/lib/validation.ts`
2. Update the `calculateDerived` function
3. Add/update tests in `src/tests/math.spec.ts`

### Adding a New Input Field

1. Add the field to the `Inputs` type in `src/data/types.ts`
2. Update `DEFAULTS` in `src/data/defaults.ts`
3. Add validation in `validateInputs` function
4. Add the input field to Step 1 in `Calculator.tsx`
5. Update the EditDrawer component

### Customizing Theme

1. Edit CSS variables in `src/lib/theme/tokens.css`
2. Update Tailwind config in `tailwind.config.js` if needed
3. No component changes required (everything uses CSS vars)

## 📝 Code Style

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic formatting (2 spaces, single quotes)
- Run linting: `pnpm lint`

## 🐛 Common Issues

### "Module not found" errors
- Make sure you've run `pnpm install`
- Check that all imports use the `@/` alias correctly

### Tailwind classes not working
- Restart the dev server
- Check that the file is included in `tailwind.config.js` content array

### Tests failing
- Make sure you're using the correct version of Node.js (18+)
- Check that vitest is installed: `pnpm add -D vitest`

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)

## 🤝 Contributing

This calculator is designed to be extensible. Future enhancements might include:
- Recycling revenue module
- Program O&M costs
- Multi-language support
- Backend integration (Supabase/Firebase)
- Authentication and saved scenarios

See the "Roadmap" section in README.md for more ideas.

