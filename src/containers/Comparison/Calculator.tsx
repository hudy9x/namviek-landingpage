'use client'
import { IoIosArrowRoundDown } from 'react-icons/io'
import './calculator.css'

import Card from "@/components/Card"
import CalInput from './CalInput'
import { CalculatorProvider } from './context'
import CalDisplay from './CalDisplay'

export default function Calculator() {
  return <div className="calculator mt-[34px] flex items-center gap-6">
    <CalculatorProvider>
      <CalInput />
      <CalDisplay />
    </CalculatorProvider>
  </div>
}
