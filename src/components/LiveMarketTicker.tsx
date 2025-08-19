'use client'

import React from 'react'
import MarketTicker from './MarketTicker'

interface LiveMarketTickerProps {
  className?: string
}

const LiveMarketTicker: React.FC<LiveMarketTickerProps> = ({ className }) => {
  return (
    <MarketTicker
      speed="fast"
      pauseOnHover={true}
      compact={false}
      showStatus={false}
      autoRefresh={true}
      refreshInterval={30000}
      className={className}
    />
  )
}

export default LiveMarketTicker