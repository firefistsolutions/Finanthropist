'use client'

import React from 'react'
import { Star, MapPin, ThumbsUp, Verified } from 'lucide-react'

export default function V3GoogleReviewsProof() {
  const googleReviews = [
    {
      name: 'Priya Sharma',
      initials: 'PS',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616c179e12e?w=150&h=150&fit=crop&crop=face',
      location: 'Pune, Maharashtra',
      rating: 5,
      timeAgo: '2 weeks ago',
      review:
        'Excellent faculty at Finanthropist. Sameer sir explains complex concepts in simple words. Way of teaching is awesome, very easy technique and informative. Highly recommended!',
      helpful: 12,
    },
    {
      name: 'Rahul Patil',
      initials: 'RP',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      timeAgo: '1 month ago',
      review:
        'This course will really transform your entire life. After doing the course now I am doing trading my own. Great speaker and teacher. Team Finanthropist support is exceptional.',
      helpful: 18,
    },
    {
      name: 'Sunita Deshmukh',
      initials: 'SD',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      location: 'Nashik, Maharashtra',
      rating: 5,
      timeAgo: '3 weeks ago',
      review:
        "Even I don't know a single word about share market and trend. Sameer sir explain easy and fine way in each and every section. Now just 6 days I can read candle pattern and trend.",
      helpful: 15,
    },
    {
      name: 'Amit Joshi',
      initials: 'AJ',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      location: 'Nagpur, Maharashtra',
      rating: 5,
      timeAgo: '1 week ago',
      review:
        'Finanthropist is the best share market education learning platform. Humble and patient with questions and concerns. After completing course now am doing trading very confidently.',
      helpful: 22,
    },
    {
      name: 'Meera Kulkarni',
      initials: 'MK',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      location: 'Aurangabad, Maharashtra',
      rating: 5,
      timeAgo: '2 months ago',
      review:
        'Sameer Sir and his staff are cooperative, helpful, and dedicated. Post-course completion support is very good. I will recommend Finanthropist for share marketing course.',
      helpful: 9,
    },
    {
      name: 'Vikram Singh',
      initials: 'VS',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      location: 'Solapur, Maharashtra',
      rating: 5,
      timeAgo: '5 days ago',
      review:
        'Extremely good with so much clarity in the subject. His intentions are all inclusive. The teaching methodology is practical and easy to understand for beginners.',
      helpful: 14,
    },
  ]

  const GoogleLogo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
        <span className="text-white text-sm font-bold">G</span>
      </div>
      <span className="font-semibold text-gray-800">Google</span>
    </div>
  )

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <GoogleLogo />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Why 2,452+ Students Rate Us{' '}
            <span className="text-blue-600 font-medium">5.0/5 Stars</span>
          </h2>

          {/* Overall Rating Display */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-6xl font-light text-gray-800">5.0</div>
            <div>
              <StarRating rating={5} />
              <div className="text-gray-600 text-sm mt-1">Based on 2,452+ reviews</div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="max-w-md mx-auto">
            {[
              { stars: 5, percentage: 98 },
              { stars: 4, percentage: 2 },
              { stars: 3, percentage: 1 },
              { stars: 2, percentage: 0 },
              { stars: 1, percentage: 0 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center space-x-2 text-sm">
                <span>{item.stars}</span>
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-gray-600 w-8">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {googleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <div className="text-gray-400 text-xs mt-1">{review.timeAgo}</div>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <Verified className="w-3 h-3 text-blue-500" />
                  <span className="text-gray-500 text-xs">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-blue-600 mb-2">2,452+</div>
              <div className="text-gray-600 text-sm">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-600 mb-2">5.0★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-600 mb-2">47</div>
              <div className="text-gray-600 text-sm">This Month</div>
            </div>
            {/* <div>
              <div className="text-3xl font-light text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">Maharashtra Cities</div>
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Join 10,000+ Happy Families Who Trust Us
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the same quality teaching that earned us Maharashtra&apos;s highest Google
              rating
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Join Our Trading Institute
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Read All Reviews on Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
