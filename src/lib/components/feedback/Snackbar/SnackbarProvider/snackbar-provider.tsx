import { createContext, ReactNode, useContext } from 'react'

import { SnackbarItemConfig } from '../definitions'

type SnackbarProviderProps = {
  children: ReactNode
  setVisible: (visible: boolean) => void
  setSnackbar: (config: SnackbarItemConfig) => void
}

type SnackbarContextValue = {
  show: (config: SnackbarItemConfig) => void
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null)

export const useSnackbar = () => useContext(SnackbarContext)

export const SnackbarProvider = ({ children, setVisible, setSnackbar }: SnackbarProviderProps) => {
  const show = (config: SnackbarItemConfig) => {
    setSnackbar(config)
    setVisible(true)
  }

  return <SnackbarContext.Provider value={{ show }}>{children}</SnackbarContext.Provider>
}
