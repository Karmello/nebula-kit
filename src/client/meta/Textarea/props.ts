import { BOX_COLORS, BOX_INTENTS, BOX_VARIANTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_RESIZE,
} from 'lib/components/core/Textarea/constants'
import { TextareaProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const TEXTAREA_PROPS: Record<keyof TextareaProps, DocProp> = {
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TEXTAREA_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  maxLength: {
    options: ['number'],
    description: 'Maximum number of characters allowed for the textarea value.',
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
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
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  variant: {
    options: BOX_VARIANTS,
    defaultValue: String(DEFAULT_TEXTAREA_VARIANT),
    description: 'Visual style variant.',
  },
}
