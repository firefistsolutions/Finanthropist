export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  clients: string
  icon: string
  color: string
}

export const services: Service[] = [
  {
    id: "portfolio",
    title: "Portfolio Management",
    description: "Professional portfolio management services with personalized investment strategies",
    features: ["Custom asset allocation", "Risk assessment", "Performance tracking", "Quarterly reviews"],
    clients: "500+ portfolios",
    icon: "📊",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "trading",
    title: "Trading Services",
    description: "Advanced trading solutions with real-time market analysis and execution",
    features: ["Live market data", "Automated strategies", "Risk management", "24/7 support"],
    clients: "Active traders",
    icon: "📈",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: "advisory",
    title: "Financial Advisory",
    description: "Comprehensive financial planning and investment advisory services",
    features: ["Personal consultation", "Tax planning", "Retirement planning", "Insurance guidance"],
    clients: "Individual & corporate",
    icon: "🎯",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "education",
    title: "Financial Education",
    description: "Structured courses and workshops on financial markets and investment strategies",
    features: ["Live trading sessions", "Market analysis", "Strategy development", "Certification courses"],
    clients: "25,000+ students",
    icon: "🎓",
    color: "from-amber-500 to-amber-600"
  }
]