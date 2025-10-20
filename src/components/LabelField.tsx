import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/cn'

interface LabelFieldProps {
  label: string
  id: string
  value: number | string
  onChange: (value: string) => void
  type?: 'number' | 'text'
  min?: number
  max?: number
  step?: number | string
  helper?: string
  error?: string
  suffix?: string
  className?: string
}

export function LabelField({
  label,
  id,
  value,
  onChange,
  type = 'number',
  min,
  max,
  step,
  helper,
  error,
  suffix,
  className,
}: LabelFieldProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-fg">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          className={cn(error && 'border-red-500')}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-fg-muted">
            {suffix}
          </span>
        )}
      </div>
      {helper && !error && <p className="text-xs text-fg-muted">{helper}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

