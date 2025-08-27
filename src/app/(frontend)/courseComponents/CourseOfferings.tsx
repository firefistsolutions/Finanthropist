'use client'

import React, { useRef, useState, useEffect } from 'react'
import { BookOpen, TrendingUp } from 'lucide-react'

// Animation utilities (replicated from old version)
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const adjustedThreshold = isMobile ? Math.min(threshold, 0.1) : Math.min(threshold, 0.2)
    const rootMargin = isMobile ? '20px 0px -5% 0px' : '50px 0px -10% 0px'
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIsInView(entry.isIntersecting), 50)
      },
      { 
        threshold: adjustedThreshold,
        rootMargin: rootMargin
      }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

const getAnimationClasses = (inView: boolean, baseClasses = 'opacity-0 translate-y-2') => 
  inView ? 'opacity-100 translate-y-0' : baseClasses

const getStaggerDelay = (index: number, baseDelay = 200) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const adjustedDelay = isMobile ? Math.min(baseDelay, 150) : baseDelay
  return {
    transitionDelay: `${index * adjustedDelay}ms`
  }
}

export default function CourseOfferings() {
  const learningAreas = [
    {
      title: "Price Based Trading",
      description: "Learn to use price as the primary information source for trading decisions",
      features: [
        "Price Action Trading",
        "Trade Direction Analysis",
        "Live Market Decision Making",
        "Price Movement Strategies"
      ],
      color: "bg-green-500"
    },
    {
      title: "Technical Analysis",
      description: "Master chart patterns, indicators, and trading psychology",
      features: [
        "Candlestick Patterns",
        "Line Chart Analysis",
        "Gann Theory Application",
        "Chart Pattern Recognition"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Options Trading",
      description: "Simple strategy with low risk - very popular in India",
      features: [
        "Step-by-step Process",
        "Risk Limitation Techniques",
        "Profit Maximization",
        "Options Strategies"
      ],
      color: "bg-purple-500"
    },
    {
      title: "Trading Systems",
      description: "Learn the art of creating your own profitable trading systems",
      features: [
        "Personal Trading Plan",
        "Stock Analysis Techniques",
        "Full-fledged Trading",
        "Investment Strategies"
      ],
      color: "bg-yellow-500"
    }
  ]

  const [sectionRef, sectionInView] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
            Learn from{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Expert Educator
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive stock market education with lifetime mentorship from Sameer Sarang - Maharashtra&apos;s most trusted educator with 23+ years experience.
          </p>
        </div>

        {/* Learning Areas */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {learningAreas.map((area, index) => (
            <div 
              key={`area-${index}`}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                area.popular ? 'ring-4 ring-blue-500' : ''
              } ${getAnimationClasses(sectionInView)}`}
              style={getStaggerDelay(index, 100)}
            >
              {/* Popular Badge */}
              {area.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Core Focus
                </div>
              )}

              <div className="p-8">
                {/* Learning Area Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color.replace('bg-', 'from-')} to-${area.color.split('-')[1]}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {area.features.map((feature, featureIndex) => (
                    <div key={`feature-${featureIndex}`} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50/50 hover:bg-blue-50/50 transition-colors duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-light mb-6">Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-medium">Trading Journey?</span>
              </h3>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">Transform your financial future with expert-guided stock market education and lifetime mentorship</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-10 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Learning Today
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm">
                  Call: +91-7066334499
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}