import { ComponentMeta } from 'client/definitions'

import { MARKER_LIST_TAGS, type MarkerListProps } from '../definitions'
import { MARKER_LIST_PROPS_META } from './props'
import { MARKER_LIST_EXAMPLES_META } from './examples'
import { MARKER_LIST_ITEM_META } from './MarkerListItem/_index'

const MARKER_LIST_META: ComponentMeta<MarkerListProps> = {
  overview: {
    bundle: 'core',
    title: 'List component that displays items with native markers.',
    features: ['presents short text collections with bullets or numbers'],
    guidelines: ['use ol tag with numeric marker styles and ul with bullet marker styles for correct semantics'],
    composedOf: ['Flex'],
    topLevelTags: MARKER_LIST_TAGS,
    slots: ['MarkerList.Item'],
  },
  props: MARKER_LIST_PROPS_META,
  examples: MARKER_LIST_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  MarkerList: MARKER_LIST_META,
  MarkerListItem: MARKER_LIST_ITEM_META,
}
