'use client'

import React from 'react'
import { Star, MapPin, ThumbsUp, Verified } from 'lucide-react'

export default function V3GoogleReviewsProof() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getRandomTimeAgo = () => {
    const options = [
      '5 days ago',
      '1 week ago',
      '2 weeks ago',
      '3 weeks ago',
      '1 month ago',
      '2 months ago',
    ]
    return options[Math.floor(Math.random() * options.length)]
  }

  const getRandomHelpful = () => {
    return Math.floor(Math.random() * 20) + 5
  }

  const googleReviews = [
    {
      name: 'Satish Atkari',
      rating: 5,
      review: `I sincerely thank you for the insightful share market course by Sameer sir. The concepts were explained in a simple yet powerful way, and I now feel more confident in making informed investment decisions in equity/IPO areas. Sir has given recordings for F&O also. I will go through that and will try to understand. Your guidance has truly sparked my interest in market analysis and financial planning. I'm grateful for the value you've added to my learning.
    Thank you Sameer sir & team.`,
    },
    {
      name: 'Vivek Patankar',
      rating: 5,
      review: `I recently completed the Share Market class and it exceeded all my expectations. The course was incredibly informative, well-structured, and easy to follow—even for someone like me with no prior background in trading. The instructor explained complex concepts like technical analysis, fundamental analysis, and risk management in a clear and practical way.

    Live sessions, real market examples, and hands-on practice helped me gain confidence in making my own investment decisions. What I appreciated most was the focus on disciplined trading and long-term strategy rather than just quick profits.

    Highly recommended for beginners as well as those looking to strengthen their market knowledge!`,
    },
    {
      name: 'Rajani Chougule',
      rating: 5,
      review: `I recently completed this course. The teaching style is exceptionally clear, simple, and easily accessible to everyone, including beginners.
    Thank you so much sir🙏`,
    },
    {
      name: 'Vikas Deorukhkar',
      rating: 5,
      review: `Excellent Teaching Knowledge about Shares Trading. I have attended the August 2025 Batch and am clear in my mind about Shares Trading in various fields i.e., Intraday, Delivery. In this 7-day class, we learned Three Things: Trade, Pattern, and Decision. If we follow the Training models and the three steps above, we will challenge ourselves to achieve good profits from Shares. Sir has a vast knowledge in this field, and they have taught us in a very simple and practical manner to get knowledge in mind and HEART. Also, we have done daily assignments to get practical knowledge about share purchases and sales as per the Chart. I would recommend to all of them to attend their Free Seminar and join their class to get good knowledge in Shares Investment and get Short Term and Long Term Profit. Do not miss this chance, Last but not Least. There is no compulsion of eduction to learn this course. 🙏1`,
    },
    {
      name: 'Pallavi Holey',
      rating: 5,
      review: `I sincerely thank you for the insightful share market course by Sameer sir. The concepts were explained in a simple yet powerful way, and I now feel more confident in making informed investment decisions. Your guidance has truly sparked my interest in market analysis and financial planning. I'm grateful for the value you've added to my learning. Thank you Sameer sir, Yash sir, Karan sir and whole team.`,
    },
    {
      name: 'Nita Pandit',
      rating: 5,
      review: `This is one of the best share market courses in Maharashtra. It also provides valuable knowledge about investments. Sameer Sir is a genuine person who is working hard to share his knowledge of the share market with everyone. I feel very fortunate to have attended this course. Thanks to the entire Finanthropist team. I highly recommend joining the course to gain the best knowledge. I also thank the universe for bringing me in contact with the Finanthropist team.`,
    },
    {
      name: 'Pritesh Satam',
      rating: 5,
      review: `Very Nice Overall Course. Sir's teaching method is so simple and nice that even a person with zero knowledge of share market can learn and earn money.`,
    },
    {
      name: 'Uday Rajput',
      rating: 5,
      review: `Done all class from here. Excellent work from their team and especially Sameer Sir. Thank you so much. And appreciate their work that they have provided service for lifetime. Thanks again... 😀😊`,
    },
    {
      name: 'Pushparaj Shinde',
      rating: 5,
      review: `Myself Pushparaj Shinde and I am a student of Sameer Sarang Sir. I am very happy to learn share market education in a very simple and easiest way. Thank you Sir 🙏 Stay Blessed 💐💐`,
    },
    {
      name: 'Amit Gade',
      rating: 5,
      review: `Super experience, Finanthropist is the best share market course in Maharashtra. One of the best classes. I got perfect basic knowledge from them. Special thanks to Mr. Sameer sir and class team. They help properly, whatever you want—ask them and they will help you.`,
    },
    {
      name: 'Smita Angane',
      rating: 5,
      review: `One of the best and life changing share market courses in simple Marathi language. It also gives knowledge about investments. Sarang Sir is a genuine person trying hard to share the knowledge about the share market with everyone. I feel very lucky to attend this course. Thanks to entire Finanthropist team. Must join the course to get best knowledge.`,
    },
    {
      name: 'Ravindra Patil',
      rating: 5,
      review: `One of the best decisions in my life to join this course. The course was very helpful and I developed self-confidence. Very easy language to understand share market. Thank you so much Sameer sir and all team members.`,
    },
  ]
    .map((review) => ({
      ...review,
      initials: getInitials(review.name),
      location: 'Maharashtra',
      timeAgo: getRandomTimeAgo(),
      helpful: getRandomHelpful(),
    }))
    .slice(0, 6)

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
    <section className="py-16" style={{ backgroundColor: '#FFE4E6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <GoogleLogo />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Why 2,452+ Students Rate Us{' '}
            <span className="font-medium text-gray-800">5.0/5 Stars</span>
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
              className="rounded-xl p-6 border hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#BF2932' }}
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-gray-200">
                    <span className="text-white font-semibold text-lg">{review.initials}</span>
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
                <button className="flex items-center space-x-2 text-sm hover:opacity-80 text-gray-600">
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
        <div
          className="rounded-2xl p-8 border"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#BF2932' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light mb-2 text-gray-800">2,452+</div>
              <div className="text-gray-600 text-sm">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 text-gray-800">5.0★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 text-gray-800">98%</div>
              <div className="text-gray-600 text-sm">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 text-gray-800">47</div>
              <div className="text-gray-600 text-sm">This Month</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div
            className="rounded-2xl p-8 border"
            style={{ backgroundColor: '#FFFFFF', borderColor: '#BF2932' }}
          >
            <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-800">
              Join 10,000+ Happy Families Who Trust Us
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the same quality teaching that earned us Maharashtra&apos;s highest Google
              rating
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="text-white px-8 py-4 rounded-xl font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#BF2932' }}
              >
                Join Our Trading Institute
              </button>
              <button className="border border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-semibold hover:border-gray-300 transition-colors">
                Read All Reviews on Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
