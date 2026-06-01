import { ComponentMeta } from 'client/definitions'

import { type SplitViewSideProps } from '../../slots/SplitViewSide/definitions'
import { SPLIT_VIEW_SIDE_PROPS_META } from './props'

const SPLIT_VIEW_SIDE_META: ComponentMeta<SplitViewSideProps> = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.Side',
    title: 'Defines the side panel region of the SplitView layout.',
    features: ['traps keyboard focus when the side panel is rendered in overlay mode'],
    guidelines: ['typically used for navigation, menus or supplementary content'],
    composedOf: ['Box', 'Flex', 'IconButton', 'Resize'],
    topLevelTags: ['aside'],
  },
  props: SPLIT_VIEW_SIDE_PROPS_META,
}

export { SPLIT_VIEW_SIDE_META }
