import { describe, it, expect } from 'vitest'
import { validateInputs } from '@/lib/validation'
import { DEFAULTS } from '@/data/defaults'
import { Inputs } from '@/data/types'

describe('validateInputs', () => {
  it('should pass validation for default inputs', () => {
    const errors = validateInputs(DEFAULTS)
    expect(errors).toHaveLength(0)
  })

  it('should reject negative population', () => {
    const inputs: Inputs = { ...DEFAULTS, population: -1 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'population')).toBe(true)
  })

  it('should reject zero population', () => {
    const inputs: Inputs = { ...DEFAULTS, population: 0 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'population')).toBe(true)
  })

  it('should reject negative waste generation rate', () => {
    const inputs: Inputs = { ...DEFAULTS, wastePerCapitaKgDay: -0.1 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'wastePerCapitaKgDay')).toBe(true)
  })

  it('should reject characterization that does not sum to 100', () => {
    const inputs: Inputs = {
      ...DEFAULTS,
      characterization: {
        organics: 50,
        recyclables: 20,
        residuals: 20,
        special: 5, // Sum = 95
      },
    }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'characterization')).toBe(true)
  })

  it('should accept characterization that sums to 100', () => {
    const inputs: Inputs = {
      ...DEFAULTS,
      characterization: {
        organics: 50,
        recyclables: 25,
        residuals: 20,
        special: 5, // Sum = 100
      },
    }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'characterization')).toBe(false)
  })

  it('should reject adoption rate > 1', () => {
    const inputs: Inputs = { ...DEFAULTS, compostingAdoption: 1.5 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'compostingAdoption')).toBe(true)
  })

  it('should reject adoption rate < 0', () => {
    const inputs: Inputs = { ...DEFAULTS, compostingAdoption: -0.1 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'compostingAdoption')).toBe(true)
  })

  it('should reject diversion efficiency > 1', () => {
    const inputs: Inputs = { ...DEFAULTS, diversionEfficiency: 1.2 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'diversionEfficiency')).toBe(true)
  })

  it('should reject negative compost price', () => {
    const inputs: Inputs = { ...DEFAULTS, compostPricePerKg: -1 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'compostPricePerKg')).toBe(true)
  })

  it('should reject negative baseline cost', () => {
    const inputs: Inputs = { ...DEFAULTS, baselineCostPerTon: -100 }
    const errors = validateInputs(inputs)
    expect(errors.some(e => e.field === 'baselineCostPerTon')).toBe(true)
  })
})

