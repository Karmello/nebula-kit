import type { MarkerListItemProps } from 'lib/components/core/MarkerList/slots/MarkerListItem/types'
import { ComponentMeta } from 'client/definitions'

import { MARKER_LIST_ITEM_OVERVIEW } from './overview'
import { MARKER_LIST_ITEM_PROPS } from './props'

export const MARKER_LIST_ITEM_META = {
  overview: MARKER_LIST_ITEM_OVERVIEW,
  props: MARKER_LIST_ITEM_PROPS,
} satisfies ComponentMeta<MarkerListItemProps>
