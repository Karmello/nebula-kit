import type { DocOverview } from 'client/definitions'

export const SIDE_NAV_CATEGORY_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'SideNav.Category?',
  title: 'Defines an expandable parent section that groups related navigation items.',
  features: [
    'acts as a collapsible container for one or more SideNav.Item elements',
    'controls the expand and collapse behavior for its nested items',
  ],
  guidelines: [
    'intended exclusively for hierarchical navigation within SideNav',
    'expects only SideNav.Item elements as children',
  ],
  composedOf: ['Box', 'Text', 'Icon', 'Resize', 'Spacer'],
  exposedTags: ['ul'],
  slots: ['SideNav.Item'],
}
