import { JSX, ReactNode } from 'react'

import { Box, useSidePanelLayout } from 'lib/components'
import { Slot } from 'lib/definitions'

type ChildrenAsFuncArgs = {
  setSideOpen: (open: boolean) => void
}

export type SidePanelLayoutMobileProps = {
  children: ReactNode | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export const SidePanelLayoutMobile = ({ children }: SidePanelLayoutMobileProps) => {
  const { setSideOpen } = useSidePanelLayout()

  return <Box as="section">{typeof children === 'function' ? children({ setSideOpen }) : children}</Box>
}

SidePanelLayoutMobile.slotName = Slot.sideMobile
