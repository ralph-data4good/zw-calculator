import { Inputs, Derived } from '@/data/types'
import { formatCurrency, formatNumber, formatPercent, type Country } from '@/lib/format'
import { WastePie } from './charts/WastePie'
import { CostBars } from './charts/CostBars'
import { SavingsBars } from './charts/SavingsBars'

interface PrintViewProps {
  inputs: Inputs
  derived: Derived
  scenarioName?: string
  country?: Country
  localityName?: string
}

export function PrintView({ inputs, derived, scenarioName, country = 'Philippines', localityName }: PrintViewProps) {
  const netSavings =
    derived.avoidedDisposalSavings + derived.compostRevenue - (derived.baselineCost - derived.afterZWCost)

  return (
    <div className="print-only hidden">
      <style>{`
        @media print {
          .print-only {
            display: block !important;
          }
          .no-print, button, header, nav, .edit-drawer {
            display: none !important;
          }
          @page {
            size: A4;
            margin: 2cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>

      <div className="print-report">
        {/* Header */}
        <div className="text-center mb-8 pb-4 border-b-2 border-primary">
          <h1 className="text-3xl font-bold text-primary mb-2">Zero Waste Asia Calculator</h1>
          <p className="text-lg text-fg-muted">Waste Management Assessment Report</p>
          <p className="text-sm text-fg-muted mt-2">
            Generated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-fg mb-3">Executive Summary</h2>
          {scenarioName && (
            <p className="text-base mb-3">
              <strong>Scenario:</strong> {scenarioName}
            </p>
          )}
          {localityName && (
            <p className="text-base mb-3">
              <strong>Location:</strong> {localityName}, {country}
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 bg-bg-muted p-4 rounded-lg">
            <div>
              <p className="text-sm text-fg-muted">Population</p>
              <p className="text-xl font-semibold">{inputs.population.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-fg-muted">Annual Waste</p>
              <p className="text-xl font-semibold">{formatNumber(derived.totalAnnualTons, 1)} tons</p>
            </div>
            <div>
              <p className="text-sm text-fg-muted">Baseline Cost</p>
              <p className="text-xl font-semibold">{formatCurrency(derived.baselineCost, country, 0)}</p>
            </div>
            <div>
              <p className="text-sm text-fg-muted">Estimated Net Savings</p>
              <p className="text-xl font-semibold text-primary">{formatCurrency(netSavings, country, 0)}</p>
            </div>
          </div>
        </div>

        {/* Step 1: Input Parameters */}
        <div className="mb-6 page-break-avoid">
          <h2 className="text-2xl font-bold text-fg mb-3">1. Input Parameters</h2>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div>
                <span className="text-fg-muted">Population:</span>
                <span className="ml-2 font-semibold">{inputs.population.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-fg-muted">Waste per Capita:</span>
                <span className="ml-2 font-semibold">{inputs.wastePerCapitaKgDay} kg/day</span>
              </div>
              <div>
                <span className="text-fg-muted">Baseline Cost per Ton:</span>
                <span className="ml-2 font-semibold">{formatCurrency(inputs.baselineCostPerTon, country, 0)}</span>
              </div>
              <div>
                <span className="text-fg-muted">Composting Adoption:</span>
                <span className="ml-2 font-semibold">{formatPercent(inputs.compostingAdoption)}</span>
              </div>
              <div>
                <span className="text-fg-muted">Diversion Efficiency:</span>
                <span className="ml-2 font-semibold">{formatPercent(inputs.diversionEfficiency)}</span>
              </div>
              <div>
                <span className="text-fg-muted">Compost Price:</span>
                <span className="ml-2 font-semibold">{formatCurrency(inputs.compostPricePerKg, country, 2)}/kg</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-fg mb-2">Waste Characterization:</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-green-50 p-2 rounded">
                  <p className="text-xs text-fg-muted">Organics</p>
                  <p className="text-lg font-semibold text-green-700">{inputs.characterization.organics}%</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <p className="text-xs text-fg-muted">Recyclables</p>
                  <p className="text-lg font-semibold text-blue-700">{inputs.characterization.recyclables}%</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-fg-muted">Residuals</p>
                  <p className="text-lg font-semibold text-gray-700">{inputs.characterization.residuals}%</p>
                </div>
                <div className="bg-amber-50 p-2 rounded">
                  <p className="text-xs text-fg-muted">Special</p>
                  <p className="text-lg font-semibold text-amber-700">{inputs.characterization.special}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Waste Generation */}
        <div className="mb-6 page-break-avoid">
          <h2 className="text-2xl font-bold text-fg mb-3">2. Waste Generation</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-muted p-3 rounded">
              <p className="text-sm text-fg-muted">Total Daily Waste</p>
              <p className="text-2xl font-semibold">{formatNumber(derived.totalDailyKg, 0)} kg/day</p>
            </div>
            <div className="bg-bg-muted p-3 rounded">
              <p className="text-sm text-fg-muted">Total Annual Waste</p>
              <p className="text-2xl font-semibold">{formatNumber(derived.totalAnnualTons, 1)} tons/year</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Annual Waste by Type:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between border-b border-border pb-1">
                <span className="text-fg-muted">Organics:</span>
                <span className="font-semibold">{formatNumber(derived.shares.organics, 1)} tons/yr</span>
              </div>
              <div className="flex justify-between border-b border-border pb-1">
                <span className="text-fg-muted">Recyclables:</span>
                <span className="font-semibold">{formatNumber(derived.shares.recyclables, 1)} tons/yr</span>
              </div>
              <div className="flex justify-between border-b border-border pb-1">
                <span className="text-fg-muted">Residuals:</span>
                <span className="font-semibold">{formatNumber(derived.shares.residuals, 1)} tons/yr</span>
              </div>
              <div className="flex justify-between border-b border-border pb-1">
                <span className="text-fg-muted">Special:</span>
                <span className="font-semibold">{formatNumber(derived.shares.special, 1)} tons/yr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Visualizations */}
        <div className="mb-6 page-break-inside-avoid">
          <h2 className="text-2xl font-bold text-fg mb-3">3. Visual Analysis</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Waste Composition</h3>
            <div className="h-[300px]">
              <WastePie derived={derived} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cost Comparison</h3>
              <div className="h-[250px]">
                <CostBars derived={derived} country={country} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Savings Breakdown</h3>
              <div className="h-[250px]">
                <SavingsBars derived={derived} country={country} />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Financial Analysis */}
        <div className="mb-6 page-break-avoid">
          <h2 className="text-2xl font-bold text-fg mb-3">4. Financial Analysis</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-fg mb-2">Baseline Scenario (Business as Usual)</h3>
              <div className="bg-red-50 p-3 rounded">
                <p className="text-sm text-fg-muted">Annual Disposal Cost</p>
                <p className="text-2xl font-bold text-red-700">{formatCurrency(derived.baselineCost, country, 0)}</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-fg mb-2">Zero Waste Scenario</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs text-fg-muted">Compost Revenue</p>
                  <p className="text-lg font-bold text-green-700">{formatCurrency(derived.compostRevenue, country, 0)}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs text-fg-muted">Avoided Disposal</p>
                  <p className="text-lg font-bold text-blue-700">{formatCurrency(derived.avoidedDisposalSavings, country, 0)}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded">
                  <p className="text-xs text-fg-muted">Net Savings</p>
                  <p className="text-lg font-bold text-primary">{formatCurrency(netSavings, country, 0)}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-fg mb-2">Program Impact</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-fg-muted">Diverted Organics:</span>
                  <span className="font-semibold">{formatNumber(derived.divertedOrganicsTons, 1)} tons/yr</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-fg-muted">Compost Produced:</span>
                  <span className="font-semibold">{formatNumber(derived.compostKg, 0)} kg/yr</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-fg-muted">After ZW Cost:</span>
                  <span className="font-semibold">{formatCurrency(derived.afterZWCost, country, 0)}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-fg-muted">Cost Reduction:</span>
                  <span className="font-semibold text-primary">
                    {formatPercent((derived.baselineCost - derived.afterZWCost) / derived.baselineCost)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Key Findings */}
        <div className="mb-6 page-break-avoid">
          <h2 className="text-2xl font-bold text-fg mb-3">5. Key Findings</h2>
          <ul className="space-y-2 text-sm list-disc list-inside">
            <li>
              <strong>Waste Diversion Potential:</strong> By adopting composting at{' '}
              {formatPercent(inputs.compostingAdoption)} with {formatPercent(inputs.diversionEfficiency)}{' '}
              efficiency, approximately {formatNumber(derived.divertedOrganicsTons, 1)} tons of organic waste
              can be diverted annually.
            </li>
            <li>
              <strong>Revenue Generation:</strong> Compost sales at {formatCurrency(inputs.compostPricePerKg, country, 2)}/kg
              could generate {formatCurrency(derived.compostRevenue, country, 0)} annually.
            </li>
            <li>
              <strong>Cost Savings:</strong> Avoiding disposal of diverted waste saves{' '}
              {formatCurrency(derived.avoidedDisposalSavings, country, 0)} per year in disposal fees.
            </li>
            <li>
              <strong>Net Financial Benefit:</strong> The total estimated net savings is{' '}
              <strong className="text-primary">{formatCurrency(netSavings, country, 0)}</strong> annually.
            </li>
          </ul>
        </div>

        {/* Disclaimer - EMPHASIZED */}
        <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg page-break-inside-avoid">
          <h2 className="text-xl font-bold text-yellow-900 mb-3 flex items-center">
            <svg 
              className="w-6 h-6 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            IMPORTANT DISCLAIMER
          </h2>
          <div className="space-y-2 text-sm text-yellow-900">
            <p className="font-semibold">
              This report is based on estimates and user-provided input data. The results should be interpreted
              as preliminary indicators only.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Estimates Only:</strong> All calculations are based on simplified models and assumptions.
                Actual results may vary significantly based on local conditions, operational practices, and
                implementation quality.
              </li>
              <li>
                <strong>User Input Dependency:</strong> The accuracy of this assessment depends entirely on the
                accuracy of the input parameters provided. Verify all input data with local measurements and
                waste characterization studies.
              </li>
              <li>
                <strong>Excluded Costs:</strong> This analysis excludes program operational costs such as staff
                salaries, equipment maintenance, public education campaigns, monitoring systems, and infrastructure
                investments.
              </li>
              <li>
                <strong>Market Variability:</strong> Compost prices, disposal costs, and market conditions can
                fluctuate. Conduct market research for your specific region.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Ensure all proposed activities comply with local, regional,
                and national waste management regulations.
              </li>
              <li>
                <strong>Feasibility Study Required:</strong> For formal planning, procurement, or project approval,
                conduct a detailed feasibility study with professional waste management consultants.
              </li>
            </ul>
            <p className="font-semibold mt-3 text-base">
              This calculator is an educational and planning tool. It is NOT a substitute for professional
              waste management assessment, engineering design, or financial analysis.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-fg-muted">
          <p>Zero Waste Asia Calculator v1.0.0</p>
          <p>© {new Date().getFullYear()} Zero Waste Asia. For educational and planning purposes.</p>
          <p className="mt-1">https://ralph-data4good.github.io/zw-calculator/</p>
        </div>
      </div>
    </div>
  )
}

