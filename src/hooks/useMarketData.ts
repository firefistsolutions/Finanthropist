import { useState, useEffect, useCallback } from 'react'
import { MarketData, MarketDataService } from '@/utils/marketData'

interface UseMarketDataOptions {
  symbols?: string[]
  refreshInterval?: number
  autoRefresh?: boolean
}

interface UseMarketDataReturn {
  data: MarketData[]
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  refresh: () => Promise<void>
  isStale: boolean
}

export const useMarketData = (options: UseMarketDataOptions = {}): UseMarketDataReturn => {
  const {
    symbols,
    refreshInterval = 30000, // 30 seconds
    autoRefresh = true
  } = options

  const [data, setData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const marketDataService = MarketDataService.getInstance()

  const fetchData = useCallback(async () => {
    try {
      setError(null)
      const response = await marketDataService.fetchMarketData(symbols)
      console.log('Fetched market data:', response)
      if (response.success) {
        setData(response.data)
        setLastUpdated(new Date(response.timestamp))
        
        // Check if any data has errors (fallback data)
        const hasErrors = response.data.some(item => item.error)
        if (hasErrors) {
          setError('Some data unavailable - using simulated data')
        }
      } else {
        setError(response.error || 'Failed to fetch market data')
        setData([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
      setData([])
    } finally {
      setLoading(false)
    }
  }, [symbols, marketDataService])

  const refresh = useCallback(async () => {
    setLoading(true)
    await fetchData()
  }, [fetchData])

  // Calculate if data is stale (older than refresh interval)
  const isStale = lastUpdated 
    ? Date.now() - lastUpdated.getTime() > refreshInterval
    : true

  // Initial fetch
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Auto refresh
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(fetchData, refreshInterval)
    return () => clearInterval(interval)
  }, [fetchData, refreshInterval, autoRefresh])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Could add cleanup logic here if needed
    }
  }, [])

  return {
    data,
    loading,
    error,
    lastUpdated,
    refresh,
    isStale
  }
}

// Hook for a single stock
export const useStockData = (symbol: string) => {
  const { data, loading, error, lastUpdated, refresh, isStale } = useMarketData({
    symbols: [symbol]
  })

  return {
    stock: data[0] || null,
    loading,
    error,
    lastUpdated,
    refresh,
    isStale
  }
}

// Hook with real-time simulation for demo purposes
export const useRealtimeMarketData = (options: UseMarketDataOptions = {}) => {
  const marketData = useMarketData({
    ...options,
    refreshInterval: 5000 // Faster refresh for real-time feel
  })

  const [simulatedData, setSimulatedData] = useState<MarketData[]>([])

  // Add small random variations to simulate real-time updates
  useEffect(() => {
    if (marketData.data.length === 0) return

    const interval = setInterval(() => {
      setSimulatedData(prevData => {
        const baseData = marketData.data.length > 0 ? marketData.data : prevData
        
        return baseData.map(stock => {
          // Small random variation (±0.1%)
          const variation = (Math.random() - 0.5) * 0.002
          const newPrice = stock.price * (1 + variation)
          const newChange = newPrice - (stock.price - stock.change)
          const newChangePercent = (newChange / (stock.price - stock.change)) * 100

          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
            changePercent: parseFloat(newChangePercent.toFixed(2))
          }
        })
      })
    }, 1000) // Update every second for smooth animation

    return () => clearInterval(interval)
  }, [marketData.data])

  // Initialize simulated data
  useEffect(() => {
    if (marketData.data.length > 0 && simulatedData.length === 0) {
      setSimulatedData(marketData.data)
    }
  }, [marketData.data, simulatedData.length])

  return {
    ...marketData,
    data: simulatedData.length > 0 ? simulatedData : marketData.data
  }
}