'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { createSplitText } from './SplitText'
import { useHomeData } from '@/hooks/useHomeData'

interface AnimatedHeroProps {
  className?: string
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { homeData } = useHomeData()
  const heroSection = homeData.heroSection

  useEffect(() => {
    const initAnimation = async () => {
      if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !statsRef.current) return

      // Wait for fonts to load
      await document.fonts.ready

      // Detect screen size for responsive animations
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches
      const isDesktop = window.matchMedia('(min-width: 1025px)').matches

      // Set initial visibility
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { opacity: 1 })
      
      // Split text for title
      const titleSplit = createSplitText(titleRef.current, {
        type: 'words,lines',
        linesClass: 'split-line',
        wordsClass: 'split-word'
      })

      // Split text for subtitle
      const subtitleSplit = createSplitText(subtitleRef.current, {
        type: 'words,lines',
        linesClass: 'split-line-sub',
        wordsClass: 'split-word-sub'
      })

      // Set initial states
      gsap.set(titleSplit.lines, { overflow: 'hidden' })
      gsap.set(subtitleSplit.lines, { overflow: 'hidden' })
      
      gsap.set(titleSplit.words, { yPercent: 100, opacity: 0 })
      gsap.set(subtitleSplit.words, { yPercent: 100, opacity: 0 })
      gsap.set(ctaRef.current, { scale: 0.8, opacity: 0 })
      gsap.set(statsRef.current.children, { y: 50, opacity: 0 })

      // Responsive animation settings
      let animationSettings = {
        titleDuration: 0.8,
        titleStagger: 0.1,
        subtitleDuration: 0.6,
        subtitleStagger: 0.05,
        ctaDuration: 0.6,
        statsDuration: 0.8,
        statsStagger: 0.15,
        subtitleDelay: "-=0.4",
        ctaDelay: "-=0.3",
        statsDelay: "-=0.2"
      }

      if (isMobile) {
        // Faster, simpler animations for mobile
        animationSettings = {
          titleDuration: 0.6,
          titleStagger: 0.08,
          subtitleDuration: 0.3,
          subtitleStagger: 0.04,
          ctaDuration: 0.5,
          statsDuration: 0.6,
          statsStagger: 0.1,
          subtitleDelay: "-=0.3",
          ctaDelay: "-=0.25",
          statsDelay: "-=0.15"
        }
      } else if (isTablet) {
        // Medium-paced animations for tablet
        animationSettings = {
          titleDuration: 0.7,
          titleStagger: 0.09,
          subtitleDuration: 0.55,
          subtitleStagger: 0.045,
          ctaDuration: 0.55,
          statsDuration: 0.7,
          statsStagger: 0.12,
          subtitleDelay: "-=0.35",
          ctaDelay: "-=0.28",
          statsDelay: "-=0.18"
        }
      }

      // Create master timeline with responsive settings
      const tl = gsap.timeline()

      // Animate title words
      tl.to(titleSplit.words, {
        duration: animationSettings.titleDuration,
        yPercent: 0,
        opacity: 1,
        stagger: animationSettings.titleStagger,
        ease: "expo.out"
      })
      
      // Animate subtitle words
      .to(subtitleSplit.words, {
        duration: animationSettings.subtitleDuration,
        yPercent: 0,
        opacity: 1,
        stagger: animationSettings.subtitleStagger,
        ease: "expo.out"
      }, animationSettings.subtitleDelay)
      
      // Animate CTA button
      .to(ctaRef.current, {
        duration: animationSettings.ctaDuration,
        scale: 1,
        opacity: 1,
        ease: isMobile ? "power2.out" : "back.out(1.7)"
      }, animationSettings.ctaDelay)
      
      // Animate stats
      .to(statsRef.current.children, {
        duration: animationSettings.statsDuration,
        y: 0,
        opacity: 1,
        stagger: animationSettings.statsStagger,
        ease: "expo.out"
      }, animationSettings.statsDelay)

      setIsLoaded(true)

      // Cleanup function
      return () => {
        titleSplit.revert()
        subtitleSplit.revert()
        tl.kill()
      }
    }

