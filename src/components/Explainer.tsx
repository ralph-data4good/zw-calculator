import { Info } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ExplainerProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Explainer({ title, children, className }: ExplainerProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-bg-muted p-4 text-sm',
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-2 mb-2 font-medium text-fg">
          <Info className="h-4 w-4 text-primary" />
          <span>{title}</span>
        </div>
      )}
      <div className="text-fg-muted leading-relaxed">{children}</div>
    </div>
  )
}

