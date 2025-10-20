import { AlertCircle } from 'lucide-react'

export function Disclaimer() {
  return (
    <div className="rounded-lg border border-border bg-bg-muted p-4 my-8">
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="text-sm space-y-2">
          <p className="font-medium text-fg">Planning Tool Disclaimer</p>
          <p className="text-fg-muted leading-relaxed">
            This tool provides <strong>indicative estimates</strong> for planning and education
            purposes. Presets are based on averages and may not reflect specific local conditions.
            For formal reporting or procurement, consult with waste management professionals.
          </p>
        </div>
      </div>
    </div>
  )
}

