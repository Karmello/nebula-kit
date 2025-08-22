import { createContext, useContext } from 'react'

export interface NavLayoutContextValue {
  sideId: string
  open: boolean
  setOpen: (open: boolean) => void
}

export const NavLayoutContext = createContext<NavLayoutContextValue | null>(null)

export const useNavLayoutContext = (who: 'Main' | 'Sidebar' | 'Toggle') => {
  const context = useContext(NavLayoutContext)

  if (!context && process.env.NODE_ENV !== 'production') {
    console.warn(`[NavLayout${who}] must be used inside <NavLayout />`)
  }

  return context || { sideId: 'neb-nav-layout-missing', open: false, setOpen: () => null }
}
