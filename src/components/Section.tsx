import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        'rounded-xl border border-border bg-bg p-6 shadow-md md:p-10',
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('text-2xl md:text-3xl font-bold text-fg mb-4', className)}>
      {children}
    </h2>
  )
}

interface SectionDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function SectionDescription({ children, className }: SectionDescriptionProps) {
  return <p className={cn('text-fg-muted mb-6', className)}>{children}</p>
}

