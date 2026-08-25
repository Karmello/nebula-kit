import type { Overview } from 'client/definitions'

export const IMAGE_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Foundational component for rendering and styling images consistently across the system.',
  features: [
    'renders a native img element',
    'exposes logical sizing and constraints',
    'supports responsive object-fit and object-position',
    'serves as a base for composed image components',
  ],
  composedOf: ['Box'],
  exposedTags: ['img'],
}
