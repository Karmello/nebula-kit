import type { BoxProps } from 'lib/components/core/Box'
import type { IconProps } from 'lib/components/core/Icon'
import type { TShirtSize } from 'lib/types'

import { ICON_BUTTON_TAGS, ICON_BUTTON_VARIANTS } from './constants'

export type IconButtonTag = (typeof ICON_BUTTON_TAGS)[number]
export type IconButtonVariant = (typeof ICON_BUTTON_VARIANTS)[number]

export type IconButtonProps<T extends IconButtonTag = 'button'> = {
  // own
  scale?: TShirtSize
  loading?: boolean
  // Box
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  onClick?: BoxProps<T>['onClick']
  variant?: IconButtonVariant
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
  surfaceDepth?: BoxProps<T>['surfaceDepth']
  ripple?: BoxProps<T>['ripple']
  // Icon
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
}
