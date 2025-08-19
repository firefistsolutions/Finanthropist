import React, { useState, useEffect } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

interface Tweet {
  id: number
  name: string
  username: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  replies: number
  retweets: number
}

const mockTweets: Tweet[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    username: "@rajesh_trader",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist - Outstanding financial guidance and market insights. Their personalized strategies helped me achieve 23% returns this quarter. Highly recommend their services! 🚀",
    timestamp: "2h",
    likes: 47,
    replies: 8,
    retweets: 12
  },
  {
    id: 2,
    name: "Priya Sharma",
    username: "@priya_invests",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist team's risk management approach is exceptional. They helped me navigate the volatile market with confidence. Best financial advisory I've worked with! 💯",
    timestamp: "4h",
    likes: 32,
    replies: 5,
    retweets: 7
  },
  {
    id: 3,
    name: "Amit Patel",
    username: "@amit_finance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Just completed their advanced trading course. @Finanthropist provides world-class education with practical insights. My trading skills improved tremendously! 📈",
    timestamp: "6h",
    likes: 28,
    replies: 6,
    retweets: 9
  },
  {
    id: 4,
    name: "Sneha Reddy",
    username: "@sneha_stocks",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist's lifetime support is amazing! 24/7 expert assistance whenever I need guidance. Their technical analysis reports are spot on. Thank you team! 🙏",
    timestamp: "8h",
    likes: 41,
    replies: 11,
    retweets: 6
  },
  {
    id: 5,
    name: "Vikram Singh",
    username: "@vikram_trades",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Switched to @Finanthropist after trying multiple advisors. Their personalized approach and market expertise is unmatched. Portfolio grew 18% in 6 months! 🎯",
    timestamp: "12h",
    likes: 35,
    replies: 9,
    retweets: 8
  },
  {
    id: 6,
    name: "Kavya Iyer",
    username: "@kavya_investor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "New to trading and @Finanthropist made it so easy to understand. Their beginner-friendly approach and step-by-step guidance is perfect for learners like me! 📚",
    timestamp: "1d",
    likes: 23,
    replies: 4,
    retweets: 3
  },
  {
    id: 7,
    name: "Arjun Mehta",
    username: "@arjun_capital",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist's market analysis is incredibly accurate. Their daily insights help me make informed decisions. Customer service is prompt and professional! ⭐",
    timestamp: "1d",
    likes: 39,
    replies: 7,
    retweets: 5
  },
  {
    id: 8,
    name: "Meera Joshi",
    username: "@meera_wealth",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Been following @Finanthropist for 2 years now. Their consistency in delivering quality advice and education is remarkable. Truly the best in the business! 💎",
    timestamp: "2d",
    likes: 52,
    replies: 13,
    retweets: 11
  }
]

const TwitterTestimonials: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.2)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSlides = mockTweets.length
  const slidesToShow = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides)
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 4000)

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
  const extendedTweets = [...mockTweets, ...mockTweets, ...mockTweets]
  const startIndex = currentSlide + totalSlides // Start from middle set
  const translateX = -(startIndex * 320) // 320px per tweet (width + gap)

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
              Real testimonials from satisfied clients who've transformed their trading journey with us.
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
                  width: `${extendedTweets.length * 320}px`
                }}
              >
                {extendedTweets.map((tweet, index) => {
                  const relativeIndex = (index - startIndex + totalSlides) % totalSlides
                  const isCenter = Math.abs(relativeIndex) <= 1 && Math.abs(relativeIndex - totalSlides) <= 1
                  const isCenterMost = relativeIndex === 0 || relativeIndex === totalSlides
                  
                  return (
                    <div 
                      key={`${tweet.id}-${Math.floor(index / totalSlides)}`}
                      className={`flex-shrink-0 w-80 transform transition-all duration-600 ${
                        isCenterMost ? 'scale-105 opacity-100' : 
                        isCenter ? 'scale-95 opacity-75' : 
                        'scale-90 opacity-50'
                      }`}
                      style={{ marginRight: '24px' }}
                    >
                      <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-6 h-72 flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={tweet.avatar} 
                              alt={tweet.name}
                              className="rounded-full w-12 h-12 object-cover"
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
                            <span>{tweet.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{tweet.replies}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>{tweet.retweets}</span>
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