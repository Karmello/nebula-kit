import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  CHECKBOX_VARIANTS,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
} from 'lib/components/core/Checkbox/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { CheckboxProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const CHECKBOX_PROPS: Record<keyof CheckboxProps, DocProp> = {
  checked: {
    options: ['boolean'],
    description: 'Controls the checked state in controlled mode.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  defaultChecked: {
    options: ['boolean'],
    description: 'Sets the initial checked state for uncontrolled usage.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_CHECKBOX_INTENT),
    description: "Color tone applied to the component's main color.",
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
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  variant: {
    options: CHECKBOX_VARIANTS,
    defaultValue: String(DEFAULT_CHECKBOX_VARIANT),
    description: 'Visual style variant.',
  },
}
