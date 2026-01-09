import { ComponentMeta } from 'client/definitions'
import { TabsPanelProps } from 'lib/components'

import { TABS_PANEL_PROPS_META } from './props'

const TABS_PANEL_META: ComponentMeta<TabsPanelProps> = {
  overview: {
    name: 'Tabs.Panel',
    title: 'Content panel associated with a tab.',
    description: ['displayed when its corresponding tab is active'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: TABS_PANEL_PROPS_META,
}

export { TABS_PANEL_META }
