'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedHero from './components/GSAPHero/AnimatedHero'
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

// 🚀 DEVELOPMENT MODE CONFIGURATION
// Toggle sections on/off for easier development and testing
const DEV_CONFIG = {
  // Set to true to enable development mode with section toggles
  enabled: false,
  
  // Toggle individual sections (true = show, false = hide)
  sections: {
    animatedHero: false,        // GSAP animated hero section
    marketAnalytics: false,     // Live market ticker
    twitterTestimonials: false, // Twitter social proof
    educationStats: false,      // Stats & credibility
    trainerProfile: false,      // Expert profile
    servicesStructure: true,    // Services overview - CURRENTLY ACTIVE
    tradingPlatform: false,     // Platform showcase
    tradingFeatures: false,     // Professional features
    interactiveChart: false,    // Interactive chart
    successStories: false,      // Success stories
    marketData: false,          // Market data visualization
    finalCTA: false,            // Final call-to-action
  },
  
  // Add spacing around active sections for scroll testing
  addTestingSpaces: true,
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden">
        {/* 🔧 DEVELOPMENT MODE ACTIVE */}
        {DEV_CONFIG.enabled && DEV_CONFIG.addTestingSpaces && (
          <div className="h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Development Mode</h2>
              <p className="text-xl text-gray-600">Active sections: {Object.entries(DEV_CONFIG.sections).filter(([_, active]) => active).map(([name, _]) => name).join(', ')}</p>
            </div>
          </div>
        )}
        
        {/* 1. GSAP Animated Hero */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.animatedHero) && <AnimatedHero />}
        
        {/* 2. Real-time Market Analytics */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.marketAnalytics) && <MarketAnalytics />}
        
        {/* 3. Twitter Social Proof */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.twitterTestimonials) && <TwitterTestimonials />}
        
        {/* 4. Education Stats & Credibility */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.educationStats) && <EducationStats />}
        
        {/* 5. Trainer Profile */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.trainerProfile) && <TrainerProfile />}
        
        {/* 6. Services Overview - CURRENTLY ACTIVE */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.servicesStructure) && <ServicesStructure />}
        
        {/* 7. Trading Platform Showcase */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.tradingPlatform) && <TradingPlatformShowcase />}
        
        {/* 8. Trading Features */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.tradingFeatures) && <TradingFeatures />}
        
        {/* 9. Interactive Chart */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.interactiveChart) && <InteractiveChart />}
        
        {/* 10. Success Stories */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.successStories) && <StudentSuccessStories />}
        
        {/* 11. Market Data Visualization */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.marketData) && <MarketDataVisualization />}
        
        {/* 12. Final CTA */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.finalCTA) && <FinalCTA />}

        {/* 🔧 DEVELOPMENT MODE FOOTER */}
        {DEV_CONFIG.enabled && DEV_CONFIG.addTestingSpaces && (
          <div className="h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">End of Development Section</h2>
              <p className="text-xl text-gray-600">Section testing completed</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}