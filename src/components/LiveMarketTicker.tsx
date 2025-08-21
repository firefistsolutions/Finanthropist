'use client'

import React from 'react'
import MarketTicker from './MarketTicker'
import { REFRESH_INTERVALS } from '@/constants/refreshIntervals'

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
      refreshInterval={REFRESH_INTERVALS.MARKET_DATA}
      className={className}
    />
  )
}

export default LiveMarketTicker