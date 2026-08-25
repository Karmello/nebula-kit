import type { Overview } from 'client/definitions'

export const MULTI_SELECT_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Form control for choosing multiple options from a list.',
  features: ['supports both controlled and uncontrolled modes'],
  composedOf: ['Text', 'Title'],
  exposedTags: ['div'],
  slots: ['MultiSelect.Option'],
}
