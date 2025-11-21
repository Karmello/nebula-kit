import { createContext, ReactNode, useContext, useRef } from 'react'

import { UseSnackbarShowArgs } from '../definitions'

type SnackbarProviderProps = {
  children: ReactNode
  visible: boolean
  setVisible: (visible: boolean) => void
  setSnackbar: (config: UseSnackbarShowArgs) => void
}

type SnackbarContextValue = {
  show: (config: UseSnackbarShowArgs) => void
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null)

export const useSnackbar = () => useContext(SnackbarContext)

export const SnackbarProvider = ({ children, visible, setVisible, setSnackbar }: SnackbarProviderProps) => {
  const autoCloseRef = useRef<number | null>(null)

  const show = (config: UseSnackbarShowArgs) => {
    if (visible) return

    setSnackbar(config)
    setVisible(true)

    if (autoCloseRef.current !== null) {
      clearTimeout(autoCloseRef.current)
      autoCloseRef.current = null
    }

    autoCloseRef.current = window.setTimeout(() => {
      setVisible(false)
      autoCloseRef.current = null
    }, 2000)
  }

  return <SnackbarContext.Provider value={{ show }}>{children}</SnackbarContext.Provider>
}
