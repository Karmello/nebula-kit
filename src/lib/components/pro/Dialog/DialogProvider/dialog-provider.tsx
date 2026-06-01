import { createContext, useContext, ReactNode } from 'react'

import { BoxProps } from 'lib/components/core/Box/definitions'
import { BoxIntent } from 'lib/types'

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
