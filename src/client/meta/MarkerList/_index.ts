import { ComponentMeta } from 'client/definitions'
import { MARKER_LIST_TAGS, MarkerListProps } from 'lib/components/core/elements/MarkerList'

import { MARKER_LIST_PROPS_META } from './props'
import { MARKER_LIST_EXAMPLES_META } from './examples'

import { MARKER_LIST_ITEM_META } from './MarkerListItem/_index'

const MARKER_LIST_META: ComponentMeta<MarkerListProps> = {
  overview: {
    bundle: 'core',
    title: 'List component that displays items with native markers.',
    description: ['presents short text collections with bullets or numbers'],
    composedOf: ['Flex'],
    topLevelTags: MARKER_LIST_TAGS,
    slots: ['MarkerList.Item'],
  },
  props: MARKER_LIST_PROPS_META,
  examples: MARKER_LIST_EXAMPLES_META,
}

export default {
  MarkerList: MARKER_LIST_META,
  'MarkerList.Item': MARKER_LIST_ITEM_META,
}
