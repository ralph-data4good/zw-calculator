import { describe, it, expect } from 'vitest'
import { calculateDerived } from '@/lib/validation'
import { DEFAULTS } from '@/data/defaults'

describe('calculateDerived', () => {
  it('should calculate total daily waste correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const expected = DEFAULTS.population * DEFAULTS.wastePerCapitaKgDay
    expect(derived.totalDailyKg).toBe(expected)
  })

  it('should calculate total annual waste correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const dailyKg = DEFAULTS.population * DEFAULTS.wastePerCapitaKgDay
    const expected = (dailyKg * 365) / 1000
    expect(derived.totalAnnualTons).toBeCloseTo(expected, 2)
  })

  it('should calculate waste shares correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const totalAnnual = (DEFAULTS.population * DEFAULTS.wastePerCapitaKgDay * 365) / 1000

    expect(derived.shares.organics).toBeCloseTo(
      (totalAnnual * DEFAULTS.characterization.organics) / 100,
      2
    )
    expect(derived.shares.recyclables).toBeCloseTo(
      (totalAnnual * DEFAULTS.characterization.recyclables) / 100,
      2
    )
  })

  it('should calculate baseline cost correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const totalAnnual = (DEFAULTS.population * DEFAULTS.wastePerCapitaKgDay * 365) / 1000
    const expected = totalAnnual * DEFAULTS.baselineCostPerTon

    expect(derived.baselineCost).toBeCloseTo(expected, 2)
  })

  it('should calculate diverted organics correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const totalAnnual = (DEFAULTS.population * DEFAULTS.wastePerCapitaKgDay * 365) / 1000
    const organics = (totalAnnual * DEFAULTS.characterization.organics) / 100
    const expected = organics * DEFAULTS.compostingAdoption * DEFAULTS.diversionEfficiency

    expect(derived.divertedOrganicsTons).toBeCloseTo(expected, 2)
  })

  it('should calculate compost revenue correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const expected = derived.compostKg * DEFAULTS.compostPricePerKg

    expect(derived.compostRevenue).toBeCloseTo(expected, 2)
  })

  it('should calculate avoided disposal savings correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const expected = derived.divertedOrganicsTons * DEFAULTS.baselineCostPerTon

    expect(derived.avoidedDisposalSavings).toBeCloseTo(expected, 2)
  })

  it('should calculate after-program cost correctly', () => {
    const derived = calculateDerived(DEFAULTS)
    const expected = derived.baselineCost - derived.avoidedDisposalSavings

    expect(derived.afterZWCost).toBeCloseTo(expected, 2)
  })
})

