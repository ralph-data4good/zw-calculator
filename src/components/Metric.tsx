import { cn } from '@/lib/cn'

interface MetricProps {
  label: string
  value: string | number
  subtext?: string
  className?: string
}

export function Metric({ label, value, subtext, className }: MetricProps) {
  return (
    <div className={cn('space-y-2 p-4 rounded-lg bg-neutral-50 border border-neutral-200', className)}>
      <p className="text-sm font-medium text-fg-muted uppercase tracking-wide">{label}</p>
      <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
      {subtext && <p className="text-sm text-fg-muted">{subtext}</p>}
    </div>
  )
}

