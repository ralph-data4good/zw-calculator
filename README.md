# Zero Waste Asia — Community Waste Management Calculator

A modern, production-ready React calculator for planning community waste management programs in Southeast Asia (Philippines & Indonesia contexts). Built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🎯 Features

- **Step 0 — Instructions + Scenario Mapping**: Welcome screen with scenario-based presets
- **Step 1 — Inputs**: Population, waste generation, characterization, and composting assumptions
- **Step 2 — Math Review**: Transparent walkthrough of calculations with expandable explainers
- **Steps 3–5 — Visualizations**: Interactive charts for waste characterization, cost comparison, and savings
- **Edit Drawer**: Live parameter editing with instant result updates
- **Snapshot Export**: Download inputs and derived results as JSON
- **Hash-based Navigation**: URL sync for each step (`#0`, `#1`, `#2`, etc.)
- **Accessibility**: WCAG-conscious colors, keyboard navigation, ARIA labels
- **Responsive Design**: Mobile-first, works on all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd zwa-calculator

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm lint      # Run ESLint
pnpm test      # Run unit tests
```

## 📁 Project Structure

```
zwa-calculator/
├─ src/
│  ├─ components/        # UI components
│  │  ├─ ui/            # shadcn/ui primitives
│  │  ├─ charts/        # Recharts visualizations
│  │  └─ StepZero/      # Step 0 components
│  ├─ data/             # Types, defaults, scenarios
│  ├─ lib/              # Utilities (format, validation, theme)
│  ├─ pages/            # Main Calculator page
│  ├─ styles/           # Global CSS
│  └─ tests/            # Unit tests
├─ public/              # Static assets
└─ Config files         # TypeScript, Vite, Tailwind, ESLint, Prettier
```

## 🎨 Design System

- **Font**: Schibsted Grotesk (Google Fonts)
- **Colors**: CSS custom properties for light/dark mode support
- **Border Radius**: Rounded `2xl` for cards and buttons
- **Shadows**: Soft elevation with `shadow-sm`, `shadow-md`, `shadow-lg`
- **Spacing**: Consistent padding and margins using Tailwind utilities

## 🧮 Calculations

The calculator uses the following formulas:

```
Daily waste (kg)         = population × wastePerCapitaKgDay
Annual waste (tons)      = daily_kg × 365 ÷ 1000
Stream share (tons)      = annual_tons × (stream_% ÷ 100)
Baseline cost            = annual_tons × baselineCostPerTon
Diverted organics (tons) = organics_tons × adoption × efficiency
Compost (kg)             = diverted_organics × 1000
Compost revenue          = compost_kg × compostPricePerKg
Avoided disposal         = diverted_organics × baselineCostPerTon
After-program cost       = baseline_cost − avoided_disposal
```

See `src/lib/validation.ts` for implementation.

## 🧪 Testing

Unit tests cover:
- Math calculations (`math.spec.ts`)
- Input validation (`validation.spec.ts`)
- Scenario suggestion logic (`scenarios.spec.ts`)

Run tests with:
```bash
pnpm test
```

## 🌐 Scenario Presets

The calculator includes 5 pre-configured scenarios:

1. **Urban LGU** — Mixed residential/commercial, higher generation rates
2. **Island LGU** — Coastal island with tourism, higher logistics costs
3. **Mountain LGU** — Agricultural focus, high organics
4. **Rural LGU** — Small barangay, very high organics
5. **Default** — Balanced scenario for general use

The **Scenario Mapper** in Step 0 suggests the best-fit preset based on:
- Country (Philippines/Indonesia)
- Area type (Urban/Peri-urban/Rural)
- Terrain (Flatland/Mountainous)
- Coastal island status
- Population band
- Collection frequency
- Segregation participation

## 📊 Data Export

Use the **Save Snapshot** button to download a JSON file with:
- All input parameters
- Calculated derived values
- Timestamp and version

Example:
```json
{
  "inputs": { ... },
  "derived": { ... },
  "createdAt": "2025-10-20T12:00:00Z",
  "version": "1.0.0"
}
```

## 🎯 Roadmap (Stretch Goals)

Future enhancements (currently commented out or stubbed):

- [ ] Program O&M cost module (fixed or % of baseline)
- [ ] Recycling revenues (materials, recovery %, pricing)
- [ ] CSV export for derived tables
- [ ] Embed mode with `onSnapshot` callback
- [ ] Multi-language support (English, Filipino, Bahasa)
- [ ] Backend integration (Supabase/Firebase)
- [ ] User authentication and saved scenarios

## 🤝 Contributing

This is a planning tool for educational and early-stage estimation purposes. For formal reporting or procurement, consult with waste management professionals.

## 📄 License

[Your License Here]

## 🙏 Acknowledgments

Built for **Zero Waste Asia** to support community waste management planning in Southeast Asia.

---

**Disclaimer**: This tool provides *indicative estimates* for planning and education purposes. Presets are based on averages and may not reflect specific local conditions.

