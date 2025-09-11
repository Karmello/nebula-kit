import { createContext, useContext, useState, ReactNode } from 'react'

import { WithSlotsReturnObject } from 'lib/components/internal'

import { SidePanelLayoutOwnProps } from '../definitions'

type ProviderProps = SidePanelLayoutOwnProps & {
  children: ReactNode
  slots: WithSlotsReturnObject
  mode: SidePanelLayoutMode
}

export type SidePanelLayoutMode = 'overlay' | 'inline'

type ContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
}

const SidePanelLayoutContext = createContext<ContextProps | null>(null)

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
