import React from 'react'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { AnimatedCounter } from './AnimatedCounter'
import { mainStats } from '../mockData/stats'

export const EducationStats: React.FC = () => {
  const [statsRef, statsInView] = useInView(0.3)

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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mainStats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 group`}
                style={getStaggerDelay(index, 100)}
              >
                <div className="text-4xl md:text-5xl font-light text-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={500 + index * 100} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}