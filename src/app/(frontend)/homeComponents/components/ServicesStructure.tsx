import React from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'

export const ServicesStructure: React.FC = () => {
  const [headerRef, headerInView] = useInView(0.3)
  const { homeData } = useHomeData()

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(headerInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Comprehensive Financial{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financial solutions tailored to your investment goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {homeData.services?.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group p-8"
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div 
                        className={`w-5 h-5 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature.feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Clients Count */}
                {service.clients && (
                  <div className="text-center py-3 bg-gray-50 rounded-lg mb-4">
                    <span className="text-sm font-medium text-gray-600">{service.clients}</span>
                  </div>
                )}
                
                {/* CTA Button */}
                <button 
                  className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} hover:shadow-lg text-white rounded-full font-medium w-full py-3 px-6 transition-all duration-300 transform hover:scale-105 text-sm`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}