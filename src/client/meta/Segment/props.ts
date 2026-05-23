import { ComponentMeta } from 'client/definitions'
import { SegmentProps } from 'lib/components'
import { DEFAULT_SEGMENT_FLEX_DIRECTION } from 'lib/components/core/Segment'

import { FLEX_PROPS_META } from '../Flex/props'

const SEGMENT_PROPS_META: ComponentMeta<SegmentProps>['props'] = {
  children: {
    ...FLEX_PROPS_META.children,
    options: ['Segment.Item'],
    description: 'Any number of Segment.Item slots.',
  },
  flexDirection: {
    ...FLEX_PROPS_META.flexDirection,
    defaultValue: String(DEFAULT_SEGMENT_FLEX_DIRECTION),
  },
  tag: FLEX_PROPS_META.tag,
  tagAttrs: FLEX_PROPS_META.tagAttrs,
  tagRef: FLEX_PROPS_META.tagRef,
}

export { SEGMENT_PROPS_META }
