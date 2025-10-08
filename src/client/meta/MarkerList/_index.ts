import { ComponentMeta } from 'client/definitions'
import { MarkerListTag, MarkerListProps } from 'lib/components/elements/MarkerList/definitions'

import { MARKER_LIST_PROPS_META } from './props'
import { MARKER_LIST_EXAMPLES_META } from './examples'

import { MARKER_LIST_ITEM_META } from './MarkerListItem/_index'

const MARKER_LIST_META: ComponentMeta<MarkerListProps> = {
  overview: {
    title: 'List component that displays items with native markers.',
    description: ['presents short text collections with bullets or numbers'],
    composedOf: ['Flex'],
    rendersAs: MarkerListTag,
    slots: ['MarkerList.Item'],
  },
  props: MARKER_LIST_PROPS_META,
  examples: MARKER_LIST_EXAMPLES_META,
}

export default {
  MarkerList: MARKER_LIST_META,
  MarkerListItem: MARKER_LIST_ITEM_META,
}
