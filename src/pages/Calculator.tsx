import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Section, SectionTitle, SectionDescription } from '@/components/Section'
import { Explainer } from '@/components/Explainer'
import { LabelField } from '@/components/LabelField'
import { Metric } from '@/components/Metric'
import { EditDrawer } from '@/components/EditDrawer'
import { PrintView } from '@/components/PrintView'
import { Welcome } from '@/components/StepZero/Welcome'
import { FeatureCards } from '@/components/StepZero/FeatureCards'
import { HowItWorks } from '@/components/StepZero/HowItWorks'
import { Disclaimer } from '@/components/StepZero/Disclaimer'
import { ScenarioMapper } from '@/components/StepZero/ScenarioMapper'
import { WastePie } from '@/components/charts/WastePie'
import { CostBars } from '@/components/charts/CostBars'
import { SavingsBars } from '@/components/charts/SavingsBars'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Inputs, Derived, Scenario } from '@/data/types'
import { DEFAULTS } from '@/data/defaults'
import { validateInputs, calculateDerived } from '@/lib/validation'
import { formatCurrency, formatNumber, formatPercent, getCurrencyCode, type Country } from '@/lib/format'
import { getCurrentStep, setStep, listenToHashChange } from '@/lib/hashStep'
import { ArrowRight, Edit, Download, ChevronLeft, Share2, Printer } from 'lucide-react'

