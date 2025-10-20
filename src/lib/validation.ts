import { Inputs } from '@/data/types'

export type ValidationError = {
  field: string
  message: string
}

/**
 * Validate calculator inputs
 */
export function validateInputs(inputs: Inputs): ValidationError[] {
  const errors: ValidationError[] = []

  // Population
  if (inputs.population < 1) {
    errors.push({ field: 'population', message: 'Population must be at least 1' })
  }

  // Waste generation rate
  if (inputs.wastePerCapitaKgDay <= 0) {
    errors.push({
      field: 'wastePerCapitaKgDay',
      message: 'Waste generation rate must be positive',
    })
  }

  // Baseline cost
  if (inputs.baselineCostPerTon < 0) {
    errors.push({ field: 'baselineCostPerTon', message: 'Baseline cost cannot be negative' })
  }

  // Characterization must sum to 100
  const { organics, recyclables, residuals, special } = inputs.characterization
  const sum = organics + recyclables + residuals + special

  if (Math.abs(sum - 100) > 0.01) {
    errors.push({
      field: 'characterization',
      message: `Waste characterization must sum to 100% (currently ${sum.toFixed(1)}%)`,
    })
  }

  // Individual percentages
  if (organics < 0 || organics > 100) {
    errors.push({ field: 'characterization.organics', message: 'Organics must be 0-100%' })
  }
  if (recyclables < 0 || recyclables > 100) {
    errors.push({ field: 'characterization.recyclables', message: 'Recyclables must be 0-100%' })
  }
  if (residuals < 0 || residuals > 100) {
    errors.push({ field: 'characterization.residuals', message: 'Residuals must be 0-100%' })
  }
  if (special < 0 || special > 100) {
    errors.push({ field: 'characterization.special', message: 'Special must be 0-100%' })
  }

  // Composting adoption
  if (inputs.compostingAdoption < 0 || inputs.compostingAdoption > 1) {
    errors.push({
      field: 'compostingAdoption',
      message: 'Adoption rate must be between 0 and 1',
    })
  }

  // Diversion efficiency
  if (inputs.diversionEfficiency < 0 || inputs.diversionEfficiency > 1) {
    errors.push({
      field: 'diversionEfficiency',
      message: 'Diversion efficiency must be between 0 and 1',
    })
  }

  // Compost price
  if (inputs.compostPricePerKg < 0) {
    errors.push({ field: 'compostPricePerKg', message: 'Compost price cannot be negative' })
  }

  return errors
}

/**
 * Calculate derived values from inputs
 */
export function calculateDerived(inputs: Inputs) {
  const totalDailyKg = inputs.population * inputs.wastePerCapitaKgDay
  const totalAnnualTons = (totalDailyKg * 365) / 1000

  const shares = {
    organics: (totalAnnualTons * inputs.characterization.organics) / 100,
    recyclables: (totalAnnualTons * inputs.characterization.recyclables) / 100,
    residuals: (totalAnnualTons * inputs.characterization.residuals) / 100,
    special: (totalAnnualTons * inputs.characterization.special) / 100,
  }

  const baselineCost = totalAnnualTons * inputs.baselineCostPerTon

  const divertedOrganicsTons =
    shares.organics * inputs.compostingAdoption * inputs.diversionEfficiency
  const compostKg = divertedOrganicsTons * 1000
  const compostRevenue = compostKg * inputs.compostPricePerKg
  const avoidedDisposalSavings = divertedOrganicsTons * inputs.baselineCostPerTon
  const afterZWCost = baselineCost - avoidedDisposalSavings

  return {
    totalDailyKg,
    totalAnnualTons,
    shares,
    baselineCost,
    divertedOrganicsTons,
    compostKg,
    compostRevenue,
    avoidedDisposalSavings,
    afterZWCost,
  }
}

