'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, Clock, Users, Gift, CheckCircle, Phone, Video, Star } from 'lucide-react'

// Animation utilities
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

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

const getAnimationClasses = (inView: boolean) => 
  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

const getStaggerDelay = (index: number) => ({ transitionDelay: `${index * 100}ms` })

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to August 26, 2025 8:00 PM
    const targetDate = new Date('2025-08-26T20:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
          <div className="text-xs text-blue-200 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

export default function FreeWebinarFocus() {
  const [sectionRef, sectionInView] = useInView(0.3)

  const webinarTopics = [
    {
      icon: '📊',
      title: 'What is the Share Market',
      description: 'Complete basics explained in simple language - perfect for beginners',
      duration: '15 mins'
    },
    {
      icon: '🚀',
      title: 'How to Get Started',
      description: 'Step-by-step process to begin your trading journey safely',
      duration: '20 mins'
    },
    {
      icon: '🎯',
      title: 'What Stocks to Buy',
      description: 'Stock selection criteria and analysis methods',
      duration: '20 mins'
    },
    {
      icon: '⏰',
      title: 'When to Buy, Hold, or Sell',
      description: 'Timing strategies for maximum profit and minimum loss',
      duration: '15 mins'
    },
    {
      icon: '🛡️',
      title: 'How to Avoid Losses',
      description: 'Risk management techniques that protect your money',
      duration: '20 mins'
    }
  ]

  const freeBonuses = [
    {
      icon: '📈',
      title: 'Technical Analysis Strategy',
      value: '₹3,999',
      description: 'Complete guide to reading charts and patterns'
    },
    {
      icon: '💰',
      title: 'Self-Investing Guidance',
      value: '₹2,999',
      description: 'Step-by-step investment planning workbook'
    },
    {
      icon: '🏠',
      title: 'Home Loan Calculator',
      value: '₹3,001',
      description: 'Advanced calculator for loan planning and EMI optimization'
    }
  ]

  const whyAttend = [
    'Learn from 23+ years of finance experience',
    'Taught in Marathi & English for better understanding',
    'Get answers to all your trading questions',
    'No sales pitch - pure educational value',
    'Lifetime access to recorded session',
    'Connect with 10,000+ student community'
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold text-sm mb-6">
            <Gift className="w-4 h-4 mr-2" />
            100% FREE WEBINAR - Limited Seats
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Master Share Market{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-medium">
              FREE Webinar
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join Maharashtra&apos;s most trusted stock market educator for a comprehensive FREE training session
          </p>
          
          {/* Webinar Details */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-white font-semibold">August 26, 2025</div>
              <div className="text-blue-200 text-sm">Tuesday</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-white font-semibold">8:00 PM IST</div>
              <div className="text-blue-200 text-sm">1.5 Hours Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Video className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Live on Zoom</div>
              <div className="text-blue-200 text-sm">Interactive Session</div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <h3 className="text-2xl font-light text-white mb-6">Webinar Starts In:</h3>
          <CountdownTimer />
          <p className="text-yellow-300 text-sm mt-4">⚠️ Limited seats available - Register now to secure your spot!</p>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-light text-center text-white mb-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            What You&apos;ll Learn in This <span className="text-yellow-400">FREE Session</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinarTopics.map((topic, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 ${getAnimationClasses(sectionInView)}`}
                style={getStaggerDelay(index)}
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{topic.title}</h4>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">{topic.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs">
                    {topic.duration}
                  </span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Bonuses */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-light text-center text-white mb-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <span className="text-yellow-400">FREE Bonuses</span> Worth ₹9,999
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {freeBonuses.map((bonus, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl p-6 border border-yellow-400/30 hover:from-yellow-400/30 hover:to-orange-400/30 transition-all duration-500 transform hover:-translate-y-2 ${getAnimationClasses(sectionInView)}`}
                style={getStaggerDelay(index)}
              >
                <div className="text-4xl mb-4">{bonus.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{bonus.title}</h4>
                <div className="text-yellow-300 font-bold text-xl mb-3">Value: {bonus.value}</div>
                <p className="text-blue-100 text-sm">{bonus.description}</p>
                <div className="mt-4 text-center">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                    FREE for Attendees
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Attend */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-light text-center text-white mb-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            Why Should You <span className="text-yellow-400">Attend?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whyAttend.map((reason, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-500 ${getAnimationClasses(sectionInView)}`}
                style={getStaggerDelay(index)}
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className={`text-center transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                Register for <span className="text-blue-600">FREE</span> Now!
              </h3>
              <p className="text-gray-600 mb-6">
                Join 2,000+ students who are already registered. Don&apos;t miss this opportunity!
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>2,000+ already registered</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Primary CTA */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-semibold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                🎯 Register for FREE Webinar - August 26, 8 PM
              </button>
              
              {/* Secondary CTAs */}
              <div className="grid md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Call: +91-7066334499</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-6 rounded-xl transition-colors">
                  <Users className="w-5 h-5" />
                  <span>WhatsApp Registration</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-500 space-y-2">
              <p>✅ No credit card required  ✅ 100% FREE webinar  ✅ Recordings provided</p>
              <p>⏰ Limited seats available - Register before they&apos;re full!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}