import { BoxProps, HtmlTagProps } from 'lib/components'
import { ScaleValue, Sizes } from 'lib/definitions'
import { TEXT_TYPOGRAPHY_CONFIG } from 'lib/components/base/Text/definitions'

export const INPUT_SIZE_CONFIG: Record<
  InputSize,
  {
    blockSize: ScaleValue
    paddingLeft: ScaleValue
    paddingRight: ScaleValue
    fontSize: ScaleValue
  }
> = {
  xs: {
    blockSize: 28,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: TEXT_TYPOGRAPHY_CONFIG.compact.body.fontSize,
  },
  sm: {
    blockSize: 38,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
  },
  md: {
    blockSize: 44,
    paddingLeft: 13,
    paddingRight: 13,
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
  },
  lg: {
    blockSize: 52,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
  },
}

export const DEFAULT_INPUT_VARIANT: InputProps['variant'] = 'outline'
export const DEFAULT_INPUT_INTENT: InputProps['intent'] = 'neutral'
export const DEFAULT_INPUT_SIZE: InputProps['size'] = 'md'
export const INPUT_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies Sizes[]

export type InputSize = (typeof INPUT_SIZES)[number]

type InputOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  size?: InputSize
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'input'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'input'>, 'variant' | 'intent'>

export type InputProps = PropsFromHtmlTag & PropsFromBox & InputOwnProps
