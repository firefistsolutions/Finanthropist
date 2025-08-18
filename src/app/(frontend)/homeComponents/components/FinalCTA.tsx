import React from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

export const FinalCTA: React.FC = () => {
  const [ctaRef, ctaInView] = useInView(0.3)

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
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                Financial Future?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful investors who trust Sameer Sarang for comprehensive financial guidance. Start your wealth creation journey today with a personalized consultation.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="mr-3">Book Free Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-5 rounded-full text-xl font-medium backdrop-blur-sm transition-all duration-300">
                  Call +91 98765 43210
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                  <p className="text-blue-100">No commitment, just expert guidance on your financial goals</p>
                </div>
                
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SEBI Registered</h3>
                  <p className="text-blue-100">Regulated and certified investment advisory services</p>
                </div>
                
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">25K+ Clients</h3>
                  <p className="text-blue-100">Trusted by thousands of successful investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}