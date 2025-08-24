import { ReactNode } from 'react'

import { Box } from 'lib/components'

export type AppLayoutFooterProps = {
  children: ReactNode
}

export const AppLayoutFooter = ({ children }: AppLayoutFooterProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutFooter.appLayoutSlotName = 'footer'
