import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Map your scenario',
    description: 'Answer quick questions about your community',
  },
  {
    title: 'Review presets',
    description: 'See default values based on your scenario',
  },
  {
    title: 'Explore options',
    description: 'Adjust parameters and see live results',
  },
  {
    title: 'Get insights',
    description: 'View waste characterization, diversion rates, and income potential',
  },
  {
    title: 'Share or print',
    description: 'Export your estimates for planning or reporting',
  },
]

export function HowItWorks() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-fg mb-6 text-center">How It Works</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-fg">{step.title}</h3>
              <p className="text-sm text-fg-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

