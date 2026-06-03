import { ComponentPropsWithoutRef } from 'react'

import { BoxProps, WithIconProps } from 'lib/index.core'
import { ButtonTag, ControlSize, RespValue } from 'lib/types'

import { TextProps } from '../Text'
import { BUTTON_ALIGNS } from './constants'

export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]

export type ButtonProps<T extends ButtonTag = 'button'> = Pick<
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
