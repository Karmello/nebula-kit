import { TabsPanel, TabsTab } from './slots'
import { Tabs as TabsBase } from './tabs'

export const Tabs = Object.assign(TabsBase, {
  Tab: TabsTab,
  Panel: TabsPanel,
})

export * from './constants'
export * from './slots'
export * from './types'
