import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type PageNavLayoutSideDesktopProps = {
  children: ReactNode
}

export const PageNavLayoutSideDesktop = ({ children }: PageNavLayoutSideDesktopProps) => {
  return <Box as="section">{children}</Box>
}

PageNavLayoutSideDesktop.slotName = Slot.sideDesktop
