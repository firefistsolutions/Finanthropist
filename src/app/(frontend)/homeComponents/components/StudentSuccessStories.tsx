import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'
import { getGradient } from '../helpers/gradients'

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
  cardTextFont: 0.03,     // 3% - Card text and details font size
  
  // Element sizing percentages
  cardWidth: 0.7,         // 70% - Card width relative to section height
  cardPadding: 0.025,     // 2.5% - Internal card padding
  avatarSize: 0.08,       // 8% - Avatar/profile picture size
  
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
  minAvatarSize: 32,      // Minimum avatar size fallback
  minGap: 12              // Minimum gap fallback
}

export const StudentSuccessStories: React.FC = () => {
  const [headerRef, headerInView] = useInView(0.3)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [sectionHeight, setSectionHeight] = useState('100vh')
  const { homeData, isStatic, isFetching } = useHomeData()
  const successStories = homeData.successStories

  // Log when data changes for verification
  useEffect(() => {
    console.log('🔄 StudentSuccessStories data updated:', {
      storiesCount: successStories?.length,
      isStatic,
      isFetching,
      firstStoryName: successStories?.[0]?.name,
      dataSource: isStatic ? 'Mock Data' : 'Real Database Data'
    })
  }, [successStories, isStatic, isFetching])

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
    if (!sectionRef.current || !cardsContainerRef.current || !successStories?.length) return
    
    // GSAP responsive setup using ScrollTrigger.matchMedia
    const mm = gsap.matchMedia()
    
    // Desktop (1025px and above)
    mm.add("(min-width: 1025px)", () => {
      const totalCards = successStories.length
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
          // markers: true
        })
      }
    })
    
    // Tablet (768px to 1024px)
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      const totalCards = successStories.length
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
          // markers: true
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
  }, [successStories, animationKey, sectionHeight])

  //   // const resetAnimation = () => {
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
  // }

  return (
    <section 
      id="success-stories" 
      ref={sectionRef} 
      className="bg-gradient-to-br from-white to-slate-50 flex flex-col relative"
      style={{ 
        height: sectionHeight === 'auto' ? 'auto' : sectionHeight,
        minHeight: sectionHeight === 'auto' ? '100vh' : 'unset',
        paddingTop: sectionHeight === 'auto' ? '2rem' : '0',
        paddingBottom: sectionHeight === 'auto' ? '2rem' : '0'
      }}
    >
      {/* Debug Reset Button - Absolute positioned */}
      {/* <button 
        onClick={resetAnimation}
        className=" absolute top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 shadow-lg"
      >
        🔄 Reset
      </button> */}

      {/* Data Status Indicator */}
      {/* <div className=" absolute top-4 left-4 z-50 flex items-center gap-2">
        <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
          isStatic 
            ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' 
            : 'bg-green-100 text-green-800 border border-green-300'
        }`}>
          {isStatic ? '📄 Mock Data' : '🗄️ Real Data'}
        </div>
        {isFetching && (
          <div className="bg-blue-100 text-blue-800 border border-blue-300 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            🔄 Fetching...
          </div>
        )}
        <div className="bg-gray-100 text-gray-700 border border-gray-300 px-2 py-1 rounded-full text-xs">
          {successStories?.length || 0} stories
        </div>
      </div> */}

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
                Client Success{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Stories
                </span>
              </h2>
              <p 
                className="text-gray-600 max-w-2xl mx-auto leading-tight"
                style={{ 
                  fontSize: sectionHeight === 'auto' ? '1rem' : `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.subtitleFont, HEIGHT_DISTRIBUTION.minSubtitleFont)}px`,
                  lineHeight: '1.2'
                }}
              >
                Real transformations from our clients who achieved their financial goals through our personalized guidance and proven strategies.
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
        <div className="h-full md:flex items-center hidden">
          <div 
            ref={cardsContainerRef}
            className="flex px-4 md:px-6 lg:px-8"
            style={{ 
              width: 'max-content'
              // Gap is set via marginRight on each card
            }}
          >
            {successStories?.map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group flex-shrink-0"
                style={{ 
                  width: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardWidth, HEIGHT_DISTRIBUTION.minCardWidth)}px`,
                  height: `${parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.individualCard}px`,
                  padding: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardPadding, HEIGHT_DISTRIBUTION.minPadding)}px`,
                  marginRight: index < successStories.length - 1 ? `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.gap, HEIGHT_DISTRIBUTION.minGap)}px` : '0'
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Card Header */}
                  <div style={{ marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.margins, HEIGHT_DISTRIBUTION.minGap)}px` }}>
                    <div className="flex items-center" style={{ gap: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px`, marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px` }}>
                      <div 
                        className={`bg-gradient-to-r ${getGradient(story.background)} rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300`}
                        style={{
                          width: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.avatarSize, HEIGHT_DISTRIBUTION.minAvatarSize)}px`,
                          height: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.avatarSize, HEIGHT_DISTRIBUTION.minAvatarSize)}px`,
                          fontSize: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.avatarSize * 0.4), 12)}px`
                        }}
                      >
                        {story.avatar || story.name.charAt(0)}
                      </div>
                      <div>
                        <div 
                          className="font-semibold text-gray-800 leading-tight"
                          style={{ 
                            fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTitleFont, HEIGHT_DISTRIBUTION.minCardFont)}px`,
                            marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.microMargins, 4)}px`
                          }}
                        >
                          {story.name}
                        </div>
                        <div 
                          className="text-gray-600 capitalize leading-tight"
                          style={{ 
                            fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px`,
                            marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.microMargins, 2)}px`
                          }}
                        >
                          {story.profession}
                        </div>
                        <div 
                          className="text-gray-500 leading-tight"
                          style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.cardTextFont * 0.9), HEIGHT_DISTRIBUTION.minCardFont * 0.9)}px` }}
                        >
                          {story.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div 
                    className="flex-1"
                    style={{ marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.margins, HEIGHT_DISTRIBUTION.minGap)}px` }}
                  >
                    <blockquote 
                      className="text-gray-700 italic leading-relaxed line-clamp-3"
                      style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                    >
                      &ldquo;{story.testimonial}&rdquo;
                    </blockquote>
                  </div>
                  
                  {/* Results */}
                  <div 
                    style={{ 
                      marginBottom: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.margins, HEIGHT_DISTRIBUTION.minGap)}px`,
                      gap: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 6)}px`,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-gray-600"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        Portfolio Growth
                      </span>
                      <span 
                        className="font-semibold text-green-600"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        {story.results?.portfolioGrowth}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-gray-600"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        Time Period
                      </span>
                      <span 
                        className="font-semibold text-gray-800"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        {story.results?.timePeriod}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-gray-600"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        Investment Style
                      </span>
                      <span 
                        className="font-semibold text-blue-600"
                        style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.cardTextFont, HEIGHT_DISTRIBUTION.minCardFont)}px` }}
                      >
                        {story.results?.strategy}
                      </span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div 
                    className="border-t border-gray-200"
                    style={{ paddingTop: `${Math.max(parseFloat(sectionHeight) * HEIGHT_DISTRIBUTION.smallMargins, 8)}px` }}
                  >
                    <div className="flex justify-between items-center text-gray-500">
                      <span style={{ fontSize: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.cardTextFont * 0.8), HEIGHT_DISTRIBUTION.minCardFont * 0.8)}px` }}>
                        Client since {story.results?.timePeriod}
                      </span>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="fill-current" 
                            viewBox="0 0 20 20"
                            style={{ 
                              width: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.cardTextFont * 0.7), 10)}px`,
                              height: `${Math.max(parseFloat(sectionHeight) * (HEIGHT_DISTRIBUTION.cardTextFont * 0.7), 10)}px`
                            }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback - vertical scrolling cards */}
        <div className="md:hidden h-full flex items-center justify-center">
          <div className="flex flex-col gap-4 px-4 py-4 overflow-y-auto scrollbar-hide w-full max-w-sm">
            {successStories?.map((story, index) => (
              <div 
                key={`mobile-${index}`}
                className="bg-white rounded-xl p-4 shadow-lg w-full"
                style={{ 
                  minHeight: '220px'
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="mb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getGradient(story.background)} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                        {story.avatar || story.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-1 leading-tight">{story.name}</div>
                        <div className="text-xs text-gray-600 capitalize leading-tight">{story.profession}</div>
                        <div className="text-xs text-gray-500 leading-tight">{story.location}</div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-sm leading-relaxed line-clamp-3 mb-3">
                      &ldquo;{story.testimonial}&rdquo;
                    </blockquote>
                  </div>
                  
                  <div className="space-y-2 mb-3 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Portfolio Growth</span>
                      <span className="font-semibold text-green-600">{story.results?.portfolioGrowth}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Time Period</span>
                      <span className="font-semibold text-gray-800">{story.results?.timePeriod}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Investment Style</span>
                      <span className="font-semibold text-blue-600">{story.results?.strategy}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Client since {story.results?.timePeriod?.split(' ')[0]}</span>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
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