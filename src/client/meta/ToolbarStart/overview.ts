import type { DocOverview } from 'client/definitions'

export const TOOLBAR_START_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'Toolbar.Start?',
  title: 'Defines the start slot of Toolbar.',
  features: [
    'fixed region at the start of the toolbar',
    'remains visible when the main section is collapsed',
  ],
  guidelines: ['commonly used for brand, logo or home button'],
  composedOf: ['Box'],
}
