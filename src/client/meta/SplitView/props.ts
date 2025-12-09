import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'
import { SplitViewProps, SPLIT_VIEW_SIDE_POSITIONS } from 'lib/components/pro/layouts/SplitView'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const SPLIT_VIEW_PROPS_META: ComponentMeta<SplitViewProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    options: ['SplitView.Side', 'SplitView.Main'],
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  sidePosition: {
    options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
    defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
    description: 'Controls which horizontal side of the layout the panel is attached to.',
  },
  switchAt: {
    options: SWITCH_AT as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    description:
      'Defines the breakpoint at which the side panel changes its behavior from overlaying the content to sitting inline within the layout.',
  },
}

export { SPLIT_VIEW_PROPS_META }
