import { createContext, ReactNode, useContext, useState } from 'react'

import { BREAKPOINTS } from 'lib/constants'
import { getLibMsg } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Breakpoint } from 'lib/types'

import { ToolbarProps } from '../definitions'

type ProviderProps = {
  switchAt?: ToolbarProps['switchAt']
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
