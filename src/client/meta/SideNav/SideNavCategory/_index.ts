import { ComponentMeta } from 'client/definitions'
import { SideNavCategoryProps } from 'lib/components'

import { SIDE_NAV_CATEGORY_PROPS_META } from './props'

const SIDE_NAV_CATEGORY_META: ComponentMeta<SideNavCategoryProps> = {
  overview: {
    name: 'SideNav.Category?',
    title: 'Defines an expandable parent section that groups related navigation items.',
    features: [
      'acts as a collapsible container for one or more SideNav.Item elements',
      'controls the expand and collapse behavior for its nested items',
      'intended exclusively for hierarchical navigation within SideNav',
      'expects only SideNav.Item elements as children',
    ],
    composedOf: ['Box', 'Flex', 'Button', 'Resize', 'Spacer'],
    topLevelTags: ['ul'],
    slots: ['SideNav.Item'],
  },
  props: SIDE_NAV_CATEGORY_PROPS_META,
}

export { SIDE_NAV_CATEGORY_META }
