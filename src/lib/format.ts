/**
 * Currency configuration by country
 */
const CURRENCY_CONFIG = {
  Philippines: {
    code: 'PHP',
    locale: 'en-PH',
    symbol: '₱',
  },
  Indonesia: {
    code: 'IDR',
    locale: 'id-ID',
    symbol: 'Rp',
  },
} as const

export type Country = keyof typeof CURRENCY_CONFIG

/**
 * Format number as currency based on country
 */
export function formatCurrency(
  value: number,
  country: Country = 'Philippines',
  decimals = 0
): string {
  const config = CURRENCY_CONFIG[country]
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.code,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Get currency symbol for a country
 */
export function getCurrencySymbol(country: Country = 'Philippines'): string {
  return CURRENCY_CONFIG[country].symbol
}

/**
 * Get currency code for a country
 */
export function getCurrencyCode(country: Country = 'Philippines'): string {
  return CURRENCY_CONFIG[country].code
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

