import { createContext, useContext, useState, ReactNode } from 'react'

import { SidePanelLayoutOwnProps } from '../definitions'

type ProviderProps = SidePanelLayoutOwnProps & {
  children: ReactNode
  slots: Record<'Main' | 'MainBar' | 'Side', ReactNode>
  mode: SidePanelLayoutMode
}

export type SidePanelLayoutMode = 'overlay' | 'inline'

type ContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
}

const SidePanelLayoutContext = createContext<ContextProps>({} as ContextProps)

export const SidePanelLayoutProvider = ({ children, slots, mode, sidePosition, switchAt }: ProviderProps) => {
  const [sideOpen, setSideOpen] = useState(true)

  return (
    <SidePanelLayoutContext.Provider value={{ mode, sideOpen, setSideOpen, slots, sidePosition, switchAt }}>
      {children}
    </SidePanelLayoutContext.Provider>
  )
}

export const useSidePanelLayout = () => {
  return useContext(SidePanelLayoutContext)
}
