import { ComponentMeta } from 'client/definitions'
import { SegmentProps } from 'lib/components'

import { SEGMENT_PROPS_META } from './props'
import { SEGMENT_EXAMPLES_META } from './examples'

const SEGMENT_META: ComponentMeta<SegmentProps> = {
  overview: {
    plan: 'free',
    title: 'Composite component that unifies several controls into a single segmented element.',
    description: [
      'groups children into a single horizontal or vertical block',
      'provides shorthand props ("variant", "color", "intent", "size"), that are forwarded to all children and used when supported',
      'use only with components that render Box as their root element',
    ],

    composedOf: ['Flex', 'Flex.Item'],
  },
  props: SEGMENT_PROPS_META,
  examples: SEGMENT_EXAMPLES_META,
}

export default {
  Segment: SEGMENT_META,
}
