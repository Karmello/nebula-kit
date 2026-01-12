import { createContext, useContext, ReactNode } from 'react'

type Props = { currentValue?: string; handleChange: (value: string) => void }

type ProviderProps = { children: ReactNode } & Props

const AutocompleteContext = createContext<Props | undefined>(undefined)

export const AutocompleteProvider = ({ children, currentValue, handleChange }: ProviderProps) => {
  return (
    <AutocompleteContext.Provider value={{ currentValue, handleChange }}>
      {children}
    </AutocompleteContext.Provider>
  )
}

export const useAutocompleteContext = () => {
  const ctx = useContext(AutocompleteContext)

  if (!ctx) {
    throw new Error('useAutocompleteContext must be used within a AutocompleteProvider')
  }

  return ctx
}
