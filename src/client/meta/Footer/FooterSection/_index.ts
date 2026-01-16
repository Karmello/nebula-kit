import { ComponentMeta } from 'client/definitions'
import { FooterSectionProps } from 'lib/components'

import { FOOTER_SECTION_PROPS_META } from './props'

const FOOTER_SECTION_META: ComponentMeta<FooterSectionProps> = {
  overview: {
    name: 'Footer.Section',
    title: 'Flexible subcomponent that represents an individual area within the footer.',
    features: [
      'controls how a section stretches along the horizontal axis and aligns its content along the vertical axis',
    ],
    composedOf: ['Flex.Item', 'Box'],
    topLevelTags: ['section'],
  },
  props: FOOTER_SECTION_PROPS_META,
}

export { FOOTER_SECTION_META }
