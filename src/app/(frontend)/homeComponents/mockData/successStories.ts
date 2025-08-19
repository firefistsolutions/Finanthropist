export interface SuccessStory {
  name: string
  profession: string
  location: string
  testimonial: string
  results: {
    portfolioGrowth: string
    timePeriod: string
    strategy: string
  }
  avatar: string
  background: 'business' | 'professional' | 'homemaker'
}

export interface SuccessStat {
  value: string
  label: string
  color: string
}

export const successStories: SuccessStory[] = [
  {
    name: "Rajesh M",
    profession: "Business Owner",
    location: "Maharashtra",
    testimonial: "Finanthropist's portfolio management service has consistently delivered excellent returns. Their professional approach and market expertise is unmatched.",
    results: {
      portfolioGrowth: "15%+",
      timePeriod: "2 years",
      strategy: "Diversified Growth"
    },
    avatar: "RM",
    background: 'business'
  },
  {
    name: "Priya S",
    profession: "Working Professional",
    location: "Maharashtra",
    testimonial: "Their trading services and advisory support helped me navigate market volatility successfully. The real-time guidance is invaluable.",
    results: {
      portfolioGrowth: "25%+",
      timePeriod: "18 months",
      strategy: "Active Trading"
    },
    avatar: "PS",
    background: 'professional'
  },
  {
    name: "Sunita K",
    profession: "Retired Teacher",
    location: "Maharashtra",
    testimonial: "The financial planning and advisory services helped secure my retirement. I now have a stable income stream from my investments.",
    results: {
      portfolioGrowth: "12%+",
      timePeriod: "3 years",
      strategy: "Income Focus"
    },
    avatar: "SK",
    background: 'homemaker'
  }
]

export const successStats: SuccessStat[] = [
  { value: '15%+', label: 'Average Annual Returns', color: 'text-blue-600' },
  { value: '₹35K+', label: 'Monthly Passive Income', color: 'text-emerald-600' },
  { value: '98%+', label: 'Client Satisfaction', color: 'text-purple-600' }
]