import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export const TradingFeatures: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.3)
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const pinnableBoxRef = useRef<HTMLDivElement>(null) // The actual box to pin
  const [animationKey, setAnimationKey] = useState(0) // Key to trigger animation reset
  const { homeData } = useHomeData()
  const tradingFeatures = homeData.tradingFeatures
  const features = tradingFeatures?.features || []

  // Fixed ScrollTrigger animation setup
  useEffect(() => {
    if (!containerRef.current || !leftColumnRef.current || !rightColumnRef.current || !pinnableBoxRef.current || features.length === 0) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      // Desktop animation (1025px and above)
      mm.add("(min-width: 1025px)", () => {
        // Wait for layout to settle and measure heights
        gsap.delayedCall(0.1, () => {
          const leftHeight = leftColumnRef.current!.offsetHeight
          const rightHeight = pinnableBoxRef.current!.offsetHeight
          
          console.log('📏 Heights - Left:', leftHeight, 'Right:', rightHeight)
          
          // Only pin if left column is significantly taller
          if (leftHeight > rightHeight + 200) {
            console.log('📌 Creating ScrollTrigger pin')
            
            ScrollTrigger.create({
              trigger: leftColumnRef.current,
              start: "top top",
              end: "bottom bottom",
              pin: pinnableBoxRef.current, // Pin the actual content box
              pinSpacing: true, // Enable proper spacing
              pinType: "transform", // Use transform for better performance
              markers: true, // Remove in production
              onEnter: () => console.log('📌 Pin started'),
              onLeave: () => console.log('📌 Pin ended'),
              onRefresh: () => console.log('🔄 ScrollTrigger refreshed')
            })
          } else {
            console.log('⏭️ Skipping pin - content heights similar')
          }
        })
      })

      // Mobile/tablet - no pinning animation
      mm.add("(max-width: 1024px)", () => {
        console.log('📱 Mobile/tablet - no pinning')
      })

      return mm
    }, containerRef)

    return () => {
      console.log('🧹 Cleaning up ScrollTriggers with context')
      ctx.revert()
    }
  }, [features.length, animationKey])

  // Improved reset animation function
  const resetAnimation = () => {
    console.log('🔄 TradingFeatures: Reset button clicked')
    
    // Kill all ScrollTriggers more safely
    ScrollTrigger.getAll().forEach(trigger => {
      const triggerElement = trigger.trigger
      if (triggerElement && containerRef.current?.contains(triggerElement)) {
        console.log('🗑️ Killing ScrollTrigger:', trigger)
        trigger.kill()
      }
    })
    
    // Clear transforms on all animated elements
    if (leftColumnRef.current && rightColumnRef.current && pinnableBoxRef.current) {
      gsap.set([leftColumnRef.current, rightColumnRef.current, pinnableBoxRef.current], {
        clearProps: "all"
      })
      console.log('🎯 All transforms cleared')
    }
    
    // Reset state
    setActiveFeature(0)
    
    // Refresh ScrollTrigger and trigger useEffect
    ScrollTrigger.refresh()
    setAnimationKey(prev => prev + 1)
    console.log('✅ Animation reset completed')
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {/* Debug Reset Button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={resetAnimation}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm shadow-lg"
        >
          🔄 Reset Animation
        </button>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              {tradingFeatures?.title?.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                {tradingFeatures?.title?.split(' ').slice(-1).join(' ') || 'Features'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {tradingFeatures?.subtitle || 'Professional trading tools and expert guidance to maximize your investment success'}
            </p>
          </div>

          <div ref={containerRef} className="grid lg:grid-cols-2 gap-12">
            <div ref={leftColumnRef} className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                      activeFeature === index 
                        ? 'bg-white shadow-xl scale-105' 
                        : 'bg-white/70 hover:bg-white hover:shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Client Success Metrics</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-800">₹{orderValue.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Average Portfolio Growth</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-gray-500">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-200 ${getAnimationClasses(sectionInView)}`}>
              <div ref={rightColumnRef} className="relative">
                <div ref={pinnableBoxRef} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Market Insights</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">LIVE</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-lg font-semibold">NIFTY 50</div>
                          <div className="text-sm text-gray-300">Today&apos;s Outlook</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-400">Bullish</div>
                          <div className="text-sm text-green-400">+2.34% target</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                          BUY ALERT
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                          ANALYSIS
                        </button>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <h4 className="text-lg font-semibold mb-4">Market Performance</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-300">Weekly Gainers</div>
                          <div className="font-semibold">67%</div>
                        </div>
                        <div>
                          <div className="text-gray-300">Top Performers</div>
                          <div className="font-semibold">IT, Pharma</div>
                        </div>
                        <div>
                          <div className="text-gray-300">Volume Surge</div>
                          <div className="font-semibold">+24%</div>
                        </div>
                        <div>
                          <div className="text-gray-300">Market Sentiment</div>
                          <div className="font-semibold">Positive</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-6 border border-emerald-500/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-emerald-400">Trade Signal Active</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        New bullish signal detected for RELIANCE at ₹2,847. Potential target: ₹2,920 with stop loss at ₹2,785.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA after showing professional features */}
          <div className={`mt-12 transition-all duration-1000 delay-400 ${getAnimationClasses(sectionInView)}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-blue-600">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Professional Package</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Experience All Professional Services + Lifetime Support
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Get comprehensive access to expert market analysis, personalized trading strategies, risk management guidance, and 24/7 support for your complete trading journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Get Started Today
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}