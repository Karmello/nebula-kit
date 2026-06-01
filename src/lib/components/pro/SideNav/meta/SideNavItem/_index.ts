import { ComponentMeta } from 'client/definitions'

import { type SideNavItemProps } from '../../slots/SideNavItem/definitions'
import { SIDE_NAV_ITEM_PROPS_META } from './props'

const SIDE_NAV_ITEM_META: ComponentMeta<SideNavItemProps> = {
  overview: {
    bundle: 'pro',
    name: 'SideNav.Item',
    title: 'Defines a single navigational entry within SideNav.',
    features: ['represents a leaf item that navigates to a destination or triggers navigation logic'],
    guidelines: [
      'can be used directly inside SideNav for flat navigation',
      'can be nested inside SideNav.Category to participate in hierarchical navigation',
    ],
    composedOf: ['Link', 'Button'],
    topLevelTags: ['a'],
  },
  props: SIDE_NAV_ITEM_PROPS_META,
}

export { SIDE_NAV_ITEM_META }
