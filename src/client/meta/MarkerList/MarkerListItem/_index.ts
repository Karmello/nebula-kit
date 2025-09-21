import { ComponentMeta } from 'client/definitions'
import { MARKER_LIST_ITEM_INHERITED_PROPS } from 'lib/components/elements/MarkerList/MarkerListItem/definitions'

export default {
  overview: {
    title: 'MarkerList.Item',
    description: 'Represents an individual element within a MarkerList.',
    composedOf: MARKER_LIST_ITEM_INHERITED_PROPS,
    rendersAs: ['li'],
  },
} as ComponentMeta<any>
