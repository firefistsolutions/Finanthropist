import React from 'react'
import { Phone, MessageCircle, CheckCircle, TrendingUp, Award, BookOpen, Star } from 'lucide-react'
import Footer from '@/components/Footer'

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-lg font-semibold">Rated 5.0/5 by 2,452+ Students</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Share Market Course</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">For Maharashtra&apos;s Growth</p>
          <p className="text-lg text-white/80">
            Learn from Sammeer Sarang - 23+ Years Finance Experience
          </p>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Dark Purple Card */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-purple-900 text-white rounded-3xl shadow-2xl p-8 lg:p-10">
            {/* Share Market Education Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">SHARE MARKET EDUCATION</h2>
              <p className="text-xl text-purple-200">For Maharashtra&apos;s Growth</p>
            </div>

            <div className="h-1 bg-white/20 rounded mb-8"></div>

            {/* Topics Covered */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">TOPICS COVERED</h3>
              <p className="text-purple-200 italic text-lg mb-6">
                &quot;Basics to Advance Trading & Investing in Market&quot;
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">
                    Equity, Futures & Derivatives, Index & Stock Options, Commodity & Currency
                    (Forex).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Technical & Fundamental Analysis.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">IPO study & Strategy.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">
                    F&O study, Price Action, Gann Theory, Candlesticks & Line Charts, Pivot, Swing
                    etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">
                    Live Chart Reading & Multi-timeframe Trading.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Trading Strategies, Wealth Creation Skills.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Trading & Life Psychology.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Self-Portfolio & Account Management.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Demat Account Live Training.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-green-400" />
                  <span className="text-white/95">Course Material & Free Apps.</span>
                </li>
              </ul>
            </div>

            <div className="h-1 bg-white/20 rounded mb-8"></div>

            {/* How It Will Help */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3">HOW IT WILL HELP ME TO EARN</h3>
              <p className="text-purple-200 italic text-lg mb-6">
                Success is Depend on Your Willingness to Become Successful
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white/95">
                    To complete the Course you need to give{' '}
                    <strong className="text-white">2 hrs daily for 8-10 days</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white/95">
                    After course Daily <strong className="text-white">1-2 hours</strong> will help
                    you become <strong className="text-white">Trader</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white/95">
                    After Course weekly <strong className="text-white">1 hour</strong> will help you
                    become <strong className="text-white">Investor</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white">
                    <strong>No Share Market background is required.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white/95">
                    We teach in <strong className="text-white">simple Marathi language</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-300" />
                  <span className="text-white">
                    <strong>You & your family can attend Live or Recording Both.</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div className="h-1 bg-white/20 rounded mb-8"></div>

            {/* Discount Badge */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-2xl p-8 text-center mb-8 shadow-xl transform hover:scale-105 transition-transform">
              <p className="text-6xl font-black">65% OFF</p>
              <p className="text-xl font-semibold mt-2">Limited Time Offer</p>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>
              <div className="space-y-3">
                <a
                  href="tel:7066334499"
                  className="flex items-center text-lg hover:text-yellow-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">7066 33 4499</span>
                </a>
                <a
                  href="tel:7066337676"
                  className="flex items-center text-lg hover:text-yellow-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">7066 33 7676</span>
                </a>
                <a
                  href="tel:9359998294"
                  className="flex items-center text-lg hover:text-yellow-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">9359 99 8294</span>
                </a>
                <div className="pt-3 border-t border-white/20">
                  <p className="flex items-center text-lg">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    <span className="font-semibold">Finanthropist L&E</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - White Cards */}
          <div className="space-y-6">
            {/* Brand Header Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
              <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Finanthropist
              </h1>
              <p className="text-purple-600 italic text-xl mb-2 font-semibold">
                The Alchemist of Your Finance
              </p>
              <p className="text-gray-700 font-bold text-lg">
                Best Stock Market Education in Marathi
              </p>
              <div className="mt-4 pt-4 border-t border-purple-100">
                <p className="text-sm text-gray-600">
                  Founded by <span className="font-semibold text-purple-700">Sammeer Sarang</span>
                </p>
                <p className="text-sm text-gray-600">
                  23+ Years Finance Experience | Ex-HDFC & HSBC
                </p>
              </div>
            </div>

            {/* What Will You Learn Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                WHAT WILL YOU LEARN IN THE COURSE?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start bg-blue-50 p-4 rounded-xl">
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900">Investing</p>
                    <p className="text-gray-700">
                      Share Market, Mutual Fund & All other investments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-purple-50 p-4 rounded-xl">
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <div>
                    <p className="font-bold text-gray-900">Trading</p>
                    <p className="text-gray-700">
                      Equity, Futures, Options, Commodity & Currency (Forex).
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-pink-50 p-4 rounded-xl">
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-pink-600" />
                  <div>
                    <p className="font-bold text-gray-900">Technically & Fundamentally Clear</p>
                    <p className="text-gray-700">
                      Selecting Stocks, Entry & Exit points, Risk & Reward.
                    </p>
                  </div>
                </li>
                <li className="flex items-start bg-green-50 p-4 rounded-xl">
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-bold text-gray-900">Rules Based Trading</p>
                    <p className="text-gray-700">Small profits, Big Profits, Small Losses.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Free Support Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 border-2 border-purple-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FREE SUPPORT FOR LIFETIME</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    Daily <strong className="text-gray-900">Live Market Analysis Sessions</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Q&A session</strong> after every topic.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Trading Sessions</strong> with Technical
                    Team Support.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Demat Account Trading Sessions</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    All <strong className="text-gray-900">Sessions Recordings for Lifetime</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Call & Message Support</strong> for All.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    Access to <strong className="text-gray-900">exclusive tools and notes</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-purple-600" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Guidance to help you create your own trading plan
                    </strong>
                    .
                  </span>
                </li>
              </ul>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 text-white text-center transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-6 uppercase">For Entire Family For Lifetime</h3>
              <div className="mb-8">
                <p className="text-7xl font-black mb-3">₹9,912</p>
                <p className="text-4xl line-through opacity-80">₹28,320/-</p>
                <p className="text-lg mt-3 text-white/90">Save ₹18,408 Today!</p>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-black py-5 px-8 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-2xl">
                ENROLL NOW
              </button>
              <p className="text-sm mt-4 text-white/80">
                Limited seats available. Join 10,000+ families today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Join thousands of successful traders and investors who have learned with{' '}
            <strong>Finanthropist</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:7066334499"
              className="flex items-center bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 py-4 rounded-2xl transition-all text-lg font-semibold"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Us Now
            </a>
            <a
              href="#"
              className="flex items-center bg-white/20 backdrop-blur-lg hover:bg-white/30 px-8 py-4 rounded-2xl transition-all text-lg font-semibold"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-lg">Trusted by 2,452+ Students with 5.0/5 Rating</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
