import React from 'react'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { services } from '../mockData/services'
import { getServiceGradient } from '../helpers/gradients'

export const ServicesStructure: React.FC = () => {
  const [servicesRef, servicesInView] = useInView(0.3)

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
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                style={getStaggerDelay(index, 200)}
              >
                <div className="mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getServiceGradient(service.id)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div dangerouslySetInnerHTML={{ __html: service.icon }} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-r ${getServiceGradient(service.id)} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center">
                    <button className={`bg-gradient-to-r ${getServiceGradient(service.id)} hover:shadow-lg text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}