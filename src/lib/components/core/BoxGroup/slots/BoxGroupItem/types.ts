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

export type BoxGroupItemProps<T extends ElementType = 'div'> = {
  blockSize?: BoxProps<T>['blockSize']
  brand?: BoxProps<T>['brand']
  children?: BoxProps<T>['children']
  color?: BoxProps<T>['color']
  cursor?: BoxProps<T>['cursor']
  disabled?: BoxProps<T>['disabled']
  drawable?: BoxProps<T>['drawable']
  elevated?: BoxProps<T>['elevated']
  inlineSize?: BoxProps<T>['inlineSize']
  intent?: BoxProps<T>['intent']
  interactive?: BoxProps<T>['interactive']
  padding?: BoxProps<T>['padding']
  paddingBlock?: BoxProps<T>['paddingBlock']
  paddingInline?: BoxProps<T>['paddingInline']
  ripple?: BoxProps<T>['ripple']
  surface?: BoxProps<T>['surface']
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  textAlign?: BoxProps<T>['textAlign']
  theme?: BoxProps<T>['theme']
  variant?: BoxProps<T>['variant']
}
