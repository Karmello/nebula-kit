import { ComponentMeta } from 'client/definitions'
import { SwitchProps } from 'lib/components'
import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SIZE } from 'lib/components/pro/form-elements/Switch'

import { BOX_PROPS_META } from '../Box/props'
import { BUTTON_PROPS_META } from '../Button/props'

const SWITCH_PROPS_META: ComponentMeta<SwitchProps>['props'] = {
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
    defaultValue: String(DEFAULT_SWITCH_INTENT),
  },
  onChange: {
    options: ['(checked: boolean) => void'],
    description: 'Called when the checked state changes. Receives the new checked value.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    defaultValue: DEFAULT_SWITCH_SIZE,
    description: 'Controls overall proportions.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { SWITCH_PROPS_META }
