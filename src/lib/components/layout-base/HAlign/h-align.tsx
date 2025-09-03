import { ReactNode } from 'react'

import { Flex } from 'lib/components'
import { CssFlexJustifyContent, HorizontalPosition } from 'lib/definitions'

export type HAlignOwnProps = {
  children: ReactNode
  position: `${HorizontalPosition}`
}

const MAP: Record<HorizontalPosition, CssFlexJustifyContent> = {
  left: CssFlexJustifyContent['flex-start'],
  center: CssFlexJustifyContent.center,
  right: CssFlexJustifyContent['flex-end'],
}

export const HAlign = ({ children, position }: HAlignOwnProps) => {
  return (
    <Flex variant="ghost" justifyContent={MAP[position]}>
      {children}
    </Flex>
  )
}
