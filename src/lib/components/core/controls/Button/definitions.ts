import { MouseEventHandler } from 'react'

import { BoxProps, FlexProps, HtmlTagProps, TextProps, WithIconProps } from 'lib/components'
import { RespValue, TShirtSize } from 'lib/definitions'
import { TextScale } from 'lib/components/core/base/Text'
import { IconSize } from 'lib/components/core/elements/Icon'

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    blockSize: BoxProps['blockSize']
    padding: BoxProps['padding']
    iconSize: IconSize
    loaderSize: string
    textScale: TextScale
  }
> = {
  xs: {
    blockSize: '34px',
    padding: '10px',
    iconSize: 'sm',
    loaderSize: '14px',
    textScale: 'compact',
  },
  sm: {
    blockSize: '38px',
    padding: '12px',
    iconSize: 'sm',
    loaderSize: '16px',
    textScale: 'regular',
  },
  md: {
    blockSize: '44px',
    padding: '15px',
    iconSize: 'md',
    loaderSize: '18px',
    textScale: 'regular',
  },
  lg: {
    blockSize: '52px',
    padding: '20px',
    iconSize: 'md',
    loaderSize: '22px',
    textScale: 'regular',
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
