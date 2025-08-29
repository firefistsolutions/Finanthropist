'use client'

import React, { useState, useEffect } from 'react'
import { Star, ThumbsUp, Verified } from 'lucide-react'

interface GoogleReview {
  id: string
  name: string
  initials: string
  rating: number
  text: string
  timeAgo: string
  location: string
  isVerified: boolean
}

// Animation utilities
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

const getAnimationClasses = (inView: boolean) => 
  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

export default function GoogleReviewsShowcase() {
  const [sectionRef, sectionInView] = useInView(0.3)

  const googleReviews: GoogleReview[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      initials: 'PS',
      rating: 5,
      text: 'Excellent faculty at Finanthropist. Sameer sir explains complex concepts in simple words. Way of teaching is awesome, very easy technique and informative. Highly recommended!',
      timeAgo: '2 weeks ago',
      location: 'Pune, Maharashtra',
      isVerified: true
    },
    {
      id: '2', 
      name: 'Rahul Patil',
      initials: 'RP',
      rating: 5,
      text: 'This course will really transform your entire life. After doing the course now I am doing trading my own. Great speaker and teacher. Team Finanthropist support is exceptional.',
      timeAgo: '1 month ago',
      location: 'Mumbai, Maharashtra', 
      isVerified: true
    },
    {
      id: '3',
      name: 'Sunita Deshmukh',
      initials: 'SD', 
      rating: 5,
      text: 'Even I don\'t know a single word about share market and trend. Sameer sir explain easy and fine way in each and every section. Now just 6 days I can read candle pattern and trend.',
      timeAgo: '3 weeks ago',
      location: 'Nashik, Maharashtra',
      isVerified: true
    },
    {
      id: '4',
      name: 'Amit Joshi',
      initials: 'AJ',
      rating: 5,
      text: 'Finanthropist is the best share market education learning platform. Humble and patient with questions and concerns. After completing course now am doing trading very confidently.',
      timeAgo: '1 week ago', 
      location: 'Nagpur, Maharashtra',
      isVerified: true
    },
    {
      id: '5',
      name: 'Meera Kulkarni',
      initials: 'MK',
      rating: 5,
      text: 'Sameer Sir and his staff are cooperative, helpful, and dedicated. Post-course completion support is very good. I will recommend Finanthropist for share marketing course.',
      timeAgo: '2 months ago',
      location: 'Aurangabad, Maharashtra', 
      isVerified: true
    },
    {
      id: '6',
      name: 'Vikram Singh',
      initials: 'VS',
      rating: 5,
      text: 'Extremely good with so much clarity in the subject. His intentions are all inclusive. The teaching methodology is practical and easy to understand for beginners.',
      timeAgo: '5 days ago',
      location: 'Solapur, Maharashtra',
      isVerified: true
    }
  ]

  const GoogleIcon = () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
        <span className="text-white text-xs font-bold">G</span>
      </div>
    </div>
  )

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  )

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <GoogleIcon />
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
                Google{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium">
                  Reviews
                </span>
              </h2>
              <div className="flex items-center space-x-2 mt-2">
                <StarRating rating={5} />
                <span className="text-lg font-semibold text-gray-700">4.9</span>
                <span className="text-gray-500">• 2,452+ reviews</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Why 2,452+ Students Rate Us 4.9/5 Stars - Real Reviews from Verified Google Students
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {googleReviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${getAnimationClasses(sectionInView)}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{review.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <div className="text-xs text-gray-400 mt-1">{review.timeAgo}</div>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-sm">&quot;{review.text}&quot;</p>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Helpful</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GoogleIcon />
                  <span className="text-xs text-gray-500">Verified</span>
                  {review.isVerified && <Verified className="w-3 h-3 text-blue-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Summary Stats */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-gray-800">4.9★</div>
              <div className="text-sm text-gray-600">Overall Rating</div>
              <div className="text-xs text-gray-500">From Google Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-gray-800">2,452+</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
              <div className="text-xs text-gray-500">Verified Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-gray-800">96%</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
              <div className="text-xs text-gray-500">Exceptional Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-gray-800">47</div>
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-xs text-gray-500">New Reviews</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Join 2,452+ Happy Students Who Rate Us 4.9/5
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the same quality teaching that earned us Maharashtra's highest Google rating
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Register for FREE Webinar
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Read All 2,452+ Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}