import React from 'react'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { AnimatedCounter } from './AnimatedCounter'
import { useHomeData } from '@/hooks/useHomeData'

export const EducationStats: React.FC = () => {
  const [statsRef, statsInView] = useInView(0.3)
  const { homeData } = useHomeData()

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(statsInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Trusted by Thousands of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Investors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join the growing community of successful investors who have transformed their financial journey with our expert guidance and proven strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {homeData.mainStats?.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 group`}
                style={getStaggerDelay(index, 100)}
              >
                <div className="text-4xl md:text-5xl font-light text-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} suffix="" delay={500 + index * 100} />
                </div>
                <div className="text-gray-600 font-medium">{stat.metric}</div>
                <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* CTA after showing credibility stats */}
          <div className={`text-center transition-all duration-1000 delay-200 ${getAnimationClasses(statsInView)}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Join 25,000+ Successful Investors</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Start Your Wealth Building Journey Today
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get personalized financial guidance from our expert team and join thousands of clients who have achieved their investment goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Consultation
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}