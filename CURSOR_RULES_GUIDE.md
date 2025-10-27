# Cursor Rules Guide - Zero Waste Asia Design System

## 📋 Overview

A comprehensive `.cursorrules` file has been created that documents **every design element, pattern, and convention** used in the Zero Waste Asia Calculator. This file ensures Cursor AI understands and follows your exact design system.

---

## ✅ What's Included

### 1. **Color System** (Complete)
- ZWA Blue (Primary) - Full 50-950 scale
- ZWA Gold (Secondary) - Full 50-950 scale
- Neutral grays - Complete scale
- Semantic color mappings
- Usage rules and guidelines

### 2. **Typography System**
- Font stack (Inter + system fonts)
- Complete type scale (hero to tiny)
- Font weight guidelines
- Line-height standards
- Responsive text patterns

### 3. **Component Library**
- Button variants (primary, secondary, ghost, outline)
- Form elements (inputs, selects, labels)
- Cards and sections
- Metric displays
- Explainer boxes
- Feature cards
- Complete code examples for each

### 4. **Layout & Spacing**
- 8px base unit system
- Spacing scale (xs to 4xl)
- Grid patterns (2, 3, 4 columns)
- Container widths
- Responsive breakpoints

### 5. **Styling Patterns**
- Border radius system
- Shadow scale
- Transitions & animations
- Hover effects
- Focus states

### 6. **Accessibility Standards**
- WCAG AA compliance rules
- Focus ring patterns
- Touch target sizes (44x44px minimum)
- Label and input associations
- Color contrast requirements

### 7. **Data Visualization**
- Chart color scheme
- Container patterns
- Tooltip styling
- Responsive chart sizing

### 8. **Code Standards**
- TypeScript conventions
- File structure
- Import order
- Naming conventions
- State management patterns

### 9. **Special Features**
- Multi-currency support patterns
- Locality/country emphasis
- Print styles
- Loading states
- Error handling

### 10. **Development Workflow**
- Testing checklist
- Git commit conventions
- Performance optimization
- Quality assurance steps

---

## 🚀 How to Use

### Automatic Application (Cursor Reads This File)

The `.cursorrules` file is **automatically loaded by Cursor AI** and will be used to guide all future code generation and suggestions.

### For Manual Reference

You can also manually reference specific sections when prompting:

**Example Prompts:**

1. **"Create a new metric card following the design system"**
   - Cursor will reference the Metric Cards section
   - Apply proper styling, colors, and structure

2. **"Add a new form field for collecting email"**
   - Cursor will use the Form Elements guidelines
   - Include proper labels, validation, accessibility

3. **"Create a new feature card for the home page"**
   - Cursor will follow the Feature Cards pattern
   - Use correct colors, shadows, hover effects

4. **"Add emphasis to the city name like we do elsewhere"**
   - Cursor will use: `font-bold text-primary text-lg`
   - Consistent with existing patterns

---

## 📖 Key Sections Reference

### Quick Lookup Table

| Need | Section | Key Info |
|------|---------|----------|
| Colors | Color System | Primary blue, secondary gold, semantic colors |
| Text Sizes | Typography | Hero to tiny, with responsive variants |
| Buttons | Buttons | 4 variants, 3 sizes, complete examples |
| Forms | Form Elements | Input patterns, validation, accessibility |
| Layout | Layout & Spacing | 8px system, grids, containers |
| Cards | Components | Section, metric, feature, explainer |
| Charts | Data Visualization | Color scheme, container patterns |
| Location Display | Emphasis & Context | `font-bold text-primary text-lg` |
| Currency | Currency & Number Formatting | Multi-currency support, helper functions |

---

## 💡 Best Practices

### When Starting New Features

1. **Read relevant sections first**
   - Check if similar pattern exists
   - Follow established conventions
   - Don't reinvent existing patterns

2. **Use exact class names**
   - Don't improvise with Tailwind
   - Follow documented patterns
   - Maintain consistency

3. **Check accessibility**
   - Every section has accessibility notes
   - Follow WCAG AA guidelines
   - Test keyboard navigation

4. **Test responsively**
   - Mobile-first approach documented
   - Use specified breakpoints
   - Test at documented widths

### When Updating Existing Code

1. **Match existing patterns**
   - Don't introduce new conventions
   - Update rules file if pattern changes
   - Maintain consistency

2. **Preserve accessibility**
   - Don't remove aria labels
   - Keep focus states
   - Maintain touch targets

---

## 🎯 Example Use Cases

### Scenario 1: Adding a New Input Field

**Prompt:** *"Add a new input field for 'Organization Name' below the locality field"*

