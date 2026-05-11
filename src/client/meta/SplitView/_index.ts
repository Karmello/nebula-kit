import { ComponentMeta } from 'client/definitions'
import { SplitViewProps } from 'lib/components'

import { SPLIT_VIEW_PROPS_META } from './props'
import { SPLIT_VIEW_EXAMPLES_META } from './examples'

import { SPLIT_VIEW_SIDE_META } from './SplitViewSide/_index'
import { SPLIT_VIEW_MAIN_META } from './SplitViewMain/_index'
import { SPLIT_VIEW_MAIN_BAR_META } from './SplitViewMainBar/_index'

const SPLIT_VIEW_META: ComponentMeta<SplitViewProps> = {
  overview: {
    bundle: 'pro',
    title: 'Two-panel layout for displaying side navigation alongside main content.',
    composedOf: ['Grid'],
    features: [
      'provides a two-panel horizontal layout with a main content and side panel areas',
      'switches the side panel between overlay and inline modes at the specified breakpoint (switchAt)',
      'manages side panel visibility based on the active layout mode',
      'stretches to fill the full height of its parent container',
      'in overlay mode, blocks pointer interaction outside the active panel',
    ],
    topLevelTags: ['div'],
    slots: ['SplitView.Side', 'SplitView.Main'],
  },
  props: SPLIT_VIEW_PROPS_META,
  examples: SPLIT_VIEW_EXAMPLES_META,
  changelog: {
    '0.10.0': ['exposed all padding props on SplitView.Side slot'],
    '0.8.0': ['removed borderIntent prop'],
    '0.2.3': ['released'],
  },
}

export default {
  SplitView: SPLIT_VIEW_META,
  SplitViewSide: SPLIT_VIEW_SIDE_META,
  SplitViewMain: SPLIT_VIEW_MAIN_META,
  SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
}
