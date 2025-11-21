import { createContext, ReactNode, useContext } from 'react'

import { UseSnackbarShowArgs } from '../definitions'

type SnackbarProviderProps = {
  children: ReactNode
  setVisible: (visible: boolean) => void
  setSnackbar: (config: UseSnackbarShowArgs) => void
}

type SnackbarContextValue = {
  show: (config: UseSnackbarShowArgs) => void
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null)

export const useSnackbar = () => useContext(SnackbarContext)

export const SnackbarProvider = ({ children, setVisible, setSnackbar }: SnackbarProviderProps) => {
  const show = (config: UseSnackbarShowArgs) => {
    setSnackbar(config)
    setVisible(true)
  }

  return <SnackbarContext.Provider value={{ show }}>{children}</SnackbarContext.Provider>
}
