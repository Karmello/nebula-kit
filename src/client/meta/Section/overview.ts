import { SECTION_TAGS } from 'lib/components/core/Section/constants'
import type { DocOverview } from 'client/definitions'

export const SECTION_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Semantic container for grouping content under a titled section.',
  features: [
    'groups related content under a semantic section with a heading',
    'provides consistent spacing and visual separation between heading and body',
    'supports optional icon and styling variants for section headers',
  ],
  composedOf: ['Box', 'HorizontalRule', 'Spacer', 'Text', 'Title'],
  exposedTags: SECTION_TAGS,
}
