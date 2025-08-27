import { ReactNode } from 'react'

import { Flex } from 'lib/components'
import { CssFlexJustify } from 'lib/definitions'

type Position = 'left' | 'center' | 'right'

export type HAlignOwnProps = {
  children: ReactNode
  position: Position
}

const MAP: Record<Position, CssFlexJustify> = {
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
