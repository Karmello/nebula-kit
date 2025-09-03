import { createContext, useContext, useState, ReactNode } from 'react'

import { WithSlotsReturnObject } from 'lib/components'

import { SidePanelLayoutOwnProps } from '../side-panel-layout'

type SidePanelLayoutContextValue = {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
  slots: WithSlotsReturnObject
} & Pick<SidePanelLayoutOwnProps, 'sidePosition' | 'sideWidthDesktop'>

const SidePanelLayoutContext = createContext<SidePanelLayoutContextValue | null>(null)

type SidePanelLayoutProviderProps = {
  children: ReactNode
  slots: WithSlotsReturnObject
} & Pick<SidePanelLayoutOwnProps, 'sidePosition' | 'sideWidthDesktop'>

export const SidePanelLayoutProvider = ({
  children,
  slots,
  sidePosition,
  sideWidthDesktop,
}: SidePanelLayoutProviderProps) => {
  const [sideOpen, setSideOpen] = useState(true)

  return (
    <SidePanelLayoutContext.Provider value={{ sideOpen, setSideOpen, slots, sidePosition, sideWidthDesktop }}>
      {children}
    </SidePanelLayoutContext.Provider>
  )
}

export const useSidePanelLayout = () => {
  const ctx = useContext(SidePanelLayoutContext)

  if (!ctx) {
    throw new Error('useSidePanelLayout must be used within a SidePanelLayoutProvider')
  }

  return ctx
}
