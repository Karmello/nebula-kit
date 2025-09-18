import { createContext, useContext, ReactNode } from 'react'

import { ToolbarOwnProps } from '../definitions'

type ProviderProps = ToolbarOwnProps & {
  children: ReactNode
}

type ContextProps = Omit<ProviderProps, 'children'>

const ToolbarContext = createContext<ContextProps>({} as ContextProps)

export const ToolbarProvider = ({ children, switchAt }: ProviderProps) => {
  return <ToolbarContext.Provider value={{ switchAt }}>{children}</ToolbarContext.Provider>
}

export const useToolbarContext = () => {
  return useContext(ToolbarContext)
}
