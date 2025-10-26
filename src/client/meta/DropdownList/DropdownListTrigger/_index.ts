import { ComponentMeta } from 'client/definitions'
import { DropdownListTriggerProps } from 'lib/components'

import { DROPDOWN_LIST_TRIGGER_PROPS_META } from './props'

const DROPDOWN_LIST_TRIGGER_META: ComponentMeta<DropdownListTriggerProps> = {
  overview: {
    name: 'DropdownList.Trigger',
    title: 'Represents the interactive element used to open or close the dropdown list.',
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: DROPDOWN_LIST_TRIGGER_PROPS_META,
}

export { DROPDOWN_LIST_TRIGGER_META }
