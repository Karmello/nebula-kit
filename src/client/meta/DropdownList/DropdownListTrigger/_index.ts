import { ComponentMeta } from 'client/definitions'
import { DropdownListTriggerProps } from 'lib/components'

import { DROPDOWN_LIST_TRIGGER_PROPS_META } from './props'

const DROPDOWN_LIST_TRIGGER_META: ComponentMeta<DropdownListTriggerProps> = {
  overview: {
    bundle: 'core',
    name: 'DropdownList.Trigger',
    title: 'Represents a wrapper around the interactive element that toggles the visibility of the dropdown list.',
    features: [
      'connects any interactive element to the DropdownList open and close state',
      'allows full control over the trigger UI',
    ],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: DROPDOWN_LIST_TRIGGER_PROPS_META,
}

export { DROPDOWN_LIST_TRIGGER_META }
