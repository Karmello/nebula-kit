import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import { SIDE_NAV_EXAMPLES_META } from './examples'
import { SIDE_NAV_PROPS_META } from './props'

import { SIDE_NAV_ITEM_META } from './SideNavItem/_index'
import { SIDE_NAV_CATEGORY_META } from './SideNavCategory/_index'

const SIDE_NAV_META: ComponentMeta<SideNavProps> = {
  overview: {
    bundle: 'pro',
    title:
      'Sidebar navigation component designed specifically for flat and nested navigation with expandable categories.',
    description: [
      'supports flat items and expandable categories for hierarchical navigation',
      'allows single or multiple categories to be expanded at once',
      'designed for use in sidebar layouts such as SplitView.Side',
      'intentionally opinionated and optimized for sidebar navigation, it is not intended as a general-purpose menu component',
    ],
    composedOf: ['Flex'],
    topLevelTags: ['nav'],
    slots: ['SideNav.Item', 'SideNav.Category'],
  },
  examples: SIDE_NAV_EXAMPLES_META,
  props: SIDE_NAV_PROPS_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  SideNav: SIDE_NAV_META,
  'SideNav.Item': SIDE_NAV_ITEM_META,
  'SideNav.Category': SIDE_NAV_CATEGORY_META,
}
