import { ComponentMeta } from 'client/definitions'
import { SegmentProps } from 'lib/components'

import { SEGMENT_PROPS_META } from './props'
import { SEGMENT_EXAMPLES_META } from './examples'

import { SEGMENT_ITEM_META } from './SegmentItem/_index'

const SEGMENT_META: ComponentMeta<SegmentProps> = {
  overview: {
    bundle: 'core',
    title:
      'Composite component that visually merges multiple Box-based surfaces into a single segmented group.',
    features: [
      'groups Box-based surfaces into a horizontal or vertical block',
      'automatically manages border radiuses for seamless attachment',
    ],

    composedOf: ['Flex'],
    slots: ['Segment.Item'],
  },
  props: SEGMENT_PROPS_META,
  examples: SEGMENT_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  Segment: SEGMENT_META,
  'Segment.Item': SEGMENT_ITEM_META,
}
