import { ComponentMeta } from 'client/definitions'
import { SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS } from 'lib/components/layouts/SplitView/slots/SplitViewMainBar/definitions'

export default {
  overview: {
    title: 'SplitView.MainBar (optional)',
    description: 'Optional horizontal slot above main content.',
    byDefault: ['renders as <div> element'],
    composedOf: SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS,
  },
} as ComponentMeta<any>
