'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Briefcase, BookOpen, Shield } from 'lucide-react'
import { TRUST_CONSTANTS } from '@/constants/trust'

export default function V3InstructorCredibility() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Instructor Photo */}
          <div className="text-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto rounded-3xl border bg-white border-brand-accent overflow-hidden">
              <Image
                src="/Sammer-top.png"
                alt="Sammeer Sarang"
                width={320}
                height={384}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Bio and Credentials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-gray-700 mb-6">
              Sammeer Sarang simplifies complex market concepts for everyday learners. With 23+
              years in finance (ex-HDFC, HSBC) and thousands of Families mentored since 2017, his
              approach blends disciplined frameworks with practical, real-market training.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div
                className="flex items-center space-x-3 p-3 rounded-xl border bg-white"
                style={{ borderColor: '#FFCDD2' }}
              >
                <Award className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-gray-800">Author, Billionaire Mindset</span>
              </div>
              <div
                className="flex items-center space-x-3 p-3 rounded-xl border bg-white"
                style={{ borderColor: '#FFCDD2' }}
              >
                <Briefcase className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-gray-800">23+ Years Finance Experience</span>
              </div>
              <div
                className="flex items-center space-x-3 p-3 rounded-xl border bg-white"
                style={{ borderColor: '#FFCDD2' }}
              >
                <BookOpen className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-gray-800">Live Market Training</span>
              </div>
              <div
                className="flex items-center space-x-3 p-3 rounded-xl border bg-white"
                style={{ borderColor: '#FFCDD2' }}
              >
                <Shield className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-gray-800">Risk-First, Rule-Based Approach</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {TRUST_CONSTANTS.totalFamiliesTrained}
                </div>
                <div className="text-xs text-gray-500">Families Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {TRUST_CONSTANTS.averageRating.toFixed(1)}★
                </div>
                <div className="text-xs text-gray-500">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {TRUST_CONSTANTS.successRatePercent}%
                </div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#about"
                className="px-6 py-3 rounded-xl bg-brand-primary text-white font-semibold"
              >
                About Sammeer
              </a>
              <a
                href="#consultation"
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
