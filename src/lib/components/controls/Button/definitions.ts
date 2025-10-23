import { BoxProps, HtmlTagProps, TextProps } from 'lib/components'
import { ScaleValue } from 'lib/definitions'
import { BoxIntent, BoxVariant } from 'lib/components/base/Box/definitions'

export const BUTTON_SIZE_CONFIG: Record<
  ButtonSize,
  {
    blockSize: ScaleValue
    paddingLeft: ScaleValue
    paddingRight: ScaleValue
    fontSize: ScaleValue
  }
> = {
  xs: { blockSize: 14, paddingLeft: 4, paddingRight: 4, fontSize: 4 },
  sm: { blockSize: 19, paddingLeft: 6, paddingRight: 6, fontSize: 7 },
  md: { blockSize: 22, paddingLeft: 8, paddingRight: 8, fontSize: 8 },
  lg: { blockSize: 26, paddingLeft: 12, paddingRight: 12, fontSize: 9 },
}

export const DEFAULT_BUTTON_VARIANT: BoxVariant = 'solid'
export const DEFAULT_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'md'
export const DEFAULT_BUTTON_LABEL_ALIGN: ButtonLabelAlign = 'center'

export const ButtonTag = ['button', 'a'] as const
export const ButtonSize = ['xs', 'sm', 'md', 'lg'] as const
export const ButtonLabelAlign = ['center', 'left'] as const

export type ButtonTag = (typeof ButtonTag)[number]
export type ButtonSize = (typeof ButtonSize)[number]
export type ButtonLabelAlign = (typeof ButtonLabelAlign)[number]

type ButtonOwnProps = {
  size?: ButtonSize
  labelAlign?: ButtonLabelAlign
}

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends ButtonTag = 'button'> = Pick<
  BoxProps<T>,
  'variant' | 'intent' | 'disabled' | 'borderRadius'
>

type PropsFromText = Pick<TextProps<'span'>, 'iconName' | 'iconPosition'> & {
  labelIntent?: TextProps<'span'>['intent']
}

export type ButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromText &
  ButtonOwnProps
