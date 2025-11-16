import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_VARIANT,
  INPUT_SIZES,
  InputProps,
} from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const INPUT_PROPS_META: ComponentMeta<InputProps>['props'] = {
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  endSlot: {
    options: [],
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_INPUT_INTENT),
  },
  onBlur: {
    options: ['e => void'],
    description: 'Callback fired when the input loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
  size: {
    options: Object.values(INPUT_SIZES),
    defaultValue: DEFAULT_INPUT_SIZE,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
  },
  startSlot: {
    options: [],
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_INPUT_VARIANT),
  },
}

export { INPUT_PROPS_META }
