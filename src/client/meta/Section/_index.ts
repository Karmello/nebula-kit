import { ComponentMeta } from 'client/definitions'
import { SECTION_TAGS, SectionProps } from 'lib/components/core/containers/Section'

import { SECTION_PROPS_META } from './props'
import { SECTION_EXAMPLES_META } from './examples'

const SECTION_META: ComponentMeta<SectionProps> = {
  overview: {
    bundle: 'core',
    title: 'Semantic container for grouping content under a titled section.',
    description: [
      'groups related content under a semantic section with a heading',
      'provides consistent spacing and visual separation between heading and body',
      'supports optional icon and styling variants for section headers',
    ],
    composedOf: ['Box', 'Text', 'Divider', 'Spacer'],
    topLevelTags: SECTION_TAGS,
  },
  props: SECTION_PROPS_META,
  examples: SECTION_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  Section: SECTION_META,
}
