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
      ...BOX_META.props.children,
      isRequired: true,
    },
    color: {
      ...BOX_META.props.color,
      description: 'Color applied to each item individually.',
    },
    intent: {
      ...BOX_META.props.intent,
      description: 'Color tone applied to each item individually.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
} satisfies ComponentMeta<MarkerListItemProps>
