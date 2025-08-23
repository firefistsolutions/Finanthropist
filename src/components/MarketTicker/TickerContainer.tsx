import React from 'react'
import { MarketData } from '@/utils/marketData'
import MarketItem from './MarketItem'

interface TickerContainerProps {
  data: MarketData[]
  speed?: 'slow' | 'normal' | 'fast'
  pauseOnHover?: boolean
  compact?: boolean
  showStatus?: boolean
  className?: string
}

const TickerContainer: React.FC<TickerContainerProps> = ({
  data,
  speed = 'normal',
  pauseOnHover = true,
  compact = false,
  showStatus = false,
  className = ''
}) => {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  }

  const animationClass = speedClasses[speed]

  if (data.length === 0) {
    return (
      <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden ${className}`}>
        <div className="flex items-center justify-center py-3">
          <div className="text-gray-500 text-sm">No market data available</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white border-b border-gray-200 shadow-sm overflow-hidden ${pauseOnHover ? 'ticker-container' : ''} ${className}`}>
      {showStatus && (
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-blue-700 font-medium">Live Market Data</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-600">Updated {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative">
        <div className={`flex ${animationClass}`}>
          {/* First set of items */}
          {data.map((item, index) => (
            <MarketItem 
              key={`first-${item.symbol}-${index}`} 
              data={item} 
              compact={compact}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {data.map((item, index) => (
            <MarketItem 
              key={`second-${item.symbol}-${index}`} 
              data={item} 
              compact={compact}
            />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 70s linear infinite;
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
        }
        
        /* Mobile optimized speeds */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          
          .animate-marquee-slow {
            animation: marquee-slow 50s linear infinite;
          }
          
          .animate-marquee-fast {
            animation: marquee-fast 12s linear infinite;
          }
        }
        
        .ticker-container:hover .animate-marquee,
        .ticker-container:hover .animate-marquee-slow,
        .ticker-container:hover .animate-marquee-fast {
          animation-play-state: paused;
        }
        
        /* Smooth scrollbar for mobile */
        @media (max-width: 768px) {
          .ticker-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .ticker-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default TickerContainer