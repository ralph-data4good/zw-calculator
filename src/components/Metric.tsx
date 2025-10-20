import { cn } from '@/lib/cn'

interface MetricProps {
  label: string
  value: string | number
  subtext?: string
  className?: string
}

export function Metric({ label, value, subtext, className }: MetricProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <p className="text-sm text-fg-muted">{label}</p>
      <p className="text-2xl font-semibold text-fg">{value}</p>
      {subtext && <p className="text-xs text-fg-muted">{subtext}</p>}
    </div>
  )
}

