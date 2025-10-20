import { Inputs } from './types'

export const DEFAULTS: Inputs = {
  population: 5000,
  wastePerCapitaKgDay: 0.4,
  characterization: {
    organics: 52,
    recyclables: 24,
    residuals: 20,
    special: 4,
  },
  baselineCostPerTon: 3500,
  compostingAdoption: 0.15,
  compostPricePerKg: 3,
  diversionEfficiency: 0.6,
}

