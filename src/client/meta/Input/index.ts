import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SCALE,
  DEFAULT_INPUT_VARIANT,
} from 'lib/components/core/Input/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { InputProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { INPUT_CHANGELOG } from './changelog'
import { INPUT_EXAMPLES } from './examples'

export const INPUT_META = {
  Input: {
    overview: {
      bundle: 'core',
      title: 'Form control for entering or editing text.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box'],
      exposedTags: ['input'],
    },
    props: {
      autoComplete: {
        options: ['HTMLInputAutoCompleteAttribute'],
        description: 'Controls the browser autocomplete behavior for the input field.',
      },
      color: BOX_META.Box.props.color,
      defaultValue: {
        options: ['string'],
        description: 'Initial value displayed when the component is used in uncontrolled mode.',
      },
      disabled: BOX_META.Box.props.disabled,
      intent: {
        ...BOX_META.Box.props.intent,
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
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string'],
        description: 'Current value displayed when the component is used in controlled mode.',
      },
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_INPUT_VARIANT),
      },
    },
    examples: INPUT_EXAMPLES,
    changelog: INPUT_CHANGELOG,
  } satisfies ComponentMeta<InputProps>,
}
