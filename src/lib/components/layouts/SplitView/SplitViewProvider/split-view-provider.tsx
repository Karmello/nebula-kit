import { createContext, useContext, useState, ReactNode } from 'react'

import { getLibMsg } from 'lib/helpers'

import { SplitViewOwnProps } from '../definitions'

type ProviderProps = SplitViewOwnProps & {
  children: ReactNode
  slots: Record<'SplitView.Main' | 'SplitView.MainBar' | 'SplitView.Side', ReactNode>
  mode: SplitViewMode
}

export type SplitViewMode = 'overlay' | 'inline'

export type SplitViewContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
}

const SplitViewContext = createContext<SplitViewContextProps | undefined>(undefined)

export const SplitViewProvider = ({ children, slots, mode, sidePosition, switchAt }: ProviderProps) => {
  const [sideOpen, setSideOpen] = useState(mode === 'inline')

  return (
    <SplitViewContext.Provider value={{ mode, sideOpen, setSideOpen, slots, sidePosition, switchAt }}>
      {children}
    </SplitViewContext.Provider>
  )
}

export const useSplitViewContext = () => {
  const ctx = useContext(SplitViewContext)
  if (!ctx) throw new Error(getLibMsg('useSplitViewContext must be used inside <SplitView>'))
  return ctx
}
