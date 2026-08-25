import type { Overview } from 'client/definitions'

export const DIVIDER_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Boundary marker between content sections.',
  features: [
    'creates clear visual separation to reduce scanning effort',
    'marks a thematic break between related blocks of content',
  ],
  composedOf: ['Box'],
  exposedTags: ['hr'],
}
