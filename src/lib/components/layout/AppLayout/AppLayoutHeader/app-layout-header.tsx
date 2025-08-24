import { ReactNode } from 'react'

import { Box } from 'lib/components'

export type AppLayoutHeaderProps = {
  children: ReactNode
}

export const AppLayoutHeader = ({ children }: AppLayoutHeaderProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutHeader.appLayoutSlotName = 'header'
