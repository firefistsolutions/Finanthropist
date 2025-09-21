'use client'

import React from 'react'
import { HandHeart, DollarSign, TrendingUp, GraduationCap } from 'lucide-react'
import { Award, BookOpen, Users, Briefcase, MapPin, Clock } from 'lucide-react'

export default function V3InstructorCredibility() {
  const credentials = [
    {
      icon: Award,
      title: '23+ years ',
      description: 'Finance experience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'HDFC & HSBC',
      description: 'Experience (senior profile)',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: "Co-author of 'Billionaire Mindset' book",
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: '25,000+ Students Trained',
      description: 'Successful track record since 2017',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: '5.0/5 Google rating ',
      description: 'Proven expertise in financial markets',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const teachingPhilosophy = [
    {
      principle: 'Finance + Philanthropist Approach',
      description: 'We work for your financial benefit first, then ours.',
      icon: HandHeart,
    },
    {
      principle: 'Unlimited Income Mindset',
      description: 'Break middle-class thinking about limited income.',
      icon: DollarSign,
    },
    {
      principle: 'Practical Over Theory',
      description: 'Everything taught from real experience with Live Market.',
      icon: TrendingUp,
    },
    {
      principle: 'Simple Language Teaching',
      description: 'Complex concepts in simple Marathi and English.',
      icon: GraduationCap,
    },
  ]

  const studentResults = [
    {
      name: 'Priya S.',
      location: 'Pune',
      result: '₹50,000/month from trading',
      before: 'Complete beginner',
      timeframe: '6 months',
    },
    {
      name: 'Rahul P.',
      location: 'Mumbai',
      result: '₹2L losses recovered + profitable',
      before: 'Emotional trader',
      timeframe: '8 months',
    },
    {
      name: 'Sunita D.',
      location: 'Nashik',
      result: '₹25,000/month passive income',
      before: 'Only FD investments',
      timeframe: '4 months',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Sammeer Sarang
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maharashtra&apos;s most trusted stock market educator with 23+ years of finance
            experience and a proven track record of transforming lives through practical trading
            education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left - Instructor Profile */}
          <div className="text-center lg:text-left mt-10">
            {/* Profile Image Placeholder */}
            <div className="relative mb-8 flex justify-center flex-col items-center">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl border-4 border-white shadow-2xl flex items-end justify-center">
                <img src="/media/meet2.png" alt="" className="" />
                {/* <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SS</span>
                    </div> */}
              </div>

              {/* Floating Credentials */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                23+ Years Experience
              </div>
              <div className="absolute -bottom-4 -left-3 bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                25,000+ Families
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-gray-800">Sammeer Sarang</div>
              <div className="text-gray-500">Stock Market Expert & Educator</div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">5.0★</div>
                <div className="text-gray-600 text-sm">Google Rating</div>
                <div className="text-gray-500 text-xs">2,452+ Reviews</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-light text-blue-600 mb-2">87%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
                <div className="text-gray-500 text-xs">Student Profitability</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Connect Directly</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">+91-7066334499</div>
                    <div className="text-gray-600 text-sm">Direct consultation available</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Nashik, Maharashtra</div>
                    <div className="text-gray-600 text-sm">Serving all of Maharashtra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Credentials */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Professional Credentials</h3>
            <div className="grid gap-4 mb-12">
              {credentials.map((credential, index) => {
                const Icon = credential.icon
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${credential.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{credential.title}</div>
                      <div className="text-gray-600 text-sm">{credential.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-800 text-center mb-12">
            The <span className="text-blue-600 font-medium">Finanthropist</span> Teaching Philosophy
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingPhilosophy.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{item.principle}</h4>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Students Choose Sammeer */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-light mb-6">
            Why 10,000+ Families Choose{' '}
            <span className="text-yellow-300 font-medium">Sammeer Sarang</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-light text-yellow-300 mb-2">Real Experience</div>
              <div className="text-blue-100">23+ years in finance, not just teaching theory</div>
            </div>
            <div>
              <div className="text-4xl font-light text-yellow-300 mb-2">Local Understanding</div>
              <div className="text-blue-100">Maharashtra focus with Marathi language support</div>
            </div>
            <div>
              <div className="text-4xl font-light text-yellow-300 mb-2">Proven Results</div>
              <div className="text-blue-100">Hands-on Learning with Real Market Examples</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Learn from Sammeer - Join Our Institute
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call for Personal Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
