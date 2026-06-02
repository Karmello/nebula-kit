import { TabsPanel, TabsTab } from './slots'
import { Tabs as TabsBase } from './tabs'

export const Tabs = Object.assign(TabsBase, {
  Tab: TabsTab,
  Panel: TabsPanel,
})

export * from './definitions'
export * from './slots'
