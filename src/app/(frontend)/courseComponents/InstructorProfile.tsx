'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Users, Award, BookOpen, TrendingUp, Building, Star } from 'lucide-react'

interface Achievement {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
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

export default function InstructorProfile() {
  const achievements = [
    {
      icon: Award,
      number: "23+",
      label: "Years of Experience",
      description: "In finance and stock market"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Students Trained",
      description: "Since 2017 in Maharashtra"
    },
    {
      icon: BookOpen,
      number: "Co-Author",
      label: "Billionaire Mindset",
      description: "Published finance book"
    },
    {
      icon: Building,
      number: "16 Years",
      label: "HDFC Bank Experience",
      description: "Plus HSBC corporate background"
    }
  ]

  const expertise = [
    "Technical Analysis",
    "Risk Management", 
    "Options Trading",
    "Investment Planning",
    "Portfolio Management",
    "Market Psychology",
    "Trading Strategies",
    "Financial Planning"
  ]

  const testimonials = [
    {
      name: "Student from Maharashtra",
      role: "Course Participant",
      content: "Sarang Sir and the entire Finanthropist team really taught me share market from basic to advance level in simple words and in friendly manner.",
      rating: 5
    },
    {
      name: "Course Graduate",
      role: "Trader",
      content: "After completing share market course now am doing trading very confidently. Way of teaching is awesome, very easy technique and informative.",
      rating: 5
    },
    {
      name: "Student Testimonial",
      role: "Beginner",
      content: "Even I don't know a single word about share market and trend... Sameer sir explain easy and fine way in each and every section.",
      rating: 5
    }
  ]

  const [sectionRef, sectionInView] = useInView(0.3)
  const [achievementsRef, achievementsInView] = useInView(0.3)
  const [testimonialsRef, testimonialsInView] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Mentor
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from Maharashtra&apos;s most trusted stock market educator with over two decades of experience
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          {/* Left - Profile Image and Bio */}
          <div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                {/* Placeholder for instructor image */}
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                  <div className="text-white text-6xl font-light relative z-10 group-hover:scale-110 transition-transform duration-500">SS</div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-light text-gray-800 mb-2">Sameer Sarang</h3>
                  <p className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
                    Stock Market Expert & Educator
                  </p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 ml-2">(4.9/5 from 10,000+ reviews)</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right - Bio and Credentials */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-light text-gray-800 mb-6">About Sameer Sarang</h4>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                  <p>
                    With 23+ years of finance experience and 7+ years teaching share market education, Sameer Sarang 
                    has trained over 10,000+ students since 2017, transforming lives through practical stock market education.
                  </p>
                </div>
                <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50">
                  <p>
                    His corporate journey with HDFC Bank (16 years) and HSBC provided deep market insights that he now 
                    shares through his teaching. This real-world experience makes complex concepts simple and accessible.
                  </p>
                </div>
                <div className="bg-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50">
                  <p>
                    Co-author of &quot;Billionaire Mindset,&quot; Sameer&apos;s philosophy is clear: provide thoughtfully crafted education 
                    that students can actually use to create multiple income sources and achieve financial freedom.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50">
                  <p>
                    <strong className="text-green-700">Why Students Choose This Course:</strong> &quot;This course will really transform your entire life. 
                    I will recommend you to do this course&quot; - Verified Student Review
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h4 className="text-xl font-light text-gray-800 mb-6">Professional Background</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-blue-50/60 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Ex-Senior Manager at HDFC Bank</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-purple-50/60 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Former Associate at HSBC</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-emerald-50/60 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Certified Financial Market Expert</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-yellow-50/60 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Co-author of &quot;Billionaire Mindset&quot;</span>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h4 className="text-xl font-light text-gray-800 mb-6">Areas of Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div key={`skill-${index}`} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-gradient-to-r hover:from-green-50/60 hover:to-emerald-50/60 transition-all duration-300 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div ref={achievementsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div 
                key={`achievement-${index}`} 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${getAnimationClasses(achievementsInView)}`}
                style={getStaggerDelay(index, 100)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-purple-500' : index === 1 ? 'from-emerald-500 to-teal-500' : index === 2 ? 'from-purple-500 to-pink-500' : 'from-orange-500 to-red-500'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">{achievement.number}</div>
                <div className="font-medium text-gray-700 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-500">{achievement.description}</div>
              </div>
            )
          })}
        </div>

        {/* Student Testimonials about Instructor */}
        <div ref={testimonialsRef} className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className={`text-center mb-12 transition-all duration-1000 ${getAnimationClasses(testimonialsInView)}`}>
              <h3 className="text-3xl md:text-4xl font-light mb-6">What Students Say About{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent font-medium">Sameer Sir</span>
              </h3>
              <p className="text-blue-200 text-xl leading-relaxed">Real feedback from successful students</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`testimonial-${index}`} 
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 ${getAnimationClasses(testimonialsInView)}`}
                  style={getStaggerDelay(index, 150)}
                >
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={`testimonial-star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-blue-100 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.content}&quot;</p>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-blue-200">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`text-center mt-16 transition-all duration-1000 ${getAnimationClasses(testimonialsInView)}`}>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-12 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                Join 10,000+ Successful Students - Enroll Now!
              </button>
              <p className="text-blue-200 mt-4 text-lg">
                &quot;After doing the course now I am doing trading my own&quot; - Student Review
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}