import { ComponentMeta } from 'client/definitions'

import { type SplitViewMainBarProps } from '../../slots/SplitViewMainBar/definitions'
import { SPLIT_VIEW_MAIN_BAR_PROPS_META } from './props'

const SPLIT_VIEW_MAIN_BAR_META: ComponentMeta<SplitViewMainBarProps> = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.MainBar?',
    title: 'Defines the horizontal slot above the main content.',
    features: ['can contain any custom content, such as breadcrumbs or other controls'],
    guidelines: ['should be placed inside SplitView.Main slot'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: SPLIT_VIEW_MAIN_BAR_PROPS_META,
}

export { SPLIT_VIEW_MAIN_BAR_META }
