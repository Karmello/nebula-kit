import { ReactNode } from 'react'

import { Box } from 'lib/components'

export type AppLayoutMainProps = {
  children: ReactNode
}

export const AppLayoutMain = ({ children }: AppLayoutMainProps) => {
  return <Box as="section">{children}</Box>
}

AppLayoutMain.appLayoutSlotName = 'main'
