import { createContext, ReactNode, useContext } from 'react'

type Props = { currentValue?: string[]; handleChange: (value: string) => void }

type ProviderProps = { children: ReactNode } & Props

const MultiSelectContext = createContext<Props | undefined>(undefined)

export const MultiSelectProvider = ({ children, currentValue, handleChange }: ProviderProps) => {
  return <MultiSelectContext.Provider value={{ currentValue, handleChange }}>{children}</MultiSelectContext.Provider>
}

export const useMultiSelectContext = () => {
  const ctx = useContext(MultiSelectContext)

  if (!ctx) {
    throw new Error('useMultiSelectContext must be used within a MultiSelectProvider')
  }

  return ctx
}
