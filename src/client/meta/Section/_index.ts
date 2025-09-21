import { ComponentMeta } from 'client/definitions'

import {
  SECTION_INHERITED_PROPS,
  SectionTag,
  SectionOwnProps,
} from 'lib/components/containers/Section/definitions'

import ownProps from './own-props'
import examples from './examples'

const SECTION_META: ComponentMeta<SectionOwnProps> = {
  overview: {
    description:
      'A semantic content block with a heading, a divider, and consistent padding, used to organize related content within a page.',
    role: [
      'groups related content into a distinct, semantic block',
      'separates content visually with a divider and spacing',
    ],
    behavior: ['requires children', 'requires a heading prop'],
    byDefault: [
      'renders as a <section> element',
      'renders the heading as a Text component with h6 typography',
      'renders a horizontal divider',
    ],
    examplesOfUse: [
      'separating content areas',
      'breaking long content into titled sections for readability',
      'organizing dashboard widgets with headings',
    ],
    composedOf: SECTION_INHERITED_PROPS,
    rendersAs: SectionTag,
  },
  ownProps,
  examples,
}

export default {
  Section: SECTION_META,
}
