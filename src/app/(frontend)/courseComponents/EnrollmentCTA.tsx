'use client'

import React, { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Shield,
  Gift
} from 'lucide-react'

export default function EnrollmentCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const courseHighlights = [
    {
      title: "7-Day Intensive Program",
      description: "Comprehensive stock market education from basics to advanced",
      features: [
        "Price-based trading strategies",
        "Technical analysis mastery",
        "Options trading techniques",
        "Personal trading systems"
      ],
      highlight: "Most Popular"
    },
    {
      title: "Lifetime Mentorship",
      description: "Ongoing support and guidance after course completion",
      features: [
        "Daily live market training",
        "Stock selection support",
        "Personal guidance",
        "Community access"
      ]
    },
    {
      title: "Practical Learning",
      description: "Real market application with hands-on experience",
      features: [
        "Live market sessions",
        "Real-world examples",
        "Case studies",
        "Immediate implementation"
      ]
    }
  ]

  const bonuses = [
    {
      title: "Technical Analysis Strategy",
      description: "Comprehensive guide to chart patterns and indicators"
    },
    {
      title: "Self-Investing Guidance",
      description: "Step-by-step approach to independent investing"
    },
    {
      title: "Home Loan Repayment Calculator",
      description: "Financial planning tool for smart money management"
    }
  ]

  const guarantees = [
    "Learn in Marathi & English",
    "Lifetime mentorship support",
    "Practical market application",
    "Based in Nashik, Maharashtra"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Free Webinar Available - Join Today!
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Transform Your Financial
            <span className="text-yellow-400"> Future!</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join 10,000+ successful students who have learned practical stock market skills from Maharashtra&apos;s most trusted educator.
          </p>

          {/* Key Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <div className="text-yellow-400 font-semibold text-lg mb-4 text-center">
              🌟 Why Students Choose Finanthropist
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">23+ Years</div>
                <div className="text-blue-200 text-sm">Finance Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-blue-200 text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Lifetime</div>
                <div className="text-blue-200 text-sm">Mentorship</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Highlights */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courseHighlights.map((highlight, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                highlight.highlight ? 'ring-4 ring-yellow-400 transform scale-105' : ''
              }`}
            >
              {highlight.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                    🏆 {highlight.highlight}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-blue-200">{highlight.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {highlight.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-yellow-400 font-semibold text-lg mb-2">
                  Included in Course
                </div>
                <p className="text-blue-200 text-sm">
                  Contact for enrollment details
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Bonuses Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              🎁 Free Learning Resources
            </h3>
            <p className="text-blue-200">
              Get these valuable resources included with your webinar registration!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 text-center">
                <h4 className="font-semibold mb-3 text-yellow-400">{bonus.title}</h4>
                <p className="text-blue-200 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-lg font-bold text-yellow-400 mb-2">
              All Resources Included FREE
            </div>
            <div className="text-green-400 font-semibold">
              Register for the free webinar to get started!
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16 text-center">
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold">10,000+</div>
            <div className="text-blue-200">Students Trained</div>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold">4.9/5</div>
            <div className="text-blue-200">Student Rating</div>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold">23+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold">7+ Years</div>
            <div className="text-blue-200">Teaching Experience</div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Our Promise to You</h3>
            <p className="text-blue-200">Complete peace of mind with every enrollment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Stock Market Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful students who&apos;ve transformed their financial lives with practical education!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
              Join Free Webinar Now!
              <ArrowRight className="w-6 h-6 inline ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Call: +91-7066334499
            </button>
          </div>

          <div className="mt-8 text-blue-200 text-center">
            <div className="text-lg font-semibold mb-2">
              &ldquo;This course will really transform your entire life. I will recommend you to do this course&rdquo;
            </div>
            <div className="text-sm">- Verified Student Testimonial</div>
          </div>
        </div>
      </div>
    </section>
  )
}