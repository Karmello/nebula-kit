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
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: String(DEFAULT_INPUT_VARIANT),
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_INPUT_INTENT),
  },
  size: {
    options: Object.values(INPUT_SIZES),
    defaultValue: DEFAULT_INPUT_SIZE,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
  },
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
}

export { INPUT_PROPS_META }
