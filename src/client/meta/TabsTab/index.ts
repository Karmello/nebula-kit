import type { TabsTabProps } from 'lib/components/pro/Tabs/slots/TabsTab/types'
import { ComponentMeta } from 'client/definitions'

import { TABS_TAB_OVERVIEW } from './overview'
import { TABS_TAB_PROPS } from './props'

export const TABS_TAB_META = {
  overview: TABS_TAB_OVERVIEW,
  props: TABS_TAB_PROPS,
} satisfies ComponentMeta<TabsTabProps>
