import {
  CHECKBOX_VARIANTS,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
} from 'lib/components/core/Checkbox/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { CheckboxProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const CHECKBOX_PROPS: Record<keyof CheckboxProps, DocProp> = {
  checked: {
    options: ['boolean'],
    description: 'Controls the checked state in controlled mode.',
  },
  color: BOX_META.props.color,
  defaultChecked: {
    options: ['boolean'],
    description: 'Sets the initial checked state for uncontrolled usage.',
  },
  disabled: BOX_META.props.disabled,
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_CHECKBOX_INTENT),
  },
  onChange: {
    options: ['(checked: boolean) => void'],
    description: 'Called when the checked state changes. Receives the new checked value.',
  },
  size: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_CHECKBOX_SIZE,
    description: 'Controls overall proportions, adjusting the checkbox and icon size.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  variant: {
    ...BOX_META.props.variant,
    options: CHECKBOX_VARIANTS,
    defaultValue: String(DEFAULT_CHECKBOX_VARIANT),
  },
}
