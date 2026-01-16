import { ComponentMeta } from 'client/definitions'
import { AutocompleteOptionProps } from 'lib/components'

import { AUTOCOMPLETE_OPTION_PROPS_META } from './props'

const AUTOCOMPLETE_OPTION_META: ComponentMeta<AutocompleteOptionProps> = {
  overview: {
    name: 'Autocomplete.Option',
    title: 'Represents a single option within Autocomplete component.',
    composedOf: ['DropdownList.Item'],
    topLevelTags: ['button'],
  },
  props: AUTOCOMPLETE_OPTION_PROPS_META,
}

export { AUTOCOMPLETE_OPTION_META }
