import { ComponentMeta } from 'client/definitions'
import { DropdownListTriggerProps } from 'lib/components'

import { DROPDOWN_LIST_TRIGGER_PROPS_META } from './props'

const DROPDOWN_LIST_TRIGGER_META: ComponentMeta<DropdownListTriggerProps> = {
  overview: {
    name: 'DropdownList.Trigger',
    title:
      'Represents a wrapper around the interactive element used to control visibility of the dropdown list.',
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: DROPDOWN_LIST_TRIGGER_PROPS_META,
}

export { DROPDOWN_LIST_TRIGGER_META }
