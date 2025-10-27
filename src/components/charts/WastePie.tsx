import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Derived } from '@/data/types'
import { formatNumber } from '@/lib/format'

interface WastePieProps {
  derived: Derived
}

const COLORS = {
  organics: '#489E4A',    // ZWA Green
  recyclables: '#2179B3', // ZWA Blue
  residuals: '#737373',   // Neutral gray
  special: '#D4A73F',     // ZWA Gold
}

export function WastePie({ derived }: WastePieProps) {
  const data = [
    { name: 'Organics', value: derived.shares.organics, color: COLORS.organics },
    { name: 'Recyclables', value: derived.shares.recyclables, color: COLORS.recyclables },
    { name: 'Residuals', value: derived.shares.residuals, color: COLORS.residuals },
    { name: 'Special', value: derived.shares.special, color: COLORS.special },
  ]

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={entry => `${entry.name}: ${formatNumber(entry.value, 1)} t/yr`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `${formatNumber(value, 2)} t/yr`}
            contentStyle={{
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

