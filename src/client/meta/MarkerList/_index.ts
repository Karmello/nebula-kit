import { ComponentMeta } from 'client/definitions'

import {
  MARKER_LIST_INHERITED_PROPS,
  MarkerListTag,
  MarkerListOwnProps,
} from 'lib/components/elements/MarkerList/definitions'

import { MARKER_LIST_PROPS_META } from './props'
import { MARKER_LIST_EXAMPLES_META } from './examples'

import { MARKER_LIST_ITEM_META } from './MarkerListItem/_index'

const MARKER_LIST_META: ComponentMeta<MarkerListOwnProps> = {
  overview: {
    description: 'A semantic list component that displays native markers for its items.',
    role: [
      'establishes a semantic list container with native markers',
      'ensures each item is rendered as part of an accessible list structure',
    ],
    byDefault: [
      'renders as a <ul> element',
      'expects children to be <MarkerList.Item>',
      'uses disc as the list style',
      'applies a gap of 3',
    ],
    examplesOfUse: [
      'presenting short collections of text items with bullets or numbers',
      'grouping related information where the marker itself carries meaning',
    ],
    composedOf: MARKER_LIST_INHERITED_PROPS,
    rendersAs: MarkerListTag,
  },
  props: MARKER_LIST_PROPS_META,
  examples: MARKER_LIST_EXAMPLES_META,
}

export default {
  MarkerList: MARKER_LIST_META,
  MarkerListItem: MARKER_LIST_ITEM_META,
}
