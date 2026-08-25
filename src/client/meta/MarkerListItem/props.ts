import type { MarkerListItemProps } from 'lib/components/core/MarkerList/slots/MarkerListItem/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const MARKER_LIST_ITEM_PROPS: Record<keyof MarkerListItemProps, Prop> = {
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
}
