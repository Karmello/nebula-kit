import { BoxProps, TextProps } from 'lib/components/base'
import { ButtonSize, MakeRequired, ScaleValue } from 'lib/definitions'

export type ButtonOwnProps = {
  size?: ButtonSize
  textIntent?: TextProps<'span'>['intent']
}

export const BUTTON_INHERITED_PROPS = {
  Box: [
    'children',
    'elemProps',
    'elemRef',
    'variant',
    'intent',
    'borderRadius',
    'disabled',
    'display',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'inlineSize',
    'minInlineSize',
    'maxInlineSize',
    'margin',
    'marginInline',
    'marginBlock',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
  ] as const satisfies readonly (keyof BoxProps<'button'>)[],
  Text: [
    'textAlign',
    'bold',
    'iconName',
    'iconPosition',
  ] as const satisfies readonly (keyof TextProps<'span'>)[],
}

export type ButtonInheritedProps = MakeRequired<
  Pick<BoxProps<'button'>, (typeof BUTTON_INHERITED_PROPS)['Box'][number]>,
  'children'
> &
  Partial<Pick<TextProps<'span'>, (typeof BUTTON_INHERITED_PROPS)['Text'][number]>>

export type ButtonProps = ButtonOwnProps & ButtonInheritedProps

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
  sm: { blockSize: 19, paddingLeft: 6, paddingRight: 6, fontSize: 7 },
  md: { blockSize: 22, paddingLeft: 8, paddingRight: 8, fontSize: 8 },
  lg: { blockSize: 26, paddingLeft: 12, paddingRight: 12, fontSize: 9 },
}
