import { ComponentMeta } from 'client/definitions'
import { DropdownListTriggerProps } from 'lib/components'

import { DROPDOWN_LIST_TRIGGER_PROPS_META } from './props'

const DROPDOWN_LIST_TRIGGER_META: ComponentMeta<DropdownListTriggerProps> = {
  overview: {
    name: 'DropdownList.Trigger',
    title: 'Represents a wrapper around the interactive element used to open or close the dropdown list.',
    description: [
      'passes "variant", "intent" and "size" props from DropdownList down to the trigger component',
      'best used with components that support these props such as Box, Button or Input',
      'automatically adjusts border radius when the list is open',
    ],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: DROPDOWN_LIST_TRIGGER_PROPS_META,
}

export { DROPDOWN_LIST_TRIGGER_META }
