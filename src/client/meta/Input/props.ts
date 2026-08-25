import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SCALE,
  DEFAULT_INPUT_VARIANT,
} from 'lib/components/core/Input/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { InputProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const INPUT_PROPS: Record<keyof InputProps, Prop> = {
  autoComplete: {
    options: ['HTMLInputAutoCompleteAttribute'],
    description: 'Controls the browser autocomplete behavior for the input field.',
  },
  color: BOX_META.props.color,
  defaultValue: {
    options: ['string'],
    description: 'Initial value displayed when the component is used in uncontrolled mode.',
  },
  disabled: BOX_META.props.disabled,
  intent: {
    ...BOX_META.props.intent,
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
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_INPUT_SCALE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  value: {
    options: ['string'],
    description: 'Current value displayed when the component is used in controlled mode.',
  },
  variant: {
    ...BOX_META.props.variant,
    defaultValue: String(DEFAULT_INPUT_VARIANT),
  },
}
