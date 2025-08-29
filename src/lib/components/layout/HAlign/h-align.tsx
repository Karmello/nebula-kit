import { ReactNode } from 'react'

import { Flex } from 'lib/components'
import { CssFlexJustify, HorizontalPosition } from 'lib/definitions'

export type HAlignOwnProps = {
  children: ReactNode
  position: HorizontalPosition
}

const MAP: Record<HorizontalPosition, CssFlexJustify> = {
  left: CssFlexJustify['flex-start'],
  center: CssFlexJustify.center,
  right: CssFlexJustify['flex-end'],
}

export const HAlign = ({ children, position }: HAlignOwnProps) => {
  return (
    <Flex variant="ghost" justify={MAP[position]}>
      {children}
    </Flex>
  )
}
