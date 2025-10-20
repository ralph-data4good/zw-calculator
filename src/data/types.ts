export type Inputs = {
  population: number
  wastePerCapitaKgDay: number
  characterization: {
    organics: number
    recyclables: number
    residuals: number
    special: number
  }
  baselineCostPerTon: number
  compostingAdoption: number
  compostPricePerKg: number
  diversionEfficiency: number
}

export type Derived = {
  totalDailyKg: number
  totalAnnualTons: number
  shares: {
    organics: number
    recyclables: number
    residuals: number
    special: number
  }
  baselineCost: number
  divertedOrganicsTons: number
  compostKg: number
  compostRevenue: number
  avoidedDisposalSavings: number
  afterZWCost: number
}

export type ScenarioTag = 'LGU' | 'Community' | 'Campus'

export type Scenario = {
  id: string
  name: string
  tag: ScenarioTag
  description?: string
  rationale?: string
  apply: (inputs: Inputs) => Inputs
}

export type ScenarioMappingInputs = {
  country: 'Philippines' | 'Indonesia'
  areaType: 'Urban' | 'Peri-urban' | 'Rural'
  dominantActivities: Array<'Residential' | 'Commercial' | 'Tourism' | 'Agriculture' | 'Mixed' | 'Unsure'>
  terrain: 'Flatland' | 'Mountainous' | 'Unsure'
  isCoastalIsland: 'Yes' | 'No' | 'Unsure'
  populationBand: '<25k' | '25-100k' | '100-500k' | '>500k' | 'Unsure'
  collectionFrequency: 'Daily' | '3x/week' | 'Weekly' | 'Irregular/Unsure'
  segregationParticipation: 'Low' | 'Medium' | 'High' | 'Unsure'
  localityName?: string
}

export type Snapshot = {
  inputs: Inputs
  derived: Derived
  createdAt: string
  version: string
}

