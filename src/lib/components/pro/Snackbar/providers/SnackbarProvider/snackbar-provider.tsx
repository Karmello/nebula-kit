import { createContext, ReactNode, RefObject, useContext, useEffect, useRef } from 'react'

import { UseSnackbarShowArgs } from '../../types'

type SnackbarProviderProps = {
  rootRef: RefObject<HTMLDivElement | null>
  children: ReactNode
  visible: boolean
  setVisible: (visible: boolean) => void
  setSnackbar: (config: UseSnackbarShowArgs) => void
  autoCloseDelay?: number
  closeOnOutsideClick?: boolean
}

type SnackbarContextValue = {
  show: (config: UseSnackbarShowArgs) => void
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null)

export const useSnackbar = () => useContext(SnackbarContext)

export const SnackbarProvider = ({
  rootRef,
  children,
  visible,
  setVisible,
  setSnackbar,
  autoCloseDelay,
  closeOnOutsideClick,
}: SnackbarProviderProps) => {
  const autoCloseRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!visible) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false)
        if (autoCloseRef.current !== null) {
          clearTimeout(autoCloseRef.current)
          autoCloseRef.current = null
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [visible])

  useEffect(() => {
    if (!visible || !closeOnOutsideClick) return
    const handleClick = (e: MouseEvent) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) {
        setVisible(false)
        if (autoCloseRef.current !== null) {
          clearTimeout(autoCloseRef.current)
          autoCloseRef.current = null
        }
      }
    }
    window.addEventListener('mousedown', handleClick)
    return () => window.removeEventListener('mousedown', handleClick)
  }, [visible])

  const show = (config: UseSnackbarShowArgs) => {
    if (visible) return

    setSnackbar(config)
    setVisible(true)

    if (autoCloseRef.current !== null) {
      clearTimeout(autoCloseRef.current)
      autoCloseRef.current = null
    }

    autoCloseRef.current = setTimeout(() => {
      setVisible(false)
      autoCloseRef.current = null
    }, autoCloseDelay)
  }

  return <SnackbarContext.Provider value={{ show }}>{children}</SnackbarContext.Provider>
}
