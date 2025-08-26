import { JSX, ReactNode } from 'react'

import { Box, usePageNavLayout } from 'lib/components'
import { Slot } from 'lib/definitions'

type ChildrenAsFuncArgs = {
  setSideOpen: (open: boolean) => void
}

export type PageNavLayoutSideMobileProps = {
  children: ReactNode | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export const PageNavLayoutSideMobile = ({ children }: PageNavLayoutSideMobileProps) => {
  const { setSideOpen } = usePageNavLayout()

  return <Box as="section">{typeof children === 'function' ? children({ setSideOpen }) : children}</Box>
}

PageNavLayoutSideMobile.slotName = Slot.sideMobile
