'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AnimatedHero } from '@/components/GSAPHero'
import {
  HeroSection,
  EducationStats,
  InteractiveChart,
  TrainerProfile,
  ServicesStructure,
  StudentSuccessStories,
  FinalCTA,
  TradingPlatformShowcase,
  MarketAnalytics,
  TradingFeatures,
  MarketDataVisualization,
  TwitterTestimonials
} from './homeComponents/components'

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden">
        {/* 1. GSAP Animated Hero - First impression with strong value proposition */}
        <AnimatedHero />
        
        {/* 2. Real-time Ticker - Shows we have live market access */}
        <MarketAnalytics />
        
        {/* 3. Social Proof - Build trust early */}
        <TwitterTestimonials />
        
        {/* 4. Stats & Credibility - Quantify our success */}
        <EducationStats />
        
        {/* 5. Expert Profile - Personal connection & trust */}
        <TrainerProfile />
        
        {/* 6. Services Overview - What we offer */}
        <ServicesStructure />
        
        {/* 7. Platform Showcase - Our tools & technology */}
        <TradingPlatformShowcase />
        
        {/* 8. Professional Features - Detailed service benefits */}
        <TradingFeatures />
        
        {/* 9. Interactive Chart - Engagement & education */}
        <InteractiveChart />
        
        {/* 10. Success Stories - More social proof before CTA */}
        <StudentSuccessStories />
        
        {/* 11. Live Market Data - Technical credibility before final push */}
        <MarketDataVisualization />
        
        {/* 12. Final CTA - Convert after building complete trust */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}