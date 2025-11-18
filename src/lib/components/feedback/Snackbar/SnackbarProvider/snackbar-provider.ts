import { createContext, useContext } from 'react'

export const SnackbarContext = createContext<any>(null)

export const useSnackbarContext = () => useContext(SnackbarContext)
