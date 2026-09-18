import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_RESIZE,
  TEXTAREA_VARIANTS,
} from 'lib/components/core/Textarea/constants'
import { TextareaProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const TEXTAREA_PROPS: Record<keyof TextareaProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // value
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
    group: 'value',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
    group: 'value',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
    group: 'value',
  },
  maxLength: {
    options: ['number'],
    description: 'Maximum number of characters allowed for the textarea value.',
    group: 'value',
  },
  readOnly: {
    options: ['boolean'],
    description: 'Prevents editing the value while keeping the field focusable.',
    group: 'value',
  },
  placeholder: {
    options: ['string'],
    description: 'Hint text displayed when the textarea has no value.',
    group: 'value',
  },
  // events
  onFocus: {
    options: ['e => void'],
    description: 'Callback fired when the textarea receives focus.',
    group: 'events',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Callback fired when the textarea loses focus.',
    group: 'events',
  },
  // surface
  variant: {
    options: TEXTAREA_VARIANTS,
    defaultValue: String(DEFAULT_TEXTAREA_VARIANT),
    description: 'Visual style variant.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_TEXTAREA_INTENT),
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  // interaction
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
    group: 'interaction',
  },
  // size
  rows: {
    options: ['number'],
    defaultValue: DEFAULT_TEXTAREA_ROWS as never,
    description: 'Initial number of text rows to display.',
    group: 'size',
  },
  resize: {
    options: TEXTAREA_RESIZE,
    defaultValue: DEFAULT_TEXTAREA_RESIZE,
    description: "Controls the textarea's resize behavior.",
    group: 'size',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
    group: 'size',
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
    group: 'size',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
    group: 'size',
  },
}