export function Calculator() {
  const [currentStep, setCurrentStep] = useState(getCurrentStep())
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const [derived, setDerived] = useState<Derived>(calculateDerived(DEFAULTS))
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showEditDrawer, setShowEditDrawer] = useState(false)
  const [hasSeenResults, setHasSeenResults] = useState(false)
  const [scenarioName, setScenarioName] = useState<string>('')
  const [country, setCountry] = useState<Country>('Philippines')
  const [localityName, setLocalityName] = useState<string>('')

  // Listen to hash changes
  useEffect(() => {
    return listenToHashChange(step => {
      setCurrentStep(step)
    })
  }, [])

  // Recalculate derived values when inputs change
  useEffect(() => {
    setDerived(calculateDerived(inputs))
  }, [inputs])

  const handleScenarioSelect = (scenario: Scenario, selectedCountry: Country, selectedLocalityName?: string) => {
    const newInputs = scenario.apply(inputs)
    setInputs(newInputs)
    setScenarioName(scenario.name)
    setCountry(selectedCountry)
    setLocalityName(selectedLocalityName || '')
    setStep(1)
  }

  const handleSkipScenario = () => {
    setStep(1)
  }

  const handleShowResults = () => {
    const validationErrors = validateInputs(inputs)
    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {}
      validationErrors.forEach(err => {
        errorMap[err.field] = err.message
      })
      setErrors(errorMap)
      return
    }

    setErrors({})
    setHasSeenResults(true)
    setStep(2)
  }

  const handleSaveInputs = (newInputs: Inputs) => {
    setInputs(newInputs)
  }

  const handleExportSnapshot = () => {
    const snapshot = {
      inputs,
      derived,
      createdAt: new Date().toISOString(),
      version: '1.0.0',
    }

    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `zwa-calculator-snapshot-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Zero Waste Asia Calculator Results',
      text: `Zero Waste Calculator - Population: ${inputs.population.toLocaleString()}, Annual Waste: ${formatNumber(derived.totalAnnualTons, 1)} tons, Net Savings: ${formatCurrency(derived.avoidedDisposalSavings + derived.compostRevenue - derived.afterZWCost, country, 0)}`,
      url: window.location.href,
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.error('Error sharing:', err)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const characterizationSum =
    inputs.characterization.organics +
    inputs.characterization.recyclables +
    inputs.characterization.residuals +
    inputs.characterization.special

  return (
    <div className="min-h-screen bg-bg-muted">
      {/* Header */}
      <header className="bg-header-bg border-b border-zwa-blue-700 sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Zero Waste Calculator</h1>
            {currentStep > 0 && (
              <span className="text-sm text-zwa-blue-200 font-medium">
                Step {currentStep} of 5
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {currentStep > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStep(Math.max(0, currentStep - 1))}
                className="text-white hover:bg-zwa-blue-700"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
            )}
            {hasSeenResults && (
              <>
                <Button variant="primary" size="sm" onClick={() => setShowEditDrawer(true)}>
                  <Edit className="h-4 w-4 mr-1" />
                  Edit Inputs
                </Button>
                <Button variant="secondary" size="sm" onClick={handleExportSnapshot}>
                  <Download className="h-4 w-4 mr-1" />
                  Save Snapshot
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Step 0: Instructions & Scenario Mapping */}
        {currentStep === 0 && (
          <div className="space-y-8">
            <Welcome onGetStarted={() => {
              const element = document.getElementById('scenario-mapping')
              element?.scrollIntoView({ behavior: 'smooth' })
            }} />
            <FeatureCards />
            <HowItWorks />
            <Disclaimer />
            <div id="scenario-mapping">
              <ScenarioMapper onSelectScenario={handleScenarioSelect} onSkip={handleSkipScenario} />
            </div>
          </div>
        )}

        {/* Step 1: Inputs */}
        {currentStep === 1 && (
          <Section>
            <SectionTitle>Program Inputs</SectionTitle>
            <SectionDescription>
              {localityName ? (
                <>
                  Enter the parameters for <strong>{localityName}</strong>, {country}. All fields are required.
                </>
              ) : (
                <>
                  Enter the parameters for your community's waste management program. All fields are required.
                </>
              )}
            </SectionDescription>

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-medium text-fg">Basic Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <LabelField
                    label="Population Served"
                    id="population"
                    value={inputs.population}
                    onChange={val => setInputs({ ...inputs, population: parseInt(val) || 0 })}
                    min={1}
                    error={errors.population}
                    suffix="people"
                  />
                  <LabelField
                    label="Waste Generation Rate"
                    id="wastePerCapita"
                    value={inputs.wastePerCapitaKgDay}
                    onChange={val =>
                      setInputs({ ...inputs, wastePerCapitaKgDay: parseFloat(val) || 0 })
                    }
                    step="0.01"
                    min={0}
                    error={errors.wastePerCapitaKgDay}
                    suffix="kg/cap/day"
                  />
                </div>
              </div>

              {/* Waste Characterization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-fg">Waste Characterization (%)</h3>
                  <span
                    className={`text-sm font-medium ${
                      Math.abs(characterizationSum - 100) < 0.01 ? 'text-primary' : 'text-red-500'
                    }`}
                  >
                    Total: {characterizationSum.toFixed(1)}% {Math.abs(characterizationSum - 100) < 0.01 ? '✓' : ''}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <LabelField
                    label="Organics"
                    id="organics"
                    value={inputs.characterization.organics}
                    onChange={val =>
                      setInputs({
                        ...inputs,
                        characterization: {
                          ...inputs.characterization,
                          organics: parseFloat(val) || 0,
                        },
                      })
                    }
                    step="0.1"
                    min={0}
                    max={100}
                    error={errors['characterization.organics']}
                    suffix="%"
                  />
                  <LabelField
                    label="Recyclables"
                    id="recyclables"
                    value={inputs.characterization.recyclables}
                    onChange={val =>
                      setInputs({
                        ...inputs,
                        characterization: {
                          ...inputs.characterization,
                          recyclables: parseFloat(val) || 0,
                        },
                      })
                    }
                    step="0.1"
                    min={0}
                    max={100}
                    error={errors['characterization.recyclables']}
                    suffix="%"
                  />
                  <LabelField
                    label="Residuals"
                    id="residuals"
                    value={inputs.characterization.residuals}
                    onChange={val =>
                      setInputs({
                        ...inputs,
                        characterization: {
                          ...inputs.characterization,
                          residuals: parseFloat(val) || 0,
                        },
                      })
                    }
                    step="0.1"
                    min={0}
                    max={100}
                    error={errors['characterization.residuals']}
                    suffix="%"
                  />
                  <LabelField
                    label="Special"
                    id="special"
                    value={inputs.characterization.special}
                    onChange={val =>
                      setInputs({
                        ...inputs,
                        characterization: {
                          ...inputs.characterization,
                          special: parseFloat(val) || 0,
                        },
                      })
                    }
                    step="0.1"
                    min={0}
                    max={100}
                    error={errors['characterization.special']}
                    suffix="%"
                  />
                </div>
              </div>

              {/* Baseline Cost */}
              <div className="space-y-4">
                <h3 className="font-medium text-fg">Costs</h3>
                <LabelField
                  label="Baseline Cost per Ton"
                  id="baselineCost"
                  value={inputs.baselineCostPerTon}
                  onChange={val =>
                    setInputs({ ...inputs, baselineCostPerTon: parseFloat(val) || 0 })
                  }
                  step="100"
                  min={0}
                  error={errors.baselineCostPerTon}
                  helper="Current disposal cost per ton"
                  suffix={`${getCurrencyCode(country)}/ton`}
                />
              </div>

              {/* Composting */}
              <div className="space-y-4">
                <h3 className="font-medium text-fg">Composting (Individual)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <LabelField
                    label="Adoption Rate"
                    id="adoption"
                    value={inputs.compostingAdoption}
                    onChange={val =>
                      setInputs({ ...inputs, compostingAdoption: parseFloat(val) || 0 })
                    }
                    step="0.01"
                    min={0}
                    max={1}
                    error={errors.compostingAdoption}
                    helper="0.15 = 15% of households"
                  />
                  <LabelField
                    label="Diversion Efficiency"
                    id="efficiency"
                    value={inputs.diversionEfficiency}
                    onChange={val =>
                      setInputs({ ...inputs, diversionEfficiency: parseFloat(val) || 0 })
                    }
                    step="0.01"
                    min={0}
                    max={1}
                    error={errors.diversionEfficiency}
                    helper="0.6 = 60% successfully composted"
                  />
                  <LabelField
                    label="Compost Price per kg"
                    id="compostPrice"
                    value={inputs.compostPricePerKg}
                    onChange={val =>
                      setInputs({ ...inputs, compostPricePerKg: parseFloat(val) || 0 })
                    }
                    step="0.5"
                    min={0}
                    error={errors.compostPricePerKg}
                    suffix={getCurrencyCode(country)}
                  />
                </div>
              </div>
            </div>

            {Object.keys(errors).length > 0 && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p className="font-medium mb-2">Please fix the following errors:</p>
                <ul className="list-disc list-inside space-y-1">
                  {Object.values(errors).map((error, i) => (
                    <li key={i}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <Button onClick={handleShowResults} size="lg" className="w-full md:w-auto">
              Show Results <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Section>
        )}

        {/* Step 2: Review & Understand the Math */}
        {currentStep === 2 && (
          <Section>
            <SectionTitle>Review & Understand the Math</SectionTitle>
            <SectionDescription>
              Explore how your inputs translate into waste generation, costs, and program impacts.
            </SectionDescription>

            <Accordion type="multiple" defaultValue={['waste', 'baseline']} className="space-y-2">
              <AccordionItem value="waste">
                <AccordionTrigger className="text-left">
                  Total Waste Generated
                </AccordionTrigger>
                <AccordionContent>
                  <Explainer>
                    <div className="space-y-2">
                      <p>
                        <strong>Daily waste:</strong> {inputs.population} people × {inputs.wastePerCapitaKgDay} kg/cap/day = <strong>{formatNumber(derived.totalDailyKg, 2)} kg/day</strong>
                      </p>
                      <p>
                        <strong>Annual waste:</strong> {formatNumber(derived.totalDailyKg, 2)} kg/day × 365 days ÷ 1,000 = <strong>{formatNumber(derived.totalAnnualTons, 2)} tons/year</strong>
                      </p>
                    </div>
                  </Explainer>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="characterization">
                <AccordionTrigger className="text-left">
                  Waste Characterization by Stream
                </AccordionTrigger>
                <AccordionContent>
                  <Explainer>
                    <div className="space-y-2">
                      <p>
                        <strong>Organics:</strong> {formatNumber(derived.totalAnnualTons, 2)} t/yr × {inputs.characterization.organics}% = <strong>{formatNumber(derived.shares.organics, 2)} t/yr</strong>
                      </p>
                      <p>
                        <strong>Recyclables:</strong> {formatNumber(derived.totalAnnualTons, 2)} t/yr × {inputs.characterization.recyclables}% = <strong>{formatNumber(derived.shares.recyclables, 2)} t/yr</strong>
                      </p>
                      <p>
                        <strong>Residuals:</strong> {formatNumber(derived.totalAnnualTons, 2)} t/yr × {inputs.characterization.residuals}% = <strong>{formatNumber(derived.shares.residuals, 2)} t/yr</strong>
                      </p>
                      <p>
                        <strong>Special:</strong> {formatNumber(derived.totalAnnualTons, 2)} t/yr × {inputs.characterization.special}% = <strong>{formatNumber(derived.shares.special, 2)} t/yr</strong>
                      </p>
                    </div>
                  </Explainer>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="baseline">
                <AccordionTrigger className="text-left">
                  Baseline System Cost
                </AccordionTrigger>
                <AccordionContent>
                  <Explainer>
                    <p>
                      {formatNumber(derived.totalAnnualTons, 2)} tons/year × {formatCurrency(inputs.baselineCostPerTon, country, 0)}/ton = <strong>{formatCurrency(derived.baselineCost, country, 0)}/year</strong>
                    </p>
                    <p className="text-xs mt-2">This is the cost of disposing all waste with no diversion programs.</p>
                  </Explainer>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="composting">
                <AccordionTrigger className="text-left">
                  Composting Impact (Individual)
                </AccordionTrigger>
                <AccordionContent>
                  <Explainer>
                    <div className="space-y-2">
                      <p>
                        <strong>Diverted organics:</strong> {formatNumber(derived.shares.organics, 2)} t/yr × {formatPercent(inputs.compostingAdoption)} adoption × {formatPercent(inputs.diversionEfficiency)} efficiency = <strong>{formatNumber(derived.divertedOrganicsTons, 2)} t/yr</strong>
                      </p>
                      <p>
                        <strong>Compost produced:</strong> {formatNumber(derived.divertedOrganicsTons, 2)} tons × 1,000 = <strong>{formatNumber(derived.compostKg, 0)} kg</strong>
                      </p>
                      <p>
                        <strong>Compost revenue:</strong> {formatNumber(derived.compostKg, 0)} kg × {formatCurrency(inputs.compostPricePerKg, country, 2)}/kg = <strong>{formatCurrency(derived.compostRevenue, country, 0)}</strong>
                      </p>
                      <p>
                        <strong>Avoided disposal cost:</strong> {formatNumber(derived.divertedOrganicsTons, 2)} t/yr × {formatCurrency(inputs.baselineCostPerTon, country, 0)}/ton = <strong>{formatCurrency(derived.avoidedDisposalSavings, country, 0)}</strong>
                      </p>
                    </div>
                  </Explainer>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="after">
                <AccordionTrigger className="text-left">
                  After-Program Cost
                </AccordionTrigger>
                <AccordionContent>
                  <Explainer>
                    <p>
                      {formatCurrency(derived.baselineCost, country, 0)} (baseline) − {formatCurrency(derived.avoidedDisposalSavings, country, 0)} (avoided disposal) = <strong>{formatCurrency(derived.afterZWCost, country, 0)}/year</strong>
                    </p>
                    <p className="text-xs mt-2">
                      <em>Note:</em> This first-pass estimate excludes program O&M costs, CAPEX amortization, and recycling revenues. Future versions will include these modules.
                    </p>
                  </Explainer>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex gap-3 mt-6">
              <Button onClick={() => setStep(3)} size="lg">
                View Charts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Section>
        )}

        {/* Step 3: Waste Characterization Chart */}
        {currentStep === 3 && (
          <Section>
            <SectionTitle>Step 3: Waste Characterization</SectionTitle>
            <SectionDescription>
              {localityName ? (
                <>
                  Distribution of waste by stream for <strong>{localityName}</strong>, {country} (tons per year).
                </>
              ) : (
                <>
                  Distribution of waste by stream for your community (tons per year).
                </>
              )}
            </SectionDescription>

            <WastePie derived={derived} />

            <Explainer className="mt-6">
              This pie chart shows the breakdown of your {formatNumber(derived.totalAnnualTons, 2)} tons/year of total waste. Organics represent the largest opportunity for composting programs.
            </Explainer>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <Metric label="Organics" value={`${formatNumber(derived.shares.organics, 1)} t/yr`} />
              <Metric label="Recyclables" value={`${formatNumber(derived.shares.recyclables, 1)} t/yr`} />
              <Metric label="Residuals" value={`${formatNumber(derived.shares.residuals, 1)} t/yr`} />
              <Metric label="Special" value={`${formatNumber(derived.shares.special, 1)} t/yr`} />
            </div>

            <Button onClick={() => setStep(4)} size="lg" className="mt-6">
              Next: Cost Comparison <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Section>
        )}

        {/* Step 4: Total Cost Comparison */}
        {currentStep === 4 && (
          <Section>
            <SectionTitle>Step 4: Total Cost — Before vs After</SectionTitle>
            <SectionDescription>
              Compare your baseline waste management costs with costs after implementing composting.
            </SectionDescription>

            <CostBars derived={derived} country={country} />

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Metric
                label="Before ZW Program"
                value={formatCurrency(derived.baselineCost, country, 0)}
                subtext="Annual disposal cost"
              />
              <Metric
                label="After Diversion (Organics)"
                value={formatCurrency(derived.afterZWCost, country, 0)}
                subtext="Net cost after avoided disposal"
              />
            </div>

            <Explainer className="mt-6">
              By diverting {formatNumber(derived.divertedOrganicsTons, 2)} tons of organics through composting, you reduce disposal costs by {formatCurrency(derived.avoidedDisposalSavings, country, 0)} per year.
            </Explainer>

            <Button onClick={() => setStep(5)} size="lg" className="mt-6">
              Next: Savings & Income <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Section>
        )}

        {/* Step 5: Savings & Income */}
        {currentStep === 5 && (
          <Section>
            <SectionTitle>Step 5: Savings & Income</SectionTitle>
            <SectionDescription>
              {localityName ? (
                <>
                  Financial benefits from avoided disposal costs and compost sales for <strong>{localityName}</strong>, {country}.
                </>
              ) : (
                <>
                  Financial benefits from avoided disposal costs and compost sales.
                </>
              )}
            </SectionDescription>

            <SavingsBars derived={derived} country={country} />

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Metric
                label="Avoided Disposal Savings"
                value={formatCurrency(derived.avoidedDisposalSavings, country, 0)}
                subtext="Cost reduction from diversion"
              />
              <Metric
                label="Compost Revenue"
                value={formatCurrency(derived.compostRevenue, country, 0)}
                subtext="Income from compost sales"
              />
            </div>

            <Explainer className="mt-6" title="Important Notes">
              <ul className="list-disc list-inside space-y-1">
                <li>Avoided disposal savings assume the diverted waste would otherwise be disposed at baseline cost.</li>
                <li>Compost revenue assumes all produced compost is sold at the specified price.</li>
                <li>This estimate excludes program operational costs (staff, education, monitoring).</li>
                <li>For procurement or formal planning, conduct a detailed feasibility study.</li>
              </ul>
            </Explainer>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button onClick={() => setStep(2)} variant="secondary">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Math Review
              </Button>
              <Button onClick={() => setShowEditDrawer(true)} variant="primary">
                <Edit className="mr-2 h-4 w-4" />
                Adjust Parameters
              </Button>
            </div>

            {/* Share and Print Section */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-fg mb-3">Share Your Results</h3>
              <p className="text-sm text-fg-muted mb-4">
                Share your calculator results or print a copy for your records.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleShare} variant="secondary">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
                <Button onClick={handlePrint} variant="secondary">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Report
                </Button>
                <Button onClick={handleExportSnapshot} variant="secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Data (JSON)
                </Button>
              </div>
            </div>
          </Section>
        )}
      </main>

      {/* Edit Drawer */}
      <EditDrawer
        isOpen={showEditDrawer}
        onClose={() => setShowEditDrawer(false)}
        inputs={inputs}
        onSave={handleSaveInputs}
      />

      {/* Print View - Hidden until print */}
      <PrintView inputs={inputs} derived={derived} scenarioName={scenarioName} country={country} localityName={localityName} />
    </div>
  )
}
