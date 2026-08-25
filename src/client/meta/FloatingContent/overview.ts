import type { DocOverview } from 'client/definitions'

export const FLOATING_CONTENT_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'Floating.Content',
  title: 'Portal-rendered overlay positioned relative to the trigger.',
  description:
    'Floating.Content wraps the floating layer, renders it in a portal and applies the positioning, dismissal and opening animation behavior managed by Floating.',
  features: [
    'renders only while the floating layer is open',
    'closes on outside press, Escape and Tab navigation',
  ],
  composedOf: ['Box', 'Portal'],
  exposedTags: ['span'],
}
