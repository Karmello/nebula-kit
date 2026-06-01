import { ComponentMeta } from 'client/definitions'

import { type MarkerListItemProps } from '../../MarkerListItem/definitions'
import { MARKER_LIST_PROPS_META } from './props'

const MARKER_LIST_ITEM_META: ComponentMeta<MarkerListItemProps> = {
  overview: {
    bundle: 'core',
    name: 'MarkerList.Item',
    title: 'Single item inside MarkerList.',
    composedOf: ['Box'],
    topLevelTags: ['li'],
  },
  props: MARKER_LIST_PROPS_META,
}

export { MARKER_LIST_ITEM_META }
