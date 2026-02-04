import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import { DROPDOWN_LIST_PROPS_META } from './props'
import { DROPDOWN_LIST_EXAMPLES_META } from './examples'

import { DROPDOWN_LIST_TRIGGER_META } from './DropdownListTrigger/_index'
import { DROPDOWN_LIST_ITEM_META } from './DropdownListItem/_index'

const DROPDOWN_LIST_META: ComponentMeta<DropdownListProps> = {
  overview: {
    bundle: 'core',
    title: 'Low-level, unopinionated primitive for rendering floating lists of interactive options.',
    features: [
      'handles positioning, visibility, keyboard navigation and scrolling behavior',
      'renders through a Portal to ensure correct layering and positioning',
      'resolves placement dynamically using the shared Floating positioning logic to avoid viewport clipping',
      'built on top of VirtualList for efficient rendering and scrolling of list items',
      'applies consistent styling to list items',
      'intended to be composed into higher-level selection components',
    ],
    composedOf: ['Box', 'Floating', 'Portal', 'Resize', 'VirtualList'],
    topLevelTags: ['div'],
    slots: ['DropdownList.Trigger', 'DropdownList.Item'],
  },
  props: DROPDOWN_LIST_PROPS_META,
  examples: DROPDOWN_LIST_EXAMPLES_META,
  changelog: {
    '0.5.0': [
      'improved list open animation by scaling its duration with item count',
      'removed animationDuration prop',
      'added disableListAnimation prop',
    ],
    '0.3.0': ['public API updated'],
    '0.2.3': ['released'],
  },
}

export default {
  DropdownList: DROPDOWN_LIST_META,
  DropdownListTrigger: DROPDOWN_LIST_TRIGGER_META,
  DropdownListItem: DROPDOWN_LIST_ITEM_META,
}
