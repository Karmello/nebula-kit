import { Segment as SegmentBase } from './segment'

import { SegmentItem } from './SegmentItem'

export const Segment = Object.assign(SegmentBase, {
  Item: SegmentItem,
})

export { type SegmentProps } from './definitions'
export * from './SegmentItem'
