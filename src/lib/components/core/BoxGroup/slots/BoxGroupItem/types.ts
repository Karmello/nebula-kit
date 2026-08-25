import { ElementType } from 'react'

import type { BoxProps } from 'lib/components/core/Box'
import type { CssFlexDirection } from 'lib/types'

import type { BoxGroupProps } from '../../types'

export type BoxGroupItemInternalProps = {
  key: number
  index: number
  count: number
  squared: BoxGroupProps['squared']
  flexDirection: CssFlexDirection
}

export type BoxGroupItemProps<T extends ElementType = 'div'> = BoxProps<T>
