import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppframeHeaderProps = {
  children: ReactNode
}

export const AppFrameHeader = ({ children }: AppframeHeaderProps) => {
  return <Box as="section">{children}</Box>
}

AppFrameHeader.slotName = Slot.header
