import { REVEAL_TAGS } from 'lib/components/core/Reveal/constants'
import type { DocOverview } from 'client/definitions'

export const REVEAL_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Disclosure component for toggling expandable content.',
  features: [
    'provides a labeled control for toggling content visibility',
    'animates expand and collapse using measured height for smooth transitions',
  ],
  exposedTags: REVEAL_TAGS,
  composedOf: ['Box', 'Text', 'Icon', 'Rotate', 'Resize'],
}
