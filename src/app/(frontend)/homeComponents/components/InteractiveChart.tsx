import React, { useRef, useEffect, useState } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { chartData } from '../mockData/chartData'
import { 
  defaultChartConfig, 
  calculatePriceRange, 
  getCanvasCoordinates, 
  generateTimeLabels, 
  formatPrice 
} from '../utilities/chartUtils'

export const InteractiveChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [chartRef, chartInView] = useInView(0.3)
  const [isDrawn, setIsDrawn] = useState(false)

  useEffect(() => {
    if (!chartInView || !canvasRef.current || isDrawn) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const config = defaultChartConfig
    const { width, height, padding } = config.dimensions
    
    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate price range
    const priceRange = calculatePriceRange(chartData)

    // Draw grid lines
    ctx.strokeStyle = config.colors.grid
    ctx.lineWidth = 1
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i / 5) * (height - padding * 2)
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
      const x = padding + (i / 6) * (width - padding * 2)
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
      ctx.stroke()
    }

    // Draw candlesticks
    chartData.forEach((candle, index) => {
      const coords = getCanvasCoordinates(candle, index, chartData.length, priceRange, config.dimensions)
      const isBullish = candle.close > candle.open
      
      // Set colors
      ctx.fillStyle = isBullish ? config.colors.bullish : config.colors.bearish
      ctx.strokeStyle = isBullish ? config.colors.bullish : config.colors.bearish
      ctx.lineWidth = 2

      // Draw wick (high-low line)
      ctx.beginPath()
      ctx.moveTo(coords.x, coords.highY)
      ctx.lineTo(coords.x, coords.lowY)
      ctx.stroke()

      // Draw body (open-close rectangle)
      const bodyHeight = Math.abs(coords.closeY - coords.openY)
      const bodyY = Math.min(coords.openY, coords.closeY)
      const bodyWidth = 8
      
      ctx.fillRect(coords.x - bodyWidth/2, bodyY, bodyWidth, bodyHeight)
    })

    // Draw trend line
    ctx.strokeStyle = config.colors.trend
    ctx.lineWidth = 3
    ctx.beginPath()
    
    chartData.forEach((candle, index) => {
      const coords = getCanvasCoordinates(candle, index, chartData.length, priceRange, config.dimensions)
      const avgPrice = (candle.open + candle.close) / 2
      const avgY = padding + (1 - (avgPrice - priceRange.minPrice) / priceRange.priceRange) * (height - padding * 2)
      
      if (index === 0) {
        ctx.moveTo(coords.x, avgY)
      } else {
        ctx.lineTo(coords.x, avgY)
      }
    })
    ctx.stroke()

    // Add price labels
    ctx.fillStyle = config.colors.text
    ctx.font = '12px Inter, sans-serif'
    ctx.textAlign = 'right'
    
    for (let i = 0; i <= 5; i++) {
      const price = priceRange.minPrice + (priceRange.priceRange * (5 - i) / 5)
      const y = padding + (i / 5) * (height - padding * 2)
      ctx.fillText(formatPrice(price), padding - 10, y + 4)
    }

    // Add time labels
    ctx.textAlign = 'center'
    const timeLabels = generateTimeLabels()
    timeLabels.forEach((label, index) => {
      const x = padding + (index / (timeLabels.length - 1)) * (width - padding * 2)
      ctx.fillText(label, x, height - 10)
    })

    setIsDrawn(true)
  }, [chartInView, isDrawn])

  return (
    <section ref={chartRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(chartInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Real-time Market{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with our advanced market analysis tools and real-time trading insights that help you make informed investment decisions.
            </p>
          </div>
          
          <div className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 transition-all duration-1000 ${getAnimationClasses(chartInView)}`}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">NIFTY 50 - Live Chart</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Bullish
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Bearish
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Trend Line
                </span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <canvas 
                ref={canvasRef}
                className="w-full h-auto max-w-full border border-gray-200 rounded-lg bg-white"
                style={{ maxHeight: '450px' }}
              />
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Current</div>
                <div className="text-lg font-semibold text-gray-800">₹19,847</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Change</div>
                <div className="text-lg font-semibold text-green-600">+2.4%</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Volume</div>
                <div className="text-lg font-semibold text-gray-800">2.1M</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">High</div>
                <div className="text-lg font-semibold text-gray-800">₹19,901</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}