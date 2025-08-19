export interface MarketData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number | null
  error?: string
}

export interface MarketDataResponse {
  success: boolean
  data: MarketData[]
  timestamp: string
  cached?: boolean
  error?: string
}

export class MarketDataService {
  private static instance: MarketDataService
  private cache: Map<string, { data: MarketData[], timestamp: number }> = new Map()
  private readonly CACHE_DURATION = 30000 // 30 seconds

  static getInstance(): MarketDataService {
    if (!MarketDataService.instance) {
      MarketDataService.instance = new MarketDataService()
    }
    return MarketDataService.instance
  }

  async fetchMarketData(symbols?: string[]): Promise<MarketDataResponse> {
    const cacheKey = symbols?.join(',') || 'all'
    const cached = this.cache.get(cacheKey)
    
    // Return cached data if still valid
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return {
        success: true,
        data: cached.data,
        timestamp: new Date(cached.timestamp).toISOString(),
        cached: true
      }
    }

    try {
      const queryParams = symbols ? `?symbols=${symbols.join(',')}` : ''
      const response = await fetch(`/api/market-data${queryParams}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: MarketDataResponse = await response.json()
      
      // Cache the successful response
      if (data.success && data.data.length > 0) {
        this.cache.set(cacheKey, {
          data: data.data,
          timestamp: Date.now()
        })
      }

      return data
    } catch (error) {
      console.error('Error fetching market data:', error)
      return {
        success: false,
        data: [],
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  clearCache(): void {
    this.cache.clear()
  }

  getCacheSize(): number {
    return this.cache.size
  }
}

export const formatPrice = (price: number, currency = '₹'): string => {
  return `${currency}${price.toLocaleString('en-IN', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`
}

export const formatChange = (change: number, showSign = true): string => {
  const formattedChange = Math.abs(change).toFixed(2)
  if (!showSign) return formattedChange
  return change >= 0 ? `+${formattedChange}` : `-${formattedChange}`
}

export const formatChangePercent = (changePercent: number | null, showSign = true): string => {
  if (changePercent === null || isNaN(changePercent)) {
    return '0.00%'
  }
  const formattedPercent = Math.abs(changePercent).toFixed(2)
  const sign = showSign ? (changePercent >= 0 ? '+' : '-') : ''
  return `${sign}${formattedPercent}%`
}

export const getChangeColor = (change: number | null): 'positive' | 'negative' | 'neutral' => {
  if (change === null || isNaN(change)) return 'neutral'
  if (change > 0) return 'positive'
  if (change < 0) return 'negative'
  return 'neutral'
}

export const getChangeIcon = (change: number | null): string => {
  if (change === null || isNaN(change)) return '●'
  if (change > 0) return '▲'
  if (change < 0) return '▼'
  return '●'
}

export const isMarketOpen = (): boolean => {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 6 = Saturday
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const time = hours * 100 + minutes // Convert to HHMM format

  // Market is closed on weekends
  if (day === 0 || day === 6) return false

  // Indian market hours: 9:15 AM to 3:30 PM IST
  // Assuming local time is IST
  return time >= 915 && time <= 1530
}

export const getMarketStatus = (): string => {
  if (isMarketOpen()) {
    return 'Market Open'
  }
  
  const now = new Date()
  const day = now.getDay()
  
  if (day === 0 || day === 6) {
    return 'Market Closed - Weekend'
  }
  
  return 'Market Closed'
}