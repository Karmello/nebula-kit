import { ComponentMeta } from 'client/definitions'
import { AutocompleteProps } from 'lib/components'

import { AUTOCOMPLETE_EXAMPLES_META } from './examples'
import { AUTOCOMPLETE_PROPS_META } from './props'

import { AUTOCOMPLETE_OPTION_META } from './AutocompleteOption/_index'

const AUTOCOMPLETE_META: ComponentMeta<AutocompleteProps> = {
  overview: {
    bundle: 'pro',
    title: 'Text input with a searchable, selectable dropdown list.',
    description:
      'Autocomplete combines an input field with a dropdown list to help users quickly find and select options. It reacts to typing in real time and keeps the displayed results synchronized with the current input across open and close interactions.',
    features: [
      'supports controlled and uncontrolled usage patterns',
      'works with large option sets through virtualized rendering',
      'allows debounced result updates while typing',
    ],
    composedOf: ['DropdownList', 'Input', 'Button'],
    topLevelTags: ['div'],
    slots: ['Autocomplete.Option'],
  },
  props: AUTOCOMPLETE_PROPS_META,
  examples: AUTOCOMPLETE_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  Autocomplete: AUTOCOMPLETE_META,
  'Autocomplete.Option': AUTOCOMPLETE_OPTION_META,
}
