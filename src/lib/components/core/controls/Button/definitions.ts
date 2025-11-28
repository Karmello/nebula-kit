import { BoxProps, FlexProps, HtmlTagProps, TextProps, WithIconProps } from 'lib/components'
import { RespValue, ScaleValue, Sizes } from 'lib/definitions'
import { BoxIntent, BoxVariant } from 'lib/components/core/base/Box/definitions'
import { TextScale } from 'lib/components/core/base/Text/definitions'

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    blockSize: ScaleValue
    paddingLeft: ScaleValue
    paddingRight: ScaleValue
    textScale: TextScale
    iconSize: ScaleValue
  }
> = {
  xs: { blockSize: 28, paddingLeft: 8, paddingRight: 8, textScale: 'compact', iconSize: 13 },
  sm: { blockSize: 38, paddingLeft: 12, paddingRight: 12, textScale: 'regular', iconSize: 15 },
  md: { blockSize: 44, paddingLeft: 16, paddingRight: 16, textScale: 'regular', iconSize: 16 },
  lg: { blockSize: 52, paddingLeft: 24, paddingRight: 24, textScale: 'regular', iconSize: 17 },
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
}

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = HtmlTagProps<T>

type PropsFromBox<T extends ButtonTag = 'button'> = Pick<
  BoxProps<T>,
  'variant' | 'color' | 'intent' | 'hoveredByDefault' | 'disabled'
>

type PropsFromFlex = Pick<FlexProps<'span'>, 'justifyContent'>

type PropsFromText = Pick<TextProps<'span'>, 'iconName' | 'iconPosition' | 'bold'>

type PropsFromWithIcon = Pick<WithIconProps, 'iconAngle'>

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromFlex &
  PropsFromText &
  PropsFromWithIcon &
  ButtonOwnProps
