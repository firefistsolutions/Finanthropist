'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Animation hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Counter animation hook
const useCounter = (end: number, duration = 2000, startDelay = 0) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now()
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress >= 1) clearInterval(interval)
      }, 16)
      
      return () => clearInterval(interval)
    }, startDelay)
    
    return () => clearTimeout(timer)
  }, [end, duration, startDelay])

  return count
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  delay = 0 
}) => {
  const count = useCounter(value, duration, delay)
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

// Hero Section Component
const HeroSection: React.FC = () => {
  const [heroRef, heroInView] = useInView(0.2)

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            Learn Stock Market<br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
              Investing
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join <AnimatedCounter value={25000} suffix="+" delay={500} /> students who have mastered practical stock market investing with Maharashtra&apos;s most trusted educator, Sameer Sarang.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">Join Free 2-Hour Seminar</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" className="border-2 bg-blue-600 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm transition-all duration-300">
              Meet Your Trainer
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: 25000, suffix: '+', label: 'Students Trained' },
              { value: 23, suffix: '+', label: 'Years Experience' },
              { value: 2, suffix: ' Hours', label: 'Free Seminar' },
              { value: 90, suffix: '%+', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className={`text-center transition-all duration-1000 delay-${(index + 2) * 200}`} style={{ transitionDelay: `${(index + 2) * 200}ms` }}>
                <div className="text-2xl md:text-3xl font-light text-blue-300 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={1000 + index * 200} />
                </div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Stats Component
const EducationStats: React.FC = () => {
  const [statsRef, statsInView] = useInView(0.2)

  const mainStats = [
    {
      metric: "Students Trained",
      value: 25000,
      description: "Successful graduates across Maharashtra",
      icon: "👥",
      color: "from-blue-500 to-blue-600"
    },
    {
      metric: "Years of Experience", 
      value: 23,
      description: "Continuous market education since 2001",
      icon: "📈",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      metric: "Success Rate",
      value: 90,
      description: "Students applying learned concepts successfully",
      icon: "🎯", 
      color: "from-purple-500 to-purple-600"
    },
    {
      metric: "Free Seminar",
      value: 2,
      description: "No-cost introduction to our methodology",
      icon: "🎓",
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <section ref={statsRef} className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">
            Comprehensive Stock Market Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learn practical investing skills from basics to advanced strategies with our proven methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainStats.map((stat, index) => (
            <Card 
              key={stat.metric}
              className={`p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-500 group transform hover:-translate-y-2 ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              <div className={`text-3xl font-light mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.metric === 'Students Trained' ? '+' : stat.metric === 'Success Rate' ? '%+' : stat.metric === 'Years of Experience' ? '+' : ''} 
                  delay={statsInView ? index * 200 : 0}
                />
              </div>

              <h3 className="text-lg font-medium text-slate-900 mb-3">
                {stat.metric}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive Chart Component
const InteractiveChart: React.FC = () => {
  const [chartRef, chartInView] = useInView(0.2)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [activeSymbol, setActiveSymbol] = useState('NIFTY')
  const [isAnimating, setIsAnimating] = useState(false)
  const [chartData, setChartData] = useState<Array<{x: number, open: number, high: number, low: number, close: number}>>([])

  useEffect(() => {
    setIsClient(true)
    // Generate deterministic chart data
    const data = []
    for (let i = 0; i < 40; i++) {
      const basePrice = 100 + Math.sin(i * 0.3) * 20
      const variation = Math.sin(i * 0.5) * 10 // Use sin for deterministic values
      
      const open = basePrice + variation
      const close = basePrice + variation + (Math.sin(i * 0.7) - 0.5) * 5
      const high = Math.max(open, close) + Math.abs(Math.sin(i * 0.9)) * 3
      const low = Math.min(open, close) - Math.abs(Math.cos(i * 0.8)) * 3

      data.push({ x: i, open, close, high, low })
    }
    setChartData(data)
  }, [])

  const drawSimpleChart = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !isClient || chartData.length === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Clear canvas with white background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    // Draw subtle grid
    ctx.strokeStyle = '#f1f5f9'
    ctx.lineWidth = 1
    
    // Vertical grid lines
    for (let i = 0; i <= 12; i++) {
      const x = padding + (i / 12) * (width - padding * 2)
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
      ctx.stroke()
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 8; i++) {
      const y = padding + (i / 8) * (height - padding * 2)
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Draw price labels on Y-axis
    ctx.fillStyle = '#64748b'
    ctx.font = '11px system-ui'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    
    const minPrice = Math.min(...chartData.map(c => c.low))
    const maxPrice = Math.max(...chartData.map(c => c.high))
    const priceRange = maxPrice - minPrice
    
    for (let i = 0; i <= 6; i++) {
      const price = minPrice + (priceRange * (6 - i) / 6)
      const y = padding + (i / 6) * (height - padding * 2)
      ctx.fillText(price.toFixed(0), padding - 8, y)
    }

    // Draw time labels on X-axis
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    
    for (let i = 0; i <= 6; i++) {
      const x = padding + (i / 6) * (width - padding * 2)
      const timeLabel = `${9 + i * 1}:${(i * 10).toString().padStart(2, '0')}`
      ctx.fillText(timeLabel, x, height - padding + 8)
    }

    // Draw trend line
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.beginPath()
    chartData.forEach((candle, i) => {
      const x = padding + (i / (chartData.length - 1)) * (width - padding * 2)
      const y = padding + (1 - (candle.close - minPrice) / priceRange) * (height - padding * 2)
      
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw candlesticks
    const candleWidth = Math.max((width - padding * 2) / chartData.length * 0.6, 4)
    
    chartData.forEach((candle, i) => {
      const x = padding + (i / (chartData.length - 1)) * (width - padding * 2)
      
      const openY = padding + (1 - (candle.open - minPrice) / priceRange) * (height - padding * 2)
      const closeY = padding + (1 - (candle.close - minPrice) / priceRange) * (height - padding * 2)
      const highY = padding + (1 - (candle.high - minPrice) / priceRange) * (height - padding * 2)
      const lowY = padding + (1 - (candle.low - minPrice) / priceRange) * (height - padding * 2)

      const isGreen = candle.close > candle.open
      
      // Draw wick
      ctx.strokeStyle = isGreen ? '#10b981' : '#ef4444'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x, highY)
      ctx.lineTo(x, lowY)
      ctx.stroke()

      // Draw candle body with shadow
      ctx.shadowColor = 'rgba(0,0,0,0.1)'
      ctx.shadowBlur = 2
      ctx.shadowOffsetY = 1
      
      ctx.fillStyle = isGreen ? '#10b981' : '#ef4444'
      const bodyHeight = Math.abs(closeY - openY) || 2
      ctx.fillRect(x - candleWidth/2, Math.min(openY, closeY), candleWidth, bodyHeight)
      
      // Reset shadow
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0

      // Draw candle border for better definition
      ctx.strokeStyle = isGreen ? '#059669' : '#dc2626'
      ctx.lineWidth = 1
      ctx.strokeRect(x - candleWidth/2, Math.min(openY, closeY), candleWidth, bodyHeight)
    })

    // Draw volume bars at bottom
    const volumeHeight = 30
    const volumeY = height - padding + 5
    const maxVolume = Math.max(...chartData.map((_, _i) => Math.random() * 100 + 50))
    
    chartData.forEach((candle, _i) => {
      const x = padding + (_i / (chartData.length - 1)) * (width - padding * 2)
      const volume = Math.random() * 100 + 50
      const barHeight = (volume / maxVolume) * volumeHeight
      
      ctx.fillStyle = candle.close > candle.open ? '#10b98140' : '#ef444440'
      ctx.fillRect(x - candleWidth/4, volumeY + volumeHeight - barHeight, candleWidth/2, barHeight)
    })

    // Draw title
    ctx.fillStyle = '#1e293b'
    ctx.font = 'bold 14px system-ui'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText(`${activeSymbol} - Live Market Data`, padding, 12)
  }, [isClient, chartData, activeSymbol])

  useEffect(() => {
    if (isClient && chartData.length > 0) {
      const timer = setTimeout(drawSimpleChart, 500)
      return () => clearTimeout(timer)
    }
  }, [isClient, chartData, activeSymbol, drawSimpleChart])

  // Always render the full component, just hide chart until client-side
  const showChart = isClient && chartData.length > 0

  return (
    <section ref={chartRef} className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${chartInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">
            Live Market Analysis
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience our teaching methodology with this interactive market demonstration.
          </p>
        </div>

        <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-1000 ${chartInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-slate-700">Market:</label>
                <select
                  value={activeSymbol}
                  onChange={(e) => setActiveSymbol(e.target.value)}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="NIFTY">NIFTY 50</option>
                  <option value="SENSEX">SENSEX</option>
                  <option value="BANKNIFTY">BANK NIFTY</option>
                </select>
              </div>
              
              <Button
                onClick={() => {
                  setIsAnimating(true)
                  // Generate new data
                  const newData = []
                  for (let i = 0; i < 40; i++) {
                    const basePrice = 100 + Math.sin(i * 0.3 + Date.now() * 0.001) * 20
                    const variation = Math.sin(i * 0.5 + Date.now() * 0.001) * 10
                    
                    const open = basePrice + variation
                    const close = basePrice + variation + (Math.sin(i * 0.7 + Date.now() * 0.001) - 0.5) * 5
                    const high = Math.max(open, close) + Math.abs(Math.sin(i * 0.9 + Date.now() * 0.001)) * 3
                    const low = Math.min(open, close) - Math.abs(Math.cos(i * 0.8 + Date.now() * 0.001)) * 3

                    newData.push({ x: i, open, close, high, low })
                  }
                  setChartData(newData)
                  setTimeout(() => setIsAnimating(false), 1000)
                }}
                className={`bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
                disabled={isAnimating}
              >
                {isAnimating ? 'Updating...' : 'Refresh Data'}
              </Button>
            </div>
          </div>

          <div className="p-6">
            {showChart ? (
              <canvas
                ref={canvasRef}
                width={1000}
                height={450}
                className="w-full h-auto border border-slate-200 rounded-lg bg-white shadow-sm"
              />
            ) : (
              <div className="w-full h-96 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-slate-600">Loading chart data...</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-sm text-slate-600">Current Price</div>
                <div className="text-xl font-bold text-slate-900">19,847.30</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Change</div>
                <div className="text-xl font-bold text-emerald-600">+127.45 (+0.65%)</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Volume</div>
                <div className="text-xl font-bold text-slate-900">2.1M</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Market Cap</div>
                <div className="text-xl font-bold text-slate-900">₹245.7T</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trainer Profile Component
const TrainerProfile: React.FC = () => {
  const [trainerRef, trainerInView] = useInView(0.2)

  return (
    <section ref={trainerRef} className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${trainerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Meet Your Trainer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Learn from Sameer Sarang, Maharashtra&apos;s most trusted stock market educator
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                    SS
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Sameer Sarang</h3>
                    <p className="text-lg text-blue-600 font-medium">Stock Market Educator & Author</p>
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                  With over 23 years of experience in stock market education, Sameer Sarang has trained 25,000+ students across Maharashtra. His practical teaching approach focuses on real market applications and sustainable investment strategies.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: '📚', value: '23+', metric: 'Years Experience' },
                    { icon: '🎓', value: '25,000+', metric: 'Students Trained' },
                    { icon: '📖', value: 'Co-Author', metric: 'Billionaire Mindset' },
                    { icon: '📅', value: '2001', metric: 'Teaching Since' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-xl">&ldquo;</span>
                </div>
                <blockquote className="text-xl italic text-slate-700 leading-relaxed mb-6">
                  &ldquo;Our goal is not just to teach stock market, but to make people financially independent. In 23+ years, we have provided practical investment skills to 25,000+ students.&rdquo;
                </blockquote>
                <div className="text-sm text-slate-500">
                  — Sameer Sarang, Founder & Lead Trainer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Course Structure Component
const CourseStructure: React.FC = () => {
  const [courseRef, courseInView] = useInView(0.2)

  const modules = [
    {
      id: "basics",
      title: "Stock Market Fundamentals",
      description: "Complete introduction to stock market concepts and terminology",
      duration: "2 weeks",
      lessons: 10,
      icon: "📚",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "analysis",
      title: "Technical & Fundamental Analysis",
      description: "Learn to analyze stocks using both technical and fundamental methods",
      duration: "3 weeks",
      lessons: 12,
      icon: "📊",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: "strategy",
      title: "Investment Strategies",
      description: "Develop personal investment strategies and risk management",
      duration: "2 weeks",
      lessons: 8,
      icon: "🎯",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "practical",
      title: "Live Trading & Psychology",
      description: "Real market application with emotional discipline training",
      duration: "3 weeks",
      lessons: 15,
      icon: "💰",
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <section ref={courseRef} className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${courseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Course Structure</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn practical stock market investing from basics to advanced strategies with our proven methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={module.id} 
              className={`p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-700 group transform hover:-translate-y-1 ${
                courseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {module.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{module.description}</p>
                  
                  <div className="flex gap-6 text-sm">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${module.color} text-white font-medium`}>
                      {module.duration}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                      {module.lessons} lessons
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Student Success Stories Component
const StudentSuccessStories: React.FC = () => {
  const [storiesRef, storiesInView] = useInView(0.2)
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      name: "Rajesh M",
      profession: "Business Owner",
      location: "Maharashtra",
      quote: "Sameer sir's practical teaching helped me understand the stock market completely. Now I follow a systematic approach with confidence.",
      result: "Managing portfolio worth ₹15 lakhs",
      avatar: "RM",
      background: 'business' as const
    },
    {
      name: "Priya S",
      profession: "Working Professional",
      location: "Maharashtra",
      quote: "The free seminar gave me a clear understanding of stock market basics. Now I invest with confidence and proper knowledge.",
      result: "Built ₹8 lakhs portfolio in 18 months",
      avatar: "PS",
      background: 'professional' as const
    },
    {
      name: "Sunita K",
      profession: "Homemaker",
      location: "Maharashtra",
      quote: "I learned that stock market is not gambling if you have proper knowledge. The training helped me understand investment fundamentals.",
      result: "Earning ₹25,000+ monthly through investments",
      avatar: "SK",
      background: 'homemaker' as const
    }
  ]

  const getGradient = (background: string) => {
    switch (background) {
      case 'business': return 'from-blue-500 to-blue-600'
      case 'professional': return 'from-emerald-500 to-emerald-600'
      case 'homemaker': return 'from-purple-500 to-purple-600'
      default: return 'from-slate-500 to-slate-600'
    }
  }

  return (
    <section ref={storiesRef} className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${storiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from our students across Maharashtra
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-2 shadow-lg border border-slate-200">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeStory === index
                    ? `bg-gradient-to-r ${getGradient(story.background)} text-white shadow-md`
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {story.profession}
              </button>
            ))}
          </div>
        </div>

        {stories[activeStory] && (
          <div className={`max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 transition-all duration-700 ${storiesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getGradient(stories[activeStory].background)} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {stories[activeStory].avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{stories[activeStory].name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{stories[activeStory].profession}</p>
                    <p className="text-slate-500 text-sm">{stories[activeStory].location}</p>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${getGradient(stories[activeStory].background)} rounded-xl p-6 text-white mb-6`}>
                  <h4 className="font-bold mb-2">Achievement:</h4>
                  <p className="text-white/95">{stories[activeStory].result}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getGradient(stories[activeStory].background)} flex items-center justify-center mb-6`}>
                  <span className="text-white text-xl">&ldquo;</span>
                </div>
                <blockquote className="text-lg text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{stories[activeStory].quote}&rdquo;
                </blockquote>
                <div className="text-sm text-slate-500">
                  — {stories[activeStory].name}, {stories[activeStory].profession}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '₹15L+', label: 'Average Portfolio Value', color: 'text-blue-600' },
            { value: '₹25K+', label: 'Monthly Passive Income', color: 'text-emerald-600' },
            { value: '90%+', label: 'Success Rate', color: 'text-purple-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Component
const FinalCTA: React.FC = () => {
  const [ctaRef, ctaInView] = useInView(0.2)

  return (
    <section ref={ctaRef} className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light mb-8">Start Your Investment Journey Today</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join 25,000+ students who have learned practical stock market investing. Start with our FREE 2-hour introductory seminar and discover our proven teaching methodology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">Register for Free Seminar</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" className="border-2 bg-blue-600 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg">
              Learn More About Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <EducationStats />
        <InteractiveChart />
        <TrainerProfile />
        <CourseStructure />
        <StudentSuccessStories />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}