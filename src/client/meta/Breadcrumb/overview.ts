import type { Overview } from 'client/definitions'

export const BREADCRUMB_OVERVIEW: Overview = {
  bundle: 'pro',
  title:
    'Interactive hierarchical navigation control for selecting and modifying a position within a structured path.',
  features: [
    'displays a hierarchical path using interactive DropdownList components',
    'reveals navigation levels progressively based on user selection',
    'emits explicit user intent without guessing defaults or completing paths',
    'supports both uncontrolled and fully controlled usage patterns',
    'integrates cleanly with routing, configuration and non-routing flows',
    'keeps application logic and navigation policy outside the component',
  ],
  composedOf: ['Box', 'Icon', 'Text'],
  exposedTags: ['div', 'nav', 'section'],
}
