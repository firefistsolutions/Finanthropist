'use client'

import React from 'react'
import { Phone, Calendar, Users, Award, CheckCircle, Clock, Star, AlertTriangle, MessageCircle, Gift, Zap, Target } from 'lucide-react'

export default function V3FinalConversionCTA() {
  const urgencyFactors = [
    "Only 180 institute seats remaining",
    "Admission closes for current batch", 
    "FREE bonuses worth ₹9,999 only for attendees",
    "Next institute batch in 3 months"
  ]

  const guarantees = [
    { icon: CheckCircle, text: "100% FREE consultation - no hidden costs" },
    { icon: Award, text: "Learn from 4.9★ rated educator" },
    { icon: Users, text: "Join 25,000+ successful students" },
    { icon: Clock, text: "Lifetime support included" }
  ]

  const socialProof = [
    { name: "Priya S.", result: "₹50K/month", location: "Pune" },
    { name: "Rahul P.", result: "Recovered ₹2L", location: "Mumbai" },
    { name: "Sunita D.", result: "₹25K/month", location: "Nashik" },
    { name: "Amit J.", result: "₹1.2L/month", location: "Nagpur" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Your Financial Transformation{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-medium">
              Starts Now
            </span>
          </h2>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Don&apos;t let another day pass wondering &ldquo;what if.&rdquo; Join Maharashtra&apos;s most trusted 
            stock market educator and start building the wealth you deserve.
          </p>
        </div>


        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Final Push */}
          <div>
            <h3 className="text-3xl font-light mb-8">
              Why This Could Be The Most Important{' '}
              <span className="text-yellow-300 font-medium">Decision</span> You Ever Make
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Learn from Proven Expert</h4>
                  <p className="text-blue-100">23+ years finance experience, 5.0/5 Google rating from 2,452+ students</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Risk-Free Start</h4>
                  <p className="text-blue-100">Begin with FREE consultation - no payment, no commitment, just pure value</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Lifetime Support</h4>
                  <p className="text-blue-100">Not just a course - get ongoing mentorship for life</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Proven Results</h4>
                  <p className="text-blue-100">87% success rate - join 25,000+ students who transformed their lives</p>
                </div>
              </div>
            </div>

            {/* Social Proof Grid */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
              <h4 className="font-semibold mb-4">Recent Success Stories:</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialProof.map((student, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-yellow-300 font-semibold text-sm">{student.name}</div>
                    <div className="text-white font-bold">{student.result}</div>
                    <div className="text-blue-200 text-xs">{student.location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-400/20 border-l-4 border-yellow-400 rounded-r-2xl p-6">
              <h4 className="text-yellow-300 font-semibold mb-2">The Cost of Waiting:</h4>
              <p className="text-blue-100 text-sm">
                Every day you delay is potential income lost. While you&apos;re thinking, your peers are already 
                learning and earning. The stock market doesn&apos;t wait - your financial future shouldn&apos;t either.
              </p>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Join Our Trading Institute Today
                </h3>
                <p className="text-gray-600">Professional Trading Education</p>
                <div className="text-red-600 font-semibold text-sm mt-2">
                  Limited batch seats available!
                </div>
              </div>

              <form className="space-y-6 mb-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Experience Level</label>
                  <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800">
                    <option value="">Select your experience level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-xl py-6 px-6 rounded-xl transition-colors shadow-lg"
                >
                  Join Our Institute Now
                </button>
              </form>

              {/* Alternative Contact Methods */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Quick Call Registration: +91-7066334499</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-3 border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 font-semibold py-4 px-6 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Admission</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="space-y-3">
                {guarantees.map((guarantee, index) => {
                  const Icon = guarantee.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <Icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{guarantee.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Final Testimonial */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center mb-12 border border-white/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-blue-100 mb-6 italic">
            &ldquo;This course will really transform your entire life. After doing the course now I am doing trading my own. 
            Great speaker and teacher. Team Finanthropist support is exceptional.&rdquo;
          </blockquote>
          <div className="text-yellow-300 font-semibold">- Rahul P., Mumbai (Google Review)</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-light mb-6">
            The Choice Is Yours:{' '}
            <span className="text-yellow-300 font-medium">Transform or Stay the Same</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-red-300 mb-4">If You Don&apos;t Act:</h4>
              <ul className="space-y-2 text-red-200 text-sm">
                <li>• Continue struggling with money problems</li>
                <li>• Miss out on stock market opportunities</li>
                <li>• Keep relying on single income source</li>
                <li>• Watch others succeed while you wait</li>
              </ul>
            </div>
            
            <div className="bg-green-600/20 border border-green-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-green-300 mb-4">If You Act Today:</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>• Learn at Maharashtra&apos;s #1 rated institute</li>
                <li>• Start building multiple income streams</li>
                <li>• Join 25,000+ successful students</li>
                <li>• Get lifetime support and mentorship</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-2 mb-8 max-w-2xl mx-auto">
            <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-2xl py-6 px-8 rounded-xl transition-colors flex items-center justify-center">
              <Target className="w-6 h-6 mr-3" />
              YES! JOIN OUR INSTITUTE NOW
            </button>
          </div>

          <div className="text-blue-200 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Need help? Call +91-7066334499 (Available 24/7)</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Limited batch seats - enroll today</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-4 h-4" />
              <span>FREE bonuses worth ₹9,999 for all students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}