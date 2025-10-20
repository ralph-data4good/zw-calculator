/**
 * Format number as currency (PHP)
 */
export function formatCurrency(value: number, decimals = 0): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format large numbers with K/M suffix
 */
export function formatCompact(value: number, decimals = 1): string {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(decimals) + 'M'
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(decimals) + 'K'
  }
  return value.toFixed(decimals)
}

/**
 * Format number with thousands separator
 */
export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format percentage
 */
export function formatPercent(value: number, decimals = 1): string {
  return (value * 100).toFixed(decimals) + '%'
}

