import { ComponentMeta } from 'client/definitions'
import { SplitViewMainBarProps } from 'lib/components/layouts/SplitView/slots/SplitViewMainBar/definitions'

import { SPLIT_VIEW_MAIN_BAR_PROPS_META } from './props'

const SPLIT_VIEW_MAIN_BAR_META: ComponentMeta<SplitViewMainBarProps> = {
  overview: {
    name: 'SplitView.MainBar?',
    title: 'Defines the horizontal slot above the main content.',
    description: [
      'can contain any custom content, such as breadcrumbs or controls',
      'should be placed inside SplitView.Main slot',
    ],
    composedOf: ['Box'],
  },
  props: SPLIT_VIEW_MAIN_BAR_PROPS_META,
}

export { SPLIT_VIEW_MAIN_BAR_META }
