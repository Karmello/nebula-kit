import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'

import { type SplitViewProps, SPLIT_VIEW_SIDE_POSITIONS } from '../definitions'
import { GRID_PROPS_META } from '../../../core/Grid/meta/props'

const SPLIT_VIEW_PROPS_META: ComponentMeta<SplitViewProps>['props'] = {
  tagAttrs: GRID_PROPS_META.tagAttrs,
  tagRef: GRID_PROPS_META.tagRef,
  children: {
    ...GRID_PROPS_META.children,
    isRequired: true,
    options: ['SplitView.Side', 'SplitView.Main'],
    description: 'Accepts slots directly or via a render function with access to the SplitView context.',
  },
  sidePosition: {
    options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
    defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
    description: 'Controls which horizontal side the side panel is attached to.',
  },
  switchAt: {
    options: SWITCH_AT as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    description: 'Defines the breakpoint at which the side panel switches from overlay to inline layout mode.',
  },
}

export { SPLIT_VIEW_PROPS_META }
