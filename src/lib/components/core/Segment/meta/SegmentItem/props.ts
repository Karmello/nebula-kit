import { ComponentMeta } from 'client/definitions'

import { FLEX_ITEM_PROPS_META } from '../../../Flex/meta/FlexItem/props'
import { type SegmentItemProps } from '../../SegmentItem/definitions'

const SEGMENT_ITEM_PROPS_META: ComponentMeta<SegmentItemProps>['props'] = {
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
  children: FLEX_ITEM_PROPS_META.children,
  flex: FLEX_ITEM_PROPS_META.flex,
  flexBasis: FLEX_ITEM_PROPS_META.flexBasis,
  flexGrow: FLEX_ITEM_PROPS_META.flexGrow,
  flexShrink: FLEX_ITEM_PROPS_META.flexShrink,
  hidden: FLEX_ITEM_PROPS_META.hidden,
  order: FLEX_ITEM_PROPS_META.order,
  tag: FLEX_ITEM_PROPS_META.tag,
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
}

export { SEGMENT_ITEM_PROPS_META }
