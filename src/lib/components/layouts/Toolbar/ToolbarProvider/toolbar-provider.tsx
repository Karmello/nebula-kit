import { createContext, useContext, ReactNode, useState } from 'react'

import { Breakpoint, BREAKPOINTS } from 'lib/definitions'
import { getLibMsg, useScreen } from 'lib/helpers'

import { ToolbarOwnProps } from '../definitions'

type ProviderProps = ToolbarOwnProps & {
  children: ReactNode
}

type ContextProps = Omit<ProviderProps, 'children'> & {
  mainOpen: boolean
  setMainOpen: (mainOpen: boolean) => void
  isSwitchAtHit: boolean
}

const ToolbarContext = createContext<ContextProps | null>(null)

export const ToolbarProvider = ({ children, switchAt }: ProviderProps) => {
  const [mainOpen, setMainOpen] = useState<boolean>(false)

  const { bp } = useScreen()

  const isSwitchAtHit = BREAKPOINTS.indexOf(bp) >= BREAKPOINTS.indexOf(switchAt as Breakpoint)

  return (
    <ToolbarContext.Provider value={{ switchAt, mainOpen, setMainOpen, isSwitchAtHit }}>
      {children}
    </ToolbarContext.Provider>
  )
}

export const useToolbarContext = () => {
  const ctx = useContext(ToolbarContext)
  if (!ctx) throw new Error(getLibMsg('useToolbarContext must be used inside <Toolbar>'))
  return ctx
}
