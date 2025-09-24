'use client'

import React, { useState, useEffect } from 'react'
import { Heart, TrendingUp, Users, BookOpen, Award } from 'lucide-react'

// Animation utilities
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

const getAnimationClasses = (inView: boolean) => 
  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

const getStaggerDelay = (index: number) => ({ transitionDelay: `${index * 100}ms` })

export default function FinanthropistPhilosophy() {
  const [sectionRef, sectionInView] = useInView(0.3)

  const philosophyPillars = [
    {
      icon: Heart,
      title: 'Finance + Philanthropist',
      description: 'Our name combines "Finance" and "Philanthropist" - we work for your benefit first, not ours.',
      insight: 'A philanthropist works for others\' good without seeing their own benefit first.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Unlimited Income Mindset',
      description: 'We teach that expenses are limited, but income is unlimited. Break the middle-class mindset.',
      insight: 'There is no limit to income if you think differently about money.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Proven Track Record',
      description: '7+ years of teaching experience with thousands of successful students using our methods.',
      insight: 'These methods have made us and thousands of students successful.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Practical Application',
      description: 'Everything we teach is thoughtfully crafted from real experience, not copied from elsewhere.',
      insight: 'We use what we teach and have made good money using these methods.',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const coreValues = [
    {
      title: 'Follow Rules Seriously',
      description: 'Success comes from following our proven system exactly as taught',
      icon: '📋'
    },
    {
      title: 'Family Involvement',
      description: 'Share recordings with family - discuss income sources, not just expenses',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Trust the Process',
      description: 'Have faith in our 7+ years of proven teaching methodology',
      icon: '🤝'
    },
    {
      title: 'Active Learning',
      description: 'Keep pen and paper, take notes, learn from basics - don\'t postpone',
      icon: '✍️'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              The{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">
                Finanthropist
              </span>{' '}
              Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Understanding our name and approach: Why we combine <strong>Finance + Philanthropist</strong> to create 
            life-changing financial education that puts your success first.
          </p>
        </div>

        {/* Philosophy Explanation */}
        <div className={`mb-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-yellow-400">What Does &quot;Finanthropist&quot; Mean?</h3>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    <strong>Finance</strong> relates to money and wealth creation.
                  </p>
                  <p>
                    <strong>Philanthropist</strong> is a person who works for others&apos; benefit without thinking of their own benefit first.
                  </p>
                  <p>
                    We combined these words because we give you financial education that benefits YOU first. 
                    Your success is our priority, and only after you succeed do we benefit.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <div className="text-6xl">🤝</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-light text-center mb-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            Our Core <span className="text-yellow-400">Principles</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophyPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 group ${getAnimationClasses(sectionInView)}`}
                  style={getStaggerDelay(index)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-white">{pillar.title}</h4>
                  <p className="text-blue-100 mb-4 leading-relaxed">{pillar.description}</p>
                  <div className="bg-yellow-400/20 border-l-4 border-yellow-400 pl-4 py-2">
                    <p className="text-yellow-300 text-sm italic">&quot;{pillar.insight}&quot;</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-light text-center mb-12 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
            How We Ensure Your <span className="text-yellow-400">Success</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 ${getAnimationClasses(sectionInView)}`}
                style={getStaggerDelay(index)}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-white">{value.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Alchemist Concept */}
        <div className={`transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 md:p-12 border border-yellow-400/30 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-yellow-400">
                &quot;Alchemist of Finance&quot;
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                An Alchemist has the power to touch any metal and convert it into gold. 
                Whatever business or field an Alchemist enters, they bring prosperity.
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Through our financial education, we aim to give you this alchemist power - 
                the ability to create wealth and prosperity in any situation, bringing gold to your life and family.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-sm text-yellow-300">Touch any business</div>
                  <div className="text-xs text-blue-200">Turn it profitable</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="text-sm text-yellow-300">Transform your mindset</div>
                  <div className="text-xs text-blue-200">From limited to unlimited</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm text-yellow-300">Bring prosperity</div>
                  <div className="text-xs text-blue-200">To you and your family</div>
                </div>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 border border-yellow-400/50">
                <p className="text-yellow-300 font-medium mb-2">Our Tagline:</p>
                <p className="text-white text-lg italic">
                  &quot;Making you the Alchemist of your Financial Future&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${getAnimationClasses(sectionInView)}`}>
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Ready to Become Your Own <span className="text-yellow-400">Financial Alchemist?</span>
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their financial lives through our proven philosophy and methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-10 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Experience Our Philosophy - FREE Webinar
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}