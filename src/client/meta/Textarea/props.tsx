import { ComponentMeta } from 'client/definitions'
import { TextareaProps } from 'lib/components'

import {
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_RESIZE,
} from 'lib/components/core/form-elements/Textarea'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TEXTAREA_PROPS_META: ComponentMeta<TextareaProps>['props'] = {
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TEXTAREA_INTENT),
  },
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  maxLength: {
    options: ['number'],
    description: 'Maximum number of characters allowed for the textarea value.',
  },
  minInlineSize: BOX_PROPS_META.minInlineSize,
  onBlur: {
    options: ['event => void'],
    description: 'Callback fired when the textarea loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
  onFocus: {
    options: ['event => void'],
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
    tooltip: TEXTAREA_RESIZE,
  },
  rows: {
    options: ['number'],
    defaultValue: DEFAULT_TEXTAREA_ROWS as never,
    description: 'Initial number of text rows to display.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_TEXTAREA_VARIANT),
  },
}

export { TEXTAREA_PROPS_META }
