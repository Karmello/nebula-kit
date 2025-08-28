import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type SidePanelLayoutDesktopProps = {
  children: ReactNode
}

export const SidePanelLayoutDesktop = ({ children }: SidePanelLayoutDesktopProps) => {
  return <Box as="section">{children}</Box>
}

SidePanelLayoutDesktop.slotName = Slot.sideDesktop
