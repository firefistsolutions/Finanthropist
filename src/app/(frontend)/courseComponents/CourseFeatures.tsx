'use client'

import React from 'react'
import { 
  Video, 
  Users, 
  Download, 
  Award, 
  Clock, 
  Smartphone, 
  HeadphonesIcon, 
  BookOpen,
  TrendingUp,
  Shield,
  MessageSquare,
  RefreshCw
} from 'lucide-react'

export default function CourseFeatures() {
  const features = [
    {
      icon: Video,
      title: "HD Video Lessons",
      description: "120+ high-quality video lessons with crystal clear explanations",
      highlight: "Lifetime access to all content"
    },
    {
      icon: Users,
      title: "Live Trading Sessions",
      description: "Weekly live sessions where you trade alongside Sameer sir",
      highlight: "Real-time guidance"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "PDFs, checklists, templates, and trading calculators",
      highlight: "50+ resources included"
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Industry-recognized certificate upon course completion",
      highlight: "Boost your credibility"
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Self-paced learning with no time restrictions",
      highlight: "Fits your schedule"
    },
    {
      icon: Smartphone,
      title: "Mobile & Desktop Access",
      description: "Learn anywhere, anytime on any device",
      highlight: "Cross-platform compatibility"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team to help with any questions",
      highlight: "Quick response guaranteed"
    },
    {
      icon: MessageSquare,
      title: "Private Community",
      description: "Exclusive Telegram group for students to connect and share",
      highlight: "Network with successful traders"
    },
    {
      icon: TrendingUp,
      title: "Live Market Analysis",
      description: "Daily market insights and analysis from expert team",
      highlight: "Stay ahead of the market"
    },
    {
      icon: Shield,
      title: "Risk Management Tools",
      description: "Advanced calculators and tools to manage trading risks",
      highlight: "Protect your capital"
    },
    {
      icon: BookOpen,
      title: "Trading Diary Template",
      description: "Professional trading journal to track your progress",
      highlight: "Monitor your growth"
    },
    {
      icon: RefreshCw,
      title: "Lifetime Updates",
      description: "Free access to all future course updates and new content",
      highlight: "Stay current with markets"
    }
  ]

  const learningMethods = [
    {
      title: "Video-Based Learning",
      description: "Comprehensive video lessons with screen sharing and live examples",
      benefits: ["Visual learning", "Pause & replay", "Step-by-step guidance"]
    },
    {
      title: "Interactive Sessions",
      description: "Live Q&A sessions and one-on-one doubt clearing",
      benefits: ["Real-time help", "Personal attention", "Immediate clarification"]
    },
    {
      title: "Practical Assignments",
      description: "Hands-on exercises and real market analysis practice",
      benefits: ["Apply knowledge", "Build confidence", "Get feedback"]
    },
    {
      title: "Community Learning",
      description: "Learn from peer experiences and success stories",
      benefits: ["Peer support", "Shared experiences", "Motivation boost"]
    }
  ]

  const guarantee = [
    "30-day money-back guarantee",
    "No questions asked refund policy",
    "Full support during trial period",
    "Complete course access for 30 days"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Everything You Need to <span className="text-blue-600">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive course package includes all the tools, resources, and support you need to become a successful trader.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {feature.highlight}
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Multiple Ways to Learn
            </h3>
            <p className="text-lg text-gray-600">
              We understand that everyone learns differently. That&apos;s why we offer various learning methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {learningMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h4>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <div className="space-y-2">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Structure Comparison */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              What Makes Our Course Different?
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional Learning */}
            <div>
              <h4 className="text-xl font-bold text-red-600 mb-6 text-center">
                Traditional Stock Market Learning
              </h4>
              <div className="space-y-4">
                {[
                  "Only theoretical knowledge",
                  "No practical guidance",
                  "Generic strategies",
                  "Limited support",
                  "No community access",
                  "One-time learning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div>
              <h4 className="text-xl font-bold text-green-600 mb-6 text-center">
                Our Comprehensive Approach
              </h4>
              <div className="space-y-4">
                {[
                  "Theory + Live market practice",
                  "Real-time trading guidance",
                  "Personalized strategies",
                  "24/7 dedicated support",
                  "Exclusive community access",
                  "Lifetime updates & learning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              100% Money-Back Guarantee
            </h3>
            <p className="text-xl text-green-100 mb-8">
              We&apos;re so confident in our course quality that we offer a complete refund if you&apos;re not satisfied.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {guarantee.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-200 flex-shrink-0" />
                  <span className="text-green-100">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Risk-Free Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}