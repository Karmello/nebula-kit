import type { DocOverview } from 'client/definitions'

export const BREADCRUMB_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title:
    'Interactive hierarchical navigation control for selecting and modifying a position within a structured path.',
  features: [
    'displays a hierarchical path using interactive dropdown controls per level',
    'reveals navigation levels progressively based on user selection',
    'emits explicit user intent without guessing defaults or completing paths',
    'supports both uncontrolled and fully controlled usage patterns',
    'integrates cleanly with routing, configuration and non-routing flows',
    'keeps application logic and navigation policy outside the component',
  ],
  composedOf: ['Box', 'Divider', 'Floating', 'Icon', 'Resize', 'Text'],
  exposedTags: ['div', 'nav', 'section'],
}
