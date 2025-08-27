import { useEffect, useRef, useState } from 'react'

// Animation hook for intersection observer
export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // More aggressive settings for mobile to ensure animations trigger
    const isMobile = window.innerWidth < 768
    const adjustedThreshold = isMobile ? Math.min(threshold, 0.1) : Math.min(threshold, 0.2)
    const rootMargin = isMobile ? '20px 0px -5% 0px' : '50px 0px -10% 0px'
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add slight delay to ensure smooth triggering
        setTimeout(() => setIsInView(entry.isIntersecting), 50)
      },
      { 
        threshold: adjustedThreshold,
        rootMargin: rootMargin
      }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Counter animation hook
export const useCounter = (end: number, duration = 2000, startDelay = 0) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now()
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress >= 1) clearInterval(interval)
      }, 16)
      
      return () => clearInterval(interval)
    }, startDelay)
    
    return () => clearTimeout(timer)
  }, [end, duration, startDelay])

  return count
}

// Animation delay utilities
export const getStaggerDelay = (index: number, baseDelay = 200) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const adjustedDelay = isMobile ? Math.min(baseDelay, 150) : baseDelay
  return {
    transitionDelay: `${index * adjustedDelay}ms`
  }
}

export const getAnimationClasses = (inView: boolean, baseClasses = 'opacity-0 translate-y-2') => 
  inView ? 'opacity-100 translate-y-0' : baseClasses