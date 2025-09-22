import { ComponentMeta } from 'client/definitions'
import { MarkerListOwnProps } from 'lib/components/elements/MarkerList/definitions'

const MARKER_LIST_ITEM_META: ComponentMeta<MarkerListOwnProps> = {
  overview: {
    name: 'MarkerList.Item',
    title: 'Represents an individual element within a MarkerList.',
    composedOf: ['Box'],
    rendersAs: ['li'],
  },
}

export { MARKER_LIST_ITEM_META }
