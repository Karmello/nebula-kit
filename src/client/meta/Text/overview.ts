import { TEXT_TAGS } from 'lib/components/core/Text/constants'
import type { Overview } from 'client/definitions'

export const TEXT_OVERVIEW: Overview = {
  bundle: 'core',
  title:
    'Foundational component for displaying and styling textual content that ensures consistent typography across the system.',
  features: [
    'renders semantic text elements with consistent typography',
    'provides common text styling and formatting options',
  ],
  composedOf: ['Box'],
  exposedTags: TEXT_TAGS,
}
