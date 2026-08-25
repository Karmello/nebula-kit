import { BOX_COLORS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SWITCH_INTENT,
  DEFAULT_SWITCH_SCALE,
  SWITCH_INTENTS,
} from 'lib/components/pro/Switch/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { SwitchProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const SWITCH_PROPS: Record<keyof SwitchProps, DocProp> = {
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
    options: SWITCH_INTENTS,
    defaultValue: String(DEFAULT_SWITCH_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  onChange: {
    options: ['(checked: boolean) => void'],
    description: 'Called when the checked state changes. Receives the new checked value.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_SWITCH_SCALE,
    description: 'Controls overall proportions.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
