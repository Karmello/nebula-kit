import { SegmentItemProps, SegmentProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { FLEX_META } from '../../Flex/meta'
import { DEFAULT_SEGMENT_FLEX_DIRECTION } from '../definitions'
import { SEGMENT_CHANGELOG } from './changelog'
import { SEGMENT_EXAMPLES } from './examples'

export const SEGMENT_META = {
  Segment: {
    overview: {
      bundle: 'core',
      title: 'Composite component that visually merges multiple Box-based surfaces into a single segmented group.',
      features: [
        'groups Box-based surfaces into a horizontal or vertical block',
        'automatically manages border radiuses for seamless attachment',
      ],

      composedOf: ['Flex'],
      slots: ['Segment.Item'],
    },
    props: {
      children: {
        ...FLEX_META.Flex.props.children,
        options: ['Segment.Item'],
        description: 'Any number of Segment.Item slots.',
      },
      flexDirection: {
        ...FLEX_META.Flex.props.flexDirection,
        defaultValue: String(DEFAULT_SEGMENT_FLEX_DIRECTION),
      },
      tag: FLEX_META.Flex.props.tag,
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
    },
    examples: SEGMENT_EXAMPLES,
    changelog: SEGMENT_CHANGELOG,
  } satisfies ComponentMeta<SegmentProps>,
  SegmentItem: {
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
    props: FLEX_META.FlexItem.props,
  } satisfies ComponentMeta<SegmentItemProps>,
}
