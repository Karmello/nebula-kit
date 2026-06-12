import { MARKER_LIST_TAGS } from 'lib/constants'
import { MarkerList, MarkerListItemProps, MarkerListProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { FLEX_META } from '../Flex/meta'
import { DEFAULT_MARKER_LIST_GAP, MARKER_LIST_STYLES } from './definitions'

export const MARKER_LIST_META = {
  MarkerList: {
    overview: {
      bundle: 'core',
      title: 'List component that displays items with native markers.',
      features: ['presents short text collections with bullets or numbers'],
      guidelines: ['use ol tag with numeric marker styles and ul with bullet marker styles for correct semantics'],
      composedOf: ['Flex'],
      topLevelTags: MARKER_LIST_TAGS,
      slots: ['MarkerList.Item'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Any number of MarkerList.Item slots.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to all items at once.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to all items at once.',
      },
      listStyle: {
        options: MARKER_LIST_STYLES,
        defaultValue: MARKER_LIST_STYLES[0],
        isRequired: false,
        isResponsive: false,
        description: 'Defines the marker style used for list items.',
      },
      gap: {
        ...FLEX_META.Flex.props.rowGap,
        defaultValue: String(DEFAULT_MARKER_LIST_GAP),
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: MARKER_LIST_TAGS,
        defaultValue: 'ul',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Basic MarkerList with two list items.',
        jsx: (
          <MarkerList>
            <MarkerList.Item>Item 1</MarkerList.Item>
            <MarkerList.Item>Item 2</MarkerList.Item>
          </MarkerList>
        ),
      },
      {
        description: 'MarkerList with circular markers and custom spacing between items.',
        jsx: (
          <MarkerList listStyle="circle" gap="48px">
            <MarkerList.Item>Item 1</MarkerList.Item>
            <MarkerList.Item>Item 2</MarkerList.Item>
          </MarkerList>
        ),
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<MarkerListProps>,
  MarkerListItem: {
    overview: {
      bundle: 'core',
      name: 'MarkerList.Item',
      title: 'Single item inside MarkerList.',
      composedOf: ['Box'],
      topLevelTags: ['li'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to each item individually.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to each item individually.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<MarkerListItemProps>,
}
