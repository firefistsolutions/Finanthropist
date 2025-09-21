'use client'

import React, { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  Users,
  Gift,
  CheckCircle,
  Phone,
  Video,
  Play,
  TrendingUp,
  Target,
  Shield,
  BookOpen,
  Zap,
  AlertTriangle,
} from 'lucide-react'

export default function V3WebinarFocusedCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-08-26T20:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const webinarTopics = [
    {
      title: 'What is the Share Market & how can you get benefited out of it? ',
      description: 'Complete basics explained in simple Marathi & English',
      duration: '15 minutes',
      icon: TrendingUp,
    },
    {
      title: 'How to Get Started and How many income sources you can have?',
      description: 'Step-by-step process for safe market entry',
      duration: '20 minutes',
      icon: Zap,
    },
    {
      title: 'Importance of which Stocks to Buy, When to buy & How to manage risk? ',
      description: 'Stock selection criteria and analysis methods',
      duration: '20 minutes',
      icon: Target,
    },
    {
      title: 'Technical Analysis – You will learn here without any background',
      description: 'Timing strategies for maximum profit',
      duration: '15 minutes',
      icon: Clock,
    },
    {
      title: 'How we can work together and what is to expect from this segment',
      description: 'Risk management that protects your money',
      duration: '20 minutes',
      icon: Shield,
    },
  ]

  const freeBonuses = [
    {
      title: 'Technical Analysis Strategy Guide',
      value: '₹3,999',
      description: 'Complete chart reading and pattern analysis',
    },
    {
      title: 'Self-Investing Planning Workbook',
      value: '₹2,999',
      description: 'Step-by-step investment planning framework',
    },
    {
      title: 'Advanced Home Loan Calculator',
      value: '₹3,001',
      description: 'EMI optimization and loan planning tool',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-sm mb-6">
            <Gift className="w-5 h-5 mr-2" />
            Join Our Institute – Learn, Trade, Grow
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Master Share Market at{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-medium">
              Our Trading Institute
            </span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Learn stock market trading at Maharashtra&apos;s most trusted trading institute.
            Professional education with lifetime support included.
          </p>
        </div>

        {/* Webinar Details Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Webinar Info */}
            <div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">August 26, 2025</div>
                    <div className="text-gray-600 text-sm">Tuesday</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">8:00 PM IST</div>
                    <div className="text-gray-600 text-sm">1.5 Hours Duration</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Live on Zoom</div>
                    <div className="text-gray-600 text-sm">Interactive Q&A Included</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">2,000+ Registered</div>
                    <div className="text-gray-600 text-sm">Limited Seats Left</div>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-gray-600 font-semibold mb-4">Webinar Starts In:</div>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-blue-600 text-white rounded-lg p-4">
                      <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                      <div className="text-xs uppercase tracking-wide">{unit}</div>
                    </div>
                  ))}
                </div>
                <div className="text-red-600 font-semibold text-sm mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Limited Batch Seats Available!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Registration Form */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Join Our Institute Today!
                </h3>

                <form className="space-y-4 mb-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    JOIN INSTITUTE NOW
                  </button>
                </form>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call Register</span>
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-semibold py-3 px-4 rounded-lg text-sm transition-colors">
                    WhatsApp Join
                  </button>
                </div>

                <div className="text-center text-xs text-gray-500 space-y-1">
                  <div>✅ No payment required</div>
                  <div>✅ Instant confirmation</div>
                  <div>✅ Recording provided to all attendees</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h3 className="text-3xl font-light text-white text-center mb-10">
            What You&apos;ll Learn in Our <span className="text-yellow-400">Free Webinar</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinarTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{topic.title}</h4>
                <p className="text-blue-100 text-sm mb-4">{topic.description}</p>
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

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-light text-white mb-6">
              Don&apos;t Miss This{' '}
              <span className="text-yellow-400">Life-Changing Opportunity</span>
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 25,000+ successful traders who learned at our institute. Batch seats filling up
              fast!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-blue-900 font-bold text-lg py-4 px-6 rounded-xl transition-colors flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                JOIN INSTITUTE NOW
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-6 rounded-xl transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call: +91-7066334499</span>
              </button>
            </div>

            <div className="text-blue-200 text-sm mt-6">
              📞 Need help with admission? Call us now! | 🕐 Limited batch seats - enroll today
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
