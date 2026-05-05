import { ReactNode } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'
import { LengthValue, TShirtSize } from 'lib/definitions'
import { TEXT_TYPOGRAPHY_CONFIG } from 'lib/components/core/base/Text/definitions'

export const INPUT_SIZE_CONFIG: Record<
  InputSize,
  {
    blockSize: LengthValue
    paddingLeft: LengthValue
    paddingRight: LengthValue
    fontSize: string
  }
> = {
  xs: {
    blockSize: '34px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: TEXT_TYPOGRAPHY_CONFIG.compact.body.fontSize,
  },
  sm: {
    blockSize: '38px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
  },
  md: {
    blockSize: '44px',
    paddingLeft: '13px',
    paddingRight: '13px',
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
  },
  lg: {
    blockSize: '52px',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontSize: TEXT_TYPOGRAPHY_CONFIG.regular.body.fontSize,
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
