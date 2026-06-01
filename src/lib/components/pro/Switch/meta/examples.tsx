import { ComponentMeta } from 'client/definitions'

import { type SwitchProps } from '../definitions'
import { Switch } from '../switch'

const SWITCH_EXAMPLES_META: ComponentMeta<SwitchProps>['examples'] = [
  {
    jsx: <Switch />,
    skip: true,
  },
  {
    description: 'Default Switch.',
    jsx: <Switch />,
  },
  {
    description: 'Switch turned on by default.',
    jsx: <Switch defaultChecked />,
  },
  {
    description: 'Switch with custom size.',
    jsx: <Switch size="lg" />,
  },
  {
    description: 'Disabled Switch.',
    jsx: <Switch disabled />,
  },
]

export { SWITCH_EXAMPLES_META }
