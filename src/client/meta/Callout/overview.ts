import { CALLOUT_TAGS } from 'lib/components/core/Callout/constants'
import type { Overview } from 'client/definitions'

export const CALLOUT_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Semantic message block for emphasizing important information.',
  features: [
    'used to draw attention to important information, confirmations, warnings or errors within a page',
  ],
  composedOf: ['Box', 'Text', 'Spacer', 'Title'],
  exposedTags: CALLOUT_TAGS,
}
