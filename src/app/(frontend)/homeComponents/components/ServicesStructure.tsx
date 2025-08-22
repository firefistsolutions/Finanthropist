import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Percentage distribution configuration - modify these values to adjust layout proportions
const PERCENTAGE_DISTRIBUTION = {
  // Section layout distribution
  sectionHeader: 0.25,    // 25% - Section title and description area
  cardsArea: 0.75,        // 75% - Cards container area
  individualCard: 0.7,    // 70% - Height of each card within cards area
  
  // Typography percentages (relative to section height)
  titleFont: 0.08,        // 8% - Main section title font size
  subtitleFont: 0.04,     // 4% - Section description font size
  cardTitleFont: 0.036,   // 3.6% - Card title font size
  cardTextFont: 0.03,     // 3% - Card description and features font size
  
  // Element sizing percentages
  cardWidth: 0.7,         // 70% - Card width relative to section height
  cardPadding: 0.025,     // 2.5% - Internal card padding
  iconSize: 0.1,          // 10% - Service icon container size
  checkmarkSize: 0.025,   // 2.5% - Feature checkmark size
  
  // Spacing percentages
  gap: 0.1,               // 10% - Gap between cards
  margins: 0.02,          // 2% - General margins between elements
  smallMargins: 0.015,    // 1.5% - Small margins for tight spacing
  microMargins: 0.01,     // 1% - Micro margins for minimal spacing
}

// Configuration object combining percentages with responsive settings and fallbacks
const HEIGHT_DISTRIBUTION = {
  ...PERCENTAGE_DISTRIBUTION,
  
  // Responsive card visibility settings
  desktop: {
    cardsVisible: 2,      // Show 2 cards simultaneously on desktop
    minCardWidth: 280     // Minimum card width (px)
  },
  tablet: {
    cardsVisible: 1.5,    // Show 1.5 cards simultaneously on tablet
    minCardWidth: 240     // Minimum card width (px)
  },
  mobile: {
    cardsVisible: 1,      // Show 1 card on mobile (vertical layout)
    minCardWidth: 200     // Minimum card width (px)
  },
  
  // Minimum size fallbacks (px) - used when percentage calculations are too small
  minTitleFont: 16,       // Minimum title font size
  minSubtitleFont: 12,    // Minimum subtitle font size
  minCardFont: 11,        // Minimum card text font size
  minCardWidth: 280,      // Minimum card width fallback
  minPadding: 16,         // Minimum padding fallback
  minIconSize: 32,        // Minimum icon size fallback
  minCheckmark: 12,       // Minimum checkmark size fallback
  minGap: 12              // Minimum gap fallback
}

