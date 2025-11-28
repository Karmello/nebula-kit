import { ComponentMeta } from 'client/definitions'
import { ToolbarProps } from 'lib/components/pro/layouts/Toolbar/definitions'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const TOOLBAR_PROPS_META: ComponentMeta<ToolbarProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
    description: 'Accepts slots directly or via a render function with access to the context argument.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  switchAt: {
    options: SWITCH_AT as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description: 'Specifies the breakpoint at which the main section turns from collapsed to inline.',
  },
}

export { TOOLBAR_PROPS_META }
