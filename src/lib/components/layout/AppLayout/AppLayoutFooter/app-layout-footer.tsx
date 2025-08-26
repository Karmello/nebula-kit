import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppLayoutFooterProps = {
  children: ReactNode
}

export const AppLayoutFooter = ({ children }: AppLayoutFooterProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutFooter.slotName = Slot.footer
