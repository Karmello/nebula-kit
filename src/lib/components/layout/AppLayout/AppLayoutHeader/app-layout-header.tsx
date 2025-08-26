import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppLayoutHeaderProps = {
  children: ReactNode
}

export const AppLayoutHeader = ({ children }: AppLayoutHeaderProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutHeader.slotName = Slot.header
