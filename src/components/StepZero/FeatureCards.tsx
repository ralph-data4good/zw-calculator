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
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {features.map(feature => {
        const Icon = feature.icon
        return (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-bg p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-zwa-blue-100">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-fg mb-3">{feature.title}</h3>
            <p className="text-fg-muted text-base leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}

