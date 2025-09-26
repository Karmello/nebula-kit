import { ComponentMeta } from 'client/definitions'
import { ToolbarProps } from 'lib/components/layouts/Toolbar/definitions'
import { DEFAULT_SWITCH_AT, SwitchAt } from 'lib/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const TOOLBAR_PROPS_META: ComponentMeta<ToolbarProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  switchAt: {
    options: SwitchAt as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    isRequired: false,
    isResponsive: false,
    description: 'Specifies the breakpoint at which the main section turns from collapsed to inline.',
  },
}

export { TOOLBAR_PROPS_META }
