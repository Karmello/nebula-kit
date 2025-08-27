import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppFrameMainProps = {
  children: ReactNode
}

export const AppFrameMain = ({ children }: AppFrameMainProps) => {
  return <Box as="section">{children}</Box>
}

AppFrameMain.slotName = Slot.main
