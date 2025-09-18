import { BoxProps, TextProps } from 'lib/components/base'
import { ButtonElem, ButtonSize, MakeRequired, ScaleValue } from 'lib/definitions'

export type ButtonOwnProps = {
  size?: ButtonSize
}

export const BUTTON_INHERITED_PROPS = {
  Box: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
    'variant',
    'intent',
    'disabled',
  ] as const satisfies readonly (keyof BoxProps<ButtonElem>)[],
  Text: ['iconName', 'iconPosition'] as const satisfies readonly (keyof TextProps<'span'>)[],
}

export type ButtonInheritedProps<E extends ButtonElem = 'button'> = MakeRequired<
  Pick<BoxProps<E>, (typeof BUTTON_INHERITED_PROPS)['Box'][number]>,
  'children'
> &
  Partial<Pick<TextProps<'span'>, (typeof BUTTON_INHERITED_PROPS)['Text'][number]>>

export type ButtonProps<E extends ButtonElem = 'button'> = ButtonOwnProps & ButtonInheritedProps<E>

// constants

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
