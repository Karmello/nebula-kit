import { ComponentMeta } from 'client/definitions'
import { SplitViewProps, SplitViewSidePosition } from 'lib/components/layouts/SplitView/definitions'
import { DEFAULT_SWITCH_AT, SwitchAt } from 'lib/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const SPLIT_VIEW_PROPS_META: ComponentMeta<SplitViewProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    options: ['SplitView.Side', 'SplitView.Main', 'SplitView.MainBar'],
  },
  sidePosition: {
    options: SplitViewSidePosition as unknown as string[],
    defaultValue: SplitViewSidePosition[0],
    isRequired: false,
    isResponsive: false,
    description: 'Controls which horizontal side of the layout the panel is attached to.',
  },
  switchAt: {
    options: SwitchAt as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description:
      'Defines the breakpoint at which the side panel changes its behavior from overlaying the content to sitting inline within the layout.',
  },
}

export { SPLIT_VIEW_PROPS_META }
