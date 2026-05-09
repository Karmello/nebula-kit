import { ComponentMeta } from 'client/definitions'
import { SegmentItemProps } from 'lib/components'

import { SEGMENT_ITEM_PROPS_META } from './props'

const SEGMENT_ITEM_META: ComponentMeta<SegmentItemProps> = {
  overview: {
    bundle: 'core',
    name: 'Segment.Item',
    title: 'Wrapper for individual Segment children.',
    features: ['provides per-child layout control inside a Segment'],
    guidelines: [
      'targets the ".neb-box" class to adjust border radiuses, so children must be Boxes or render a Box as the root element under the hood',
    ],
    composedOf: ['Flex.Item'],
  },
  props: SEGMENT_ITEM_PROPS_META,
}

export { SEGMENT_ITEM_META }
