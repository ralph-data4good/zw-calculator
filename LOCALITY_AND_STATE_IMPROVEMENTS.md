# Locality Name & State Persistence Improvements

## Overview
Two important user experience improvements have been implemented to ensure data quality and smooth navigation.

---

## 1. ✅ Locality Name Now Required

### Changes Made:

**Before:**
- Locality name was optional
- Users could proceed without specifying their location
- Made reports less specific and useful

**After:**
- Locality name is **required** (marked with red asterisk *)
- Validation prevents continuing without entering a locality name
- Clear error message: "Please enter a locality name to continue"
- Helper text guides users: "Enter the specific location (e.g., barangay, city, municipality) for this analysis"

### Implementation Details:

**Visual Changes:**
```
Label: "Locality Name *" (red asterisk)
Placeholder: "e.g., Barangay San Isidro, Quezon City"
Error state: Red border on input when validation fails
Error message: Displayed below input field
Helper text: Guidance on what to enter
```

**Validation Logic:**
- Checks if locality name is empty or only whitespace
- Shows error message if validation fails
- Clears error when user starts typing
- Trims whitespace from final value

**Type Safety:**
- Updated prop types to require locality name (not optional)
- Ensures all downstream components receive valid location data

### Benefits:
- ✅ Better data quality - all analyses are location-specific
- ✅ More useful reports with clear geographic attribution
- ✅ Professional output suitable for stakeholders
- ✅ Consistent context throughout the calculator

---

## 2. ✅ State Persistence When Navigating Back

### Changes Made:

**Before:**
- Clicking "Back" from Program Inputs reset all scenario mapper fields
- Users lost all their selections
- Frustrating experience if they wanted to adjust something

**After:**
- All scenario mapper fields **retain their values** when navigating back
- Country, area type, activities, terrain, etc. all preserved
- Locality name remains filled
- Suggested scenario selection is remembered
- Users can make quick adjustments without re-entering everything

### Implementation Details:

**State Management:**
```typescript
// Calculator stores the mapping state
const [savedScenarioMapping, setSavedScenarioMapping] = useState<ScenarioMappingInputs | undefined>(undefined)

// Save when user continues
const handleScenarioSelect = (scenario, country, localityName, mappingInputs) => {
  setSavedScenarioMapping(mappingInputs) // Store for later
  // ... continue to next step
}

// Restore when going back
<ScenarioMapper 
  initialValues={savedScenarioMapping}  // Pass saved values
  onSelectScenario={handleScenarioSelect}
  onSkip={handleSkipScenario}
/>
```

**ScenarioMapper Component:**
```typescript
// Accept initial values
interface ScenarioMapperProps {
  initialValues?: ScenarioMappingInputs
  // ...
}

// Initialize state with saved values or defaults
const [mapping, setMapping] = useState<ScenarioMappingInputs>(
  initialValues || { /* defaults */ }
)
```

### Benefits:
- ✅ Better user experience - no data loss
- ✅ Faster workflow - quick adjustments without re-entry
- ✅ Reduced friction in the calculator flow
- ✅ Professional behavior expected in modern applications

---

## Technical Implementation Summary

### Files Modified:

1. **`src/components/StepZero/ScenarioMapper.tsx`**
   - Added `localityError` state for validation
   - Added `initialValues` prop to accept previous state
   - Updated `handleContinue` to validate locality name
   - Changed locality field from optional to required (UI)
   - Pass `mappingInputs` back to parent on selection
   - Initialize state from `initialValues` or defaults

2. **`src/pages/Calculator.tsx`**
   - Added `savedScenarioMapping` state
   - Updated `handleScenarioSelect` to store mapping state
   - Updated signature to require `localityName` (not optional)
   - Pass `initialValues` prop to ScenarioMapper
   - Import `ScenarioMappingInputs` type

### Type Changes:

```typescript
// Before
onSelectScenario: (scenario, country, localityName?) => void

// After
onSelectScenario: (scenario, country, localityName, mappingInputs) => void
```

### Validation Flow:

```
User enters locality → Types in field → Error clears (if any)
                    ↓
User clicks "Continue" → Validate not empty → Show error if empty
                      ↓
Validation passes → Trim whitespace → Store state → Proceed
```

### State Persistence Flow:

```
Step 0: User fills form → Clicks "Continue" → Save state → Go to Step 1
                                                          ↓
Step 1: User clicks "Back" → Return to Step 0 → Restore saved state
                                                ↓
Step 0: All fields populated with previous values
```

---

## User Flow Examples

### Example 1: First Time Through

1. User fills out scenario mapper
   - Country: **Indonesia** ✓
   - Locality: **Quezon City** ✓
2. Clicks "Suggest Scenario" ✓
3. Reviews suggestion, clicks "Continue" ✓
4. **State saved automatically** ✓
5. Proceeds to Program Inputs

### Example 2: Navigating Back

1. User is in Program Inputs (Step 1)
2. Clicks "Back" button
3. Returns to Step 0
4. **All fields still populated:**
   - Country: Indonesia ✓
   - Locality: Quezon City ✓
   - All other selections preserved ✓
5. User can adjust and continue

### Example 3: Validation in Action

1. User fills everything except locality name
2. Clicks "Continue"
3. **Error appears**: "Please enter a locality name to continue"
4. Input field has red border
5. User enters locality name
6. Error disappears immediately
7. Can now continue successfully

---

## Quality Assurance

### Testing Checklist:
- [x] Locality name field shows red asterisk (*)
- [x] Cannot continue without locality name
- [x] Error message appears when empty
- [x] Error clears when typing
- [x] Whitespace-only entries are rejected
- [x] Values persist when navigating back
- [x] All dropdown selections preserved
- [x] Activity selections preserved
- [x] Suggested scenario remembered
- [x] No TypeScript errors
- [x] No linter warnings

### Edge Cases Handled:
- ✅ Empty string validation
- ✅ Whitespace-only validation
- ✅ Whitespace trimming on submit
- ✅ First visit (no saved state)
- ✅ Returning from Step 1 (saved state)
- ✅ Error state clearing
- ✅ Multiple back/forward navigation

---

## Impact

### Data Quality:
- **Before**: Some analyses had no location specified
- **After**: 100% of analyses have location context

### User Experience:
- **Before**: Lost all data when clicking back
- **After**: Seamless navigation with preserved state

### Professional Output:
- **Before**: Generic reports
- **After**: Location-specific, stakeholder-ready reports

---

## Future Enhancements

Possible future improvements:
1. Auto-save state to localStorage for session persistence
2. Allow editing locality name from Program Inputs
3. Validate locality name format (e.g., minimum length)
4. Suggest locality names based on country selection
5. Store multiple scenario analyses with different localities

---

**Implementation Date**: October 27, 2024  
**Status**: ✅ Complete and Tested  
**TypeScript**: ✅ No errors  
**Linter**: ✅ No warnings  
**Ready for Deployment**: Yes

---

## Code Quality

- ✅ Type-safe implementation
- ✅ Clear validation messages
- ✅ Proper state management
- ✅ No breaking changes
- ✅ Backward compatible (handles undefined initialValues)
- ✅ Well-documented code
- ✅ Follows React best practices

