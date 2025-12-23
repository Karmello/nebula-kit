import { ComponentMeta } from 'client/definitions'
import { SideNavItemProps } from 'lib/components'

import { SIDE_NAV_ITEM_PROPS_META } from './props'

const SIDE_NAV_ITEM_META: ComponentMeta<SideNavItemProps> = {
  overview: {
    name: 'SideNav.Item',
    title: 'Defines a single navigational entry within SideNav.',
    description: [
      'meant to be used as a child of SideNav.Category for nested navigation',
      'can be also used directly inside SideNav for flat navigation',
    ],
    composedOf: ['Link', 'Button'],
    topLevelTags: ['a'],
  },
  props: SIDE_NAV_ITEM_PROPS_META,
}

export { SIDE_NAV_ITEM_META }
