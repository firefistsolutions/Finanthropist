'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Star, TrendingUp, Users, Award, MapPin, Calendar, ThumbsUp } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  image: string
  story: string
  beforeAfter: {
    before: string
    after: string
  }
  rating: number
  course: string
  timeframe: string
  location: string
}

interface SuccessStat {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  description: string
}

// Animation utilities (replicated from old version)
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const adjustedThreshold = isMobile ? Math.min(threshold, 0.1) : Math.min(threshold, 0.2)
    const rootMargin = isMobile ? '20px 0px -5% 0px' : '50px 0px -10% 0px'
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => setIsInView(entry.isIntersecting), 50)
      },
      { 
        threshold: adjustedThreshold,
        rootMargin: rootMargin
      }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

const getAnimationClasses = (inView: boolean, baseClasses = 'opacity-0 translate-y-2') => 
  inView ? 'opacity-100 translate-y-0' : baseClasses

const getStaggerDelay = (index: number, baseDelay = 200) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const adjustedDelay = isMobile ? Math.min(baseDelay, 150) : baseDelay
  return {
    transitionDelay: `${index * adjustedDelay}ms`
  }
}

// Google-style review component
const GoogleReviewCard: React.FC<{ testimonial: Testimonial; index: number; inView: boolean }> = ({ testimonial, index, inView }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group ${getAnimationClasses(inView)}`}
      style={getStaggerDelay(index, 100)}
    >
      {/* Google Review Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">{testimonial.image}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{testimonial.location}</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>{testimonial.timeframe}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-400">Google Review</div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed mb-4">&quot;{testimonial.story}&quot;</p>
        
        {/* Before/After Results */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100">
          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Transformation Results</div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Before:</span>
              <span className="text-sm font-semibold text-red-600">{testimonial.beforeAfter.before}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">After:</span>
              <span className="text-sm font-semibold text-green-600">{testimonial.beforeAfter.after}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Review Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group-hover:scale-105 transform duration-300">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-medium">Helpful</span>
          </button>
          <span className="text-xs text-gray-400">Course: {testimonial.course}</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-xs text-gray-500">Verified</span>
        </div>
      </div>
    </div>
  )
}

export default function StudentTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Amit Deshmukh",
      role: "Software Engineer",
      location: "Mumbai, Maharashtra",
      image: "AD",
      story: "I was completely new to the stock market. Sameer sir's course taught me everything from basics to advanced strategies. Now I'm making ₹50,000+ monthly from trading.",
      beforeAfter: {
        before: "Complete beginner",
        after: "₹50,000/month profit"
      },
      rating: 5,
      course: "Complete Trading Bundle",
      timeframe: "6 months ago"
    },
    {
      name: "Sunita Patil",
      role: "Homemaker",
      location: "Pune, Maharashtra",
      image: "SP",
      story: "Being a homemaker, I wanted to contribute to family income. This course gave me confidence to trade safely. The Marathi explanations were very helpful.",
      beforeAfter: {
        before: "No trading knowledge",
        after: "₹25,000/month income"
      },
      rating: 5,
      course: "Stock Market Fundamentals",
      timeframe: "8 months ago"
    },
    {
      name: "Rahul Joshi",
      role: "Business Owner",
      location: "Nashik, Maharashtra",
      image: "RJ",
      story: "I lost money in stock market before joining this course. Sameer sir taught me proper risk management. Now my portfolio is growing consistently.",
      beforeAfter: {
        before: "₹2L losses",
        after: "₹5L+ portfolio growth"
      },
      rating: 5,
      course: "Technical Analysis Mastery",
      timeframe: "1 year ago"
    },
    {
      name: "Priyanka Singh",
      role: "Bank Employee",
      location: "Nagpur, Maharashtra",
      image: "PS",
      story: "Working in banking, I knew about investments but not trading. This course transformed my understanding. Options trading course was especially valuable.",
      beforeAfter: {
        before: "Only FD investments",
        after: "₹1.2L options profit"
      },
      rating: 5,
      course: "Options Trading Strategies",
      timeframe: "4 months ago"
    },
    {
      name: "Vikram Kulkarni",
      role: "Chartered Accountant",
      location: "Aurangabad, Maharashtra",
      image: "VK",
      story: "Even as a CA, I struggled with market timing. The technical analysis portion was game-changing. Now I help my clients with investment advice too.",
      beforeAfter: {
        before: "Poor market timing",
        after: "85% success rate"
      },
      rating: 5,
      course: "Complete Trading Bundle",
      timeframe: "10 months ago"
    },
    {
      name: "Meera Jain",
      role: "School Teacher",
      location: "Solapur, Maharashtra",
      image: "MJ",
      story: "Started with small amount during summer vacation. The step-by-step approach and live sessions helped me gain confidence quickly.",
      beforeAfter: {
        before: "₹10,000 investment",
        after: "₹45,000 profit"
      },
      rating: 5,
      course: "Stock Market Fundamentals",
      timeframe: "7 months ago"
    }
  ]

  const successStats: SuccessStat[] = [
    { 
      icon: Users,
      number: "25,000+",
      label: "Students Trained",
      description: "Across Maharashtra and India"
    },
    {
      icon: TrendingUp,
      number: "87%",
      label: "Success Rate",
      description: "Students become profitable"
    },
    {
      icon: Award,
      number: "₹2.5Cr+",
      label: "Total Student Profits",
      description: "Reported by our students"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "From 10,000+ reviews"
    }
  ]

  const [sectionRef, sectionInView] = useInView(0.3)
  const [statsRef, statsInView] = useInView(0.3)
  const [testimonialsRef, testimonialsInView] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Google Reviews Style */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">G</span>
            </div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
                Student{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Reviews
                </span>
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`header-star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">4.9</span>
                <span className="text-gray-500">• 10,000+ reviews</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real people, real profits. See how our students transformed their financial lives through proper stock market education.
          </p>
        </div>

        {/* Success Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={`stat-${index}`} 
                className={`text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${getAnimationClasses(statsInView)}`}
                style={getStaggerDelay(index, 100)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-500 to-purple-500' : 
                  index === 1 ? 'from-emerald-500 to-teal-500' : 
                  index === 2 ? 'from-purple-500 to-pink-500' : 
                  'from-orange-500 to-red-500'
                } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="font-medium text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Google-style Reviews Grid */}
        <div ref={testimonialsRef} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <GoogleReviewCard 
              key={`testimonial-${index}`} 
              testimonial={testimonial} 
              index={index} 
              inView={testimonialsInView} 
            />
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className={`bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 text-white text-center mb-16 shadow-2xl relative overflow-hidden transition-all duration-1000 ${getAnimationClasses(testimonialsInView)}`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Watch Student{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-medium">Success Stories</span>
            </h3>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Hear directly from our students about their trading journey and achievements
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((video, index) => (
                <div 
                  key={`video-${index}`} 
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group"
                >
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-10 border-l-white border-y-8 border-y-transparent ml-1"></div>
                  </div>
                  <h4 className="font-semibold mb-3 text-lg">Success Story #{video}</h4>
                  <p className="text-blue-200">2:30 mins</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className={`text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 transition-all duration-1000 ${getAnimationClasses(testimonialsInView)}`}>
          <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Ready to Write Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Success Story?
            </span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful traders who started their journey with us. 
            Your financial transformation is just one course away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey - Enroll Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Talk to Our Students
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Certificate included</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>Lifetime community access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}