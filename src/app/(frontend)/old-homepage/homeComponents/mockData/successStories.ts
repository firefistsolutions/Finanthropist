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
  },
  {
    name: "Amit P",
    profession: "Software Engineer",
    location: "Pune",
    testimonial: "The systematic investment planning and equity advisory services transformed my approach to wealth creation. Highly recommended for young professionals.",
    results: {
      portfolioGrowth: "28%+",
      timePeriod: "14 months",
      strategy: "Growth Equity"
    },
    avatar: "AP",
    background: 'professional'
  },
  {
    name: "Meera D",
    profession: "Homemaker",
    location: "Nashik",
    testimonial: "Their mutual fund advisory and SIP guidance helped me start my investment journey. Now I have a growing portfolio for my children's future.",
    results: {
      portfolioGrowth: "18%+",
      timePeriod: "2.5 years",
      strategy: "SIP Strategy"
    },
    avatar: "MD",
    background: 'homemaker'
  },
  {
    name: "Vikram R",
    profession: "Chartered Accountant",
    location: "Mumbai",
    testimonial: "Exceptional service in derivative trading and risk management. Their market analysis helped me achieve consistent profits in options trading.",
    results: {
      portfolioGrowth: "35%+",
      timePeriod: "10 months",
      strategy: "Options Trading"
    },
    avatar: "VR",
    background: 'business'
  },
  {
    name: "Kavita J",
    profession: "Doctor",
    location: "Maharashtra",
    testimonial: "The comprehensive financial planning service aligned perfectly with my long-term goals. Their expertise in healthcare professional investments is outstanding.",
    results: {
      portfolioGrowth: "22%+",
      timePeriod: "2 years",
      strategy: "Balanced Portfolio"
    },
    avatar: "KJ",
    background: 'professional'
  },
  {
    name: "Suresh B",
    profession: "Businessman",
    location: "Aurangabad",
    testimonial: "Their commodity trading insights and business investment advisory helped expand my business portfolio significantly. Excellent market timing advice.",
    results: {
      portfolioGrowth: "20%+",
      timePeriod: "3.5 years",
      strategy: "Business Growth"
    },
    avatar: "SB",
    background: 'business'
  }
]

export const successStats: SuccessStat[] = [
  { value: '15%+', label: 'Average Annual Returns', color: 'text-blue-600' },
  { value: '₹35K+', label: 'Monthly Passive Income', color: 'text-emerald-600' },
  { value: '98%+', label: 'Client Satisfaction', color: 'text-purple-600' }
]