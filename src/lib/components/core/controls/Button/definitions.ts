import { MouseEventHandler } from 'react'

import { BoxProps, HtmlTagProps, TextProps } from 'lib/components'
import { RespValue, TShirtSize } from 'lib/definitions'

export const DEFAULT_BUTTON_INTERACTIVE: ButtonProps['interactive'] = true
export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonProps['size'] = 'md'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_ALIGN: ButtonProps['align'] = 'center'

export const BUTTON_TAGS = ['button', 'a'] as const
export const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]
export const BUTTON_ALIGNS = ['center', 'start', 'split'] as const

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]
export type ButtonAlign = (typeof BUTTON_ALIGNS)[number]

type ButtonOwnProps = {
  size?: ButtonSize
  fullWidth?: RespValue<boolean>
  align?: RespValue<ButtonAlign>
  loading?: boolean
  ripple?: boolean
  selected?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = HtmlTagProps<T>

type PropsFromBox<T extends ButtonTag = 'button'> = Pick<
  BoxProps<T>,
  'variant' | 'color' | 'intent' | 'interactive' | 'disabled' | 'elevated' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'
>

type PropsFromText = Pick<TextProps<'span'>, 'bold' | 'iconName' | 'iconPlacement' | 'iconAngle' | 'customSvgIcon'>

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> & PropsFromBox<T> & PropsFromText & ButtonOwnProps
