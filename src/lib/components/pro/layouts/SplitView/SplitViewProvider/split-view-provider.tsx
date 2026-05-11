import { createContext, useContext, useState, useLayoutEffect } from 'react'

import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize/definitions'
import { BREAKPOINTS, DEFAULT_SWITCH_AT } from 'lib/definitions'
import { useScreen, useGlobalScrollLock } from 'lib/hooks'

import { ProviderProps, SplitViewContextProps, SplitViewMode } from './definitions'

const SplitViewContext = createContext<SplitViewContextProps>({} as SplitViewContextProps)

export const SplitViewProvider = ({ children, sidePosition, switchAt = DEFAULT_SWITCH_AT }: ProviderProps) => {
  const { bp } = useScreen()
  const { lock, unlock } = useGlobalScrollLock()

  const [mode, setMode] = useState<SplitViewMode>(
    BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline'
  )
  const [sideOpen, setSideOpen] = useState<boolean>(mode === 'inline')

  useLayoutEffect(() => {
    setMode(BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline')
  }, [bp])

  useLayoutEffect(() => {
    setTimeout(() => {
      setSideOpen(mode === 'inline')
    }, 200)
  }, [mode])

  useLayoutEffect(() => {
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
