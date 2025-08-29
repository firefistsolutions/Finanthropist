'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VersionSwitcher from '@/components/VersionSwitcher'
import CourseHeroSection from './courseComponents/CourseHeroSection'
import GoogleReviewsShowcase from './courseComponents/GoogleReviewsShowcase'
import FinanthropistPhilosophy from './courseComponents/FinanthropistPhilosophy'
import FreeWebinarFocus from './courseComponents/FreeWebinarFocus'
import CourseOfferings from './courseComponents/CourseOfferings'
import LearningOutcomes from './courseComponents/LearningOutcomes'
import InstructorProfile from './courseComponents/InstructorProfile'
import StudentTestimonials from './courseComponents/StudentTestimonials'
import CourseFeatures from './courseComponents/CourseFeatures'
import FAQ from './courseComponents/FAQ'
import EnrollmentCTA from './courseComponents/EnrollmentCTA'

// 🚀 DEVELOPMENT MODE CONFIGURATION
// Toggle sections on/off for easier development and testing
const DEV_CONFIG = {
  // Set to true to enable development mode with section toggles
  enabled: true,
  
  // Toggle individual sections (true = show, false = hide)
  sections: {
    courseHero: true,           // Trading course hero section (trust-first approach)
    googleReviews: true,        // 4.9/5 Google reviews showcase (social proof powerhouse)
    philosophy: true,           // Finanthropist philosophy & authentic teaching approach
    freeWebinar: true,          // FREE webinar focus (primary conversion driver)
    courseOfferings: true,      // Available trading courses
    learningOutcomes: true,     // What students will learn in trading
    instructorProfile: true,    // Sameer Sarang profile & credibility
    testimonials: true,         // Student trading success stories
    courseFeatures: true,       // Course features and benefits
    faq: true,                 // Frequently asked questions
    enrollmentCTA: true,        // Course enrollment call-to-action
  },
  
  // Add spacing around active sections for scroll testing
  addTestingSpaces: false,
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <VersionSwitcher />
      
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
        
        {/* 1. Hero Section - Trust-First Approach */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseHero) && <CourseHeroSection />}
        
        {/* 2. Google Reviews Showcase - Social Proof Powerhouse */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.googleReviews) && <GoogleReviewsShowcase />}
        
        {/* 3. Finanthropist Philosophy - Authentic Teaching Approach */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.philosophy) && <FinanthropistPhilosophy />}
        
        {/* 4. FREE Webinar Focus - Primary Conversion Driver */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.freeWebinar) && <FreeWebinarFocus />}
        
        {/* 5. Instructor Profile - Credibility Building */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.instructorProfile) && <InstructorProfile />}
        
        {/* 6. Course Offerings - Comprehensive Information */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseOfferings) && <CourseOfferings />}
        
        {/* 7. Learning Outcomes - What Students Learn */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.learningOutcomes) && <LearningOutcomes />}
        
        {/* 8. Student Success Stories - Results-Driven Social Proof */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.testimonials) && <StudentTestimonials />}
        
        {/* 9. Course Features - Value Proposition */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseFeatures) && <CourseFeatures />}
        
        {/* 10. FAQ Section - Trust Building */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.faq) && <FAQ />}
        
        {/* 11. Final Enrollment CTA - Conversion Close */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.enrollmentCTA) && <EnrollmentCTA />}

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