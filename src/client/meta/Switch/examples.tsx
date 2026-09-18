import { Switch } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const SWITCH_EXAMPLES: DocExample[] = [
  {
    description: 'Basic usage.',
    jsx: <Switch intent="secondary" color="blue" />,
    isOverviewSnippet: true,
  },
  {
    description: 'Disabled switch.',
    jsx: <Switch checked disabled intent="secondary" color="blue" />,
  },
]
