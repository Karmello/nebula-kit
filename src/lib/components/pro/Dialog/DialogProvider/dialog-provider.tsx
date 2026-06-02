import { createContext, ReactNode, useContext } from 'react'

import { BoxIntent, BoxProps } from 'lib/components/core/Box/types'

type DialogContextValue = {
  intent: BoxIntent
  padding: BoxProps['padding']
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined)

export const DialogProvider = ({ children, intent, padding }: { children: ReactNode } & DialogContextValue) => {
  return <DialogContext.Provider value={{ intent, padding }}>{children}</DialogContext.Provider>
}

export const useDialogContext = () => {
  const ctx = useContext(DialogContext)

  if (!ctx) {
    throw new Error('useDialogContext must be used within a DialogProvider')
  }

  return ctx
}
