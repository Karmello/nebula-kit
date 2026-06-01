import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'

import { type ToolbarProps } from '../definitions'
import { GRID_PROPS_META } from '../../../core/Grid/meta/props'

const TOOLBAR_PROPS_META: ComponentMeta<ToolbarProps>['props'] = {
  children: {
    ...GRID_PROPS_META.children,
    isRequired: true,
    options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  tagAttrs: GRID_PROPS_META.tagAttrs,
  tagRef: GRID_PROPS_META.tagRef,
  switchAt: {
    options: SWITCH_AT,
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description: 'Defines the breakpoint at which the main section switches between collapsed and inline layout.',
  },
}

export { TOOLBAR_PROPS_META }
