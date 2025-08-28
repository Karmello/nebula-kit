import { createContext, useContext, useState, ReactNode } from 'react'

import { SlotsReturnObject } from 'lib/components'

import { SidePanelLayoutOwnProps } from '../side-panel-layout'

const SidePanelLayoutContext = createContext(null)

type SidePanelLayoutProviderProps = {
  children: ReactNode
  slots: SlotsReturnObject
} & Pick<SidePanelLayoutOwnProps, 'sidePosition' | 'sideWidthDesktop'>

export const SidePanelLayoutProvider = ({
  children,
  slots,
  sidePosition,
  sideWidthDesktop,
}: SidePanelLayoutProviderProps) => {
  const [sideOpen, setSideOpen] = useState(false)

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
