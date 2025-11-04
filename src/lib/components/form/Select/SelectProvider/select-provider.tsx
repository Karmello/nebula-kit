import { createContext, useContext, ReactNode } from 'react'

type Props = { currentValue?: string; handleChange: (value: string) => void }

type ProviderProps = { children: ReactNode } & Props

const SelectContext = createContext<Props | undefined>(undefined)

export const SelectProvider = ({ children, currentValue, handleChange }: ProviderProps) => {
  return <SelectContext.Provider value={{ currentValue, handleChange }}>{children}</SelectContext.Provider>
}

export const useSelectContext = () => {
  const ctx = useContext(SelectContext)

  if (!ctx) {
    throw new Error('useSelectContext must be used within a SelectProvider')
  }

  return ctx
}
