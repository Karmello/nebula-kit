import { createContext, ReactNode, useContext } from 'react'

import { MarkerListProps } from '../definitions'

type MarkerListContextValue = {
  color: MarkerListProps['color']
  intent: MarkerListProps['intent']
}

const MarkerListContext = createContext<MarkerListContextValue | undefined>(undefined)

export const MarkerListProvider = ({ children, color, intent }: { children: ReactNode } & MarkerListContextValue) => {
  return <MarkerListContext.Provider value={{ color, intent }}>{children}</MarkerListContext.Provider>
}

export const useMarkerListContext = () => {
  const ctx = useContext(MarkerListContext)

  if (!ctx) {
    throw new Error('useMarkerListContext must be used within a MarkerListProvider')
  }

  return ctx
}
