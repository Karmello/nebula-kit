import { ComponentMeta } from 'client/definitions'
import { SectionTag, SectionProps } from 'lib/components/containers/Section/definitions'

import { SECTION_PROPS_META } from './props'
import { SECTION_EXAMPLES_META } from './examples'

const SECTION_META: ComponentMeta<SectionProps> = {
  overview: {
    title: 'Semantic container with a heading and body area.',
    description: ['organizes content into a section with a heading, body, and optional divider'],
    composedOf: ['Box', 'Text', 'Divider', 'Spacer'],
    rendersAs: SectionTag,
  },
  props: SECTION_PROPS_META,
  examples: SECTION_EXAMPLES_META,
}

export default {
  Section: SECTION_META,
}
