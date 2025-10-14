import React from 'react'
import { Phone, MessageCircle, CheckCircle, TrendingUp, Award, BookOpen, Star } from 'lucide-react'
import Footer from '@/components/Footer'

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#FFF4CC] text-gray-900 py-24 px-4 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <span className="ml-2 text-lg font-semibold text-gray-700">
              Rated 5.0/5 by 2,452+ Students
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
            Professional <span className="font-medium text-brand-primary">Share Market Course</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">For Maharashtra&apos;s Growth</p>
          <p className="text-lg text-gray-600">
            Learn from Sammeer Sarang - 23+ Years Finance Experience
          </p>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Topics Card */}
          <div
            className="bg-white border-2 rounded-3xl shadow-xl p-8 lg:p-10"
            style={{ borderColor: '#F8C200' }}
          >
            {/* Share Market Education Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-light mb-2 text-gray-800">
                SHARE MARKET <span className="font-medium text-brand-primary">EDUCATION</span>
              </h2>
              <p className="text-xl text-gray-600">For Maharashtra&apos;s Growth</p>
            </div>

            <div className="h-1 rounded mb-8" style={{ backgroundColor: '#F8C200' }}></div>

            {/* Topics Covered */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">TOPICS COVERED</h3>
              <p className="text-gray-600 italic text-lg mb-6">
                &quot;Basics to Advance Trading & Investing in Market&quot;
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    Equity, Futures & Derivatives, Index & Stock Options, Commodity & Currency
                    (Forex).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Technical & Fundamental Analysis.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">IPO study & Strategy.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    F&O study, Price Action, Gann Theory, Candlesticks & Line Charts, Pivot, Swing
                    etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    Live Chart Reading & Multi-timeframe Trading.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Trading Strategies, Wealth Creation Skills.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Trading & Life Psychology.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Self-Portfolio & Account Management.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Demat Account Live Training.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">Course Material & Free Apps.</span>
                </li>
              </ul>
            </div>

            <div className="h-1 rounded mb-8" style={{ backgroundColor: '#F8C200' }}></div>

            {/* How It Will Help */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                HOW IT WILL HELP ME TO EARN
              </h3>
              <p className="text-gray-600 italic text-lg mb-6">
                Success is Depend on Your Willingness to Become Successful
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    To complete the Course you need to give{' '}
                    <strong className="text-gray-900">2 hrs daily for 8-10 days</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    After course Daily <strong className="text-gray-900">1-2 hours</strong> will
                    help you become <strong className="text-gray-900">Trader</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    After Course weekly <strong className="text-gray-900">1 hour</strong> will help
                    you become <strong className="text-gray-900">Investor</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-900">
                    <strong>No Share Market background is required.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-700">
                    We teach in <strong className="text-gray-900">simple Marathi language</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp
                    className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                    style={{ color: '#BF2932' }}
                  />
                  <span className="text-gray-900">
                    <strong>You & your family can attend Live or Recording Both.</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div className="h-1 rounded mb-8" style={{ backgroundColor: '#F8C200' }}></div>

            {/* Discount Badge */}
            <div
              className="bg-gradient-to-r text-white rounded-2xl p-8 text-center mb-8 shadow-xl transform hover:scale-105 transition-transform"
              style={{ backgroundImage: 'linear-gradient(to right, #BF2932, #8B1F26)' }}
            >
              <p className="text-6xl font-black">65% OFF</p>
              <p className="text-xl font-semibold mt-2">Limited Time Offer</p>
            </div>

            {/* Contact Info */}
            <div className="bg-white border-2 rounded-2xl p-6" style={{ borderColor: '#F8C200' }}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">CONTACT US</h3>
              <div className="space-y-3">
                <a
                  href="tel:7066334499"
                  className="flex items-center text-lg transition-colors text-gray-700 hover:text-brand-primary"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">7066 33 4499</span>
                </a>
                <a
                  href="tel:7066337676"
                  className="flex items-center text-lg transition-colors text-gray-700 hover:text-brand-primary"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">7066 33 7676</span>
                </a>
                <a
                  href="tel:9359998294"
                  className="flex items-center text-lg transition-colors text-gray-700 hover:text-brand-primary"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">9359 99 8294</span>
                </a>
                <div className="pt-3 border-t" style={{ borderColor: '#F8C200' }}>
                  <p className="flex items-center text-lg text-gray-700">
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
            <div
              className="bg-white rounded-3xl shadow-xl p-8 border-2"
              style={{ borderColor: '#F8C200' }}
            >
              <h1 className="text-4xl font-light mb-3 text-gray-800">
                <span className="font-medium text-brand-primary">Finanthropist</span>
              </h1>
              <p className="text-gray-600 italic text-xl mb-2 font-semibold">
                The Alchemist of Your Finance
              </p>
              <p className="text-gray-700 font-bold text-lg">
                Best Stock Market Education in Marathi
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#F8C200' }}>
                <p className="text-sm text-gray-600">
                  Founded by{' '}
                  <span className="font-semibold text-brand-primary">Sammeer Sarang</span>
                </p>
                <p className="text-sm text-gray-600">
                  23+ Years Finance Experience | Ex-HDFC & HSBC
                </p>
              </div>
            </div>

            {/* What Will You Learn Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-8 border-2"
              style={{ borderColor: '#F8C200' }}
            >
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                WHAT WILL YOU <span className="font-medium text-brand-primary">LEARN</span> IN THE
                COURSE?
              </h2>
              <ul className="space-y-4">
                <li
                  className="flex items-start bg-[#FFF9E6] p-4 rounded-xl border"
                  style={{ borderColor: '#F8C200' }}
                >
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <div>
                    <p className="font-bold text-gray-900">Investing</p>
                    <p className="text-gray-700">
                      Share Market, Mutual Fund & All other investments.
                    </p>
                  </div>
                </li>
                <li
                  className="flex items-start bg-[#FFF9E6] p-4 rounded-xl border"
                  style={{ borderColor: '#F8C200' }}
                >
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <div>
                    <p className="font-bold text-gray-900">Trading</p>
                    <p className="text-gray-700">
                      Equity, Futures, Options, Commodity & Currency (Forex).
                    </p>
                  </div>
                </li>
                <li
                  className="flex items-start bg-[#FFF9E6] p-4 rounded-xl border"
                  style={{ borderColor: '#F8C200' }}
                >
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <div>
                    <p className="font-bold text-gray-900">Technically & Fundamentally Clear</p>
                    <p className="text-gray-700">
                      Selecting Stocks, Entry & Exit points, Risk & Reward.
                    </p>
                  </div>
                </li>
                <li
                  className="flex items-start bg-[#FFF9E6] p-4 rounded-xl border"
                  style={{ borderColor: '#F8C200' }}
                >
                  <BookOpen className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <div>
                    <p className="font-bold text-gray-900">Rules Based Trading</p>
                    <p className="text-gray-700">Small profits, Big Profits, Small Losses.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Free Support Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-8 border-2"
              style={{ borderColor: '#F8C200' }}
            >
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                FREE SUPPORT FOR <span className="font-medium text-brand-primary">LIFETIME</span>
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    Daily <strong className="text-gray-900">Live Market Analysis Sessions</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Q&A session</strong> after every topic.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Trading Sessions</strong> with Technical
                    Team Support.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    Live <strong className="text-gray-900">Demat Account Trading Sessions</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    All <strong className="text-gray-900">Sessions Recordings for Lifetime</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Call & Message Support</strong> for All.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
                  <span className="text-gray-700">
                    Access to <strong className="text-gray-900">exclusive tools and notes</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-primary" />
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
            <div
              className="rounded-3xl shadow-2xl p-10 text-white text-center transform hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(to right, #BF2932, #8B1F26)' }}
            >
              <h3 className="text-2xl font-semibold mb-6 uppercase">
                For Entire Family For Lifetime
              </h3>
              <div className="mb-8">
                <p className="text-7xl font-black mb-3">₹9,912</p>
                <p className="text-4xl line-through opacity-80">₹28,320/-</p>
                <p className="text-lg mt-3">Save ₹18,408 Today!</p>
              </div>
              <button className="w-full bg-white hover:bg-gray-100 text-brand-primary font-black py-5 px-8 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-2xl">
                ENROLL NOW
              </button>
              <p className="text-sm mt-4 opacity-80">
                Limited seats available. Join 10,000+ families today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#FFF4CC] text-gray-900 py-20 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to{' '}
            <span className="font-medium text-brand-primary">Transform Your Financial Future?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Join thousands of successful traders and investors who have learned with{' '}
            <strong className="text-brand-primary">Finanthropist</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:7066334499"
              className="flex items-center bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl transition-all text-lg font-semibold text-white"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Us Now
            </a>
            <a
              href="#"
              className="flex items-center border-2 px-8 py-4 rounded-2xl transition-all text-lg font-semibold text-gray-700 hover:bg-gray-50"
              style={{ borderColor: '#F8C200' }}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <Star className="w-6 h-6 fill-current" style={{ color: '#D4AF37' }} />
            <span className="ml-2 text-lg text-gray-700">
              Trusted by 2,452+ Students with 5.0/5 Rating
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
