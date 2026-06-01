import { ComponentMeta } from 'client/definitions'

import {
  type CheckboxProps,
  CHECKBOX_SIZES,
  CHECKBOX_VARIANTS,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
} from '../definitions'

import { BOX_PROPS_META } from '../../Box/meta/props'

const CHECKBOX_PROPS_META: ComponentMeta<CheckboxProps>['props'] = {
  checked: {
    options: ['boolean'],
    description: 'Controls the checked state in controlled mode.',
  },
  color: BOX_PROPS_META.color,
  defaultChecked: {
    options: ['boolean'],
    description: 'Sets the initial checked state for uncontrolled usage.',
  },
  disabled: BOX_PROPS_META.disabled,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_CHECKBOX_INTENT),
  },
  onChange: {
    options: ['(checked: boolean) => void'],
    description: 'Called when the checked state changes. Receives the new checked value.',
  },
  size: {
    options: CHECKBOX_SIZES,
    defaultValue: DEFAULT_CHECKBOX_SIZE,
    description: 'Controls overall proportions, adjusting the checkbox and icon size.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    options: CHECKBOX_VARIANTS,
    defaultValue: String(DEFAULT_CHECKBOX_VARIANT),
  },
}

export { CHECKBOX_PROPS_META }
