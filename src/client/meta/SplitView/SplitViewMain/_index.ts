import { ComponentMeta } from 'client/definitions'
import { SPLIT_VIEW_MAIN_INHERITED_PROPS } from 'lib/components/layouts/SplitView/slots/SplitViewMain/definitions'

export default {
  overview: {
    title: 'SplitView.Main',
    description: 'The main panel region of the layout.',
    composedOf: SPLIT_VIEW_MAIN_INHERITED_PROPS,
    byDefault: ['no padding applied'],
    rendersAs: ['section'],
  },
} as ComponentMeta<any>
