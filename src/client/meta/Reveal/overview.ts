import { REVEAL_TAGS } from 'lib/components/core/Reveal/constants'
import type { Overview } from 'client/definitions'

export const REVEAL_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Disclosure component for toggling expandable content.',
  features: [
    'provides a labeled control for toggling content visibility',
    'animates expand and collapse using measured height for smooth transitions',
  ],
  exposedTags: REVEAL_TAGS,
  composedOf: ['Box', 'Text', 'Icon', 'Rotate', 'Resize'],
}
