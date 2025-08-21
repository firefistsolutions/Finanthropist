import React from 'react'
import { Button } from '@/components/ui/button'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { AnimatedCounter } from './AnimatedCounter'
import { useHomeData } from '@/hooks/useHomeData'

export const HeroSection: React.FC = () => {
  const [heroRef, heroInView] = useInView(0.2)
  const { homeData } = useHomeData()

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${getAnimationClasses(heroInView)}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
            {homeData.heroSection?.title || 'Professional Financial Services & Trading Excellence'}
          </h1>             
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {homeData.heroSection?.subtitle || 'Transform your financial future with expert portfolio management, advanced trading strategies, and comprehensive financial advisory services. Join 25,000+ satisfied clients who trust our proven track record.'}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">{homeData.heroSection?.ctaText || 'Start Your Financial Journey'}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" className="border-2 bg-blue-600 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm transition-all duration-300">
              Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {homeData.heroSection?.stats?.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000`} 
                style={getStaggerDelay(index + 2, 200)}
              >
                <div className="text-2xl md:text-3xl font-light text-blue-300 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={1000 + index * 200} />
                </div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}