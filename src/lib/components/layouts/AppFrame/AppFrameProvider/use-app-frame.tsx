import { createContext, useContext, ReactNode } from 'react'

type AppFrameContextValue = {
  stickyHeader: boolean
}

const AppFrameContext = createContext<AppFrameContextValue | undefined>(undefined)

export const AppFrameProvider = ({
  children,
  stickyHeader,
}: { children: ReactNode } & AppFrameContextValue) => {
  return <AppFrameContext.Provider value={{ stickyHeader }}>{children}</AppFrameContext.Provider>
}

export const useAppFrame = () => {
  const ctx = useContext(AppFrameContext)

  if (!ctx) {
    throw new Error('useAppFrame must be used within a AppFrameProvider')
  }

  return ctx
}
