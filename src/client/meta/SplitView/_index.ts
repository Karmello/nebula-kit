import { ComponentMeta } from 'client/definitions'
import { SPLIT_VIEW_INHERITED_PROPS, SplitViewOwnProps } from 'lib/components/layouts/SplitView/definitions'

import props from './props'
import examples from './examples'

import SPLIT_VIEW_SIDE_META from './SplitViewSide/_index'
import SPLIT_VIEW_MAIN_META from './SplitViewMain/_index'
import SPLIT_VIEW_MAIN_BAR_META from './SplitViewMainBar/_index'

const SPLIT_VIEW_META: ComponentMeta<SplitViewOwnProps> = {
  overview: {
    description: 'A two-panel layout designed for building side navigation alongside main content.',
    composedOf: SPLIT_VIEW_INHERITED_PROPS,
    role: [
      'provides a two-panel horizontal layout with a main content area and side panel',
      'manages side panel visibility',
    ],
    behavior: [
      'stretches to fill the full height of its parent container',
      'shows the side panel in inline mode',
      'hides the side panel in overlay mode',
      'changes the side panel from an overlay to an inline layout at a breakpoint (switchAt prop)',
    ],
    byDefault: ['sidePosition is set to left', 'switchAt prop is set to lg'],
    examplesOfUse: [
      'creating a layout with a collapsible navigation sidebar',
      'displaying filters or tools alongside main content',
      'building dashboards where the side panel supplements the primary view',
    ],
    rendersAs: ['div'],
  },
  props,
  examples,
}

export default {
  SplitView: SPLIT_VIEW_META,
  SplitViewSide: SPLIT_VIEW_SIDE_META,
  SplitViewMain: SPLIT_VIEW_MAIN_META,
  SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
}
