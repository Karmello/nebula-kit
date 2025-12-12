import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import { SIDE_NAV_EXAMPLES_META } from './examples'
import { SIDE_NAV_PROPS_META } from './props'

import { SIDE_NAV_ITEM_META } from './SideNavItem/_index'
import { SIDE_NAV_CATEGORY_META } from './SideNavCategory/_index'

const SIDE_NAV_META: ComponentMeta<SideNavProps> = {
  overview: {
    bundle: 'pro',
    title: 'Vertical navigation component for organizing page links.',
    description: [
      'supports expandable categories and flat items',
      'supports an expand-all/collapse-all control',
      'ideal for use inside SplitView.Side',
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
  'SideNav.Item': SIDE_NAV_ITEM_META,
  'SideNav.Category': SIDE_NAV_CATEGORY_META,
}
