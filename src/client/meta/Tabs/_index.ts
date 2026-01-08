import { ComponentMeta } from 'client/definitions'
import { TabsProps } from 'lib/components'

import { TABS_PROPS_META } from './props'
import { TABS_EXAMPLES_META } from './examples'

import { TABS_TAB_META } from './TabsTab/_index'
import { TABS_PANEL_META } from './TabsPanel/_index'

const TABS_META: ComponentMeta<TabsProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
    slots: ['Tabs.Tab', 'Tabs.Panel'],
  },
  props: TABS_PROPS_META,
  examples: TABS_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  Tabs: TABS_META,
  'Tabs.Tab': TABS_TAB_META,
  'Tabs.Panel': TABS_PANEL_META,
}
