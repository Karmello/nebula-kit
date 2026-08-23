import { ComponentPropsWithoutRef } from 'react'

import { BoxProps, IconProps } from 'lib/index.core'
import type { IconButtonTag, TShirtSize } from 'lib/types'

export type IconButtonProps<T extends IconButtonTag = 'button'> = {
  // own
  scale?: TShirtSize
  loading?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  variant?: BoxProps<T>['variant']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
  elevated?: BoxProps<T>['elevated']
  ripple?: BoxProps<T>['ripple']
  // Icon
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
}
