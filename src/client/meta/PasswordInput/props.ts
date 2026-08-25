import { BOX_COLORS, BOX_INTENTS, BOX_VARIANTS } from 'lib/components/core/Box/constants'
import { DEFAULT_INPUT_INTENT, DEFAULT_INPUT_VARIANT } from 'lib/components/core/Input/constants'
import {
  DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
  DEFAULT_PASSWORD_INPUT_SCALE,
} from 'lib/components/pro/PasswordInput/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { PasswordInputProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const PASSWORD_PROPS: Record<keyof PasswordInputProps, DocProp> = {
  autoComplete: {
    options: ['HTMLInputAutoCompleteAttribute'],
    defaultValue: DEFAULT_PASSWORD_INPUT_AUTO_COMPLETE,
    description: 'Controls the browser autocomplete behavior for the input field.',
  },
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
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_INPUT_INTENT),
    description: "Color tone applied to the component's main color.",
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
    defaultValue: DEFAULT_PASSWORD_INPUT_SCALE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
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
    defaultValue: String(DEFAULT_INPUT_VARIANT),
    description: 'Visual style variant.',
  },
}
