import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

import { Footprints } from 'lucide-react'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Search icon.',
    jsx: <Icon name="search" />,
  },
  {
    description: 'Search icon at a larger size.',
    jsx: <Icon name="search" size="40px" />,
  },
  {
    description: 'Icon with custom color and intent.',
    jsx: <Icon name="search" color="blue" intent="primary" size="40px" />,
  },
  {
    description: 'Custom SVG icon passed as children, semantic styling stays preserved.',
    jsx: (
      <Icon color="blue" intent="primary">
        <Footprints />
      </Icon>
    ),
  },
]

export { ICON_EXAMPLES_META }
