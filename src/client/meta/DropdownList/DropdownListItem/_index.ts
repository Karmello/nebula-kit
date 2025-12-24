import { ComponentMeta } from 'client/definitions'
import { DropdownListItemProps } from 'lib/components'

import { DROPDOWN_LIST_ITEM_PROPS_META } from './props'

const DROPDOWN_LIST_ITEM_META: ComponentMeta<DropdownListItemProps> = {
  overview: {
    name: 'DropdownList.Item',
    title: 'Interactive list item used within a DropdownList.',
    description: [
      'represents a selectable option within a DropdownList',
      'behaves like a Button with consistent dropdown styling',
    ],
    composedOf: ['Button'],
    topLevelTags: ['button', 'a'],
  },
  props: DROPDOWN_LIST_ITEM_PROPS_META,
}

export { DROPDOWN_LIST_ITEM_META }
