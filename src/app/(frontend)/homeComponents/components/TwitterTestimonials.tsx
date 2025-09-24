import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView, getAnimationClasses } from '../utilities/animations'
import { useTwitterReviews } from '../../../../hooks/useTwitterReviews'
import { REFRESH_INTERVALS } from '@/constants/refreshIntervals'

const TwitterTestimonials: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.2)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { twitterReviews } = useTwitterReviews()
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const totalSlides = twitterReviews.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, REFRESH_INTERVALS.TESTIMONIAL_SLIDES)

    return () => clearInterval(interval)
  }, [totalSlides])

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Create a continuous loop by duplicating tweets
  const extendedTweets = [...twitterReviews, ...twitterReviews, ...twitterReviews]
  const startIndex = currentSlide + totalSlides // Start from middle set
  const tweetWidth = isMobile ? 312 : 344 // 288px + 24px margin for mobile, 320px + 24px for desktop
  const translateX = -(startIndex * tweetWidth)

  const TwitterIcon = () => (
    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-white">
              What Our Clients{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real testimonials from satisfied clients who&apos;ve transformed their trading journey with us.
            </p>
          </div>

          <div 
            ref={sectionRef}
            className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}
          >
            <div className="relative overflow-hidden max-w-6xl mx-auto">
              <div 
                className={`flex transition-transform duration-600 ease-in-out ${
                  isTransitioning ? 'duration-600' : ''
                }`}
                style={{ 
                  transform: `translateX(${translateX}px)`,
                  width: `${extendedTweets.length * tweetWidth}px`
                }}
              >
                {extendedTweets.map((tweet, index) => {
                  const relativeIndex = (index - startIndex + totalSlides) % totalSlides
                  const isCenter = Math.abs(relativeIndex) <= 1 && Math.abs(relativeIndex - totalSlides) <= 1
                  const isCenterMost = relativeIndex === 0 || relativeIndex === totalSlides
                  
                  return (
                    <div 
                      key={`${tweet.id}-${Math.floor(index / totalSlides)}`}
                      className={`flex-shrink-0 transform transition-all duration-600 ${
                        isCenterMost ? 'scale-105 opacity-100' : 
                        isCenter ? 'scale-95 opacity-75' : 
                        'scale-90 opacity-50'
                      }`}
                      style={{ 
                        width: `${tweetWidth - 24}px`, // Account for margin
                        marginRight: '24px' 
                      }}
                    >
                      <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 h-80 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center space-x-3">
                            <Image 
                              src={tweet.avatar} 
                              alt={tweet.name}
                              className="rounded-full w-12 h-12 object-cover"
                              width={48}
                              height={48}
                            />
                            <div>
                              <p className="text-white font-semibold text-base">{tweet.name}</p>
                              <p className="text-gray-400 text-sm">{tweet.username}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TwitterIcon />
                            <span className="text-gray-400 text-sm">{tweet.timestamp}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-hidden">
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {tweet.content.split('@Finanthropist').map((part, i) => (
                              <span key={i}>
                                {i > 0 && (
                                  <span className="text-blue-400 font-medium">@Finanthropist</span>
                                )}
                                {part}
                              </span>
                            ))}
                          </p>
                        </div>

                        {/* Engagement */}
                        <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-gray-700/50">
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{tweet.engagement.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{tweet.engagement.replies}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>{tweet.engagement.retweets}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleSlideChange(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwitterTestimonials