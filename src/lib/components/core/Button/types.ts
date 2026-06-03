import { ComponentPropsWithoutRef } from 'react'

import { FlexProps, IconProps } from 'lib/index.core'
import { ButtonTag, ControlSize, RespValue } from 'lib/types'

import { TextProps } from '../Text'
import { BUTTON_ALIGNS, BUTTON_ICON_PLACEMENTS } from './constants'

export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]
export type ButtonIconPlacement = (typeof BUTTON_ICON_PLACEMENTS)[number]

export type ButtonProps<T extends ButtonTag = 'button'> = {
  size?: ControlSize
  fullWidth?: RespValue<boolean>
  align?: RespValue<ButtonAlign>
  loading?: boolean
  selected?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
  iconPlacement?: ButtonIconPlacement
} & Pick<
  FlexProps<T>,
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'variant'
  | 'color'
  | 'intent'
  | 'disabled'
  | 'elevated'
  | 'ripple'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
> &
  Pick<TextProps<'span'>, 'children' | 'bold'> & {
    iconName?: IconProps['name']
    customSvgIcon?: IconProps['children']
  }
