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
    description: [
      'handles positioning, visibility, keyboard navigation and scrolling behavior',
      'renders through a Portal to ensure correct layering and positioning',
      'applies consistent styling to list items',
      'intended to be composed into higher-level selection components',
    ],
    composedOf: ['Flex', 'Box', 'Resize', 'Portal'],
    topLevelTags: ['div'],
    slots: ['DropdownList.Trigger', 'DropdownList.Item'],
  },
  props: DROPDOWN_LIST_PROPS_META,
  examples: DROPDOWN_LIST_EXAMPLES_META,
  changelog: {
    '0.2.2': ['Released'],
  },
}

export default {
  DropdownList: DROPDOWN_LIST_META,
  'DropdownList.Trigger': DROPDOWN_LIST_TRIGGER_META,
  'DropdownList.Item': DROPDOWN_LIST_ITEM_META,
}
