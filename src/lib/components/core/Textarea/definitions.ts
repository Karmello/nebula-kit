import { BoxProps } from 'lib/components'

export const DEFAULT_TEXTAREA_VARIANT: TextareaProps['variant'] = 'solid'
export const DEFAULT_TEXTAREA_INTENT: TextareaProps['intent'] = 'tertiary'
export const DEFAULT_TEXTAREA_ROWS: TextareaProps['rows'] = 5
export const DEFAULT_TEXTAREA_RESIZE: TextareaProps['resize'] = 'vertical'
export const DEFAULT_TEXTAREA_INLINE_SIZE: TextareaProps['inlineSize'] = '100%'
export const DEFAULT_TEXTAREA_MAX_INLINE_SIZE: TextareaProps['maxInlineSize'] = '100%'

export const TEXTAREA_RESIZE = ['none', 'vertical', 'horizontal', 'both'] as const

export type TextareaResize = (typeof TEXTAREA_RESIZE)[number]

type TextareaOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  rows?: number
  resize?: TextareaResize
  placeholder?: string
  readOnly?: boolean
  maxLength?: number
}

type PropsFromBox = Pick<
  BoxProps<'textarea'>,
  'tagAttrs' | 'tagRef' | 'variant' | 'color' | 'intent' | 'disabled' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'
>

export type TextareaProps = PropsFromBox & TextareaOwnProps
