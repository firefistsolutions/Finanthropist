export interface SuccessStory {
  name: string
  profession: string
  location: string
  quote: string
  result: string
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
    quote: "Finanthropist's portfolio management service has consistently delivered excellent returns. Their professional approach and market expertise is unmatched.",
    result: "15%+ annual returns on managed portfolio",
    avatar: "RM",
    background: 'business'
  },
  {
    name: "Priya S",
    profession: "Working Professional",
    location: "Maharashtra",
    quote: "Their trading services and advisory support helped me navigate market volatility successfully. The real-time guidance is invaluable.",
    result: "Generated ₹2.5L profit in active trading",
    avatar: "PS",
    background: 'professional'
  },
  {
    name: "Sunita K",
    profession: "Retired Teacher",
    location: "Maharashtra",
    quote: "The financial planning and advisory services helped secure my retirement. I now have a stable income stream from my investments.",
    result: "₹35,000+ monthly passive income",
    avatar: "SK",
    background: 'homemaker'
  }
]

export const successStats: SuccessStat[] = [
  { value: '15%+', label: 'Average Annual Returns', color: 'text-blue-600' },
  { value: '₹35K+', label: 'Monthly Passive Income', color: 'text-emerald-600' },
  { value: '98%+', label: 'Client Satisfaction', color: 'text-purple-600' }
]