import { ComponentMeta } from 'client/definitions'
import { SplitViewMainProps } from 'lib/components/layouts/SplitView/slots/SplitViewMain/definitions'

import { SPLIT_VIEW_MAIN_PROPS_META } from './props'

const SPLIT_VIEW_MAIN_META: ComponentMeta<SplitViewMainProps> = {
  overview: {
    name: 'SplitView.Main',
    title: 'Defines the main panel region of SplitView.',
    description: ['holds the primary content displayed alongside the side panel'],
    composedOf: ['Box', 'Flex', 'Button', 'Spacer'],
    rendersAs: ['section'],
    slots: ['SplitView.MainBar'],
  },
  props: SPLIT_VIEW_MAIN_PROPS_META,
}

export { SPLIT_VIEW_MAIN_META }
