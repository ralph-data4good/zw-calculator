import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Section, SectionTitle, SectionDescription } from '@/components/Section'
import { ScenarioMappingInputs, Scenario } from '@/data/types'
import { SCENARIOS, suggestScenario } from '@/data/scenarios'
import { ArrowRight } from 'lucide-react'

interface ScenarioMapperProps {
  onSelectScenario: (scenario: Scenario, localityName?: string) => void
  onSkip: () => void
}

export function ScenarioMapper({ onSelectScenario, onSkip }: ScenarioMapperProps) {
  const [mapping, setMapping] = useState<ScenarioMappingInputs>({
    country: 'Philippines',
    areaType: 'Urban',
    dominantActivities: [],
    terrain: 'Flatland',
    isCoastalIsland: 'No',
    populationBand: '25-100k',
    collectionFrequency: 'Daily',
    segregationParticipation: 'Medium',
    localityName: '',
  })

  const [suggested, setSuggested] = useState<Scenario | null>(null)
  const [selected, setSelected] = useState<Scenario | null>(null)

  const handleSuggest = () => {
    const scenario = suggestScenario(mapping)
    setSuggested(scenario)
    setSelected(scenario)
  }

  const handleContinue = () => {
    if (selected) {
      onSelectScenario(selected, mapping.localityName || undefined)
    }
  }

  return (
    <Section className="my-8">
      <SectionTitle>Map Your Scenario</SectionTitle>
      <SectionDescription>
        Answer a few questions to help us suggest the best-fit preset for your community.
      </SectionDescription>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Select
            value={mapping.country}
            onValueChange={value =>
              setMapping({ ...mapping, country: value as 'Philippines' | 'Indonesia' })
            }
          >
            <SelectTrigger id="country">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Philippines">Philippines</SelectItem>
              <SelectItem value="Indonesia">Indonesia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Area Type */}
        <div className="space-y-2">
          <Label htmlFor="areaType">Area Type</Label>
          <Select
            value={mapping.areaType}
            onValueChange={value =>
              setMapping({ ...mapping, areaType: value as 'Urban' | 'Peri-urban' | 'Rural' })
            }
          >
            <SelectTrigger id="areaType">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Urban">Urban</SelectItem>
              <SelectItem value="Peri-urban">Peri-urban</SelectItem>
              <SelectItem value="Rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Terrain */}
        <div className="space-y-2">
          <Label htmlFor="terrain">Terrain</Label>
          <Select
            value={mapping.terrain}
            onValueChange={value =>
              setMapping({ ...mapping, terrain: value as 'Flatland' | 'Mountainous' | 'Unsure' })
            }
          >
            <SelectTrigger id="terrain">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Flatland">Mostly Flatland</SelectItem>
              <SelectItem value="Mountainous">Mountainous</SelectItem>
              <SelectItem value="Unsure">Unsure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Is Coastal Island */}
        <div className="space-y-2">
          <Label htmlFor="island">Is the area a coastal island?</Label>
          <Select
            value={mapping.isCoastalIsland}
            onValueChange={value =>
              setMapping({ ...mapping, isCoastalIsland: value as 'Yes' | 'No' | 'Unsure' })
            }
          >
            <SelectTrigger id="island">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
              <SelectItem value="Unsure">Unsure</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-fg-muted">
            Select 'Yes' only for insular/coastal island localities.
          </p>
        </div>

        {/* Dominant Activities - NEW! */}
        <div className="space-y-2 md:col-span-2">
          <Label>Dominant activities (pick up to 2)</Label>
          <div className="flex flex-wrap gap-2">
            {(['Residential', 'Commercial', 'Tourism', 'Agriculture', 'Mixed', 'Unsure'] as const).map(
              activity => (
                <button
                  key={activity}
                  type="button"
                  onClick={() => {
                    const current = mapping.dominantActivities
                    if (current.includes(activity)) {
                      // Remove if already selected
                      setMapping({
                        ...mapping,
                        dominantActivities: current.filter(a => a !== activity),
                      })
                    } else if (current.length < 2) {
                      // Add if less than 2 selected
                      setMapping({
                        ...mapping,
                        dominantActivities: [...current, activity],
                      })
                    }
                  }}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    mapping.dominantActivities.includes(activity)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-bg hover:bg-bg-muted text-fg'
                  } ${
                    !mapping.dominantActivities.includes(activity) &&
                    mapping.dominantActivities.length >= 2
                      ? 'opacity-50 cursor-not-allowed'
                      : 'cursor-pointer'
                  }`}
                  disabled={
                    !mapping.dominantActivities.includes(activity) &&
                    mapping.dominantActivities.length >= 2
                  }
                >
                  {activity}
                </button>
              ),
            )}
          </div>
          <p className="text-xs text-fg-muted">
            Add rough % for each activity. Choose "Unsure" if you don't know.
          </p>
          {mapping.dominantActivities.length > 0 && (
            <div className="text-sm text-primary font-medium">
              Selected: {mapping.dominantActivities.join(', ')}
            </div>
          )}
        </div>

        {/* Population Band */}
        <div className="space-y-2">
          <Label htmlFor="popBand">Population Band</Label>
          <Select
            value={mapping.populationBand}
            onValueChange={value =>
              setMapping({
                ...mapping,
                populationBand: value as '<25k' | '25-100k' | '100-500k' | '>500k' | 'Unsure',
              })
            }
          >
            <SelectTrigger id="popBand">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="<25k">&lt;25,000</SelectItem>
              <SelectItem value="25-100k">25,000 – 100,000</SelectItem>
              <SelectItem value="100-500k">100,000 – 500,000</SelectItem>
              <SelectItem value=">500k">&gt;500,000</SelectItem>
              <SelectItem value="Unsure">Unsure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Collection Frequency */}
        <div className="space-y-2">
          <Label htmlFor="collFreq">Collection Frequency</Label>
          <Select
            value={mapping.collectionFrequency}
            onValueChange={value =>
              setMapping({
                ...mapping,
                collectionFrequency: value as
                  | 'Daily'
                  | '3x/week'
                  | 'Weekly'
                  | 'Irregular/Unsure',
              })
            }
          >
            <SelectTrigger id="collFreq">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Daily">Daily</SelectItem>
              <SelectItem value="3x/week">3× / week</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Irregular/Unsure">Irregular / Unsure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Segregation / Participation */}
        <div className="space-y-2">
          <Label htmlFor="segPart">Segregation / Participation</Label>
          <Select
            value={mapping.segregationParticipation}
            onValueChange={value =>
              setMapping({
                ...mapping,
                segregationParticipation: value as 'Low' | 'Medium' | 'High' | 'Unsure',
              })
            }
          >
            <SelectTrigger id="segPart">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Unsure">Unsure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Locality Name (optional) */}
        <div className="space-y-2">
          <Label htmlFor="localityName">Locality Name (optional)</Label>
          <Input
            id="localityName"
            type="text"
            placeholder="e.g., Barangay San Isidro"
            value={mapping.localityName}
            onChange={e => setMapping({ ...mapping, localityName: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Button onClick={handleSuggest} variant="primary">
          Suggest Scenario
        </Button>
        <Button onClick={onSkip} variant="ghost">
          Skip for Now
        </Button>
      </div>

      {suggested && (
        <div className="border-t border-border pt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-fg mb-2">Recommended Scenario</h3>
            <p className="text-sm text-fg-muted mb-4">{suggested.rationale}</p>
          </div>

          <div className="space-y-2">
            <Label>Choose your scenario:</Label>
            <div className="flex flex-wrap gap-2">
              {SCENARIOS.map(scenario => (
                <button
                  key={scenario.id}
                  onClick={() => setSelected(scenario)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    selected?.id === scenario.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-bg hover:bg-bg-muted text-fg'
                  }`}
                >
                  {scenario.name}
                  <span className="ml-2 text-xs opacity-70">{scenario.tag}</span>
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleContinue} size="lg" className="w-full md:w-auto">
            Continue with {selected?.name} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </Section>
  )
}

