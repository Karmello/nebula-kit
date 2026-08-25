import type { DocOverview } from 'client/definitions'

export const TABS_PANEL_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'Tabs.Panel',
  title: 'Content panel associated with a tab.',
  features: ['displayed when its corresponding tab is active'],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
