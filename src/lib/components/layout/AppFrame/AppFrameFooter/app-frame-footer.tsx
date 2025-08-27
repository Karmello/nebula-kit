import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppFrameFooterProps = {
  children: ReactNode
}

export const AppFrameFooter = ({ children }: AppFrameFooterProps) => {
  return <Box as="section">{children}</Box>
}

AppFrameFooter.slotName = Slot.footer
