import { MouseEventHandler } from 'react'

import { BoxProps, FlexProps, HtmlTagProps, TextProps, WithIconProps } from 'lib/components'
import { RespValue, Sizes } from 'lib/definitions'
import { BoxIntent, BoxVariant } from 'lib/components/core/base/Box/definitions'
import { TextScale } from 'lib/components/core/base/Text/definitions'

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    blockSize: string
    paddingLeft: string
    paddingRight: string
    textScale: TextScale
    iconSize: string
  }
> = {
  xs: { blockSize: '28px', paddingLeft: '8px', paddingRight: '8px', textScale: 'compact', iconSize: '13px' },
  sm: {
    blockSize: '38px',
    paddingLeft: '12px',
    paddingRight: '12px',
    textScale: 'regular',
    iconSize: '15px',
  },
  md: {
    blockSize: '44px',
    paddingLeft: '16px',
    paddingRight: '16px',
    textScale: 'regular',
    iconSize: '16px',
  },
  lg: {
    blockSize: '52px',
    paddingLeft: '24px',
    paddingRight: '24px',
    textScale: 'regular',
    iconSize: '17px',
  },
}

export const DEFAULT_BUTTON_VARIANT: BoxVariant = 'solid'
export const DEFAULT_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'md'
export const DEFAULT_BUTTON_JUSTIFY_CONTENT: FlexProps['justifyContent'] = 'center'

export const BUTTON_TAGS = ['button', 'a'] as const
export const BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies Sizes[]

export type ButtonTag = (typeof BUTTON_TAGS)[number]
export type ButtonSize = (typeof BUTTON_SIZES)[number]

type ButtonOwnProps = {
  size?: ButtonSize
  fullWidth?: RespValue<boolean>
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = HtmlTagProps<T>

type PropsFromBox<T extends ButtonTag = 'button'> = Pick<
  BoxProps<T>,
  | 'variant'
  | 'color'
  | 'intent'
  | 'highlighted'
  | 'disabled'
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
