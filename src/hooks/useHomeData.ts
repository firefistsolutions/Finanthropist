'use client'

import { useState, useEffect } from 'react'
import type { Home } from '@/payload-types'
import { heroStats, mainStats } from '@/app/(frontend)/homeComponents/mockData/stats'
import { services } from '@/app/(frontend)/homeComponents/mockData/services'
import { successStories, successStats } from '@/app/(frontend)/homeComponents/mockData/successStories'

// Static fallback data
export const staticHomeData = {
  heroSection: {
    title: 'Professional Financial Services & Trading Excellence',
    subtitle: 'Transform your financial future with expert portfolio management, advanced trading strategies, and comprehensive financial advisory services. Join 25,000+ satisfied clients who trust our proven track record.',
    ctaText: 'Start Your Financial Journey',
    ctaLink: '#contact',
    stats: heroStats.map(stat => ({
      value: stat.value,
      suffix: stat.suffix,
      label: stat.label,
    })),
  },
  mainStats: mainStats.map(stat => ({
    metric: stat.metric,
    value: stat.value,
    description: stat.description,
    icon: stat.icon,
    color: stat.color,
  })),
  services: services.map(service => ({
    title: service.title,
    description: service.description,
    features: service.features.map(feature => ({ feature })),
    clients: service.clients,
    icon: service.icon,
    color: service.color,
  })),
  successStories: successStories.map(story => ({
    name: story.name,
    profession: story.profession,
    location: story.location,
    testimonial: story.testimonial,
    results: {
      portfolioGrowth: story.results.portfolioGrowth,
      timePeriod: story.results.timePeriod,
      strategy: story.results.strategy,
    },
    avatar: story.avatar,
    background: story.background,
  })),
  successStats: successStats.map(stat => ({
    value: stat.value,
    label: stat.label,
    color: stat.color,
  })),
  trainerProfile: {
    name: 'Sameer Sarang',
    title: 'Founder & Financial Services Expert',
    experience: '10+ Years Experience',
    description: 'Founder of Finanthropist based in Nashik, Maharashtra. Sameer provides comprehensive financial services including portfolio management, trading advisory, investment planning, and financial education. He combines practical market expertise with personalized financial solutions for individuals and businesses.',
    achievements: [
      { achievement: 'Founder of Finanthropist' },
      { achievement: 'Portfolio Management & Trading Advisory' },
      { achievement: 'Investment Planning & Wealth Management' },
      { achievement: 'Financial Consulting for Businesses' },
      { achievement: 'Comprehensive Client Support Services' },
    ],
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '1000+', label: 'Clients Served' },
      { value: '₹50Cr+', label: 'Assets Managed' },
    ],
  },
  tradingFeatures: {
    title: 'Advanced Trading Features',
    subtitle: 'Professional trading tools and expert guidance to maximize your investment success',
    features: [
      {
        title: 'Expert Market Analysis',
        description: 'Get detailed market insights and technical analysis from our experienced trading professionals.',
        icon: '📈',
        color: 'from-blue-400 to-cyan-500'
      },
      {
        title: 'Personalized Trading Strategies',
        description: 'Customized trading approaches tailored to your risk profile and financial goals.',
        icon: '🎯',
        color: 'from-yellow-400 to-orange-500'
      },
      {
        title: 'Risk Management Guidance',
        description: 'Professional advice on portfolio management and risk mitigation strategies.',
        icon: '🛡️',
        color: 'from-green-400 to-emerald-500'
      },
      {
        title: 'Lifetime Support',
        description: 'Ongoing support and guidance throughout your trading journey with 24/7 expert assistance.',
        icon: '⏰',
        color: 'from-purple-400 to-pink-500'
      }
    ]
  },
  finalCTA: {
    title: 'Ready to Transform Your Financial Future?',
    subtitle: 'Join thousands of successful investors who trust Sameer Sarang for comprehensive financial guidance. Start your wealth creation journey today with a personalized consultation.',
    primaryCTAText: 'Book Free Consultation',
    secondaryCTAText: 'Call +91 98765 43210',
    features: [
      {
        title: 'Free Consultation',
        description: 'No commitment, just expert guidance on your financial goals',
        icon: '💰'
      },
      {
        title: 'Certified Advisor',
        description: 'Professional and certified investment advisory services',
        icon: '🛡️'
      },
      {
        title: '1000+ Clients',
        description: 'Trusted by thousands of successful investors',
        icon: '👥'
      }
    ]
  },
}

export const useHomeData = () => {
  // Start with mock data immediately available (no loading state)
  const [homeData, setHomeData] = useState<typeof staticHomeData>(staticHomeData)
  const [isLoading, setIsLoading] = useState(false) // Mock data is instantly available
  const [isStatic, setIsStatic] = useState(true)
  const [isFetching, setIsFetching] = useState(false) // Track background fetching

  useEffect(() => {
    const fetchHomeData = async () => {
      setIsFetching(true)
      try {
        console.log('🔄 Attempting to fetch real home data from /api/globals/home...')
        const response = await fetch('/api/globals/home')
        
        if (response.ok) {
          const data = await response.json()
          console.log('✅ Real data fetched successfully:', data)
          
          if (data && Object.keys(data).length > 0) {
            console.log('📋 Real data structure:', {
              successStoriesCount: data.successStories?.length || 0,
              firstStory: data.successStories?.[0] || null,
              services: data.services?.length || 0,
              hasHeroSection: !!data.heroSection
            })

            // The real data structure already matches our expected format
            // No complex mapping needed - just use it directly
            const mappedData = {
              ...data, // Real data has correct structure
              // Only fallback to static data for missing sections
              heroSection: data.heroSection || staticHomeData.heroSection,
              mainStats: data.mainStats || staticHomeData.mainStats,
              services: data.services || staticHomeData.services,
              successStories: data.successStories || staticHomeData.successStories,
              trainerProfile: data.trainerProfile || staticHomeData.trainerProfile,
              tradingFeatures: data.tradingFeatures || staticHomeData.tradingFeatures,
              finalCTA: data.finalCTA || staticHomeData.finalCTA,
            }
            
            setHomeData(mappedData)
            setIsStatic(false)
            console.log('🎉 Successfully updated with real data', {
              successStoriesCount: mappedData.successStories?.length,
              servicesCount: mappedData.services?.length,
              isRealData: true,
              timestamp: new Date().toLocaleTimeString()
            })
            
            // Log success stories for verification
            console.log('📚 Success Stories loaded:', mappedData.successStories?.map(story => ({
              name: story.name,
              profession: story.profession,
              location: story.location,
              growth: story.results?.portfolioGrowth
            })))
          } else {
            console.log('⚠️ Real data is empty, keeping mock data')
          }
        } else {
          console.log(`❌ API responded with status: ${response.status}, keeping mock data`)
        }
      } catch (error) {
        console.error('❌ Error fetching real home data, keeping mock data:', error)
      } finally {
        setIsFetching(false)
      }
    }

    // Fetch real data in background after component mounts
    // Mock data is already showing, so no rush
    const timer = setTimeout(() => {
      fetchHomeData()
    }, 500) // Slight delay to let UI render with mock data first

    return () => clearTimeout(timer)
  }, [])

  return {
    homeData,
    isLoading, // Always false since mock data is immediately available
    isStatic, // True initially (mock data), false after real data loads
    isFetching, // True while background fetching real data
  }
}