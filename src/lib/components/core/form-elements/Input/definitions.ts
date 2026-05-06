import { ReactNode } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'
import { CONTROL_SIZE_TOKENS, TShirtSize } from 'lib/definitions'

export const INPUT_SIZE_CONFIG: Record<
  InputSize,
  {
    blockSize: BoxProps['blockSize']
    paddingInline: BoxProps['paddingInline']
    fontSize: string
  }
> = {
  xs: {
    blockSize: CONTROL_SIZE_TOKENS.xs.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.xs.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.xs.fontSize,
  },
  sm: {
    blockSize: CONTROL_SIZE_TOKENS.sm.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.sm.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.sm.fontSize,
  },
  md: {
    blockSize: CONTROL_SIZE_TOKENS.md.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.md.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.md.fontSize,
  },
  lg: {
    blockSize: CONTROL_SIZE_TOKENS.lg.blockSize,
    paddingInline: CONTROL_SIZE_TOKENS.lg.paddingInline,
    fontSize: CONTROL_SIZE_TOKENS.lg.fontSize,
  },
}

export const DEFAULT_INPUT_VARIANT: InputProps['variant'] = 'solid'
export const DEFAULT_INPUT_INTENT: InputProps['intent'] = 'tertiary'
export const DEFAULT_INPUT_SIZE: InputProps['size'] = 'md'
export const INPUT_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export type InputSize = (typeof INPUT_SIZES)[number]

export type InputAffixProps = Pick<InputProps, 'color' | 'disabled' | 'intent' | 'size' | 'variant'>

type InputOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  size?: InputSize
  startAffix?: (props: InputAffixProps) => ReactNode
  endAffix?: (props: InputAffixProps) => ReactNode
  placeholder?: string
  readOnly?: boolean
  maxLength?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'input'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'input'>, 'variant' | 'color' | 'intent' | 'disabled'>

export type InputProps = PropsFromHtmlTag & PropsFromBox & InputOwnProps
