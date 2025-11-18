import { createContext, ReactNode, useContext } from 'react'

const SnackbarContext = createContext<any>(null)

export const useSnackbarContext = () => useContext(SnackbarContext)

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  return <SnackbarContext.Provider value={null}>{children}</SnackbarContext.Provider>
}
