import { ComponentMeta } from 'client/definitions'
import { SideNavCategoryProps } from 'lib/components'

import { SIDE_NAV_CATEGORY_PROPS_META } from './props'

const SIDE_NAV_CATEGORY_META: ComponentMeta<SideNavCategoryProps> = {
  overview: {
    name: 'SideNav.Category',
    title: 'Defines a parent section in SideNav that can expand to show nested items.',
    description: [
      'can be used multiple times next to each other within SideNav',
      'expects SideNav.Item elements as children',
    ],
    composedOf: ['Box', 'Flex', 'Button', 'Animate', 'Spacer'],
    rendersAs: ['ul'],
  },
  props: SIDE_NAV_CATEGORY_PROPS_META,
}

export { SIDE_NAV_CATEGORY_META }
