export const formatNumber = (num: number, suffix = ''): string => {
  return `${num.toLocaleString()}${suffix}`
}

export const formatCurrency = (amount: number, currency = '₹'): string => {
  if (amount >= 100000) {
    return `${currency}${(amount / 100000).toFixed(1)}L`
  }
  if (amount >= 1000) {
    return `${currency}${(amount / 1000).toFixed(0)}K`
  }
  return `${currency}${amount.toLocaleString()}`
}

export const formatPercentage = (value: number, decimals = 1): string => {
  return `${value.toFixed(decimals)}%`
}

export const formatStatValue = (value: number, suffix: string): string => {
  let formattedValue = value.toString()
  
  if (value >= 1000) {
    formattedValue = (value / 1000).toFixed(0) + 'K'
  }
  
  return `${formattedValue}${suffix}`
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}