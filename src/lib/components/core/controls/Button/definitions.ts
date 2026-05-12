import { MouseEventHandler } from 'react'

import { BoxProps, HtmlTagProps, TextProps } from 'lib/components'
import { RespValue, TShirtSize } from 'lib/definitions'

import { IconSize } from '../../elements/Icon'
import { TEXT_TYPOGRAPHY_MAP } from '../../base/Text'

export const DEFAULT_BUTTON_INTERACTIVE: ButtonProps['interactive'] = true
export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonProps['size'] = 'md'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_JUSTIFY_CONTENT: ButtonProps['justifyContent'] = 'center'
export const DEFAULT_BUTTON_TEXT_ALIGN: ButtonProps['textAlign'] = 'center'

export const BUTTON_TAGS = ['button', 'a'] as const
export const BUTTON_SIZES = ['2xs', 'xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]

type ButtonOwnProps = {
  size?: ButtonSize
  fullWidth?: RespValue<boolean>
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

type PropsFromText = Pick<
  TextProps<'span'>,
  'bold' | 'iconName' | 'iconPlacement' | 'iconAngle' | 'customSvgIcon' | 'justifyContent' | 'textAlign'
>

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> & PropsFromBox<T> & PropsFromText & ButtonOwnProps

export const BUTTON_SIZE_MAP: Record<
  ButtonSize,
  {
    blockSize: string
    paddingInline: string
    fontSize: string
    lineHeight: number | string
    iconSize: IconSize
    loaderSize: string
  }
> = {
  '2xs': {
    blockSize: '28px',
    paddingInline: '7px',
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.small.iconSize,
    loaderSize: '12px',
  },
  xs: {
    blockSize: '34px',
    paddingInline: '10px',
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.small.iconSize,
    loaderSize: '14px',
  },
  sm: {
    blockSize: '38px',
    paddingInline: '12px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '16px',
  },
  md: {
    blockSize: '44px',
    paddingInline: '15px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '18px',
  },
  lg: {
    blockSize: '52px',
    paddingInline: '20px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '22px',
  },
}
