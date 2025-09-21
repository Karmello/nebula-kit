import { ComponentMeta } from 'client/definitions'
import { SplitViewMainProps } from 'lib/components/layouts/SplitView/slots/SplitViewMain/definitions'

const SPLIT_VIEW_MAIN_META: ComponentMeta<SplitViewMainProps> = {
  overview: {
    title: 'SplitView.Main',
    description: 'The main panel region of the layout.',
    composedOf: ['Box', 'Flex', 'IconButton', 'Spacer'],
    byDefault: ['no padding applied'],
    rendersAs: ['section'],
  },
}

export { SPLIT_VIEW_MAIN_META }
