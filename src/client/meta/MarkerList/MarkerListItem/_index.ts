import { ComponentMeta } from 'client/definitions'
import { MarkerListOwnProps } from 'lib/components/elements/MarkerList/definitions'
import { MARKER_LIST_ITEM_INHERITED_PROPS } from 'lib/components/elements/MarkerList/MarkerListItem/definitions'

const MARKER_LIST_ITEM_META: ComponentMeta<MarkerListOwnProps> = {
  overview: {
    title: 'MarkerList.Item',
    description: 'Represents an individual element within a MarkerList.',
    composedOf: MARKER_LIST_ITEM_INHERITED_PROPS,
    rendersAs: ['li'],
  },
}

export default MARKER_LIST_ITEM_META
