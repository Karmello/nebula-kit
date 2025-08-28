import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type SidePanelLayoutMainProps = {
  children: ReactNode
}

export const SidePanelLayoutMain = ({ children }: SidePanelLayoutMainProps) => {
  return <Box as="section">{children}</Box>
}

SidePanelLayoutMain.slotName = Slot.main
