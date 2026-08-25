import { ElementType } from 'react'

import type { BoxProps } from '../Box'

export type BoxGroupProps<T extends ElementType = 'div'> = Omit<BoxProps<T>, 'children'> & {
  children: BoxProps<T>['children']
  squared?: boolean
}
