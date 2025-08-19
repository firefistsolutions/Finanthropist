import React, { useState, useEffect } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useMarketData } from '@/hooks/useMarketData'
import { MarketData } from '@/utils/marketData'

interface CandlestickData {
  x: number
  y: number
  width: number
  height: number
  type: 'bullish' | 'bearish'
  wickTop: number
  wickBottom: number
}

interface StockData extends MarketData {
  candlesticks: CandlestickData[]
}

export const MarketDataVisualization: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.3)
  const [stocks, setStocks] = useState<StockData[]>([])
  const { data: marketData, loading, error } = useMarketData()

  const generateCandlesticks = (isPositive: boolean): CandlestickData[] => {
    const candlesticks: CandlestickData[] = []
    const positions = [3, 20, 37, 54, 71, 88]
    
    positions.forEach((x, index) => {
      // Bias candlestick type based on actual stock performance
      const isBullish = isPositive ? Math.random() > 0.3 : Math.random() > 0.7
      const bodyHeight = Math.random() * 30 + 20
      const wickTop = Math.random() * 15 + 5
      const wickBottom = Math.random() * 15 + 5
      const totalHeight = bodyHeight + wickTop + wickBottom
      const startY = 189 - totalHeight
      
      candlesticks.push({
        x,
        y: startY + wickTop,
        width: 6,
        height: bodyHeight,
        type: isBullish ? 'bullish' : 'bearish',
        wickTop: wickTop,
        wickBottom: wickBottom
      })
    })
    
    return candlesticks
  }

  useEffect(() => {
    if (sectionInView && marketData && marketData.length > 0) {
      // Take first 12 stocks and add candlestick data
      const stocksWithCandlesticks = marketData.slice(0, 12).map(stock => ({
        ...stock,
        candlesticks: generateCandlesticks(stock.changePercent > 0)
      }))
      
      setStocks(stocksWithCandlesticks)
      
      // Update candlesticks periodically for animation effect
      const interval = setInterval(() => {
        if (marketData && marketData.length > 0) {
          const updatedStocks = marketData.slice(0, 12).map(stock => ({
            ...stock,
            candlesticks: generateCandlesticks(stock.changePercent > 0)
          }))
          setStocks(updatedStocks)
        }
      }, 4000)
      
      return () => clearInterval(interval)
    }
  }, [sectionInView, marketData])

  const StockTile: React.FC<{ stock: StockData; index: number }> = ({ stock, index }) => (
    <div 
      className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background chart */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 92 189" className="absolute inset-0">
          <defs>
            <linearGradient id={`bullishGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
            </linearGradient>
            <linearGradient id={`bearishGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.8)" />
            </linearGradient>
          </defs>
          
          {stock.candlesticks.map((candle, candleIndex) => (
            <g key={candleIndex}>
              {/* Top wick */}
              <rect
                x={candle.x}
                y={candle.y - candle.wickTop}
                width="1"
                height={candle.wickTop}
                fill={candle.type === 'bullish' ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)'}
              />
              
              {/* Body */}
              <rect
                x={candle.x - 2.5}
                y={candle.y}
                width={candle.width}
                height={candle.height}
                fill={candle.type === 'bullish' ? `url(#bullishGradient-${index})` : `url(#bearishGradient-${index})`}
                stroke={candle.type === 'bullish' ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)'}
                strokeWidth="0.5"
              />
              
              {/* Bottom wick */}
              <rect
                x={candle.x}
                y={candle.y + candle.height}
                width="1"
                height={candle.wickBottom}
                fill={candle.type === 'bullish' ? 'rgba(16, 185, 129, 1)' : 'rgba(239, 68, 68, 1)'}
              />
            </g>
          ))}
        </svg>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-transparent to-gray-50/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{stock.symbol}</h3>
            <p className="text-xs text-gray-500 truncate">{stock.name}</p>
          </div>
          <div className={`flex items-center space-x-1 ${stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
            <svg 
              className={`w-3 h-3 ${stock.changePercent > 0 ? '' : 'rotate-180'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">{Math.abs(stock.changePercent).toFixed(2)}%</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-2xl font-bold text-gray-900">₹{stock.price.toFixed(2)}</div>
          <div className={`text-sm ${stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock.changePercent > 0 ? '+' : ''}₹{stock.change.toFixed(2)} ({stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-center">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  )

  if (loading) {
    return (
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
                Live Market{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Data
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 animate-pulse">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="h-6 bg-gray-200 rounded w-20 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="mt-4">
                    <div className="h-8 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Live Market{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Data
              </span>
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 inline-block">
              <p className="text-red-600">Unable to load market data. Please try again later.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Live Market{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Data
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-time stock prices and market movements with interactive candlestick charts.
            </p>
          </div>

          <div className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stocks.map((stock, index) => (
                <StockTile key={stock.symbol} stock={stock} index={index} />
              ))}
            </div>
          </div>
          
          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${getAnimationClasses(sectionInView)}`}>
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block mb-8">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">Market Status:</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium">Markets Open</span>
                </div>
                <div className="text-sm text-gray-500">|</div>
                <div className="text-sm text-gray-500">Last Updated: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
            
            {/* Final technical credibility CTA */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Real-Time Data Access</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">This is What Professional Trading Looks Like</h3>
                <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-lg">
                  You've seen our live market data, real-time analysis, and professional-grade tools. Now experience the complete package with personalized guidance from our expert team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Start Trading Like a Pro
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300">
                    Schedule Demo Call
                  </button>
                </div>
                <div className="mt-6 text-blue-200 text-sm">
                  Join professionals who trust us with their trading success
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}