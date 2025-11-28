import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize/definitions'
import { BREAKPOINTS, DEFAULT_SWITCH_AT } from 'lib/definitions'
import { getLibMsg } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import { SplitViewOwnProps } from '../definitions'

type ProviderProps = SplitViewOwnProps & {
  children: ReactNode
}

export type SplitViewMode = 'overlay' | 'inline'

export type SplitViewContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
  mode: SplitViewMode
}

const SplitViewContext = createContext<SplitViewContextProps | undefined>(undefined)

export const SplitViewProvider = ({
  children,
  sidePosition,
  switchAt = DEFAULT_SWITCH_AT,
}: ProviderProps) => {
  const { bp } = useScreen()

  const [mode, setMode] = useState<SplitViewMode>(
    BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline'
  )
  const [sideOpen, setSideOpen] = useState<boolean>(mode === 'inline')

  useEffect(() => {
    setMode(BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'overlay' : 'inline')
  }, [bp])

  useEffect(() => {
    setSideOpen(mode === 'inline')
  }, [mode])

  useEffect(() => {
    if (mode === 'overlay' && sideOpen) {
      document.documentElement.classList.add('neb-scrollbar-off')
    } else {
      setTimeout(() => {
        document.documentElement.classList.remove('neb-scrollbar-off')
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
  const ctx = useContext(SplitViewContext)
  if (!ctx) throw new Error(getLibMsg('useSplitViewContext must be used inside <SplitView>'))
  return ctx
}
