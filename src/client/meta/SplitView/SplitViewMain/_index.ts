import { ComponentMeta } from 'client/definitions'

import {
  SPLIT_VIEW_MAIN_INHERITED_PROPS,
  SplitViewMainProps,
} from 'lib/components/layouts/SplitView/slots/SplitViewMain/definitions'

const SPLIT_VIEW_MAIN_META: ComponentMeta<SplitViewMainProps> = {
  overview: {
    title: 'SplitView.Main',
    description: 'The main panel region of the layout.',
    composedOf: SPLIT_VIEW_MAIN_INHERITED_PROPS,
    byDefault: ['no padding applied'],
    rendersAs: ['section'],
  },
}

export { SPLIT_VIEW_MAIN_META }
