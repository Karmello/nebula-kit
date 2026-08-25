import type { Overview } from 'client/definitions'

export const SPACER_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Layout component that introduces controlled empty space between elements.',
  features: [
    'enables consistent vertical spacing across layouts',
    'supports predefined spacing scale and custom CSS values',
    'supports responsive spacing for adaptive layouts',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
