import { ElementType } from 'react'

import type { BoxProps } from '../Box'

export type BoxGroupProps<T extends ElementType = 'div'> = {
  // own
  squared?: boolean
  // Box
  brand?: BoxProps<T>['brand']
  children: BoxProps<T>['children']
  color?: BoxProps<T>['color']
  display?: BoxProps<T>['display']
  drawable?: BoxProps<T>['drawable']
  elevated?: BoxProps<T>['elevated']
  flexDirection?: BoxProps<T>['flexDirection']
  gap?: BoxProps<T>['gap']
  inlineSize?: BoxProps<T>['inlineSize']
  intent?: BoxProps<T>['intent']
  interactive?: BoxProps<T>['interactive']
  overflow?: BoxProps<T>['overflow']
  overflowX?: BoxProps<T>['overflowX']
  overflowY?: BoxProps<T>['overflowY']
  paddingBottom?: BoxProps<T>['paddingBottom']
  paddingLeft?: BoxProps<T>['paddingLeft']
  paddingRight?: BoxProps<T>['paddingRight']
  paddingTop?: BoxProps<T>['paddingTop']
  surface?: BoxProps<T>['surface']
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  theme?: BoxProps<T>['theme']
  variant?: BoxProps<T>['variant']
}
