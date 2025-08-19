'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
  TradingFeatures
} from './homeComponents/components'

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        <HeroSection />
        <EducationStats />
        <InteractiveChart />
        <TradingPlatformShowcase />
        <MarketAnalytics />
        <TradingFeatures />
        <TrainerProfile />
        <ServicesStructure />
        <StudentSuccessStories />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}