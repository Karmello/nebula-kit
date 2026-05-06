import { MouseEventHandler } from 'react'

import { BoxProps, FlexProps, HtmlTagProps, TextProps, WithIconProps } from 'lib/components'
import { CONTROL_SIZE_TOKENS, RespValue, TShirtSize } from 'lib/definitions'
import { IconSize } from 'lib/components/core/elements/Icon'

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    blockSize: BoxProps['blockSize']
    paddingInline: BoxProps['padding']
    fontSize: TextProps['fontSize']
    lineHeight: TextProps['lineHeight']
    iconSize: IconSize
    loaderSize: string
  }
> = {
  xs: {
    blockSize: CONTROL_SIZE_TOKENS.xs.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.xs.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.xs.fontSize,
    lineHeight: 2,
    iconSize: '14px',
    loaderSize: '14px',
  },
  sm: {
    blockSize: CONTROL_SIZE_TOKENS.sm.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.sm.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.sm.fontSize,
    lineHeight: 2,
    iconSize: '16px',
    loaderSize: '16px',
  },
  md: {
    blockSize: CONTROL_SIZE_TOKENS.md.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.md.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.md.fontSize,
    lineHeight: 1.5,
    iconSize: '18px',
    loaderSize: '18px',
  },
  lg: {
    blockSize: CONTROL_SIZE_TOKENS.lg.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.lg.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.lg.fontSize,
    lineHeight: 1.5,
    iconSize: '20px',
    loaderSize: '22px',
  },
}

export const DEFAULT_BUTTON_INTERACTIVE: ButtonProps['interactive'] = true
export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonProps['size'] = 'md'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_JUSTIFY_CONTENT: FlexProps['justifyContent'] = 'center'

export const BUTTON_TAGS = ['button', 'a'] as const
export const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]

type ButtonOwnProps = {
  size?: ButtonSize
  fullWidth?: RespValue<boolean>
  loading?: boolean
  ripple?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = HtmlTagProps<T>

type PropsFromBox<T extends ButtonTag = 'button'> = Pick<
  BoxProps<T>,
  | 'variant'
  | 'color'
  | 'intent'
  | 'interactive'
  | 'selected'
  | 'disabled'
  | 'surface'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
>

type PropsFromFlex = Pick<FlexProps<'span'>, 'justifyContent'>

type PropsFromText = Pick<TextProps<'span'>, 'iconName' | 'iconPlacement' | 'bold'>

type PropsFromWithIcon = Pick<WithIconProps, 'iconAngle' | 'customSvgIcon'>

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromFlex &
  PropsFromText &
  PropsFromWithIcon &
  ButtonOwnProps
