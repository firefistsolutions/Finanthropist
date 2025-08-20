import React from 'react'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'
import { getServiceGradient } from '../helpers/gradients'

export const ServicesStructure: React.FC = () => {
  const [servicesRef, servicesInView] = useInView(0.3)
  const { homeData } = useHomeData()

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(servicesInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Comprehensive Financial{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From portfolio management to trading education, we provide complete financial solutions tailored to your investment goals and risk profile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {homeData.services?.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                style={getStaggerDelay(index, 200)}
              >
                <div className="mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature.feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <button className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} hover:shadow-lg text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after showing services */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-300 ${getAnimationClasses(servicesInView)}`}>
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Choose Your Financial Growth Path
                </h3>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                  Whether you're a beginner or experienced investor, our comprehensive services are designed to accelerate your wealth building journey with expert guidance every step of the way.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Book Free Strategy Session
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300">
                    Compare Service Plans
                  </button>
                </div>
                <div className="mt-6 flex items-center justify-center space-x-6 text-blue-200 text-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lifetime Support</span>
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