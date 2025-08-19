import React, { useState, useEffect } from 'react'
import { useRealtimeMarketData } from '@/hooks/useMarketData'
import { MarketData } from '@/utils/marketData'
import TickerContainer from './TickerContainer'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'

interface MarketTickerProps {
  symbols?: string[]
  speed?: 'slow' | 'normal' | 'fast'
  pauseOnHover?: boolean
  compact?: boolean
  showStatus?: boolean
  autoRefresh?: boolean
  refreshInterval?: number
  className?: string
}

const MarketTicker: React.FC<MarketTickerProps> = ({
  symbols,
  speed = 'normal',
  pauseOnHover = true,
  compact = false,
  showStatus = false,
  autoRefresh = true,
  refreshInterval = 30000,
  className = ''
}) => {
  const { 
    data, 
    loading, 
    error, 
    refresh, 
    lastUpdated 
  } = useRealtimeMarketData({
    symbols,
    autoRefresh,
    refreshInterval
  })

  // Maintain stable data to prevent ticker lag during refetch
  const [stableData, setStableData] = useState<MarketData[]>([])
  const [isRefetching, setIsRefetching] = useState(false)

  // Update stable data only when we have new valid data
  useEffect(() => {
    if (data.length > 0) {
      // If we had data before and we're getting new data, we're refetching
      if (stableData.length > 0 && loading) {
        setIsRefetching(true)
      } else {
        setIsRefetching(false)
      }
      
      setStableData(data)
    }
  }, [data, loading, stableData.length])

  // Show loading state only initially (not during refetch)
  if (loading && stableData.length === 0) {
    return (
      <LoadingState 
        message="Fetching live market data..." 
        showSkeleton={true}
        className={className}
      />
    )
  }

  // Show error state if failed and no cached data
  if (error && stableData.length === 0) {
    return (
      <ErrorState 
        message={error}
        onRetry={refresh}
        className={className}
      />
    )
  }

  // Show ticker with stable data to prevent lag
  return (
    <TickerContainer
      data={stableData}
      speed={speed}
      pauseOnHover={pauseOnHover}
      compact={compact}
      showStatus={showStatus}
      className={className}
    />
  )
}

export default MarketTicker

// Export components for granular usage
export { default as MarketItem } from './MarketItem'
export { default as TickerContainer } from './TickerContainer'
export { default as LoadingState } from './LoadingState'
export { default as ErrorState } from './ErrorState'