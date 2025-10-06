import { ComponentMeta } from 'client/definitions'
import { SplitViewSideProps } from 'lib/components/layouts/SplitView/slots/SplitViewSide/definitions'

import { SPLIT_VIEW_SIDE_PROPS_META } from './props'

const SPLIT_VIEW_SIDE_META: ComponentMeta<SplitViewSideProps> = {
  overview: {
    name: 'SplitView.Side',
    title: 'Defines the side panel region of SplitView.',
    description: [
      'typically used for navigation, menus, or supplementary content',
      'accepts children as a ReactNode or a render function to access context values',
    ],
    composedOf: ['Box', 'Flex', 'IconButton'],
    rendersAs: ['aside'],
  },
  props: SPLIT_VIEW_SIDE_PROPS_META,
}

export { SPLIT_VIEW_SIDE_META }
