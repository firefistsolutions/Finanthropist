import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export const ServicesStructure: React.FC = () => {
  const [headerRef, headerInView] = useInView(0.3)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [animationKey, _setAnimationKey] = useState(0) // Key to trigger animation reset
  const { homeData } = useHomeData()

  // Dynamic grid class based on number of services
  const getGridClass = (serviceCount: number) => {
    if (serviceCount === 1) return 'grid-cols-1'
    if (serviceCount === 2) return 'grid-cols-1 md:grid-cols-2'
    if (serviceCount === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    if (serviceCount === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    // 5 or more services - optimize for 5 per row on large screens
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
  }

  const serviceCount = homeData.services?.length || 0
  const gridClass = getGridClass(serviceCount)

  // Reset animation function
  // const resetAnimation = () => {
  console.log('🔄 Reset button clicked - clearing existing animations')

  // Kill all existing ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === cardsContainerRef.current) {
      trigger.kill()
    }
  })

  // Reset cards back to stacked position (position 0)
  if (cardsContainerRef.current) {
    const cards = cardsContainerRef.current.children

    // First clear all properties
    gsap.set(cards, {
      clearProps: 'all',
    })

    // Wait a frame then re-apply initial stacking
    gsap.delayedCall(0.01, () => {
      // Get original positions after clearing
      const originalPositions = Array.from(cards).map((card) => {
        const element = card as HTMLElement
        return {
          left: element.offsetLeft,
          top: element.offsetTop,
        }
      })

      // Set all cards to first card position (stacked at position 0)
      Array.from(cards).forEach((card, index) => {
        const element = card as HTMLElement
        const deltaX = originalPositions[0].left - originalPositions[index].left
        const deltaY = originalPositions[0].top - originalPositions[index].top

        if (index === 0) {
          // First card stays in place but scaled down
          gsap.set(element, {
            x: 0,
            y: 0,
            scale: 0.9,
            opacity: 1,
            zIndex: cards.length,
            transformOrigin: 'center center',
            force3D: true,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          })
        } else {
          // Other cards move to first card position
          gsap.set(element, {
            x: deltaX,
            y: deltaY,
            scale: 0.9,
            opacity: 0.8,
            zIndex: cards.length - index,
            transformOrigin: 'center center',
            force3D: true,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          })
        }
      })

      console.log('🎯 Cards reset to stacked position')
    })
  }

  //   })
  // }

  // // Trigger useEffect to run again
  // setAnimationKey(prev => prev + 1)
  // }

  const setupAnimation = (
    cardsContainerRef: React.RefObject<HTMLDivElement>,
    homeDataServices: any[], // Adjust type as needed
  ) => {
    console.log('🔍 Animation setup triggered')
    console.log('Container ref:', cardsContainerRef.current)
    console.log('Services data:', homeDataServices?.length)

    if (!cardsContainerRef.current || !homeDataServices?.length) {
      console.log('❌ Animation setup cancelled - missing container or data')
      return
    }

    const cards = cardsContainerRef.current.children
    console.log('📦 Cards found:', cards.length)

    if (cards.length === 0) {
      console.log('❌ No cards found to animate')
      return
    }

    const mm = gsap.matchMedia()

    const getAnimationConfig = (isDesktop: boolean, isTablet: boolean) => {
      if (isDesktop) {
        return {
          initialState: { scale: 0.9, opacity: 0.8 },
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      } else if (isTablet) {
        return {
          initialState: { scale: 0.9, opacity: 0.8 },
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      } else {
        // Mobile
        return {
          initialState: { scale: 1, opacity: 1 },
          duration: 0.5,
          stagger: 0,
          ease: 'power2.out',
        }
      }
    }

    mm.add('(min-width: 1025px)', () => {
      const config = getAnimationConfig(true, false)

      console.log('🎬 Desktop animation setup started')
      console.log('Cards count:', cards.length)

      const originalPositions = Array.from(cards).map((card) => {
        const element = card as HTMLElement
        return {
          left: element.offsetLeft,
          top: element.offsetTop,
        }
      })

      console.log('Original positions:', originalPositions)

      Array.from(cards).forEach((card, index) => {
        const element = card as HTMLElement
        const deltaX = originalPositions[0].left - originalPositions[index].left
        const deltaY = originalPositions[0].top - originalPositions[index].top

        console.log(`Card ${index}:`, {
          original: originalPositions[index],
          target: originalPositions[0],
          delta: { x: deltaX, y: deltaY },
          element: element,
        })

        if (index === 0) {
          gsap.set(element, {
            x: 0,
            y: 0,
            scale: config.initialState.scale,
            opacity: 1,
            zIndex: cards.length,
            transformOrigin: 'center center',
            force3D: true,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            immediateRender: true,
          })
        } else {
          gsap.set(element, {
            x: deltaX,
            y: deltaY,
            scale: config.initialState.scale,
            opacity: config.initialState.opacity,
            zIndex: cards.length - index,
            transformOrigin: 'center center',
            force3D: true,
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            immediateRender: true,
          })
        }
      })

      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.transform = 'translateZ(0)'
        cardsContainerRef.current.offsetHeight
      }
      gsap.set(cardsContainerRef.current, { force3D: true })

      Array.from(cards).forEach((card, index) => {
        const element = card as HTMLElement
        const computedStyle = window.getComputedStyle(element)
        console.log(`Card ${index} applied transform:`, {
          transform: computedStyle.transform,
          opacity: computedStyle.opacity,
          zIndex: computedStyle.zIndex,
        })
      })

      console.log('Initial stacking applied with force render')

      gsap.delayedCall(0.1, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 55%',
            end: 'top 45%',
            toggleActions: 'play none none none',
            onToggle: (self) => console.log('ScrollTrigger toggled:', self.isActive),
            refreshPriority: -1,
            invalidateOnRefresh: false,
          },
        })

        tl.to(cards, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 'auto',
          duration: config.duration,
          stagger: config.stagger,
          ease: config.ease,
          scrub: true,
          force3D: true,
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
          onComplete: () => console.log('Animation completed'),
        })

        console.log('Timeline created with ScrollTrigger after delay')
      })
    })

    /*
  mm.add("(max-width: 1024px)", () => {
    console.log('📱 Mobile/tablet - resetting transforms')
    gsap.set(cards, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: "auto",
      clearProps: "all"
    })
        })
  */
    return mm
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('🚀 Starting animation setup...')
      const mmInstance = setupAnimation(cardsContainerRef, homeData.services)
    }, 100)

    return () => {
      clearTimeout(timer)
      mmInstance?.revert()
    }
  }, [cardsContainerRef, homeData.services])

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Debug Reset Button */}
      {/* <div className="text-center mt-8 absolute">
        <button
          onClick={resetAnimation}
          className=" bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          🔄 Reset Animation
        </button>
      </div> */}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 ${getAnimationClasses(headerInView)}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-800">
              Comprehensive Financial{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete financial solutions tailored to your investment goals.
            </p>
          </div>

          {/* Services Grid - Dynamic layout based on service count */}
          <div ref={cardsContainerRef} className={`grid ${gridClass} gap-4 md:gap-5 lg:gap-6`}>
            {homeData.services?.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group p-6 flex flex-col h-full"
              >
                {/* Service Icon */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3`}
                  >
                    <span className="text-xl">{service.icon}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4 flex-1">
                  {service.features?.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div
                        className={`w-4 h-4 bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs leading-relaxed">
                        {feature.feature}
                      </span>
                    </div>
                  ))}

                  {/* Show remaining features count if more than 3 */}
                  {service.features && service.features.length > 3 && (
                    <div className="text-xs text-gray-500 pl-6">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Clients Count */}
                {service.clients && (
                  <div className="text-center py-2 bg-gray-50 rounded-lg mb-3">
                    <span className="text-xs font-medium text-gray-600">{service.clients}</span>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  className={`bg-gradient-to-r ${service.color || 'from-blue-500 to-blue-600'} hover:shadow-lg text-white rounded-full font-medium w-full py-2 px-4 transition-all duration-300 transform hover:scale-105 text-md mt-auto`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
