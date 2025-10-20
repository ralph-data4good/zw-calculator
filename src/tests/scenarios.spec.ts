import { describe, it, expect } from 'vitest'
import { SCENARIOS, suggestScenario } from '@/data/scenarios'
import { ScenarioMappingInputs } from '@/data/types'
import { DEFAULTS } from '@/data/defaults'

describe('SCENARIOS', () => {
  it('should have at least one scenario', () => {
    expect(SCENARIOS.length).toBeGreaterThan(0)
  })

  it('should have unique scenario IDs', () => {
    const ids = SCENARIOS.map(s => s.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('each scenario should apply function correctly', () => {
    SCENARIOS.forEach(scenario => {
      const result = scenario.apply(DEFAULTS)
      expect(result).toBeDefined()
      expect(result.population).toBeGreaterThan(0)
    })
  })
})

describe('suggestScenario', () => {
  it('should suggest island scenario for coastal islands', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Urban',
      dominantActivities: [],
      terrain: 'Flatland',
      isCoastalIsland: 'Yes',
      populationBand: '25-100k',
      collectionFrequency: 'Daily',
      segregationParticipation: 'Medium',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario.id).toBe('island-organics-recycling')
  })

  it('should suggest mountain scenario for mountainous terrain', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Peri-urban',
      dominantActivities: [],
      terrain: 'Mountainous',
      isCoastalIsland: 'No',
      populationBand: '25-100k',
      collectionFrequency: '3x/week',
      segregationParticipation: 'Medium',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario.id).toBe('mountain-organics')
  })

  it('should suggest mountain scenario for agricultural areas', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Rural',
      dominantActivities: ['Agriculture'],
      terrain: 'Flatland',
      isCoastalIsland: 'No',
      populationBand: '<25k',
      collectionFrequency: 'Weekly',
      segregationParticipation: 'Low',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario.id).toBe('mountain-organics')
  })

  it('should suggest rural scenario for small population', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Rural',
      dominantActivities: ['Residential'],
      terrain: 'Flatland',
      isCoastalIsland: 'No',
      populationBand: '<25k',
      collectionFrequency: 'Weekly',
      segregationParticipation: 'Low',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario.id).toBe('rural-organics')
  })

  it('should suggest urban scenario for large urban areas', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Urban',
      dominantActivities: ['Commercial', 'Residential'],
      terrain: 'Flatland',
      isCoastalIsland: 'No',
      populationBand: '>500k',
      collectionFrequency: 'Daily',
      segregationParticipation: 'High',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario.id).toBe('urban-organics-recycling')
  })

  it('should return a default scenario for unsure inputs', () => {
    const mapping: ScenarioMappingInputs = {
      country: 'Philippines',
      areaType: 'Peri-urban',
      dominantActivities: ['Unsure'],
      terrain: 'Unsure',
      isCoastalIsland: 'Unsure',
      populationBand: 'Unsure',
      collectionFrequency: 'Irregular/Unsure',
      segregationParticipation: 'Unsure',
    }

    const scenario = suggestScenario(mapping)
    expect(scenario).toBeDefined()
    expect(scenario.id).toBe('default')
  })
})

