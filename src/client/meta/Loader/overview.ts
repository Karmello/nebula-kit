import type { Overview } from 'client/definitions'

export const LOADER_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Circular indicator for loading states.',
  features: ['displays a minimal circular spinner to indicate an ongoing operation'],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
