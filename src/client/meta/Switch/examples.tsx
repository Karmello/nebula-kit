import { Switch } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const SWITCH_EXAMPLES: DocExample[] = [
  {
    jsx: <Switch />,
    isOverviewSnippet: true,
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
