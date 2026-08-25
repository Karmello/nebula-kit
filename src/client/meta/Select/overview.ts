import type { Overview } from 'client/definitions'

export const SELECT_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Form control for choosing a single option from a list.',
  description:
    'Select allows users to choose a single value from a predefined list of options while keeping the interface compact. It combines an interactive trigger with a dropdown list, handling selection, keyboard navigation, focus management and positioning automatically.',
  features: [
    'supports controlled and uncontrolled modes',
    'keyboard navigation with arrow keys',
    'automatic option scrolling to the selected item',
    'automatic dropdown positioning and viewport collision handling',
    'click outside and Escape key dismissal',
    'supports fixed trigger labels via `staticLabel`',
  ],
  composedOf: ['Box', 'Text', 'Title'],
  slots: ['Select.Option'],
}
