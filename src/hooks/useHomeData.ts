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
}

export const useHomeData = () => {
  const [homeData, setHomeData] = useState<typeof staticHomeData>(staticHomeData)
  const [isLoading, setIsLoading] = useState(true)
  const [isStatic, setIsStatic] = useState(true)

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('/api/globals/home')
        if (response.ok) {
          const data = await response.json()
          if (data && Object.keys(data).length > 0) {
            setHomeData(data)
            setIsStatic(false)
          }
        }
      } catch (error) {
        console.error('Error fetching home data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Add a small delay to show the static content first
    const timer = setTimeout(() => {
      fetchHomeData()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return {
    homeData,
    isLoading,
    isStatic,
  }
}