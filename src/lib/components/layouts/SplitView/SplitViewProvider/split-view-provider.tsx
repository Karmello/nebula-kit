import { createContext, useContext, useState, ReactNode } from 'react'

import { SplitViewOwnProps } from '../definitions'

type ProviderProps = SplitViewOwnProps & {
  children: ReactNode
  slots: Record<'Main' | 'MainBar' | 'Side', ReactNode>
  mode: SplitViewMode
}

export type SplitViewMode = 'overlay' | 'inline'

type ContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
}

const SplitViewContext = createContext<ContextProps>({} as ContextProps)

export const SplitViewProvider = ({ children, slots, mode, sidePosition, switchAt }: ProviderProps) => {
  const [sideOpen, setSideOpen] = useState(true)

  return (
    <SplitViewContext.Provider value={{ mode, sideOpen, setSideOpen, slots, sidePosition, switchAt }}>
      {children}
    </SplitViewContext.Provider>
  )
}

export const useSplitViewContext = () => {
  return useContext(SplitViewContext)
}
