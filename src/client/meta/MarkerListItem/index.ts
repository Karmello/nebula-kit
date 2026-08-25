import type { MarkerListItemProps } from 'lib/components/core/MarkerList/slots/MarkerListItem/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const MARKER_LIST_ITEM_META = {
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
} satisfies ComponentMeta<MarkerListItemProps>
