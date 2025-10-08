import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import { SIDE_NAV_EXAMPLES_META } from './examples'
import { SIDE_NAV_PROPS_META } from './props'

import { SIDE_NAV_CATEGORY_META } from './SideNavCategory/_index'
import { SIDE_NAV_ITEM_META } from './SideNavItem/_index'

const SIDE_NAV_META: ComponentMeta<SideNavProps> = {
  overview: {
    title: 'Vertical navigation component for organizing page links.',
    description: [
      'supports expandable categories and flat items',
      'supports an expand-all / collapse-all control',
      'ideal for use inside SplitView.Side',
    ],
    composedOf: ['Flex'],
    rendersAs: ['nav'],
    slots: ['SideNav.Category', 'SideNav.Item'],
  },
  examples: SIDE_NAV_EXAMPLES_META,
  props: SIDE_NAV_PROPS_META,
}

export default {
  SideNav: SIDE_NAV_META,
  SideNavCategory: SIDE_NAV_CATEGORY_META,
  SideNavItem: SIDE_NAV_ITEM_META,
}
