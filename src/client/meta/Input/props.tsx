import { ComponentMeta } from 'client/definitions'
import { InputProps } from 'lib/components'

import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_VARIANT,
  INPUT_SIZES,
} from 'lib/components/core/form-elements/Input'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const INPUT_PROPS_META: ComponentMeta<InputProps>['props'] = {
  color: BOX_PROPS_META.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: BOX_PROPS_META.disabled,
  endAffix: {
    options: ['props => ReactNode'],
    description:
      'Render function that receives Input props and returns the end affix. Only defined props are passed to the render function.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_INPUT_INTENT),
  },
  onBlur: {
    options: ['event => void'],
    description: 'Callback fired when the input loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
  onFocus: {
    options: ['event => void'],
    description: 'Callback fired when the input receives focus.',
  },
  placeholder: {
    options: ['string'],
    description: 'Hint text displayed when the input has no value.',
  },
  readOnly: {
    options: ['boolean'],
    description: 'Prevents editing the value while keeping the field focusable.',
  },
  size: {
    options: Object.values(INPUT_SIZES),
    defaultValue: DEFAULT_INPUT_SIZE,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
  },
  startAffix: {
    options: ['props => ReactNode'],
    description:
      'Render function that receives Input props and returns the start affix. Only defined props are passed to the render function.',
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
