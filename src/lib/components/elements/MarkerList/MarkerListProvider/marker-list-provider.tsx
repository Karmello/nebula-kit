import { createContext, useContext, ReactNode } from 'react'

import { BoxProps } from 'lib/components/base/Box/definitions'

type MarkerListContextValue = {
  intent: BoxProps['intent']
}

const MarkerListContext = createContext<MarkerListContextValue | undefined>(undefined)

export const MarkerListProvider = ({
  children,
  intent,
}: { children: ReactNode } & MarkerListContextValue) => {
  return <MarkerListContext.Provider value={{ intent }}>{children}</MarkerListContext.Provider>
}

export const useMarkerListContext = () => {
  const ctx = useContext(MarkerListContext)

  if (!ctx) {
    throw new Error('useMarkerListContext must be used within a MarkerListProvider')
  }

  return ctx
}
