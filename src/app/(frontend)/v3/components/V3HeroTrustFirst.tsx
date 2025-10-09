'use client'

import React from 'react'
import { Target } from 'lucide-react'
import { Star, Phone, Calendar, Clock } from 'lucide-react'

export default function V3HeroTrustFirst() {
  return (
    <section className="pt-32 pb-16 text-gray-900" style={{ backgroundColor: '#FFF4CC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Trust-First Messaging */}
          <div className="text-center md:text-left">
            {/* Trust Badge - Google Reviews */}
            <div className="flex justify-center md:justify-start mb-8">
              <div
                className="inline-flex flex-col sm:flex-row items-center px-6 py-3 rounded-full border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#F8C200' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#D4AF37' }} />
                    ))}
                  </div>
                  <div className="text-gray-700">
                    <span className="font-bold text-lg">5.0</span>
                    <span className="text-sm ml-1">2.5k+ Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-center md:text-left">
              Maharashtra&apos;s{' '}
              <span className="font-medium" style={{ color: '#F8C200' }}>
                Highest Rated
              </span>{' '}
              Institute for Trading Education
            </h1>

            {/* Sub-headline with Credibility */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-center md:text-left max-w-none md:max-w-lg">
              Learn at <strong>Finanthropist Educare</strong> - Founded by Sammeer Sarang, 23+ Years
              Finance, Ex-HDFC & HSBC, Mentor to 10,000+ Families Across Maharashtra Since 2017
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-md mx-auto md:max-w-none md:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">23+</div>
                <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">5.0★</div>
                <div className="text-xs sm:text-sm text-gray-500">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  10,000+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Families Trained</div>
              </div>
            </div>

            {/* Primary CTA - Join Institute */}
            <div
              className="rounded-2xl p-4 sm:p-6 border mb-8 max-w-md mx-auto md:max-w-none md:mx-0"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#F8C200' }}
            >
              <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 mb-4">
                <div
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                  style={{ backgroundColor: '#FFF0E0', color: '#8B4513' }}
                >
                  START TODAY
                </div>
                <div className="font-semibold text-center text-sm sm:text-base text-gray-600">
                  Professional Trading Education
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-500 mb-4">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Flexible Batch Timings</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Lifetime Support Included</span>
                </div>
              </div>

              <button
                className="w-full font-bold text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors mb-4 flex items-center justify-center text-white hover:opacity-90"
                style={{ backgroundColor: '#BF2932' }}
              >
                <Target className="w-5 h-5 mr-2" />
                Join Our Trading Institute Now
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-xs sm:text-base">
                  <Phone className="w-4 h-4" />
                  <span>Call: +91-7066334499</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-xs sm:text-base">
                  <Phone className="w-4 h-4" />
                  <span>Call: +91-7066337676</span>
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Practical Trading Strategies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Recordings Provided</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Lifetime Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Trust Signals */}
          <div className="text-center order-first md:order-last">
            {/* Instructor Image Placeholder */}
            <div className="relative mb-8">
              <div
                className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-3xl border flex items-end justify-center overflow-visible"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#F8C200' }}
              >
                <img
                  src="/Sammer-top.png"
                  alt=""
                  className="h-[14rem] sm:h-[20rem] max-w-full absolute bottom-0"
                />
              </div>
              <div className="text-gray-800 font-semibold text-lg mt-4">Sammeer Sarang</div>
              <div className="text-gray-600 text-sm">Stock Market Expert</div>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="px-4 py-2 rounded-lg font-semibold text-sm text-gray-600 bg-gray-50 border border-gray-100">
                HDFC Experience
              </div>
              <div className="px-4 py-2 rounded-lg font-semibold text-sm text-gray-600 bg-gray-50 border border-gray-100">
                HSBC Experience
              </div>
            </div>

            {/* Student Count Indicator */}
            <div
              className="rounded-xl p-6 border max-w-xs sm:max-w-sm mx-auto"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#F8C200' }}
            >
              <div className="text-sm font-semibold mb-2 text-gray-500">FAMILIES TRAINED</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
              <div className="text-gray-500 text-sm">Across Maharashtra since 2017</div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: '#F8C200' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="px-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
                ₹2.5Cr+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Total Student Profits</div>
            </div>
            <div className="px-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">87%</div>
              <div className="text-xs sm:text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="px-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
                Marathi
              </div>
              <div className="text-xs sm:text-sm text-gray-500">& English Teaching</div>
            </div>
            <div className="px-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800">
                Lifetime
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Mentorship Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
