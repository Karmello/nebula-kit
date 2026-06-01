import { ComponentMeta } from 'client/definitions'

import { type AutocompleteProps } from '../definitions'
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
      'renders its dropdown without animation for maximum responsiveness',
    ],
    composedOf: ['Input', 'Text', 'IconButton'],
    topLevelTags: ['div'],
    slots: ['Autocomplete.Option'],
  },
  props: AUTOCOMPLETE_PROPS_META,
  examples: AUTOCOMPLETE_EXAMPLES_META,
  changelog: {
    '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
    '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
    '0.5.0': ['removed `onClosed` prop'],
    '0.3.0': ['released'],
  },
}

export default {
  Autocomplete: AUTOCOMPLETE_META,
  AutocompleteOption: AUTOCOMPLETE_OPTION_META,
}
