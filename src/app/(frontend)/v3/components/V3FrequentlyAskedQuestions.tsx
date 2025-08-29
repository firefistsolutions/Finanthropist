'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, MessageCircle, Target, Lightbulb } from 'lucide-react'

export default function V3FrequentlyAskedQuestions() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      category: "Institute & Learning",
      questions: [
        {
          question: "Is our institute suitable for complete beginners?",
          answer: "Absolutely! 60% of our 25,000+ students were complete beginners when they started. We begin from absolute basics and progress systematically. Our Google reviews confirm this - many students mention starting with zero knowledge. Our institute curriculum is designed in simple Marathi and English to ensure everyone understands."
        },
        {
          question: "What support do I get after completing our program?",
          answer: "You get LIFETIME mentorship and support. This includes: ongoing guidance for your trades, daily stock recommendations, access to our exclusive student community, regular market updates, and direct access to Sameer sir for questions. This lifetime support is what our 5.0/5 Google rating students love most."
        },
        {
          question: "How is our institute different from YouTube videos or free content?",
          answer: "Free content teaches theory without practical application. Our institute provides: systematic step-by-step learning, live market training with real money, personalized guidance for your specific situation, proven methods that we use ourselves, and most importantly - lifetime mentorship to ensure your success."
        }
      ]
    },
    {
      category: "Instructor & Credibility", 
      questions: [
        {
          question: "What is Sameer Sarang's background and experience?",
          answer: "Sameer Sarang has 23+ years in finance: 16 years at HDFC Bank, experience with HSBC, co-author of 'Billionaire Mindset' book, and has trained 25,000+ students since 2017. His corporate banking background gives him deep understanding of financial markets that pure trainers don't have."
        },
        {
          question: "Are the Google reviews genuine? Can I verify them?",
          answer: "Absolutely genuine! We have 2,452+ verified Google reviews with 5.0/5 rating. You can verify each review on our Google Business Profile. We encourage you to read them, contact reviewers if possible, and even speak to our current students before joining our institute."
        },
        {
          question: "Why should I choose Finanthropist over other institutes?",
          answer: "Key differences: (1) Highest Google rating in Maharashtra (5.0/5 from 2,452+ reviews), (2) Instructor with real 23+ years finance experience, (3) Teaching in Marathi & English, (4) Lifetime support included, (5) 87% proven success rate, (6) Focus on Maharashtra investors' needs."
        }
      ]
    },
    {
      category: "Practical Learning",
      questions: [
        {
          question: "Will I learn with real money or just theory?",
          answer: "Both! We start with theory and paper trading for safety, then progress to live market application with real money (your choice of amount). Our institute program includes live trading sessions where you can see actual trades being placed and learn practical execution."
        },
        {
          question: "How much money do I need to start trading after the course?",
          answer: "You can start with as little as ₹10,000-₹25,000. We teach you to grow gradually. Many students start small and build their capital over time. The focus is on learning proper risk management first, then scaling up as your confidence and skills grow."
        },
        {
          question: "Do you provide specific stock recommendations?",
          answer: "Yes! Our institute program includes: daily stock tips, weekly market analysis, specific buy/sell recommendations with reasoning, live trading alerts, and market outlook updates. However, we also teach you to become independent and make your own analysis."
        }
      ]
    },
    {
      category: "Institute Program Details",
      questions: [
        {
          question: "Are institute classes taught in Marathi or English?",
          answer: "Both! All sessions are conducted in Marathi and English simultaneously. Technical terms are explained in both languages. This is especially helpful for Maharashtra students who are more comfortable with Marathi explanations for complex financial concepts."
        },
        {
          question: "How long does our institute program take to complete?",
          answer: "Our core institute program is 7 weeks intensive training. However, learning continues with lifetime support. Most students start seeing results within 2-3 months of completing the program. The recorded sessions are available for lifetime access for revision."
        },
        {
          question: "What if I can't attend live sessions due to my job timing?",
          answer: "No problem! All sessions are recorded and available for lifetime access. Many working professionals learn this way. You also get direct access to instructors for doubts and can schedule one-on-one calls when needed."
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  let questionIndex = 0

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to all your questions about our trading institute, 
            teaching methodology, and what you can expect from your learning journey.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{category.category}</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {/* Questions in Category */}
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++
                  return (
                    <div
                      key={currentIndex}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {openFAQ === currentIndex ? (
                            <ChevronUp className="w-6 h-6 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                      </button>
                      
                      {openFAQ === currentIndex && (
                        <div className="px-8 pb-6">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-light mb-6">
              Still Have{' '}
              <span className="text-yellow-300 font-medium">Questions?</span>
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Can't find what you're looking for? Our team is here to help. 
              Get personalized answers to all your questions about our institute and trading.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Call Us Directly</h4>
                <p className="text-blue-100 text-sm mb-3">Get instant answers to your questions</p>
                <div className="text-yellow-300 font-semibold">+91-7066334499</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">WhatsApp Chat</h4>
                <p className="text-blue-100 text-sm mb-3">Quick responses to your queries</p>
                <div className="text-yellow-300 font-semibold">Chat Now</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Institute Tour</h4>
                <p className="text-blue-100 text-sm mb-3">Visit our institute and meet faculty</p>
                <div className="text-yellow-300 font-semibold">Aug 26, 8 PM</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Visit Our Institute
              </button>
            </div>

            <div className="mt-6 text-blue-200 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span>Pro tip: Visit our institute first - you'll get answers to most questions and meet our faculty!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Reinforcement */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Why 2,452+ Students Trust Our Answers
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-light text-blue-600 mb-2">5.0★</div>
                <div className="text-gray-600 text-sm">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-light text-blue-600 mb-2">23+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-light text-blue-600 mb-2">25K+</div>
                <div className="text-gray-600 text-sm">Students Guided</div>
              </div>
              <div>
                <div className="text-2xl font-light text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}