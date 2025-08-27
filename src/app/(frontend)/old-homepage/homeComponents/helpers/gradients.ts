export type BackgroundType = 'business' | 'professional' | 'homemaker'

export const getGradient = (background: BackgroundType): string => {
  switch (background) {
    case 'business': 
      return 'from-blue-500 to-blue-600'
    case 'professional': 
      return 'from-emerald-500 to-emerald-600'
    case 'homemaker': 
      return 'from-purple-500 to-purple-600'
    default: 
      return 'from-slate-500 to-slate-600'
  }
}

export const getServiceGradient = (serviceId: string): string => {
  const gradients: Record<string, string> = {
    portfolio: 'from-blue-500 to-blue-600',
    trading: 'from-emerald-500 to-emerald-600',
    advisory: 'from-purple-500 to-purple-600',
    education: 'from-amber-500 to-amber-600'
  }
  
  return gradients[serviceId] || 'from-slate-500 to-slate-600'
}

export const getStatGradient = (index: number): string => {
  const gradients = [
    'from-blue-500 to-blue-600',
    'from-emerald-500 to-emerald-600', 
    'from-purple-500 to-purple-600',
    'from-amber-500 to-amber-600'
  ]
  
  return gradients[index % gradients.length]
}