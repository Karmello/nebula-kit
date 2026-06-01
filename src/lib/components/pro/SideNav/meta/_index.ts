import { ComponentMeta } from 'client/definitions'

import { type SideNavProps } from '../../SideNav/definitions'

import { SIDE_NAV_EXAMPLES_META } from './examples'
import { SIDE_NAV_PROPS_META } from './props'

import { SIDE_NAV_ITEM_META } from './SideNavItem/_index'
import { SIDE_NAV_CATEGORY_META } from './SideNavCategory/_index'

const SIDE_NAV_META: ComponentMeta<SideNavProps> = {
  overview: {
    bundle: 'pro',
    title: 'Sidebar navigation component designed specifically for flat and nested navigation with expandable categories.',
    features: [
      'supports flat items and expandable categories for hierarchical navigation',
      'allows single or multiple categories to be expanded at once',
    ],
    guidelines: [
      'designed for use in sidebar layouts such as SplitView.Side',
      'intentionally opinionated and optimized for sidebar navigation, it is not intended as a general-purpose menu component',
      'does not manage selected state internally - active items should be derived from the current route, pathname or query parameters',
    ],
    composedOf: ['Flex'],
    topLevelTags: ['nav'],
    slots: ['SideNav.Item', 'SideNav.Category'],
  },
  examples: SIDE_NAV_EXAMPLES_META,
  props: SIDE_NAV_PROPS_META,
  changelog: {
    '0.10.0': ['exposed `size` prop via Button', 'exposed `gap` prop via Flex'],
    '0.9.0': ['exposed `selected` prop on SideNav.Item via Button'],
    '0.8.0': ['changed `elevated` prop to `surface` on SideNav.Item'],
    '0.2.3': ['released'],
  },
}

export default {
  SideNav: SIDE_NAV_META,
  SideNavItem: SIDE_NAV_ITEM_META,
  SideNavCategory: SIDE_NAV_CATEGORY_META,
}
