import { ComponentMeta } from 'client/definitions'

import { type TabsPanelProps } from '../../slots/TabsPanel/definitions'
import { TABS_PANEL_PROPS_META } from './props'

const TABS_PANEL_META: ComponentMeta<TabsPanelProps> = {
  overview: {
    bundle: 'pro',
    name: 'Tabs.Panel',
    title: 'Content panel associated with a tab.',
    features: ['displayed when its corresponding tab is active'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: TABS_PANEL_PROPS_META,
}

export { TABS_PANEL_META }
