import { ReactNode } from 'react'

import { Box } from 'lib/components'

export type PageNavLayoutMainProps = {
  children: ReactNode
}

export const PageNavLayoutMain = ({ children }: PageNavLayoutMainProps) => {
  return <Box as="section">{children}</Box>
}

PageNavLayoutMain.slotName = 'main'
