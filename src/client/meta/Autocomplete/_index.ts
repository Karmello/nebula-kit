import { ComponentMeta } from 'client/definitions'
import { AutocompleteProps } from 'lib/components'

import { AUTOCOMPLETE_EXAMPLES_META } from './examples'
import { AUTOCOMPLETE_PROPS_META } from './props'

import { AUTOCOMPLETE_OPTION_META } from './AutocompleteOption/_index'

const AUTOCOMPLETE_META: ComponentMeta<AutocompleteProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    features: ['...'],
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
