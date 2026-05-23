import { Tabs as TabsBase } from './tabs'

import { TabsTab, TabsPanel } from './slots'

export const Tabs = Object.assign(TabsBase, {
  Tab: TabsTab,
  Panel: TabsPanel,
})

export * from './definitions'
export * from './slots'
