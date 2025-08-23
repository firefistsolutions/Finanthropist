import React, { useState, useEffect } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

// Rolling Odometer Component
const RollingNumber: React.FC<{ value: number; decimals?: number }> = ({ value, decimals = 2 }) => {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    const startValue = displayValue
    const endValue = value
    const duration = 5000 // Animation duration in ms
    const startTime = performance.now()
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOutCubic
      
      setDisplayValue(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [value])
  
  return (
    <span className="tabular-nums">
      ₹{displayValue.toLocaleString('en-IN', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      })}
    </span>
  )
}

export const TradingPlatformShowcase: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.3)
  const [currentPnL, setCurrentPnL] = useState(2847.50)
  const [changePercent, setChangePercent] = useState(3.42)
  const [isPaused, setIsPaused] = useState(false)

  // Define min/max bounds for PnL
  const minPnL = 1500
  const maxPnL = 5000

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return

      const randomChange = (Math.random() - 0.5) * 100
      let newPnL = currentPnL + randomChange
      
      // Keep within bounds
      newPnL = Math.max(minPnL, Math.min(maxPnL, newPnL))
      
      const newPercent = ((newPnL - 2500) / 2500) * 100
      
      setCurrentPnL(parseFloat(newPnL.toFixed(2)))
      setChangePercent(parseFloat(newPercent.toFixed(2)))

      // If we hit the maximum, pause for 2 seconds
      if (newPnL >= maxPnL && !isPaused) {
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
        }, 2000)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [currentPnL, isPaused, maxPnL, minPnL])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-white">
              Built For Smart{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent font-medium">
                Investors
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to elevate your financial journey through expert education, strategic guidance, and comprehensive trading services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Student Success</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="text-gray-300 text-sm mb-2">Today&apos;s Student P&L</div>
                      <div className={`text-3xl font-bold transition-colors duration-500 ${
                        currentPnL >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        <RollingNumber value={currentPnL} decimals={2} />
                      </div>
                      <div className={`text-lg transition-colors duration-500 ${
                        changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {changePercent >= 0 ? '+' : ''}{changePercent}%
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-gray-300 text-sm">Students Trained</div>
                        <div className="text-xl font-semibold text-white">2,847</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="text-gray-300 text-sm">Success Rate</div>
                        <div className="text-xl font-semibold text-white">89%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${getAnimationClasses(sectionInView)}`}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="relative">
                  <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto max-w-md mx-auto">
                    <defs>
                      <linearGradient id="manGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    
                    <g transform="translate(50, 50)">
                      <circle cx="40" cy="30" r="20" fill="url(#manGradient)" />
                      
                      <rect x="25" y="50" width="30" height="60" rx="5" fill="url(#manGradient)" />
                      
                      <rect x="10" y="60" width="20" height="40" rx="10" fill="url(#manGradient)" />
                      <rect x="55" y="60" width="20" height="40" rx="10" fill="url(#manGradient)" />
                      
                      <rect x="30" y="110" width="12" height="40" rx="6" fill="url(#manGradient)" />
                      <rect x="48" y="110" width="12" height="40" rx="6" fill="url(#manGradient)" />
                    </g>
                    
                    <g transform="translate(200, 80)">
                      <rect x="0" y="0" width="120" height="80" rx="8" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
                      
                      <text x="60" y="25" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">
                        Student P&L
                      </text>
                      
                      <foreignObject x="0" y="30" width="120" height="20">
                        <div className={`text-center text-lg font-bold ${currentPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          <RollingNumber value={currentPnL} decimals={2} />
                        </div>
                      </foreignObject>
                      
                      <text x="60" y="65" textAnchor="middle" fill={changePercent >= 0 ? "#10b981" : "#ef4444"} fontSize="12">
                        {changePercent >= 0 ? '+' : ''}{changePercent}%
                      </text>
                    </g>
                    
                    <path d="M 130 120 Q 180 100 200 120" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}