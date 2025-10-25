import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import { DROPDOWN_LIST_PROPS_META } from './props'
import { DROPDOWN_LIST_EXAMPLES_META } from './examples'

import { DROPDOWN_LIST_ITEM_META } from './DropdownListItem/_index'

const DROPDOWN_LIST_META: ComponentMeta<DropdownListProps> = {
  overview: {
    title: 'Floating list of interactive options for select-like components.',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['div'],
    slots: ['DropdownList.Item'],
  },
  props: DROPDOWN_LIST_PROPS_META,
  examples: DROPDOWN_LIST_EXAMPLES_META,
}

export default {
  MarkerList: DROPDOWN_LIST_META,
  MarkerListItem: DROPDOWN_LIST_ITEM_META,
}
