'use client'

import React from 'react'
import { Target } from 'lucide-react'
import { Star, Phone, Calendar, Clock } from 'lucide-react'
export default function V3HeroTrustFirst() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Trust-First Messaging */}
          <div className="text-center lg:text-left">
            {/* Trust Badge - Google Reviews */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-white">
                  <span className="font-bold text-lg">5.0</span>
                  <span className="text-sm ml-1">2,452+ Reviews</span>
                </div>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Maharashtra&apos;s{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-medium">
                Highest Rated
              </span>{' '}
              Institute for Trading Education
            </h1>

            {/* Sub-headline with Credibility */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Learn at <strong>Finanthropist Educare</strong> - Founded by Sammeer Sarang, 23+ Years
              Finance, Ex-HDFC & HSBC, Mentor to 10,000+ Families Across Maharashtra Since 2017
            </p>

            {/* Key Differentiators */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">23+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5.0★</div>
                <div className="text-sm text-blue-200">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10,000+</div>
                <div className="text-sm text-blue-200">Families Trained</div>
              </div>
            </div>

            {/* Primary CTA - Join Institute */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  START TODAY
                </div>
                <div className="text-yellow-300 font-semibold">Professional Trading Education</div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-200 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span>Flexible Batch Timings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>Lifetime Support Included</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-yellow-300 hover:to-orange-300 transition-colors mb-4 flex items-center justify-center">
                <Target className="w-5 h-5 mr-2" />
                Join Our Trading Institute Now
              </button>

              <div className="grid md:grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call: +91-7066334499</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Call: +91-7066337676</span>
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-6 text-sm text-blue-200">
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
          <div className="text-center">
            {/* Instructor Image Placeholder */}
            <div className="relative mb-8">
              <div className="relative max-w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-white/10 rounded-3xl border border-white/30 flex items-end justify-center overflow-visible">
                <img src="/media/hero.png" alt="" className="h-[25rem] w-full absolute bottom-0" />
                <div className="text-center">
                  {/* <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  </div> */}
                </div>
              </div>
              <div className="text-white font-semibold text-lg">Sammeer Sarang</div>
              <div className="text-blue-200 text-sm">Stock Market Expert</div>

              {/* Floating Trust Elements */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold text-sm">
                HDFC Experience
              </div>
              <div className="absolute bottom-8 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                HSBC Experience
              </div>
            </div>

            {/* Student Count Indicator */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-sm font-semibold mb-2">FAMILIES TRAINED</div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-200 text-sm">Across Maharashtra since 2017</div>

              <div className="flex justify-center space-x-1 mt-4">
                {[
                  'https://images.unsplash.com/photo-1494790108755-2616c179e12e?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=32&h=32&fit=crop&crop=face',
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0"
                  >
                    <img
                      src={avatar}
                      alt={`Student ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="text-blue-200 text-sm ml-2">+thousands more</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">₹2.5Cr+</div>
              <div className="text-blue-200 text-sm">Total Student Profits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">87%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">Marathi</div>
              <div className="text-blue-200 text-sm">& English Teaching</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">Lifetime</div>
              <div className="text-blue-200 text-sm">Mentorship Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
