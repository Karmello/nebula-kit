import { ReactNode } from 'react'

import { Flex } from 'lib/components'
import { CssFlexJustify, HorizontalPosition } from 'lib/definitions'

export type HAlignOwnProps = {
  children: ReactNode
  position: HorizontalPosition
}

const MAP: Record<HorizontalPosition, CssFlexJustify> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

export const HAlign = ({ children, position }: HAlignOwnProps) => {
  return (
    <Flex variant="ghost" justify={MAP[position]}>
      {children}
    </Flex>
  )
}
