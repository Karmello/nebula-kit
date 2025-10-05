import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Renders the search icon.',
    jsx: <Icon name="search" intent="neutral" />,
  },
  {
    description: 'Renders the search icon at a larger size.',
    jsx: <Icon name="search" intent="neutral" size={20} />,
  },
  {
    description: 'Sets icon intent to primary.',
    jsx: <Icon name="search" intent="primary" size={20} />,
  },
]

export { ICON_EXAMPLES_META }
