export interface HeroStat {
  value: number
  suffix: string
  label: string
}

export interface MainStat {
  metric: string
  value: number
  description: string
  icon: string
  color: string
}

export const heroStats: HeroStat[] = [
  { value: 25000, suffix: '+', label: 'Clients Served' },
  { value: 23, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Portfolios Managed' },
  { value: 98, suffix: '%+', label: 'Client Satisfaction' }
]

export const mainStats: MainStat[] = [
  {
    metric: "Clients Served",
    value: 25000,
    description: "Satisfied clients across various financial services",
    icon: "👥",
    color: "from-blue-500 to-blue-600"
  },
  {
    metric: "Years of Experience", 
    value: 23,
    description: "Proven track record in financial markets since 2001",
    icon: "📈",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    metric: "Portfolio Performance",
    value: 15,
    description: "Average annual returns for managed portfolios",
    icon: "🎯", 
    color: "from-purple-500 to-purple-600"
  },
  {
    metric: "Services Offered",
    value: 5,
    description: "Comprehensive financial solutions under one roof",
    icon: "🏢",
    color: "from-amber-500 to-amber-600"
  }
]