import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from 'lib/components/layouts/SplitView/definitions'

import {
  SPLIT_VIEW_SIDE_INHERITED_PROPS,
  SplitViewSideProps,
} from 'lib/components/layouts/SplitView/slots/SplitViewSide/definitions'

export default {
  overview: {
    title: 'SplitView.Side',
    description: 'The side panel region of the layout.',
    composedOf: SPLIT_VIEW_SIDE_INHERITED_PROPS,
    byDefault: [
      `sets inlineSize to ${DEFAULT_SPLIT_VIEW_SIDE_WIDTH}`,
      'sets intent to secondary in overlay mode to visually separate the side section background from the app background',
    ],
    rendersAs: ['aside'],
  },
} as ComponentMeta<SplitViewSideProps>
