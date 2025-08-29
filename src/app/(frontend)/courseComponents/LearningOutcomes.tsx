'use client'

import React from 'react'
import { Target, TrendingUp, Shield, BookOpen, Users, Award } from 'lucide-react'

export default function LearningOutcomes() {
  const outcomes = [
    {
      icon: Target,
      title: "Master Trading Fundamentals",
      description: "Understand stock market basics, how it works, and key trading concepts that every successful trader must know.",
      skills: ["Market Structure", "Order Types", "Trading Psychology", "Market Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Technical Analysis Expertise",
      description: "Learn to read charts, identify patterns, and use technical indicators to make informed trading decisions.",
      skills: ["Chart Patterns", "Technical Indicators", "Trend Analysis", "Price Action"]
    },
    {
      icon: Shield,
      title: "Risk Management Mastery",
      description: "Develop sophisticated risk management strategies to protect your capital and maximize profits.",
      skills: ["Position Sizing", "Stop Loss", "Risk-Reward Ratio", "Portfolio Management"]
    },
    {
      icon: BookOpen,
      title: "Strategy Development",
      description: "Create and implement profitable trading strategies tailored to different market conditions.",
      skills: ["Day Trading", "Swing Trading", "Options Strategies", "Market Timing"]
    },
    {
      icon: Users,
      title: "Live Trading Experience",
      description: "Practice with real market scenarios and get hands-on experience with live trading sessions.",
      skills: ["Live Market Analysis", "Real-time Decision Making", "Trade Execution", "Performance Review"]
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Earn industry-recognized certification and join our exclusive community of successful traders.",
      skills: ["Certificate of Completion", "Alumni Network", "Ongoing Support", "Advanced Resources"]
    }
  ]

  const stats = [
    { number: "95%", label: "Course Completion Rate", description: "Students who complete our courses" },
    { number: "87%", label: "Success Rate", description: "Students who become profitable traders" },
    { number: "₹2.5L", label: "Average Annual Returns", description: "Reported by our successful students" },
    { number: "4.8/5", label: "Student Rating", description: "Average course rating from 10,000+ reviews" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What You&apos;ll <span className="text-blue-600">Achieve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to transform you from a beginner to a confident, profitable trader with practical skills and real-world experience.
          </p>
        </div>

        {/* Learning Outcomes Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{outcome.title}</h3>
                <p className="text-gray-600 mb-6">{outcome.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {outcome.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Track Record of Success
            </h3>
            <p className="text-blue-200 text-lg">
              Don&apos;t just take our word for it - see what our students have achieved
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Your Learning Journey
            </h3>
            <p className="text-xl text-gray-600">
              A structured path from beginner to professional trader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  week: "Week 1-2",
                  title: "Foundation Building",
                  description: "Learn stock market basics, terminology, and how markets operate",
                  position: "left"
                },
                {
                  week: "Week 3-6",
                  title: "Technical Analysis",
                  description: "Master chart reading, patterns, and technical indicators",
                  position: "right"
                },
                {
                  week: "Week 7-10",
                  title: "Strategy Development",
                  description: "Develop and backtest your own trading strategies",
                  position: "left"
                },
                {
                  week: "Week 11-12",
                  title: "Live Trading",
                  description: "Apply your knowledge in real market conditions with guidance",
                  position: "right"
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${
                  phase.position === 'right' ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={`lg:w-1/2 ${phase.position === 'right' ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-blue-600 font-semibold text-sm mb-2">{phase.week}</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{phase.title}</h4>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}