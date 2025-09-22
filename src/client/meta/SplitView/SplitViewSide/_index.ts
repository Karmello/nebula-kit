import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from 'lib/components/layouts/SplitView/definitions'
import { SplitViewSideProps } from 'lib/components/layouts/SplitView/slots/SplitViewSide/definitions'

const SPLIT_VIEW_SIDE_META: ComponentMeta<SplitViewSideProps> = {
  overview: {
    title: 'SplitView.Side',
    description: 'The side panel region of the layout.',
    role: [
      `sets inlineSize to ${DEFAULT_SPLIT_VIEW_SIDE_WIDTH}`,
      'sets intent to secondary in overlay mode to visually separate the side section background from the app background',
    ],
    composedOf: ['Box', 'Flex', 'IconButton'],
    rendersAs: ['aside'],
  },
}

export { SPLIT_VIEW_SIDE_META }
