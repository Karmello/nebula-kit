import { ComponentMeta } from 'client/definitions'
import { TabsTabProps } from 'lib/components'

import { TABS_TAB_PROPS_META } from './props'

const TABS_TAB_META: ComponentMeta<TabsTabProps> = {
  overview: {
    name: 'Tabs.Tab',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: TABS_TAB_PROPS_META,
}

export { TABS_TAB_META }
