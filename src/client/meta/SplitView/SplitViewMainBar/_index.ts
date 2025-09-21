import { ComponentMeta } from 'client/definitions'

import {
  SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS,
  SplitViewMainBarProps,
} from 'lib/components/layouts/SplitView/slots/SplitViewMainBar/definitions'

const SPLIT_VIEW_MAIN_BAR_META: ComponentMeta<SplitViewMainBarProps> = {
  overview: {
    title: 'SplitView.MainBar (optional)',
    description: 'Optional horizontal slot above main content.',
    byDefault: ['renders as <div> element'],
    composedOf: SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS,
  },
}

export default SPLIT_VIEW_MAIN_BAR_META
