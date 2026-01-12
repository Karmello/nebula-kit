import { ComponentMeta } from 'client/definitions'
import { TabsTabProps } from 'lib/components'

import { TABS_TAB_PROPS_META } from './props'

const TABS_TAB_META: ComponentMeta<TabsTabProps> = {
  overview: {
    name: 'Tabs.Tab',
    title: 'Selectable tab item within a Tabs component.',
    features: ['activates the panel with the matching value', 'inherits visual styling from Button'],
    composedOf: ['Button'],
    topLevelTags: ['button'],
  },
  props: TABS_TAB_PROPS_META,
}

export { TABS_TAB_META }
