import { createContext, ReactNode, useContext } from 'react'

import { FooterProps } from 'lib/index.core'

type FooterContextValue = {
  borderIntent: FooterProps['borderIntent']
  padding: FooterProps['padding']
  paddingBlock: FooterProps['paddingBlock']
  paddingInline: FooterProps['paddingInline']
  paddingTop: FooterProps['paddingTop']
  paddingRight: FooterProps['paddingRight']
  paddingBottom: FooterProps['paddingBottom']
  paddingLeft: FooterProps['paddingLeft']
}

const FooterContext = createContext<FooterContextValue | undefined>(undefined)

export const FooterProvider = ({
  children,
  borderIntent,
  padding,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: { children: ReactNode } & FooterContextValue) => {
  return (
    <FooterContext.Provider
      value={{
        borderIntent,
        padding,
        paddingBlock,
        paddingInline,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
      }}
    >
      {children}
    </FooterContext.Provider>
  )
}

export const useFooterContext = () => {
  const ctx = useContext(FooterContext)

  if (!ctx) {
    throw new Error('useFooterContext must be used within a FooterProvider')
  }

  return ctx
}
