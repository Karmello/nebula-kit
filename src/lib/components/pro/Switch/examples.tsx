import { Switch } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const SWITCH_EXAMPLES: Example[] = [
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
    description: 'Switch with custom scale.',
    jsx: <Switch scale="lg" />,
  },
  {
    description: 'Disabled Switch.',
    jsx: <Switch disabled />,
  },
]