    initAnimation()
  }, [])

  const replayAnimation = () => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !statsRef.current) return

    // Detect screen size for responsive replay animations
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const isTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches

    // Re-split and animate
    const titleSplit = createSplitText(titleRef.current, {
      type: 'words,lines',
      linesClass: 'split-line',
      wordsClass: 'split-word'
    })

    const subtitleSplit = createSplitText(subtitleRef.current, {
      type: 'words,lines',
      linesClass: 'split-line-sub',
      wordsClass: 'split-word-sub'
    })

    // Set initial states
    gsap.set(titleSplit.lines, { overflow: 'hidden' })
    gsap.set(subtitleSplit.lines, { overflow: 'hidden' })
    gsap.set(titleSplit.words, { yPercent: 100, opacity: 0 })
    gsap.set(subtitleSplit.words, { yPercent: 100, opacity: 0 })
    gsap.set(ctaRef.current, { scale: 0.8, opacity: 0 })
    gsap.set(statsRef.current.children, { y: 50, opacity: 0 })

    // Responsive replay settings (slower than initial for better observation)
    let replaySettings = {
      titleDuration: 1.2,
      titleStagger: 0.15,
      subtitleDuration: 0.9,
      subtitleStagger: 0.08,
      ctaDuration: 0.9,
      statsDuration: 1.0,
      statsStagger: 0.2,
      subtitleDelay: "-=0.6",
      ctaDelay: "-=0.4",
      statsDelay: "-=0.3"
    }

    if (isMobile) {
      // Faster replay for mobile
      replaySettings = {
        titleDuration: 0.8,
        titleStagger: 0.12,
        subtitleDuration: 0.7,
        subtitleStagger: 0.06,
        ctaDuration: 0.7,
        statsDuration: 0.8,
        statsStagger: 0.15,
        subtitleDelay: "-=0.4",
        ctaDelay: "-=0.3",
        statsDelay: "-=0.2"
      }
    } else if (isTablet) {
      // Medium replay for tablet
      replaySettings = {
        titleDuration: 1.0,
        titleStagger: 0.13,
        subtitleDuration: 0.8,
        subtitleStagger: 0.07,
        ctaDuration: 0.8,
        statsDuration: 0.9,
        statsStagger: 0.18,
        subtitleDelay: "-=0.5",
        ctaDelay: "-=0.35",
        statsDelay: "-=0.25"
      }
    }

    // Replay timeline with responsive settings
    const replayTl = gsap.timeline()

    replayTl.to(titleSplit.words, {
      duration: replaySettings.titleDuration,
      yPercent: 0,
      opacity: 1,
      stagger: replaySettings.titleStagger,
      ease: "expo.out"
    })
    .to(subtitleSplit.words, {
      duration: replaySettings.subtitleDuration,
      yPercent: 0,
      opacity: 1,
      stagger: replaySettings.subtitleStagger,
      ease: "expo.out"
    }, replaySettings.subtitleDelay)
    .to(ctaRef.current, {
      duration: replaySettings.ctaDuration,
      scale: 1,
      opacity: 1,
      ease: isMobile ? "power2.out" : "back.out(1.7)"
    }, replaySettings.ctaDelay)
    .to(statsRef.current.children, {
      duration: replaySettings.statsDuration,
      y: 0,
      opacity: 1,
      stagger: replaySettings.statsStagger,
      ease: "expo.out"
    }, replaySettings.statsDelay)
  }

  return (
    <div ref={heroRef} className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pt-32 md:pt-28 ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 opacity-0"
            style={{ lineHeight: '1.1' }}
          >
            {heroSection?.title || 'Professional Financial Services & Trading Excellence'}
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto opacity-0 leading-relaxed"
          >
            {heroSection?.subtitle || 'Transform your financial future with expert portfolio management, advanced trading strategies, and comprehensive financial advisory services. Join 25,000+ satisfied clients who trust our proven track record.'}
          </p>

          {/* CTA Button */}
          <button 
            ref={ctaRef}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl opacity-0 mb-12"
          >
            <span className="mr-3">🚀</span>
            {heroSection?.ctaText || 'Start Your Financial Journey'}
          </button>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {heroSection?.stats?.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 opacity-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            )) || [
              // Fallback stats
              <div key="students" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 opacity-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">25K+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Students Trained</div>
              </div>,
              <div key="success" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 opacity-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Success Rate</div>
              </div>,
              <div key="experience" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 opacity-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Years Experience</div>
              </div>,
              <div key="portfolio" className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 opacity-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-2">500Cr+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Portfolio Value</div>
              </div>
            ]}
          </div>

          {/* Replay Button */}
          {isLoaded && (
            <button
              onClick={replayAnimation}
              className="mt-8 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              🔄 Replay Animation
            </button>
          )}
        </div>
      </div>

      {/* Custom CSS for split text */}
      <style jsx>{`
        .split-line,
        .split-line-sub {
          overflow: hidden;
        }
        
        .split-word,
        .split-word-sub {
          display: inline-block;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default AnimatedHero