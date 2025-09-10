import { ReactElement } from 'react'

import { Flex } from 'lib/components'
import { CssFlexJustifyContent, HorizontalPosition } from 'lib/definitions'

export type HAlignOwnProps = {
  children: ReactElement
  position: HorizontalPosition
}

const MAP: Record<HorizontalPosition, CssFlexJustifyContent> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

export const HAlign = ({ children, position }: HAlignOwnProps) => {
  return <Flex justifyContent={MAP[position]}>{children}</Flex>
}
