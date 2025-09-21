import { ComponentMeta } from 'client/definitions'
import { ToolbarOwnProps } from 'lib/components/layouts/Toolbar/definitions'
import { DEFAULT_SWITCH_AT, SwitchAt } from 'lib/definitions'

export default {
  switchAt: {
    name: 'switchAt',
    options: SwitchAt as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description: 'Specifies the breakpoint at which the main section turns from collapsed to inline.',
  },
} as ComponentMeta<ToolbarOwnProps>['props']
