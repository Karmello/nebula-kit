import { ComponentMeta } from 'client/definitions'
import { SplitViewOwnProps, SplitViewSidePosition } from 'lib/components/layouts/SplitView/definitions'
import { DEFAULT_SWITCH_AT, SwitchAt } from 'lib/definitions'

export default {
  sidePosition: {
    name: 'sidePosition',
    options: SplitViewSidePosition as unknown as string[],
    defaultValue: SplitViewSidePosition[0],
    isRequired: false,
    isResponsive: false,
    description: 'Controls which horizontal side of the layout the panel is attached to.',
  },
  switchAt: {
    name: 'switchAt',
    options: SwitchAt as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description:
      'Defines the breakpoint at which the side panel changes its behavior from overlaying the content to sitting inline within the layout.',
  },
} as ComponentMeta<SplitViewOwnProps>['ownProps']
