import { ComponentMeta } from 'client/definitions'
import { SectionTag, SectionProps } from 'lib/components/containers/Section/definitions'

import { SECTION_PROPS_META } from './props'
import { SECTION_EXAMPLES_META } from './examples'

const SECTION_META: ComponentMeta<SectionProps> = {
  overview: {
    title:
      'Semantic content block with a heading, a divider, and consistent padding, used to organize related content within a page.',
    description: [
      'groups related content into a distinct, semantic block',
      'separates content visually with a divider and spacing',
    ],
    composedOf: ['Box', 'Text', 'Divider', 'Spacer'],
    rendersAs: SectionTag,
  },
  props: SECTION_PROPS_META,
  examples: SECTION_EXAMPLES_META,
}

export default {
  Section: SECTION_META,
}
