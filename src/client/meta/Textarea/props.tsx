import { ComponentMeta } from 'client/definitions'

import { DEFAULT_TEXTAREA_INTENT, DEFAULT_TEXTAREA_VARIANT, TextareaProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const TEXTAREA_PROPS_META: ComponentMeta<TextareaProps>['props'] = {
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TEXTAREA_INTENT),
  },
  onBlur: {
    options: ['e => void'],
    description: 'Callback fired when the textarea loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
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
