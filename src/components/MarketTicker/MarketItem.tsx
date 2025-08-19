import React from 'react'
import { MarketData, formatPrice, formatChange, formatChangePercent, getChangeColor, getChangeIcon } from '@/utils/marketData'

interface MarketItemProps {
  data: MarketData
  compact?: boolean
  showIcon?: boolean
}

const MarketItem: React.FC<MarketItemProps> = ({ 
  data, 
  compact = false, 
  showIcon = true 
}) => {
  const changeColor = getChangeColor(data.change)
  const changeIcon = getChangeIcon(data.change)
  
  const colorClasses = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  }

  const textColorClasses = {
    positive: 'text-green-700',
    negative: 'text-red-700',
    neutral: 'text-gray-700'
  }

  if (compact) {
    return (
      <div className="flex items-center px-3 py-2 whitespace-nowrap" style={{ width: '220px', minWidth: '220px', maxWidth: '220px' }}>
        <div className="w-20 flex-shrink-0">
          <span className="text-sm font-semibold text-gray-800 block truncate">
            {data.symbol}
          </span>
        </div>
        <div className="w-20 flex-shrink-0 text-right">
          <span className="font-medium text-gray-800 text-sm tabular-nums block">
            {formatPrice(data.price).replace('₹', '')}
          </span>
        </div>
        <div className="w-16 flex-shrink-0 text-center">
          <div className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-xs font-medium ${colorClasses[changeColor]}`}>
            {showIcon && <span className="text-xs">{changeIcon}</span>}
            <span className="tabular-nums">{formatChangePercent(data.changePercent)}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center px-4 py-2 whitespace-nowrap hover:bg-gray-50 transition-colors" style={{ width: '340px', minWidth: '340px', maxWidth: '340px' }}>
      <div className="w-28 flex-shrink-0">
        <span className="text-sm font-semibold text-gray-800 block truncate">
          {data.symbol}
        </span>
        <span className="text-xs text-gray-500 block truncate">
          {data.name}
        </span>
      </div>
      
      <div className="w-24 flex-shrink-0 text-right">
        <span className="text-base font-bold text-gray-800 tabular-nums block">
          {formatPrice(data.price)}
        </span>
      </div>
      
      <div className="w-20 flex-shrink-0 text-right">
        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium ${colorClasses[changeColor]}`}>
          {showIcon && (
            <span className="text-xs">
              {changeIcon}
            </span>
          )}
          <div className="flex flex-col items-end leading-tight">
            <span className="tabular-nums">
              {formatChange(data.change)}
            </span>
            <span className="tabular-nums text-xs">
              ({formatChangePercent(data.changePercent)})
            </span>
          </div>
        </div>
      </div>
      
      {data.error && (
        <div className="absolute -top-6 right-2 text-xs text-amber-600 bg-amber-50 px-1 py-0.5 rounded text-center">
          SIM
        </div>
      )}
    </div>
  )
}

export default MarketItem