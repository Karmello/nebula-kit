import { ComponentMeta } from 'client/definitions'
import { TabsProps } from 'lib/components'

import { TABS_PROPS_META } from './props'
import { TABS_EXAMPLES_META } from './examples'

import { TABS_TAB_META } from './TabsTab/_index'
import { TABS_PANEL_META } from './TabsPanel/_index'

const TABS_META: ComponentMeta<TabsProps> = {
  overview: {
    bundle: 'pro',
    title: 'Control for switching between related content sections.',
    features: [
      'switches between mutually exclusive content panels',
      'supports horizontal and vertical layouts',
      'fully keyboard-operable with predictable focus behavior',
      'manages selection state without unmounting content',
    ],
    composedOf: ['Box', 'Flex', 'Segment'],
    topLevelTags: ['div'],
    slots: ['Tabs.Tab', 'Tabs.Panel'],
  },
  props: TABS_PROPS_META,
  examples: TABS_EXAMPLES_META,
  changelog: {
    '0.10.0': ['changed flexDirection prop to orientation'],
    '0.3.0': ['released'],
  },
}

export default {
  Tabs: TABS_META,
  TabsTab: TABS_TAB_META,
  TabsPanel: TABS_PANEL_META,
}
