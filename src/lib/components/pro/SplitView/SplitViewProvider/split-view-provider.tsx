import { createContext, useContext, useEffect, useState } from 'react'

import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/Resize'
import { BREAKPOINTS, DEFAULT_SWITCH_BREAKPOINT } from 'lib/constants'
import { useGlobalScrollLock, useScreen } from 'lib/hooks'

import { ProviderProps, SplitViewContextProps, SplitViewMode } from './definitions'

const SplitViewContext = createContext<SplitViewContextProps>({} as SplitViewContextProps)

export const SplitViewProvider = ({
  children,
  sidePosition,
  switchAt = DEFAULT_SWITCH_BREAKPOINT,
}: ProviderProps) => {
  const { bp } = useScreen()
  const { lock, unlock } = useGlobalScrollLock()

  const [mode, setMode] = useState<SplitViewMode>(
    BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline'
  )
  const [sideOpen, setSideOpen] = useState<boolean>(mode === 'inline')

  useEffect(() => {
    setMode(BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline')
  }, [bp])

  useEffect(() => {
    setTimeout(() => {
      setSideOpen(mode === 'inline')
    }, DEFAULT_RESIZE_DURATION)
  }, [mode])

  useEffect(() => {
    if (mode === 'overlay' && sideOpen) {
      lock()
      document.body.style.pointerEvents = 'none'
    } else {
      setTimeout(() => {
        unlock()
        document.body.style.pointerEvents = ''
      }, DEFAULT_RESIZE_DURATION)
    }
  }, [sideOpen, mode])

  return (
    <SplitViewContext.Provider value={{ mode, sideOpen, setSideOpen, sidePosition, switchAt }}>
      {children}
    </SplitViewContext.Provider>
  )
}

export const useSplitViewContext = () => {
  return useContext(SplitViewContext)
}
