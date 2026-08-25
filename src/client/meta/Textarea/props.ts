import {
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_RESIZE,
} from 'lib/components/core/Textarea/constants'
import { TextareaProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TEXTAREA_PROPS: Record<keyof TextareaProps, DocProp> = {
  color: BOX_META.props.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: BOX_META.props.disabled,
  inlineSize: BOX_META.props.inlineSize,
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_TEXTAREA_INTENT),
  },
  maxInlineSize: BOX_META.props.maxInlineSize,
  maxLength: {
    options: ['number'],
    description: 'Maximum number of characters allowed for the textarea value.',
  },
  minInlineSize: BOX_META.props.minInlineSize,
  onBlur: {
    options: ['e => void'],
    description: 'Callback fired when the textarea loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
  onFocus: {
    options: ['e => void'],
    description: 'Callback fired when the textarea receives focus.',
  },
  placeholder: {
    options: ['string'],
    description: 'Hint text displayed when the textarea has no value.',
  },
  readOnly: {
    options: ['boolean'],
    description: 'Prevents editing the value while keeping the field focusable.',
  },
  resize: {
    options: TEXTAREA_RESIZE,
    defaultValue: DEFAULT_TEXTAREA_RESIZE,
    description: "Controls the textarea's resize behavior.",
  },
  rows: {
    options: ['number'],
    defaultValue: DEFAULT_TEXTAREA_ROWS as never,
    description: 'Initial number of text rows to display.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  variant: {
    ...BOX_META.props.variant,
    defaultValue: String(DEFAULT_TEXTAREA_VARIANT),
  },
}
