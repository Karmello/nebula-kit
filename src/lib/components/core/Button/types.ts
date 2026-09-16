import { BoxProps } from 'lib/components/core/Box'
import { IconProps } from 'lib/components/core/Icon'
import { RespValue, TShirtSize } from 'lib/types'

import { type TextProps } from '../Text'
import { BUTTON_ALIGNS, BUTTON_ICON_PLACEMENTS, BUTTON_TAGS, BUTTON_VARIANTS } from './constants'

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]
export type ButtonIconPlacement = (typeof BUTTON_ICON_PLACEMENTS)[number]
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

export type ButtonProps<T extends ButtonTag = 'button'> = {
  // own
  scale?: TShirtSize
  fullWidth?: RespValue<boolean>
  align?: RespValue<ButtonAlign>
  loading?: boolean
  selected?: boolean
  iconPlacement?: ButtonIconPlacement
  // Box
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  onClick?: BoxProps<T>['onClick']
  variant?: ButtonVariant
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
  surfaceDepth?: BoxProps<T>['surfaceDepth']
  ripple?: BoxProps<T>['ripple']
  inlineSize?: BoxProps<T>['inlineSize']
  minInlineSize?: BoxProps<T>['minInlineSize']
  maxInlineSize?: BoxProps<T>['maxInlineSize']
  // Text
  children: TextProps<'span'>['children']
  bold?: TextProps<'span'>['bold']
  // Icon
  iconName?: IconProps['name']
  customSvgIcon?: IconProps['children']
}
