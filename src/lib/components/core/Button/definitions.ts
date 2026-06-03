import { ComponentPropsWithoutRef } from 'react'

import { BUTTON_TAGS } from 'lib/constants'
import { BoxProps, WithIconProps } from 'lib/index.core'
import { ButtonTag, ControlSize, RespValue } from 'lib/types'

import { TextProps } from '../Text'

export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_ALIGN: ButtonProps['align'] = 'center'

export const BUTTON_ALIGNS = ['center', 'start', 'split'] as const

export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]

export type ButtonProps<T extends ButtonTag = (typeof BUTTON_TAGS)[0]> = Pick<
  BoxProps<T>,
  | 'children'
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'variant'
  | 'color'
  | 'intent'
  | 'disabled'
  | 'elevated'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'ripple'
> &
  Pick<TextProps<'span'>, 'bold'> &
  Pick<WithIconProps, 'customSvgIcon' | 'iconName' | 'iconAngle' | 'iconPlacement'> & {
    size?: ControlSize
    fullWidth?: RespValue<boolean>
    align?: RespValue<ButtonAlign>
    loading?: boolean
    description?: string
    selected?: boolean
    onClick?: ComponentPropsWithoutRef<T>['onClick']
  }
