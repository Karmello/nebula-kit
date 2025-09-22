import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Renders the search icon.',
    jsx: <Icon name="search" />,
  },
  {
    description: 'Renders the search icon at a larger size.',
    jsx: <Icon name="search" size={20} />,
  },
  {
    description: 'Sets icon intent to primary.',
    jsx: <Icon name="search" size={20} intent="primary" />,
  },
]

export { ICON_EXAMPLES_META }
