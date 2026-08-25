import { ElementType } from 'react'

import type { BoxGroupProps, BoxProps } from 'lib/index.core'
import type { CssFlexDirection } from 'lib/types'

export type BoxGroupItemInternalProps = {
  key: number
  index: number
  count: number
  squared: BoxGroupProps['squared']
  flexDirection: CssFlexDirection
}

export type BoxGroupItemProps<T extends ElementType = 'div'> = BoxProps<T>
