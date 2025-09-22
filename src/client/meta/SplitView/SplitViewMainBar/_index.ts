import { ComponentMeta } from 'client/definitions'
import { SplitViewMainBarProps } from 'lib/components/layouts/SplitView/slots/SplitViewMainBar/definitions'

const SPLIT_VIEW_MAIN_BAR_META: ComponentMeta<SplitViewMainBarProps> = {
  overview: {
    name: 'SplitView.MainBar (optional)',
    description: 'Optional horizontal slot above main content.',
    role: ['renders as <div> element'],
    composedOf: ['Box'],
  },
}

export { SPLIT_VIEW_MAIN_BAR_META }
