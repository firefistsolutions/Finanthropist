'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need any prior experience in stock market to join this course?",
      answer: "No, absolutely not! Our course is designed for complete beginners. We start with the very basics of stock market and gradually build up to advanced concepts. Many of our most successful students had zero experience when they started."
    },
    {
      question: "How much money do I need to start trading after the course?",
      answer: "You can start practicing with as little as ₹5,000 to ₹10,000. However, we recommend having at least ₹25,000 for comfortable trading. The course teaches you how to start small and gradually increase your capital as you gain confidence."
    },
    {
      question: "Is this course available in Marathi language?",
      answer: "Yes! All our courses are available in both Marathi and English. Sameer sir is fluent in Marathi and ensures that complex concepts are explained in simple Marathi terms for better understanding."
    },
    {
      question: "What is the duration of the course and how much time should I dedicate daily?",
      answer: "The complete course ranges from 6-20 weeks depending on which course you choose. We recommend dedicating 1-2 hours daily for video lessons and practice. The course is self-paced, so you can learn according to your schedule."
    },
    {
      question: "Will I get ongoing support after completing the course?",
      answer: "Absolutely! You get lifetime access to our exclusive community, monthly live sessions, market updates, and continued support from our team. Our relationship doesn't end with course completion."
    },
    {
      question: "What if I don't make profits after taking the course?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with the course content. However, 87% of our students who follow our strategies and risk management principles become profitable within 6 months."
    },
    {
      question: "Can I access the course on my mobile phone?",
      answer: "Yes! Our course platform is fully mobile-friendly. You can watch videos, download resources, and participate in live sessions from your smartphone, tablet, or computer."
    },
    {
      question: "Are there any hidden charges or additional fees?",
      answer: "No hidden charges whatsoever! The course fee you pay is all-inclusive - video lessons, resources, live sessions, community access, support, and certificate. No additional fees ever."
    },
    {
      question: "How is this different from free YouTube videos on trading?",
      answer: "While YouTube has scattered information, our course provides a structured, step-by-step learning path. You get personalized guidance, live support, proven strategies, risk management techniques, and a community of successful traders."
    },
    {
      question: "Can homemakers and retired people also benefit from this course?",
      answer: "Absolutely! Many of our successful students are homemakers and retired individuals. The flexible timing and comprehensive support make it perfect for anyone who wants to create an additional income source."
    },
    {
      question: "Do you provide any trading software or tools?",
      answer: "We teach you to use free and widely available trading platforms. Additionally, you get access to our proprietary risk management calculators, trading diary templates, and market analysis tools."
    },
    {
      question: "What kind of returns can I expect from trading?",
      answer: "While we cannot guarantee specific returns (market investments carry risks), our students typically report monthly profits ranging from ₹15,000 to ₹1,00,000+ depending on their capital and trading frequency. Results vary based on individual dedication and market conditions."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our stock market trading courses
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert counselors are here to help you choose the right course and answer any specific questions you may have about your trading journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Talk to Course Counselor
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Free Demo
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>📞 Free consultation call</span>
            <span>💬 WhatsApp support</span>
            <span>⚡ Instant response</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-2xl mb-2">📞</div>
            <h4 className="font-semibold text-gray-800 mb-1">Phone Support</h4>
            <p className="text-gray-600 text-sm">Call us Mon-Sat 10 AM - 7 PM</p>
            <p className="text-blue-600 font-semibold">+91-98765-43210</p>
          </div>
          
          <div className="p-6">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="font-semibold text-gray-800 mb-1">WhatsApp Support</h4>
            <p className="text-gray-600 text-sm">Quick response guaranteed</p>
            <p className="text-blue-600 font-semibold">+91-98765-43210</p>
          </div>
          
          <div className="p-6">
            <div className="text-2xl mb-2">✉️</div>
            <h4 className="font-semibold text-gray-800 mb-1">Email Support</h4>
            <p className="text-gray-600 text-sm">Detailed queries welcome</p>
            <p className="text-blue-600 font-semibold">info@finanthropist.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}