import React from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'

export const FinalCTA: React.FC = () => {
  const [ctaRef, ctaInView] = useInView(0.3)
  const { homeData } = useHomeData()
  const finalCTA = homeData.finalCTA

  return (
    <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${getAnimationClasses(ctaInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              {finalCTA?.title?.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                {finalCTA?.title?.split(' ').slice(-2).join(' ') || 'Financial Future?'}
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {finalCTA?.subtitle || 'Join thousands of successful investors who trust Sameer Sarang for comprehensive financial guidance. Start your wealth creation journey today with a personalized consultation.'}
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="mr-3">{finalCTA?.primaryCTAText || 'Book Free Consultation'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-5 rounded-full text-xl font-medium backdrop-blur-sm transition-all duration-300">
                  {finalCTA?.secondaryCTAText || 'Call +91 98765 43210'}
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                {finalCTA?.features?.map((feature, index) => {
                  const colors = [
                    'from-blue-500 to-purple-500',
                    'from-emerald-500 to-teal-500',  
                    'from-purple-500 to-pink-500'
                  ]
                  return (
                    <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-blue-100">{feature.description}</p>
                    </div>
                  )
                }) || (
                  // Fallback static content
                  <>
                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                      <p className="text-blue-100">No commitment, just expert guidance on your financial goals</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Certified Advisor</h3>
                      <p className="text-blue-100">Professional and certified investment advisory services</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👥</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">1000+ Clients</h3>
                      <p className="text-blue-100">Trusted by thousands of successful investors</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}