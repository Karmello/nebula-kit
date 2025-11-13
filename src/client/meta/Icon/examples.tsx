import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Search icon.',
    jsx: <Icon name="search" intent="neutral" />,
  },
  {
    description: 'Search icon at a larger size.',
    jsx: <Icon name="search" intent="neutral" size={40} />,
  },
  {
    description: 'Icon with custom color and intent.',
    jsx: <Icon name="search" color="yellow" intent="primary" size={40} />,
  },
]

export { ICON_EXAMPLES_META }
