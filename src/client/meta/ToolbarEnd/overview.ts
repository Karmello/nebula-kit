import type { Overview } from 'client/definitions'

export const TOOLBAR_END_OVERVIEW: Overview = {
  bundle: 'pro',
  name: 'Toolbar.End?',
  title: 'Defines the end slot of Toolbar.',
  features: [
    'fixed region at the end of the toolbar',
    'remains visible when the main section is collapsed',
  ],
  guidelines: ['commonly used for user actions, menus or status items'],
  composedOf: ['Box'],
}
