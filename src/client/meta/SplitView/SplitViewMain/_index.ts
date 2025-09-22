import { ComponentMeta } from 'client/definitions'
import { SplitViewMainProps } from 'lib/components/layouts/SplitView/slots/SplitViewMain/definitions'

const SPLIT_VIEW_MAIN_META: ComponentMeta<SplitViewMainProps> = {
  overview: {
    name: 'SplitView.Main',
    title: 'The main panel region of the layout.',
    description: ['no padding applied'],
    composedOf: ['Box', 'Flex', 'IconButton', 'Spacer'],
    rendersAs: ['section'],
  },
}

export { SPLIT_VIEW_MAIN_META }
