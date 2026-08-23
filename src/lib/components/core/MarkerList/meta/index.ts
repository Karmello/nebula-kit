import { MarkerListItemProps, MarkerListProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { DEFAULT_MARKER_LIST_GAP, MARKER_LIST_STYLES, MARKER_LIST_TAGS } from '../constants'
import { MARKER_LIST_CHANGELOG } from './changelog'
import { MARKER_LIST_EXAMPLES } from './examples'

export const MARKER_LIST_META = {
  MarkerList: {
    overview: {
      bundle: 'core',
      title: 'List component that displays items with native markers.',
      features: ['presents short text collections with bullets or numbers'],
      guidelines: [
        'use ol tag with numeric marker styles and ul with bullet marker styles for correct semantics',
      ],
      composedOf: ['Box'],
      exposedTags: MARKER_LIST_TAGS,
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
      gap: {
        ...BOX_META.Box.props.rowGap,
        defaultValue: String(DEFAULT_MARKER_LIST_GAP),
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
      tag: {
        ...BOX_META.Box.props.tag,
        options: MARKER_LIST_TAGS,
        defaultValue: 'ul',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: MARKER_LIST_EXAMPLES,
    changelog: MARKER_LIST_CHANGELOG,
  } satisfies ComponentMeta<MarkerListProps>,
  MarkerListItem: {
    overview: {
      bundle: 'core',
      name: 'MarkerList.Item',
      title: 'Single item inside MarkerList.',
      composedOf: ['Box'],
      exposedTags: ['li'],
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
