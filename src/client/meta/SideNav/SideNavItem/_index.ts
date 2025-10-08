import { ComponentMeta } from 'client/definitions'
import { SideNavItemProps } from 'lib/components'

import { SIDE_NAV_ITEM_PROPS_META } from './props'

const SIDE_NAV_ITEM_META: ComponentMeta<SideNavItemProps> = {
  overview: {
    name: 'SideNav.Item',
    title: 'Defines a single navigational entry within SideNav.',
    description: [
      'can be used directly inside SideNav for flat navigation',
      'should be used as a child of SideNav.Category for nested navigation',
    ],
    composedOf: ['Button'],
    rendersAs: ['a'],
  },
  props: SIDE_NAV_ITEM_PROPS_META,
}

export { SIDE_NAV_ITEM_META }
