import { Inputs, Scenario, ScenarioMappingInputs } from './types'
import { DEFAULTS } from './defaults'

export const SCENARIOS: Scenario[] = [
  {
    id: 'urban-organics-recycling',
    name: 'Urban LGU — Organics + Recycling',
    tag: 'LGU',
    description: 'Typical urban municipality with mixed residential and commercial waste',
    rationale:
      'Urban areas typically have higher waste generation and better segregation potential. Higher organics (50-55%) with moderate recyclables.',
    apply: (inputs: Inputs): Inputs => ({
      ...inputs,
      population: inputs.population || 50000,
      wastePerCapitaKgDay: 0.45,
      characterization: {
        organics: 52,
        recyclables: 26,
        residuals: 18,
        special: 4,
      },
      baselineCostPerTon: 4000,
      compostingAdoption: 0.2,
      diversionEfficiency: 0.65,
      compostPricePerKg: 3.5,
    }),
  },
  {
    id: 'island-organics-recycling',
    name: 'Island LGU — Organics + Recycling',
    tag: 'LGU',
    description: 'Coastal island municipality with tourism and seafood industry',
    rationale:
      'Island communities often have higher organics from seafood and tourism. Higher baseline costs due to logistics.',
    apply: (inputs: Inputs): Inputs => ({
      ...inputs,
      population: inputs.population || 15000,
      wastePerCapitaKgDay: 0.5,
      characterization: {
        organics: 58,
        recyclables: 22,
        residuals: 16,
        special: 4,
      },
      baselineCostPerTon: 5500,
      compostingAdoption: 0.18,
      diversionEfficiency: 0.6,
      compostPricePerKg: 4,
    }),
  },
  {
    id: 'mountain-organics',
    name: 'Mountain LGU — Organics Only',
    tag: 'LGU',
    description: 'Mountainous municipality with agricultural focus',
    rationale:
      'Mountain communities have high organics from agriculture. Recycling infrastructure may be limited.',
    apply: (inputs: Inputs): Inputs => ({
      ...inputs,
      population: inputs.population || 8000,
      wastePerCapitaKgDay: 0.35,
      characterization: {
        organics: 65,
        recyclables: 15,
        residuals: 16,
        special: 4,
      },
      baselineCostPerTon: 3000,
      compostingAdoption: 0.25,
      diversionEfficiency: 0.7,
      compostPricePerKg: 2.5,
    }),
  },
  {
    id: 'rural-organics',
    name: 'Rural LGU — Organics Only',
    tag: 'LGU',
    description: 'Rural barangay or small municipality',
    rationale:
      'Rural areas typically have very high organics (60-70%) from agriculture and livestock. Lower baseline costs.',
    apply: (inputs: Inputs): Inputs => ({
      ...inputs,
      population: inputs.population || 3000,
      wastePerCapitaKgDay: 0.3,
      characterization: {
        organics: 68,
        recyclables: 12,
        residuals: 16,
        special: 4,
      },
      baselineCostPerTon: 2500,
      compostingAdoption: 0.3,
      diversionEfficiency: 0.75,
      compostPricePerKg: 2,
    }),
  },
  {
    id: 'default',
    name: 'Default (Mixed/Unsure)',
    tag: 'LGU',
    description: 'Balanced default scenario for general use',
    rationale: 'Moderate assumptions suitable for initial exploration.',
    apply: (inputs: Inputs): Inputs => ({
      ...DEFAULTS,
      population: inputs.population || DEFAULTS.population,
    }),
  },
]

/**
 * Suggest the best-fit scenario based on mapping inputs
 */
export function suggestScenario(mapping: ScenarioMappingInputs): Scenario {
  const { areaType, isCoastalIsland, terrain, dominantActivities, populationBand } = mapping

  // Island check
  if (isCoastalIsland === 'Yes') {
    return SCENARIOS.find(s => s.id === 'island-organics-recycling') || SCENARIOS[4]
  }

  // Mountain check
  if (terrain === 'Mountainous' || dominantActivities.includes('Agriculture')) {
    return SCENARIOS.find(s => s.id === 'mountain-organics') || SCENARIOS[4]
  }

  // Rural check
  if (areaType === 'Rural' || populationBand === '<25k') {
    return SCENARIOS.find(s => s.id === 'rural-organics') || SCENARIOS[4]
  }

  // Urban check
  if (areaType === 'Urban' || populationBand === '>500k') {
    return SCENARIOS.find(s => s.id === 'urban-organics-recycling') || SCENARIOS[4]
  }

  // Default fallback
  return SCENARIOS[4]
}

