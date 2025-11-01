import { ComponentMeta } from 'client/definitions'
import { DropdownListItemProps } from 'lib/components'

import { DROPDOWN_LIST_ITEM_PROPS_META } from './props'

const DROPDOWN_LIST_ITEM_META: ComponentMeta<DropdownListItemProps> = {
  overview: {
    name: 'DropdownList.Item',
    title: 'Represents a single option within a dropdown list.',
    description: ['inherits core behavior from Button'],
    composedOf: ['Button'],
    rendersAs: ['button', 'a'],
  },
  props: DROPDOWN_LIST_ITEM_PROPS_META,
}

export { DROPDOWN_LIST_ITEM_META }
