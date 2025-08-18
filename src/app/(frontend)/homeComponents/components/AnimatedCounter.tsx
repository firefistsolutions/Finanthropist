import React from 'react'
import { useCounter } from '../utilities/animations'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  delay = 0 
}) => {
  const count = useCounter(value, duration, delay)
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}