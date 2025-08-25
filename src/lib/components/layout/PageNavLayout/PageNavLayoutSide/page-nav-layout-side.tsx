import { ReactNode } from 'react'

import { Box } from 'lib/components'

export type PageNavLayoutSideProps = {
  children: ReactNode
}

export const PageNavLayoutSide = ({ children }: PageNavLayoutSideProps) => {
  return <Box as="section">{children}</Box>
}

PageNavLayoutSide.pageNavLayoutSlotName = 'side'
