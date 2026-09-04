import { BoxProps } from '../Box'
import { TEXTAREA_RESIZE, TEXTAREA_VARIANTS } from './constants'

export type TextareaResize = (typeof TEXTAREA_RESIZE)[number]
export type TextareaVariant = (typeof TEXTAREA_VARIANTS)[number]

export type TextareaProps = {
  // own
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
  // Box
  tagAttrs?: BoxProps<'textarea'>['tagAttrs']
  tagRef?: BoxProps<'textarea'>['tagRef']
  variant?: TextareaVariant
  color?: BoxProps<'textarea'>['color']
  intent?: BoxProps<'textarea'>['intent']
  disabled?: BoxProps<'textarea'>['disabled']
  inlineSize?: BoxProps<'textarea'>['inlineSize']
  minInlineSize?: BoxProps<'textarea'>['minInlineSize']
  maxInlineSize?: BoxProps<'textarea'>['maxInlineSize']
}
