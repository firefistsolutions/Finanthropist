'use client'

import React from 'react'
import { CheckCircle, TrendingUp, BookOpen, Users, Shield, Clock, Award, Target } from 'lucide-react'

export default function V3CourseValueProposition() {
  const courseModules = [
    {
      title: "Price Based Trading",
      description: "Learn to use price as the primary information source for trading decisions",
      features: [
        "Price Action Trading fundamentals",
        "Trade Direction Analysis techniques", 
        "Live Market Decision Making",
        "Price Movement Pattern Recognition"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      duration: "2 weeks intensive"
    },
    {
      title: "Technical Analysis Mastery", 
      description: "Master chart patterns, indicators, and market psychology",
      features: [
        "Candlestick Pattern Recognition",
        "Line Chart Analysis methods",
        "Gann Theory practical application",
        "Trading Psychology mastery"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500", 
      duration: "2 weeks intensive"
    },
    {
      title: "Options Trading Strategies",
      description: "Simple, low-risk strategies very popular in the Indian market",
      features: [
        "Step-by-step Options process",
        "Risk Limitation techniques",
        "Profit Maximization strategies",
        "Advanced Options combinations"
      ],
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      duration: "1.5 weeks intensive"
    },
    {
      title: "Trading System Creation",
      description: "Learn to create your own profitable trading systems",
      features: [
        "Personal Trading Plan development",
        "Stock Analysis methodologies", 
        "System Backtesting techniques",
        "Portfolio Management strategies"
      ],
      icon: Target,
      color: "from-orange-500 to-red-500",
      duration: "1.5 weeks intensive"
    }
  ]

  const uniqueFeatures = [
    {
      icon: Users,
      title: "Lifetime Mentorship",
      description: "Ongoing support and guidance even after course completion",
      value: "Priceless Support"
    },
    {
      icon: TrendingUp,
      title: "Live Market Training",
      description: "Real-time market analysis and live trading sessions",
      value: "Hands-on Learning"
    },
    {
      icon: BookOpen,
      title: "Marathi & English Teaching",
      description: "Taught in both languages for complete understanding",
      value: "Local Advantage"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "87% student success rate with verified results",
      value: "Guaranteed Quality"
    },
    {
      icon: Shield,
      title: "Risk Management Focus",
      description: "Learn to protect your capital while maximizing profits",
      value: "Capital Protection"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Recorded sessions available for lifetime access",
      value: "Learn at Your Pace"
    }
  ]

  const learningOutcomes = [
    "Master all major trading strategies used by professionals",
    "Develop your own profitable trading system",
    "Learn risk management to protect your capital", 
    "Understand market psychology and emotional control",
    "Create multiple income streams from stock market",
    "Join exclusive community of successful traders",
    "Get lifetime access to mentor support",
    "Receive regular market updates and stock tips"
  ]

  const successMetrics = [
    { label: "Students Trained", value: "25,000+", description: "Since 2017" },
    { label: "Success Rate", value: "87%", description: "Become profitable" },
    { label: "Average Returns", value: "15-25%", description: "Annual student returns" },
    { label: "Institute Rating", value: "5.0/5", description: "Google reviews" }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Complete{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Stock Market Mastery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive trading education at Maharashtra's premier institute covering all aspects from basics to advanced strategies. 
            Everything you need to become a successful trader in our complete program.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-light text-blue-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{metric.label}</div>
                <div className="text-gray-500 text-xs">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
            What You'll <span className="text-blue-600 font-medium">Master</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {courseModules.map((module, index) => {
              const Icon = module.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{module.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {module.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Unique Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
            Why Our Institute is <span className="text-blue-600 font-medium">Different</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
                    {feature.value}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
              By the End of Our Program, You Will <span className="text-blue-600 font-medium">Achieve</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Success Guarantee</h4>
                <p className="text-green-700 text-sm mb-4">
                  87% of our students become consistently profitable within 6 months. 
                  Join thousands who have already transformed their financial lives.
                </p>
                <div className="text-green-600 font-semibold">
                  ✅ Lifetime Support ✅ Proven Methods ✅ Real Results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Investment */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Transform Your Financial Future{' '}
              <span className="text-yellow-300 font-medium">Today</span>
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Don't let another day pass wondering "what if." Join the institute that has already 
              helped 25,000+ students achieve financial freedom through smart trading.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg py-4 px-6 rounded-xl transition-colors">
                Join Our Institute Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-6 rounded-xl transition-colors">
                Call for Institute Details
              </button>
            </div>
            
            <div className="text-blue-200 text-sm space-y-1">
              <div>📞 Need help choosing? Call +91-7066334499 for free consultation</div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Start your institute journey - flexible learning options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}