import { Map, Settings, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Map,
    title: 'Scenario‑Based Estimates',
    description:
      'Get waste characterization, diversion potential, and income projections based on proven models.',
  },
  {
    icon: Settings,
    title: 'Customized for Your Context',
    description:
      "Answer a few questions to find the best‑fit scenario for your locality's unique characteristics.",
  },
  {
    icon: TrendingUp,
    title: 'Actionable Insights',
    description:
      'Explore composting and recycling options with real‑time calculations and visual charts.',
  },
]

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-12">
      {features.map(feature => {
        const Icon = feature.icon
        return (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-bg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">{feature.title}</h3>
            <p className="text-fg-muted text-sm leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}

