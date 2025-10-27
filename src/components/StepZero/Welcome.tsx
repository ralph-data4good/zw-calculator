import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'lucide-react'

interface WelcomeProps {
  onGetStarted: () => void
}

export function Welcome({ onGetStarted }: WelcomeProps) {
  return (
    <div className="text-center space-y-8 py-16 px-4">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-fg text-balance leading-tight">
          Community Waste Management Program Calculator
        </h1>
        <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto text-balance leading-relaxed">
          Plan effective waste management programs for your community with data‑driven estimates
          tailored to Philippines and Indonesia contexts.
        </p>
      </div>

      <div className="flex justify-center">
        <Button size="lg" onClick={onGetStarted} className="gap-2 text-lg px-8 h-14">
          Get Started <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-base text-fg-muted">
        <Clock className="h-5 w-5" />
        <span>Takes about 5 minutes to complete</span>
      </div>
    </div>
  )
}

