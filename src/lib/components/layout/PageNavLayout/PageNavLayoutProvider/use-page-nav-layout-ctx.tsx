import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

type PageNavLayoutContextValue = {
  sideOpen: boolean
  setSideOpen: Dispatch<SetStateAction<boolean>>
}

const PageNavLayoutContext = createContext<PageNavLayoutContextValue | undefined>(undefined)

export const PageNavLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <PageNavLayoutContext.Provider value={{ sideOpen, setSideOpen }}>
      {children}
    </PageNavLayoutContext.Provider>
  )
}

export const usePageNavLayout = () => {
  const ctx = useContext(PageNavLayoutContext)

  if (!ctx) {
    throw new Error('usePageNavLayout must be used within a PageNavLayoutProvider')
  }

  return ctx
}
