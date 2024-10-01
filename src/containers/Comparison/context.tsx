import { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext } from "react";

const CalculatorContext = createContext<{
  price: number,
  setPrice: Dispatch<SetStateAction<number>>
}>({
  price: 2148,
  setPrice: () => { console.log(1) }
})
export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [price, setPrice] = useState(2148)
  return <CalculatorContext.Provider value={{ price, setPrice }}>
    {children}
  </CalculatorContext.Provider>
}

export const useCalculator = () => {
  const context = useContext(CalculatorContext)
  return context
}
