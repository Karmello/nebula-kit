import { SPLIT_VIEW_SIDE_POSITIONS } from 'lib/components/pro/SplitView/constants'
import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { SplitViewProps } from 'lib/index.pro'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPLIT_VIEW_PROPS: Record<keyof SplitViewProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    options: ['SplitView.Side', 'SplitView.Main'],
    description:
      'Accepts slots directly or via a render function with access to the SplitView context.',
  },
  sidePosition: {
    options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
    defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
    description: 'Controls which horizontal side the side panel is attached to.',
  },
  switchAt: {
    options: SWITCH_BREAKPOINTS,
    defaultValue: DEFAULT_SWITCH_BREAKPOINT,
    description:
      'Defines the breakpoint at which the side panel switches from overlay to inline layout mode.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
