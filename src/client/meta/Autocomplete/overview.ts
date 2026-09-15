import type { DocOverview } from 'client/definitions'

export const AUTOCOMPLETE_OVERVIEW: DocOverview = {
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
  composedOf: ['Box', 'Floating', 'HorizontalRule', 'IconButton', 'Input', 'Resize', 'Text'],
  exposedTags: ['div'],
  slots: ['Autocomplete.Option'],
}
