import { SegmentItemProps, SegmentProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { DEFAULT_SEGMENT_FLEX_DIRECTION } from '../definitions'
import { SEGMENT_CHANGELOG } from './changelog'
import { SEGMENT_EXAMPLES } from './examples'

export const SEGMENT_META = {
  Segment: {
    overview: {
      bundle: 'core',
      title:
        'Composite component that visually merges multiple Box-based surfaces into a single segmented group.',
      features: [
        'groups Box-based surfaces into a horizontal or vertical block',
        'automatically manages border radiuses for seamless attachment',
      ],

      composedOf: ['Box'],
      slots: ['Segment.Item'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Segment.Item'],
        description: 'Any number of Segment.Item slots.',
      },
      flexDirection: {
        ...BOX_META.Box.props.flexDirection,
        defaultValue: String(DEFAULT_SEGMENT_FLEX_DIRECTION),
      },
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
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
      composedOf: ['Box'],
    },
    props: {
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      hidden: BOX_META.Box.props.hidden,
      children: BOX_META.Box.props.children,
      flex: BOX_META.Box.props.flex,
      flexGrow: BOX_META.Box.props.flexGrow,
      flexShrink: BOX_META.Box.props.flexShrink,
      flexBasis: BOX_META.Box.props.flexBasis,
      alignSelf: BOX_META.Box.props.alignSelf,
      order: BOX_META.Box.props.order,
    },
  } satisfies ComponentMeta<SegmentItemProps>,
}
