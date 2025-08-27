'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  color: string
}

// Animation utilities (replicated from old version)
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const adjustedThreshold = isMobile ? Math.min(threshold, 0.1) : Math.min(threshold, 0.2)
    const rootMargin = isMobile ? '20px 0px -5% 0px' : '50px 0px -10% 0px'
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIsInView(entry.isIntersecting), 50)
      },
      { 
        threshold: adjustedThreshold,
        rootMargin: rootMargin
      }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

const getAnimationClasses = (inView: boolean, baseClasses = 'opacity-0 translate-y-2') => 
  inView ? 'opacity-100 translate-y-0' : baseClasses

const getStaggerDelay = (index: number, baseDelay = 200) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const adjustedDelay = isMobile ? Math.min(baseDelay, 150) : baseDelay
  return {
    transitionDelay: `${index * adjustedDelay}ms`
  }
}

export default function CourseHeroSection() {
  const [heroRef, heroInView] = useInView(0.3)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const initAnimation = async () => {
      if (!titleRef.current || !subtitleRef.current || !statsRef.current) return

      await document.fonts.ready

      const isMobile = window.matchMedia('(max-width: 768px)').matches
      
      // Set initial visibility
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 1 })
      
      // Create entrance animation
      const tl = gsap.timeline({ delay: 0.5 })
      
      // Animate title words
      tl.from(titleRef.current.querySelectorAll('.title-word'), {
        y: 100,
        opacity: 0,
        duration: isMobile ? 0.8 : 1.2,
        stagger: isMobile ? 0.1 : 0.15,
        ease: 'power3.out'
      })
      
      // Animate subtitle
      tl.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5')
      
      // Animate stats
      tl.from(statsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.3')
      
      setIsLoaded(true)
    }

    initAnimation()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${getAnimationClasses(heroInView)}`}>
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 
                ref={titleRef}
                className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight opacity-0"
              >
                <span className="title-word inline-block">Master</span>{' '}
                <span className="title-word inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-medium">Share Market</span>{' '}
                <span className="title-word inline-block">Trading</span>
              </h1>
              <p 
                ref={subtitleRef}
                className="text-xl text-blue-100 leading-relaxed max-w-2xl opacity-0"
              >
                Learn from Maharashtra&apos;s most trusted stock market educator with 23+ years experience. Transform your financial future with practical trading education.
              </p>
            </div>

            {/* Key Stats - Old UI Style */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8">
              {([
                { icon: Users, number: "10,000+", label: "Students Trained", color: "from-blue-500 to-purple-500" },
                { icon: Award, number: "23+ Years", label: "Finance Experience", color: "from-emerald-500 to-teal-500" },
                { icon: TrendingUp, number: "HDFC & HSBC", label: "Corporate Background", color: "from-purple-500 to-pink-500" },
                { icon: Clock, number: "Lifetime", label: "Mentorship", color: "from-orange-500 to-red-500" }
              ] as StatItem[]).map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={`stat-${index}`} 
                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 group"
                    style={getStaggerDelay(index, 100)}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-light text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons - Old Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Enroll in Course Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300">
                Call: +91-7066334499
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2 bg-green-100/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Learn in Marathi & English</span>
              </div>
              <div className="text-sm text-blue-200">
                ✅ Based in Nashik, Maharashtra
              </div>
            </div>
          </div>

          {/* Right Content - Course Preview with Old Elegant Style */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Complete Trading Course</h3>
                  <p className="text-blue-200">Master share market trading with comprehensive education</p>
                </div>

                <div className="space-y-4">
                  {[
                    "Technical Analysis Mastery",
                    "Risk Management Strategies", 
                    "Portfolio Building Techniques",
                    "Options & Derivatives Trading",
                    "Market Psychology & Timing"
                  ].map((topic, index) => (
                    <div key={`topic-${index}`} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-blue-100">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-blue-300">Duration</div>
                      <div className="font-medium text-white">Comprehensive</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Language</div>
                      <div className="font-medium text-white">Marathi & English</div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span>Premium Course</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration - Old Style */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl transform -rotate-3"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
    </section>
  )
}