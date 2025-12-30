import { createContext, useContext, useState, ReactNode } from 'react'

import { SideNavProps } from '../definitions'

type ProviderProps = SideNavProps & {
  children: ReactNode
}

type ContextProps = Omit<ProviderProps, 'children'> & {
  expandedCategories: Record<string, boolean>
  setExpandedCategories: (
    cb: (expandedCategories: Record<string, boolean>) => Record<string, boolean>
  ) => void
}

const SideNavContext = createContext<ContextProps>({} as ContextProps)

export const SideNavProvider = ({ children, expandMode, variant, color, intent }: ProviderProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  return (
    <SideNavContext.Provider
      value={{
        expandMode,
        expandedCategories,
        setExpandedCategories,
        variant,
        color,
        intent,
      }}
    >
      {children}
    </SideNavContext.Provider>
  )
}

export const useSideNavContext = () => {
  return useContext(SideNavContext)
}
