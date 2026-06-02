import { BUTTON_TAGS } from 'lib/constants'
import { WithIconProps } from 'lib/index.core'
import { ButtonTag, ControlSize, RespValue } from 'lib/types'

import { ActionSurfaceProps } from '../ActionSurface'
import { TextProps } from '../Text'

export const DEFAULT_BUTTON_INTERACTIVE: ButtonProps['interactive'] = true
export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_ALIGN: ButtonProps['align'] = 'center'

export const BUTTON_ALIGNS = ['center', 'start', 'split'] as const

export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]

type ButtonOwnProps = {
  size?: ControlSize
  fullWidth?: RespValue<boolean>
  align?: RespValue<ButtonAlign>
  loading?: boolean
  description?: string
}

type PropsFromActionSurface<T extends ButtonTag = (typeof BUTTON_TAGS)[0]> = Pick<
  ActionSurfaceProps<T>,
  | 'children'
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'variant'
  | 'color'
  | 'intent'
  | 'interactive'
  | 'disabled'
  | 'elevated'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'ripple'
  | 'selected'
  | 'onClick'
>

type PropsFromText = Pick<TextProps<'span'>, 'bold'>

type PropsFromWithIcon = Pick<WithIconProps, 'customSvgIcon' | 'iconName' | 'iconAngle' | 'iconPlacement'>

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromActionSurface<T> &
  PropsFromText &
  PropsFromWithIcon &
  ButtonOwnProps
