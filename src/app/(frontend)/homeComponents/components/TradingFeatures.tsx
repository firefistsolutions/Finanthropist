import React, { useState, useEffect } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

export const TradingFeatures: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.3)
  const [activeFeature, setActiveFeature] = useState(0)
  const [orderValue, setOrderValue] = useState(125000)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4)
      setOrderValue(prev => prev + (Math.random() - 0.5) * 10000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: 'Expert Market Analysis',
      description: 'Get detailed market insights and technical analysis from our experienced trading professionals.',
      icon: '📈',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Personalized Trading Strategies',
      description: 'Customized trading approaches tailored to your risk profile and financial goals.',
      icon: '🎯',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Risk Management Guidance',
      description: 'Professional advice on portfolio management and risk mitigation strategies.',
      icon: '🛡️',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Lifetime Support',
      description: 'Ongoing support and guidance throughout your trading journey with 24/7 expert assistance.',
      icon: '⏰',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Professional Trading{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert financial guidance, strategic trading insights, and comprehensive market education to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
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

            <div className={`transition-all duration-1000 delay-200 ${getAnimationClasses(sectionInView)}`}>
              <div className="relative">
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
                          <div className="text-sm text-gray-300">Today's Outlook</div>
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
      </div>
    </section>
  )
}