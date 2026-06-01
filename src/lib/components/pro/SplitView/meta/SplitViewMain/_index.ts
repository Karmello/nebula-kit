import { ComponentMeta } from 'client/definitions'

import { type SplitViewMainProps } from '../../slots/SplitViewMain/definitions'
import { SPLIT_VIEW_MAIN_PROPS_META } from './props'

const SPLIT_VIEW_MAIN_META: ComponentMeta<SplitViewMainProps> = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.Main',
    title: 'Defines the main content region of the SplitView layout.',
    features: ['holds the primary content displayed alongside the side panel'],
    composedOf: ['Box', 'Flex', 'Button', 'Spacer'],
    topLevelTags: ['section'],
    slots: ['SplitView.MainBar'],
  },
  props: SPLIT_VIEW_MAIN_PROPS_META,
}

export { SPLIT_VIEW_MAIN_META }
