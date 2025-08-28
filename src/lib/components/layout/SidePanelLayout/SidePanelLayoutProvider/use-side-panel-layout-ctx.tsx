import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

type SidePanelLayoutContextValue = {
  sideOpen: boolean
  setSideOpen: Dispatch<SetStateAction<boolean>>
}

const SidePanelLayoutContext = createContext<SidePanelLayoutContextValue | undefined>(undefined)

export const SidePanelLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <SidePanelLayoutContext.Provider value={{ sideOpen, setSideOpen }}>
      {children}
    </SidePanelLayoutContext.Provider>
  )
}

export const useSidePanelLayout = () => {
  const ctx = useContext(SidePanelLayoutContext)

  if (!ctx) {
    throw new Error('useSidePanelLayout must be used within a SidePanelLayoutProvider')
  }

  return ctx
}
