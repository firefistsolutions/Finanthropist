import React from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

export const TrainerProfile: React.FC = () => {
  const [profileRef, profileInView] = useInView(0.3)

  return (
    <section ref={profileRef} className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${getAnimationClasses(profileInView)}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                  Meet{' '}
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                    Sameer Sarang
                  </span>
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed mb-6">
                  With over 23 years of expertise in financial markets, Sameer has guided thousands of investors toward financial success. His practical approach combines traditional investment wisdom with modern market strategies.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">SEBI Registered Investment Advisor</h3>
                    <p className="text-blue-100">Certified and regulated professional with proven track record in portfolio management and financial advisory.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">25,000+ Successful Clients</h3>
                    <p className="text-blue-100">Trusted by investors across Maharashtra for personalized financial guidance and wealth creation strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Author & Educator</h3>
                    <p className="text-blue-100">Published researcher in financial markets with comprehensive educational programs for all investor types.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Book Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300">
                  View Credentials
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center text-blue-100">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-semibold text-white mb-2">Sameer Sarang</div>
                    <div className="text-blue-200">SEBI Registered Investment Advisor</div>
                    <div className="text-blue-200">23+ Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}