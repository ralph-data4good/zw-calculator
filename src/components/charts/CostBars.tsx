import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Derived } from '@/data/types'
import { formatCurrency, formatCompact, getCurrencySymbol, type Country } from '@/lib/format'

interface CostBarsProps {
  derived: Derived
  country?: Country
}

export function CostBars({ derived, country = 'Philippines' }: CostBarsProps) {
  const data = [
    {
      name: 'Before ZW Program',
      cost: derived.baselineCost,
    },
    {
      name: 'After Diversion (Organics)',
      cost: derived.afterZWCost,
    },
  ]

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="name"
            tick={{ fill: 'var(--fg-muted)' }}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <YAxis
            tickFormatter={value => `${getCurrencySymbol(country)}${formatCompact(value)}`}
            tick={{ fill: 'var(--fg-muted)' }}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value, country)}
            contentStyle={{
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
          <Bar dataKey="cost" fill="var(--primary)" name={`Total Cost (${country === 'Philippines' ? 'PHP' : 'IDR'}/year)`} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

