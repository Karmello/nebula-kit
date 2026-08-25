import type { Overview } from 'client/definitions'

export const SNACKBAR_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Floating message container for transient status notifications, anchored to the viewport.',
  features: [
    'displays short, non-intrusive status messages without affecting page layout',
    'appears above the UI and automatically hides after a configurable duration',
    'supports six viewport placement regions',
  ],
  guidelines: [
    'Snackbar must wrap the application root and should be rendered once at the top level',
    'managed by a provider and controlled via the "useSnackbar" hook',
  ],
  composedOf: ['Box', 'Callout', 'Button', 'Slide'],
  hooks: ['useSnackbar'],
}

export const USE_SNACKBAR_OVERVIEW: Overview = {
  bundle: 'pro',
  name: 'useSnackbar.show()',
  title: 'Programmatic API for triggering snackbar messages.',
  guidelines: [
    'must be used within a Snackbar provider context',
    'if a Snackbar is already visible, additional calls are ignored',
  ],
}
