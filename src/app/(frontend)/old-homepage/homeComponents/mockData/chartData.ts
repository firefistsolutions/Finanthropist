export interface CandleData {
  x: number
  open: number
  high: number
  low: number
  close: number
}

export interface MarketData {
  currentPrice: string
  change: string
  changeColor: string
  volume: string
  marketCap: string
}

export const generateChartData = (count: number = 40): CandleData[] => {
  const data: CandleData[] = []
  
  for (let i = 0; i < count; i++) {
    const basePrice = 100 + Math.sin(i * 0.3) * 20
    const variation = Math.sin(i * 0.5) * 10
    
    const open = basePrice + variation
    const close = basePrice + variation + (Math.sin(i * 0.7) - 0.5) * 5
    const high = Math.max(open, close) + Math.abs(Math.sin(i * 0.9)) * 3
    const low = Math.min(open, close) - Math.abs(Math.cos(i * 0.8)) * 3

    data.push({ x: i, open, close, high, low })
  }
  
  return data
}

export const generateDynamicChartData = (count: number = 40): CandleData[] => {
  const data: CandleData[] = []
  
  for (let i = 0; i < count; i++) {
    const basePrice = 100 + Math.sin(i * 0.3 + Date.now() * 0.001) * 20
    const variation = Math.sin(i * 0.5 + Date.now() * 0.001) * 10
    
    const open = basePrice + variation
    const close = basePrice + variation + (Math.sin(i * 0.7 + Date.now() * 0.001) - 0.5) * 5
    const high = Math.max(open, close) + Math.abs(Math.sin(i * 0.9 + Date.now() * 0.001)) * 3
    const low = Math.min(open, close) - Math.abs(Math.cos(i * 0.8 + Date.now() * 0.001)) * 3

    data.push({ x: i, open, close, high, low })
  }
  
  return data
}

export const mockMarketData: MarketData = {
  currentPrice: "19,847.30",
  change: "+127.45 (+0.65%)",
  changeColor: "text-emerald-600",
  volume: "2.1M",
  marketCap: "₹245.7T"
}

export const marketOptions = [
  { value: "NIFTY", label: "NIFTY 50" },
  { value: "SENSEX", label: "SENSEX" },
  { value: "BANKNIFTY", label: "BANK NIFTY" }
]