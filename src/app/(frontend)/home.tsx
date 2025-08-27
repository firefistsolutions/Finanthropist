'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VersionSwitcher from '@/components/VersionSwitcher'
import CourseHeroSection from './courseComponents/CourseHeroSection'
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
    courseHero: true,          // Trading course hero section
    courseOfferings: true,     // Available trading courses
    learningOutcomes: true,    // What students will learn in trading
    instructorProfile: true,   // Sameer Sarang profile
    testimonials: true,        // Student trading success stories
    courseFeatures: true,      // Course features and benefits
    faq: true,                // Frequently asked questions
    enrollmentCTA: true,       // Course enrollment call-to-action
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
        
        {/* 1. Trading Course Hero Section */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseHero) && <CourseHeroSection />}
        
        {/* 2. Course Offerings */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseOfferings) && <CourseOfferings />}
        
        {/* 3. Learning Outcomes */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.learningOutcomes) && <LearningOutcomes />}
        
        {/* 4. Instructor Profile */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.instructorProfile) && <InstructorProfile />}
        
        {/* 5. Student Testimonials */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.testimonials) && <StudentTestimonials />}
        
        {/* 6. Course Features */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.courseFeatures) && <CourseFeatures />}
        
        {/* 7. FAQ Section */}
        {(!DEV_CONFIG.enabled || DEV_CONFIG.sections.faq) && <FAQ />}
        
        {/* 8. Enrollment CTA */}
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