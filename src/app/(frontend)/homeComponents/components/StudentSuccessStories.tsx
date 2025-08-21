import React from 'react'
import { useInView, getAnimationClasses, getStaggerDelay } from '../utilities/animations'
import { useHomeData } from '@/hooks/useHomeData'
import { getGradient } from '../helpers/gradients'

export const StudentSuccessStories: React.FC = () => {
  const [storiesRef, storiesInView] = useInView(0.3)
  const { homeData } = useHomeData()
  const successStories = homeData.successStories

  return (
    <section ref={storiesRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(storiesInView)}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-800">
              Client Success{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real transformations from our clients who achieved their financial goals through our personalized guidance and proven strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories?.map((story, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group`}
                style={getStaggerDelay(index, 200)}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${getGradient(story.background)} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
                      {story.avatar || story.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{story.name}</div>
                      <div className="text-sm text-gray-600 capitalize">{story.profession}</div>
                      <div className="text-xs text-gray-500">{story.location}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    &ldquo;{story.testimonial}&rdquo;
                  </blockquote>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Portfolio Growth</span>
                    <span className="font-semibold text-green-600">{story.results?.portfolioGrowth}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Time Period</span>
                    <span className="font-semibold text-gray-800">{story.results?.timePeriod}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Investment Style</span>
                    <span className="font-semibold text-blue-600">{story.results?.strategy}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Client since {story.results?.timePeriod?.split(' ')[0]}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${getAnimationClasses(storiesInView)}`}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View More Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}