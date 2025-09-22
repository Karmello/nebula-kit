import { ComponentMeta } from 'client/definitions'
import { SectionTag, SectionOwnProps } from 'lib/components/containers/Section/definitions'

import { SECTION_PROPS_META } from './props'
import { SECTION_EXAMPLES_META } from './examples'

const SECTION_META: ComponentMeta<SectionOwnProps> = {
  overview: {
    description:
      'A semantic content block with a heading, a divider, and consistent padding, used to organize related content within a page.',
    role: [
      'groups related content into a distinct, semantic block',
      'separates content visually with a divider and spacing',
      'requires children',
      'requires a heading prop',
      'renders as a <section> element',
      'renders the heading as a Text component with h6 typography',
      'renders a horizontal divider',
      'separating content areas',
      'breaking long content into titled sections for readability',
      'organizing dashboard widgets with headings',
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
