'use client'
import './calculator.css'

import CalInput from './CalInput'
import { CalculatorProvider } from './context'
import CalDisplay from './CalDisplay'

export default function Calculator() {
  return <div className="calculator mt-[34px] flex flex-col sm:flex-row items-center gap-6">
    <CalculatorProvider>
      <CalInput />
      <CalDisplay />
    </CalculatorProvider>
  </div>
}
