import { createContext, useContext, ReactNode, useState } from 'react'

import { getLibMsg } from 'lib/helpers'

import { ToolbarOwnProps } from '../definitions'

type ProviderProps = ToolbarOwnProps & {
  children: ReactNode
}

type ContextProps = Omit<ProviderProps, 'children'> & {
  mainOpen: boolean
  setMainOpen: (mainOpen: boolean) => void
}

const ToolbarContext = createContext<ContextProps | null>(null)

export const ToolbarProvider = ({ children, switchAt }: ProviderProps) => {
  const [mainOpen, setMainOpen] = useState<boolean>(true)

  return (
    <ToolbarContext.Provider value={{ switchAt, mainOpen, setMainOpen }}>{children}</ToolbarContext.Provider>
  )
}

export const useToolbarContext = () => {
  const ctx = useContext(ToolbarContext)
  if (!ctx) throw new Error(getLibMsg('useToolbarContext must be used inside <Toolbar>'))
  return ctx
}
