import { ReactNode } from 'react'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'

export type AppLayoutMainProps = {
  children: ReactNode
}

export const AppLayoutMain = ({ children }: AppLayoutMainProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutMain.slotName = Slot.main
