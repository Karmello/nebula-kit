import type { TabsPanelProps } from 'lib/components/pro/Tabs/slots/TabsPanel/types'
import { ComponentMeta } from 'client/definitions'

import { TABS_PANEL_OVERVIEW } from './overview'
import { TABS_PANEL_PROPS } from './props'

export const TABS_PANEL_META = {
  overview: TABS_PANEL_OVERVIEW,
  props: TABS_PANEL_PROPS,
} satisfies ComponentMeta<TabsPanelProps>
