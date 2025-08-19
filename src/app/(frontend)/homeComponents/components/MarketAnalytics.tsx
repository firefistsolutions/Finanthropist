import React, { useState, useEffect } from 'react'
import { useInView, getAnimationClasses } from '../utilities/animations'

export const MarketAnalytics: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.3)
  const [courseData, setCourseData] = useState({
    beginnerCourse: { value: 89, change: 2.4 },
    intermediateCourse: { value: 76, change: 1.8 },
    advancedCourse: { value: 94, change: 3.1 }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseData(prev => ({
        beginnerCourse: { 
          value: Math.min(100, prev.beginnerCourse.value + (Math.random() - 0.3) * 2), 
          change: prev.beginnerCourse.change + (Math.random() - 0.5) * 0.5 
        },
        intermediateCourse: { 
          value: Math.min(100, prev.intermediateCourse.value + (Math.random() - 0.3) * 2), 
          change: prev.intermediateCourse.change + (Math.random() - 0.5) * 0.3 
        },
        advancedCourse: { 
          value: Math.min(100, prev.advancedCourse.value + (Math.random() - 0.3) * 1), 
          change: prev.advancedCourse.change + (Math.random() - 0.5) * 0.4 
        }
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Comprehensive Financial{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-medium">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn market fundamentals, technical analysis, and advanced strategies through our structured educational programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Course Progress</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-sm font-medium">LIVE</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(courseData).map(([key, data]) => (
                    <div key={key} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        {key === 'beginnerCourse' ? 'Beginner Course' : 
                         key === 'intermediateCourse' ? 'Intermediate Course' : 'Advanced Course'}
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {Math.round(data.value)}% Complete
                      </div>
                      <div className={`text-sm font-medium ${
                        data.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {data.change >= 0 ? '+' : ''}{data.change.toFixed(1)}% this week
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Learning Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700">Technical Analysis Mastery</span>
                      <span className="text-green-600 font-medium">✓ Completed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-gray-700">Risk Management</span>
                      <span className="text-blue-600 font-medium">📚 In Progress</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-gray-700">Portfolio Strategies</span>
                      <span className="text-yellow-600 font-medium">🔒 Locked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${getAnimationClasses(sectionInView)}`}>
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Learning Resources</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">Live Sessions</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Join live trading sessions and webinars with expert mentors and fellow students.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">Practice Simulators</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Practice trading strategies risk-free with our advanced market simulators.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">1-on-1 Mentoring</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Get personalized guidance and support from experienced trading professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}