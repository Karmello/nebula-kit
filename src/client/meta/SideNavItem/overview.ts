import type { DocOverview } from 'client/definitions'

export const SIDE_NAV_ITEM_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'SideNav.Item',
  title: 'Defines a single navigational entry within SideNav.',
  features: ['represents a leaf item that navigates to a destination or triggers navigation logic'],
  guidelines: [
    'can be used directly inside SideNav for flat navigation',
    'can be nested inside SideNav.Category to participate in hierarchical navigation',
  ],
  composedOf: ['Link', 'Box', 'Text', 'Icon'],
  exposedTags: ['a'],
}
