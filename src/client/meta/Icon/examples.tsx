import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Search icon.',
    jsx: <Icon name="search" intent="neutral" />,
  },
  {
    description: 'Search icon at a larger size.',
    jsx: <Icon name="search" intent="neutral" size={20} />,
  },
  {
    description: 'Icon with intent set to primary.',
    jsx: <Icon name="search" intent="primary" size={20} />,
  },
]

export { ICON_EXAMPLES_META }
