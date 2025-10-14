'use client'

import React from 'react'
import Footer from '@/components/Footer'

// V3 Components - Conversion Perfect Landing Page
import V3HeroTrustFirst from './components/V3HeroTrustFirst'
import V3GoogleReviewsProof from './components/V3GoogleReviewsProof'
import V3WebinarFocusedCTA from './components/V3WebinarFocusedCTA'
import V3InstructorCredibility from './components/V3InstructorCredibility'
import V3CourseValueProposition from './components/V3CourseValueProposition'
// import V3StudentResults from './components/V3StudentResults'
// import V3SmartInvestorsShowcase from './components/V3SmartInvestorsShowcase'
import V3FrequentlyAskedQuestions from './components/V3FrequentlyAskedQuestions'
import V3FinalConversionCTA from './components/V3FinalConversionCTA'

export default function V3HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Hero Section - Trust-First with Google Reviews */}
        <V3HeroTrustFirst />

        {/* 2. Google Reviews Social Proof */}
        <V3GoogleReviewsProof />

        {/* 3. Webinar-Focused Primary CTA */}
        <V3WebinarFocusedCTA />

        {/* 4. Instructor Credibility */}
        <V3InstructorCredibility />

        {/* 5. Course Value Proposition */}
        <V3CourseValueProposition />

        {/* 6. Student Results & Success Stories */}
        {/* <V3StudentResults /> */}

        {/* 7. Smart Investors Showcase with Live PnL */}
        {/* <V3SmartInvestorsShowcase /> */}

        {/* 8. Frequently Asked Questions */}
        <V3FrequentlyAskedQuestions />

        {/* 9. Final Conversion CTA */}
        <V3FinalConversionCTA />
      </main>

      <Footer />
    </div>
  )
}
