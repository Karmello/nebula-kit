import { ComponentMeta } from 'client/definitions'
import { InputProps } from 'lib/components'
import { DEFAULT_INPUT_INTENT, DEFAULT_INPUT_VARIANT } from 'lib/components/core/Input/definitions'

import { BOX_PROPS_META } from '../Box/props'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

const INPUT_PROPS_META: ComponentMeta<InputProps>['props'] = {
  autoComplete: {
    options: ['HTMLInputAutoCompleteAttribute'],
    description: 'Controls the browser autocomplete behavior for the input field.',
  },
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
  maxLength: {
    options: ['number'],
    description: 'Maximum number of characters allowed for the input value.',
  },
  onBlur: {
    options: ['e => void'],
    description: 'Callback fired when the input loses focus.',
  },
  onChange: {
    options: ['(value: string) => void'],
    description: 'Callback fired when the value changes.',
  },
  onFocus: {
    options: ['e => void'],
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
    options: CONTROL_SIZES,
    defaultValue: DEFAULT_CONTROL_SIZE,
    description:
      'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
  },
  startAffix: {
    options: ['props => ReactNode'],
    description:
      'Render function that receives Input props and returns the start affix. Only defined props are passed to the render function.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
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
