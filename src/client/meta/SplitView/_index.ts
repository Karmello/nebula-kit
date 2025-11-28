import { ComponentMeta } from 'client/definitions'
import { SplitViewProps } from 'lib/components/layouts/SplitView/definitions'

import { SPLIT_VIEW_PROPS_META } from './props'
import { SPLIT_VIEW_EXAMPLES_META } from './examples'

import { SPLIT_VIEW_SIDE_META } from './SplitViewSide/_index'
import { SPLIT_VIEW_MAIN_META } from './SplitViewMain/_index'
import { SPLIT_VIEW_MAIN_BAR_META } from './SplitViewMainBar/_index'

const SPLIT_VIEW_META: ComponentMeta<SplitViewProps> = {
  overview: {
    bundle: 'pro',
    title: 'Two-panel layout designed for building side navigation alongside main content.',
    composedOf: ['Grid'],
    description: [
      'provides a two-panel horizontal layout with a main content area and side panel',
      'changes the side panel from an overlay to an inline layout at a breakpoint ("switchAt" prop)',
      'manages side panel visibility, shows the side panel in inline mode and hides it in overlay mode',
      'stretches to fill the full height of its parent container',
    ],
    rendersAs: ['div'],
    slots: ['SplitView.Side', 'SplitView.Main'],
  },
  props: SPLIT_VIEW_PROPS_META,
  examples: SPLIT_VIEW_EXAMPLES_META,
}

export default {
  SplitView: SPLIT_VIEW_META,
  SplitViewSide: SPLIT_VIEW_SIDE_META,
  SplitViewMain: SPLIT_VIEW_MAIN_META,
  SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
}
