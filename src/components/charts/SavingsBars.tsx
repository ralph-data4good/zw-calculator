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
import { formatCurrency, formatCompact } from '@/lib/format'

interface SavingsBarsProps {
  derived: Derived
}

export function SavingsBars({ derived }: SavingsBarsProps) {
  const data = [
    {
      name: 'Avoided Disposal',
      value: derived.avoidedDisposalSavings,
      fill: '#10b981',
    },
    {
      name: 'Compost Revenue',
      value: derived.compostRevenue,
      fill: '#3b82f6',
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
            tickFormatter={value => `₱${formatCompact(value)}`}
            tick={{ fill: 'var(--fg-muted)' }}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
          <Bar dataKey="value" name="Amount (PHP/year)" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

