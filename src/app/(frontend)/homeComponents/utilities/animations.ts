import { useEffect, useRef, useState } from 'react'

// Animation hook for intersection observer
export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
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
export const getStaggerDelay = (index: number, baseDelay = 200) => ({
  transitionDelay: `${index * baseDelay}ms`
})

export const getAnimationClasses = (inView: boolean, baseClasses = 'opacity-0 translate-y-8') => 
  inView ? 'opacity-100 translate-y-0' : baseClasses