export const ServicesStructure: React.FC = () => {
  const [headerRef, headerInView] = useInView(0.3)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [sectionHeight, setSectionHeight] = useState('100vh')
  const { homeData } = useHomeData()

  // Calculate section height based on header height and device type
  useEffect(() => {
    const calculateSectionHeight = () => {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      const isMobile = window.innerWidth < 768
      
      if (isMobile) {
        // For mobile, use auto height for vertical scrolling
        setSectionHeight('auto')
      } else {
        // For desktop/tablet, use full viewport minus header
        const availableHeight = window.innerHeight - headerHeight
        setSectionHeight(`${availableHeight}px`)
      }
    }

    calculateSectionHeight()
    window.addEventListener('resize', calculateSectionHeight)
    return () => window.removeEventListener('resize', calculateSectionHeight)
  }, [])
  
  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current || !homeData.services?.length) return
    
    const services = homeData.services
    
    // GSAP responsive setup using ScrollTrigger.matchMedia
    const mm = gsap.matchMedia()
    
    // Desktop (1025px and above)
    mm.add("(min-width: 1025px)", () => {
      const totalCards = services.length
      const cardsVisible = HEIGHT_DISTRIBUTION.desktop.cardsVisible
      const cardWidth = Math.max(
        HEIGHT_DISTRIBUTION.cardWidth * parseFloat(sectionHeight), 
        HEIGHT_DISTRIBUTION.desktop.minCardWidth
      )
      const gap = Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.gap, HEIGHT_DISTRIBUTION.minGap)
      
      // Calculate scroll distance to reach end perfectly
      const totalWidth = (cardWidth + gap) * totalCards - gap
      const containerPadding = 64 // px-8 lg:px-8 = 32px each side
      const viewportWidth = window.innerWidth - containerPadding
      const scrollDistance = totalWidth - viewportWidth
      
      if (scrollDistance > 0) {
        const scrollTween = gsap.to(cardsContainerRef.current, {
          x: -scrollDistance,
          ease: 'none'
        })

        // Calculate header + marquee height dynamically
        const getHeaderHeight = () => {
          const header = document.querySelector('header')
          return header ? header.offsetHeight : 0
        }

        const headerHeight = getHeaderHeight()
        const startPosition = `top ${headerHeight}px`

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: startPosition,
          end: () => `+=${window.innerHeight * 1.5}`,
          pin: true,
          scrub: 1,
          animation: scrollTween,
          anticipatePin: 1,
          refreshPriority: -1,
          markers: true
        })
      }
    })
    
    // Tablet (768px to 1024px)
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      const totalCards = services.length
      const cardsVisible = HEIGHT_DISTRIBUTION.tablet.cardsVisible
      const cardWidth = Math.max(
        HEIGHT_DISTRIBUTION.cardWidth * parseFloat(sectionHeight), 
        HEIGHT_DISTRIBUTION.tablet.minCardWidth
      )
      const gap = Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.gap, HEIGHT_DISTRIBUTION.minGap)
      
      // Calculate scroll distance to reach end perfectly
      const totalWidth = (cardWidth + gap) * totalCards - gap
      const containerPadding = 48 // px-6 md:px-6 = 24px each side
      const viewportWidth = window.innerWidth - containerPadding
      const scrollDistance = totalWidth - viewportWidth
      
      if (scrollDistance > 0) {
        const scrollTween = gsap.to(cardsContainerRef.current, {
          x: -scrollDistance,
          ease: 'none'
        })

        // Calculate header + marquee height dynamically for tablet
        const getHeaderHeight = () => {
          const header = document.querySelector('header')
          return header ? header.offsetHeight : 0
        }

        const headerHeight = getHeaderHeight()
        const startPosition = `top ${headerHeight}px`

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: startPosition,
          end: () => `+=${window.innerHeight * 1.2}`,
          pin: true,
          scrub: 1,
          animation: scrollTween,
          anticipatePin: 1,
          refreshPriority: -1,
          markers: true
        })
      }
    })

    // Mobile (below 768px) - no horizontal scroll
    mm.add("(max-width: 767px)", () => {
      // Reset any transforms for mobile - simple vertical scroll only
      gsap.set(cardsContainerRef.current, { x: 0, clearProps: "all" })
    })

    // Cleanup function
    return () => {
      mm.revert() // This will kill all animations and ScrollTriggers created by matchMedia
    }
  }, [homeData.services, animationKey])

  const resetAnimation = () => {
    // First kill all existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === sectionRef.current) {
        trigger.kill()
      }
    })
    
    // Reset transforms
    if (cardsContainerRef.current) {
      gsap.set(cardsContainerRef.current, { x: 0 })
    }
    
    // Trigger useEffect rerun
    setAnimationKey(prev => prev + 1)
  }

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col relative"
      style={{ 
        height: sectionHeight === 'auto' ? 'auto' : sectionHeight,
        minHeight: sectionHeight === 'auto' ? '100vh' : 'unset',
        paddingTop: sectionHeight === 'auto' ? '2rem' : '0',
        paddingBottom: sectionHeight === 'auto' ? '2rem' : '0'
      }}
    >
      {/* Debug Reset Button - Absolute positioned */}
      <button 
        onClick={resetAnimation}
        className="absolute top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 shadow-lg"
      >
        🔄 Reset
      </button>

      {/* Section Header */}
      <div ref={headerRef} className="flex items-center justify-center flex-shrink-0" style={{ 
        height: sectionHeight === 'auto' ? 'auto' : `${parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.sectionHeader}px`,
        paddingTop: sectionHeight === 'auto' ? '1rem' : '0',
        paddingBottom: sectionHeight === 'auto' ? '1rem' : '0'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${getAnimationClasses(headerInView)}`}>
              <h2 
                className="font-light text-gray-800 leading-none mb-1"
                style={{ 
                  fontSize: sectionHeight === 'auto' ? '2rem' : `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.titleFont, HEIGHT_DISTRIBUTION.minTitleFont)}px`,
                  lineHeight: '1.1'
                }}
              >
                Comprehensive Financial{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Services
                </span>
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto leading-tight"
                style={{ 
                  fontSize: sectionHeight === 'auto' ? '1rem' : `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.subtitleFont, HEIGHT_DISTRIBUTION.minSubtitleFont)}px`,
                  lineHeight: '1.2'
                }}
              >
                Complete financial solutions tailored to your investment goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="relative overflow-hidden" style={{ 
        height: sectionHeight === 'auto' ? 'auto' : `${parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardsArea}px`,
        flex: sectionHeight === 'auto' ? '1' : 'unset'
      }}>
        <div className="h-full flex items-center">
          <div 
            ref={cardsContainerRef}
            className="flex px-4 md:px-6 lg:px-8"
            style={{ 
              width: 'max-content'
              // Gap is set via marginRight on each card
            }}
          >
            {homeData.services?.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group flex-shrink-0"
                style={{ 
                  width: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardWidth, HEIGHT_DISTRIBUTION.minCardWidth)}px`,
                  height: `${parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.individualCard}px`,
                  padding: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardPadding, HEIGHT_DISTRIBUTION.minPadding)}px`,
                  marginRight: index < homeData.services.length - 1 ? `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.gap, HEIGHT_DISTRIBUTION.minGap)}px` : '0'
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Card Header */}
                  <div style={{ marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.margins, HEIGHT_DISTRIBUTION.minGap)}px` }}>
                    <div 
                      className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        width: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.iconSize, HEIGHT_DISTRIBUTION.minIconSize)}px`,
                        height: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.iconSize, HEIGHT_DISTRIBUTION.minIconSize)}px`,
                        marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px`
                      }}
                    >
                      <span style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.iconSize * 0.3), 14)}px` }}>
                        {service.icon}
                      </span>
                    </div>
                    <h3 
                      className="font-semibold text-gray-800 leading-tight"
                      style={{ 
                        fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTitleFont, HEIGHT_DISTRIBUTION.minCardFont)}px`,
                        marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.microMargins, 6)}px`,
                        lineHeight: '1.2'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-gray-600 leading-tight line-clamp-2"
                      style={{ 
                        fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px`,
                        lineHeight: '1.3'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div 
                    className="flex-1"
                    style={{ 
                      marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.margins, HEIGHT_DISTRIBUTION.minGap)}px`,
                      gap: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 6)}px`,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {service.features?.slice(0, 3).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start"
                        style={{ gap: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px` }}
                      >
                        <div 
                          className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center flex-shrink-0`}
                          style={{
                            width: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.checkmarkSize, HEIGHT_DISTRIBUTION.minCheckmark)}px`,
                            height: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.checkmarkSize, HEIGHT_DISTRIBUTION.minCheckmark)}px`,
                            marginTop: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.microMargins * 0.8), 2)}px`
                          }}
                        >
                          <svg 
                            className="text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ 
                              width: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.checkmarkSize * 0.6), 8)}px`,
                              height: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.checkmarkSize * 0.6), 8)}px`
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span 
                          className="text-gray-700 leading-tight"
                          style={{ 
                            fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px`,
                            lineHeight: '1.3'
                          }}
                        >
                          {feature.feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <div 
                    className="border-t border-gray-100"
                    style={{ paddingTop: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px` }}
                  >
                    <button 
                      className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} hover:shadow-lg text-white rounded-full font-medium w-full transition-all duration-300 transform hover:scale-105`}
                      style={{
                        padding: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px ${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardPadding, HEIGHT_DISTRIBUTION.minGap)}px`,
                        fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px`
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback - vertical scrolling cards */}
        <div className="md:hidden h-full flex items-center justify-center">
          <div className="flex flex-col gap-4 px-4 py-4 overflow-y-auto scrollbar-hide w-full max-w-sm">
            {homeData.services?.map((service, index) => (
              <div 
                key={`mobile-${index}`}
                className="bg-white rounded-xl p-4 shadow-lg w-full"
                style={{ 
                  minHeight: '200px'
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-lg flex items-center justify-center mb-3`}>
                      <span className="text-lg">{service.icon}</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4 flex-1">
                    {service.features?.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className={`w-4 h-4 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature.feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} text-white px-4 py-2 rounded-full font-medium text-sm w-full transition-all duration-300 hover:shadow-lg`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}