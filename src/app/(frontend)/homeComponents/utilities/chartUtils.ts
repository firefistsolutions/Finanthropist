import { CandleData } from '../mockData/chartData'

export interface ChartDimensions {
  width: number
  height: number
  padding: number
}

export interface ChartConfig {
  dimensions: ChartDimensions
  colors: {
    bullish: string
    bearish: string
    grid: string
    text: string
    trend: string
  }
}

export const defaultChartConfig: ChartConfig = {
  dimensions: {
    width: 1000,
    height: 450,
    padding: 40
  },
  colors: {
    bullish: '#10b981',
    bearish: '#ef4444',
    grid: '#f1f5f9',
    text: '#64748b',
    trend: '#3b82f6'
  }
}

export const calculatePriceRange = (data: CandleData[]) => {
  const minPrice = Math.min(...data.map(c => c.low))
  const maxPrice = Math.max(...data.map(c => c.high))
  const priceRange = maxPrice - minPrice
  
  return { minPrice, maxPrice, priceRange }
}

export const getCanvasCoordinates = (
  candle: CandleData,
  index: number,
  dataLength: number,
  priceRangeData: { minPrice: number; maxPrice: number; priceRange: number },
  dimensions: ChartDimensions
) => {
  const { width, height, padding } = dimensions
  const { minPrice, priceRange } = priceRangeData
  
  const x = padding + (index / (dataLength - 1)) * (width - padding * 2)
  
  const openY = padding + (1 - (candle.open - minPrice) / priceRange) * (height - padding * 2)
  const closeY = padding + (1 - (candle.close - minPrice) / priceRange) * (height - padding * 2)
  const highY = padding + (1 - (candle.high - minPrice) / priceRange) * (height - padding * 2)
  const lowY = padding + (1 - (candle.low - minPrice) / priceRange) * (height - padding * 2)
  
  return { x, openY, closeY, highY, lowY }
}

export const generateTimeLabels = (count: number = 7) => {
  const labels: string[] = []
  for (let i = 0; i < count; i++) {
    const hour = 9 + i
    const minute = (i * 10).toString().padStart(2, '0')
    labels.push(`${hour}:${minute}`)
  }
  return labels
}

export const formatPrice = (price: number) => price.toFixed(0)