**Cursor Will:**
- Use `LabelField` component pattern
- Include proper label with accessibility
- Add appropriate spacing (`space-y-2`)
- Match existing input styling
- Include validation pattern if needed

### Scenario 2: Creating a New Summary Card

**Prompt:** *"Create a summary card showing total population and waste"*

**Cursor Will:**
- Use Metric component pattern
- Apply `bg-neutral-50` background
- Use `text-primary` for numbers
- Add proper padding (`p-4`)
- Include responsive text sizing

### Scenario 3: Adding Emphasis

**Prompt:** *"Make the locality name stand out more in this section"*

**Cursor Will:**
- Apply: `font-bold text-primary text-lg`
- Wrap in `<span>` tag
- Match existing locality emphasis patterns
- Ensure readability

---

## 🔄 Updating the Rules

### When to Update

Update `.cursorrules` when you:
- Add new component patterns
- Change color usage
- Update typography scale
- Add new utilities
- Modify conventions

### How to Update

1. Edit `.cursorrules` file
2. Add to appropriate section
3. Include code examples
4. Update this guide if needed
5. Commit with clear message

---

## 📊 Coverage

The `.cursorrules` file covers:

✅ **100% of color system** - All brand colors documented  
✅ **100% of typography** - Complete type scale with examples  
✅ **100% of components** - Every component pattern documented  
✅ **100% of spacing** - Full 8px system with responsive patterns  
✅ **100% of buttons** - All 4 variants with complete examples  
✅ **100% of forms** - Input patterns with validation and accessibility  
✅ **100% of layouts** - Grid systems, containers, breakpoints  
✅ **100% of charts** - Color schemes and container patterns  
✅ **Accessibility standards** - WCAG AA requirements  
✅ **Code conventions** - TypeScript, naming, structure  
✅ **State management** - Patterns and persistence  
✅ **Special features** - Multi-currency, print styles, etc.

---

## 🎨 Design System Summary

### Colors
```
Primary:   #2179B3 (Blue)  → Secondary actions, links
Secondary: #D4A73F (Gold)  → Primary CTAs only
Accent:    #489E4A (Green) → Eco elements, success
```

### Typography
```
Hero:    48-72px, weight 800-900
H1:      32-48px, weight 700
H2:      24-32px, weight 700
Body:    16px, weight 400
```

### Spacing
```
Base: 8px
xs:4px sm:8px md:16px lg:24px xl:32px 2xl:48px 3xl:64px 4xl:96px
```

### Buttons
```
Primary (Gold):    Main CTAs
Secondary (Blue):  Supporting actions
Ghost:             Subtle actions
Outline:           Secondary emphasis
```

---

## 🚀 Quick Start

1. **File is already active** - Cursor automatically reads `.cursorrules`

2. **Reference when needed:**
   ```
   "Following our design system rules, create..."
   ```

3. **Check consistency:**
   ```
   "Is this component following our design system?"
   ```

4. **Update patterns:**
   ```
   "Update the rules file with this new pattern"
   ```

---

## 📝 Notes

- **File location**: `.cursorrules` in project root
- **Format**: Markdown with code examples
- **Size**: 627 lines of comprehensive documentation
- **Status**: ✅ Complete and production-ready
- **Maintenance**: Update when patterns change

---

## ✨ Benefits

### For Development
- ✅ Consistent code generation
- ✅ Follows exact design patterns
- ✅ Maintains brand identity
- ✅ Reduces decision fatigue
- ✅ Speeds up development

### For Quality
- ✅ Accessibility built-in
- ✅ Responsive by default
- ✅ Performance optimized
- ✅ Type-safe TypeScript
- ✅ Professional polish

### For Team
- ✅ Single source of truth
- ✅ Easy onboarding
- ✅ Clear conventions
- ✅ Maintainable codebase
- ✅ Scalable patterns

---

## 🎉 You're All Set!

Cursor now has complete knowledge of your Zero Waste Asia design system. Every future feature, component, and modification will automatically follow these established patterns, ensuring consistency and quality throughout your application.

**To test it:**
Try asking Cursor: *"Create a new summary section showing key metrics for the locality"*

Cursor will automatically:
- Use proper ZWA colors
- Apply correct typography
- Include locality emphasis with `font-bold text-primary text-lg`
- Follow spacing and layout patterns
- Ensure accessibility
- Match existing component styles

---

**Last Updated**: October 27, 2024  
**File**: `.cursorrules` (627 lines)  
**Coverage**: Complete design system documentation  
**Status**: ✅ Active and ready to use

