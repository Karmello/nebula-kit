import { createContext, useContext, useState, ReactNode } from 'react'

import { SideNavOwnProps } from '../definitions'

type ProviderProps = SideNavOwnProps & {
  children: ReactNode
}

type ContextProps = Omit<ProviderProps, 'children'> & {
  expandedCategories: Record<string, boolean>
  setExpandedCategories: (
    cb: (expandedCategories: Record<string, boolean>) => Record<string, boolean>
  ) => void
}

const SideNavContext = createContext<ContextProps>({} as ContextProps)

export const SideNavProvider = ({ children, expandMode }: ProviderProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  return (
    <SideNavContext.Provider value={{ expandMode, expandedCategories, setExpandedCategories }}>
      {children}
    </SideNavContext.Provider>
  )
}

export const useSideNavContext = () => {
  return useContext(SideNavContext)
}
