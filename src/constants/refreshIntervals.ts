// Standardized refresh intervals for all live data components
export const REFRESH_INTERVALS = {
  // Market data refresh (both useMarketData hook and components)
  MARKET_DATA: 15000, // 15 seconds - faster updates for live feel
  
  // Chart animations and visual updates
  CHART_ANIMATIONS: 15000, // 15 seconds - synchronized with market data
  
  // Course progress and other analytics animations
  ANALYTICS_ANIMATIONS: 3000, // 3 seconds - for smooth visual updates
  
  // Twitter testimonials slide changes
  TESTIMONIAL_SLIDES: 4000, // 4 seconds - good pace for reading
  
  // General UI animations and counters
  UI_ANIMATIONS: 3000, // 3 seconds
} as const

// Marquee animation speeds (in seconds)
export const MARQUEE_SPEEDS = {
  // Desktop speeds
  DESKTOP: {
    SLOW: 70, // 70 seconds
    NORMAL: 45, // 45 seconds - faster than before
    FAST: 25, // 25 seconds - much faster
  },
  
  // Mobile speeds (faster for better mobile experience)
  MOBILE: {
    SLOW: 50, // 50 seconds
    NORMAL: 30, // 30 seconds - faster on mobile
    FAST: 18, // 18 seconds - much faster on mobile
  }
} as const