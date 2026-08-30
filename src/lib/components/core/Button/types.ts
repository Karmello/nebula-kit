import { ComponentPropsWithoutRef } from 'react'

import { BoxProps } from 'lib/components/core/Box'
import { IconProps } from 'lib/components/core/Icon'
import { RespValue, TShirtSize } from 'lib/types'

import { type TextProps } from '../Text'
import { BUTTON_ALIGNS, BUTTON_ICON_PLACEMENTS, BUTTON_TAGS } from './constants'

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]
export type ButtonIconPlacement = (typeof BUTTON_ICON_PLACEMENTS)[number]

export type ButtonProps<T extends ButtonTag = 'button'> = {
  // own
  scale?: TShirtSize
  fullWidth?: RespValue<boolean>
  align?: RespValue<ButtonAlign>
  loading?: boolean
  selected?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
  iconPlacement?: ButtonIconPlacement
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  theme?: BoxProps<T>['theme']
  variant?: BoxProps<T>['variant']
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
