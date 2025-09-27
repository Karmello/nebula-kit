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
      'supports flat items or expandable sections',
      'collapse-all/expand-all button is available when multiple sections can be open',
      'ideal for use inside SplitView.Side',
    ],
    composedOf: ['Box'],
    rendersAs: ['nav'],
  },
  examples: SIDE_NAV_EXAMPLES_META,
  props: SIDE_NAV_PROPS_META,
}

export default {
  SideNav: SIDE_NAV_META,
  SideNavCategory: SIDE_NAV_CATEGORY_META,
  SideNavItem: SIDE_NAV_ITEM_META,
}
