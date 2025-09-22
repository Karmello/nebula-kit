import { ComponentMeta } from 'client/definitions'
import { Icon, IconProps } from 'lib/components'

const ICON_EXAMPLES_META: ComponentMeta<IconProps>['examples'] = [
  {
    description: 'Renders the search icon at the default size 8 (16px) with neutral color.',
    jsx: <Icon name="search" />,
  },
  {
    description: 'Renders the search icon at size 20 (40px) with the default neutral color.',
    jsx: <Icon name="search" size={20} />,
  },
  {
    description: 'Renders the search icon at size 20 (40px) with the primary color intent.',
    jsx: <Icon name="search" size={20} intent="primary" />,
  },
]

export { ICON_EXAMPLES_META }
