import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import { DROPDOWN_LIST_PROPS_META } from './props'
import { DROPDOWN_LIST_EXAMPLES_META } from './examples'

import { DROPDOWN_LIST_TRIGGER_META } from './DropdownListTrigger/_index'
import { DROPDOWN_LIST_ITEM_META } from './DropdownListItem/_index'

const DROPDOWN_LIST_META: ComponentMeta<DropdownListProps> = {
  overview: {
    title: 'Floating list of interactive options for select-like components.',
    description: [
      'renders through a Portal for proper layering',
      'controls the open and closed state of the list',
      'handles entry and exit animations',
      'adjusts scrolling based on the "visibleItemsCount" prop',
      'scrolls to a specific item index based on "scrollToIndex" and "scrollAlign" props',
      'manages the inline size of the list container',
      'supports variant and intent styling',
      'supports separate intent styling for dividers between list items',
    ],
    composedOf: ['Flex', 'Box', 'Animate', 'Portal'],
    rendersAs: ['div'],
    slots: ['DropdownList.Trigger', 'DropdownList.Item'],
  },
  props: DROPDOWN_LIST_PROPS_META,
  examples: DROPDOWN_LIST_EXAMPLES_META,
}

export default {
  DropdownList: DROPDOWN_LIST_META,
  DropdownListTrigger: DROPDOWN_LIST_TRIGGER_META,
  DropdownListItem: DROPDOWN_LIST_ITEM_META,
}
