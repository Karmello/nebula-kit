import { ComponentMeta } from 'client/definitions'
import { SegmentItemProps } from 'lib/components'

import { SEGMENT_ITEM_PROPS_META } from './props'

const SEGMENT_ITEM_META: ComponentMeta<SegmentItemProps> = {
  overview: {
    name: 'Segment.Item',
    title: 'Wrapper for individual Segment children.',
    description: [
      'provides per-child layout control inside a Segment',
      'targets ".neb-box" class to adjust radiuses, so children must be Box-based components (like Button)',
    ],
    composedOf: ['Flex.Item'],
  },
  props: SEGMENT_ITEM_PROPS_META,
}

export { SEGMENT_ITEM_META }
