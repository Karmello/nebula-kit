import { InputHTMLAttributes, ReactNode } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'
import { TShirtSize } from 'lib/definitions'

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
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'input'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'input'>, 'variant' | 'color' | 'intent' | 'disabled'>

export type InputProps = PropsFromHtmlTag & PropsFromBox & InputOwnProps
