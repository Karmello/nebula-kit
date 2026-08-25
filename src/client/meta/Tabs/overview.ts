import type { DocOverview } from 'client/definitions'

export const TABS_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Control for switching between related content sections.',
  features: [
    'switches between mutually exclusive content panels',
    'supports horizontal and vertical layouts',
    'fully keyboard-operable with predictable focus behavior',
    'manages selection state without unmounting content',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
  slots: ['Tabs.Tab', 'Tabs.Panel'],
}
