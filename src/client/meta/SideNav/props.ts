import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_INTENT,
  DEFAULT_SIDE_NAV_VARIANT,
  SideNavExpandMode,
} from 'lib/components/navigation/SideNav/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const SIDE_NAV_PROPS_META: ComponentMeta<SideNavProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav content rendered.',
  },
  variant: {
    ...BOX_PROPS_META.variant,
    defaultValue: DEFAULT_SIDE_NAV_VARIANT,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: DEFAULT_SIDE_NAV_INTENT,
  },
  expandMode: {
    options: SideNavExpandMode as unknown as string[],
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description: 'Controls whether single or multiple categories can remain open at a time.',
  },
}

export { SIDE_NAV_PROPS_META }
