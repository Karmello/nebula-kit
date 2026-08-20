import { Footprints } from 'lucide-react'

import { type Example } from 'client/definitions'

import { Icon } from './icon'

export const ICON_EXAMPLES: Example[] = [
  {
    description: 'Default icon.',
    jsx: <Icon name="search" />,
  },
  {
    description: 'Icon with custom color and intent.',
    jsx: <Icon name="search" color="blue" intent="primary" />,
  },
  {
    description: 'Custom SVG icon passed as children, semantic styling stays preserved.',
    jsx: (
      <Icon color="blue" intent="primary">
        <Footprints />
      </Icon>
    ),
    code: `import { Icon } from 'lib/components'
import { Footprints } from 'lucide-react'

<Icon color="blue" intent="primary">
  <Footprints />
</Icon>
`,
  },
  {
    description: 'Icon with custom size.',
    jsx: <Icon name="search" size="64px" />,
  },
]
