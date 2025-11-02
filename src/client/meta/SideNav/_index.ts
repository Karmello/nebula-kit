import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import { SIDE_NAV_EXAMPLES_META } from './examples'
import { SIDE_NAV_PROPS_META } from './props'

import { SIDE_NAV_ITEM_META } from './SideNavItem/_index'
import { SIDE_NAV_CATEGORY_META } from './SideNavCategory/_index'

const SIDE_NAV_META: ComponentMeta<SideNavProps> = {
  overview: {
    plan: 'pro',
    title: 'Vertical navigation component for organizing page links.',
    description: [
      'ideal for use inside SplitView.Side',
      'supports expandable categories and flat items',
      'supports an expand-all/collapse-all control',
    ],
    composedOf: ['Flex'],
    rendersAs: ['nav'],
    slots: ['SideNav.Item', 'SideNav.Category'],
  },
  examples: SIDE_NAV_EXAMPLES_META,
  props: SIDE_NAV_PROPS_META,
}

export default {
  SideNav: SIDE_NAV_META,
  SideNavItem: SIDE_NAV_ITEM_META,
  SideNavCategory: SIDE_NAV_CATEGORY_META,
}
