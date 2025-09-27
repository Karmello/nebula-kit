import { ComponentMeta } from 'client/definitions'
import { SideNavProps } from 'lib/components'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  SideNavExpandMode,
} from 'lib/components/navigation/SideNav/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const SIDE_NAV_PROPS_META: ComponentMeta<SideNavProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav content rendered.',
  },
  expandMode: {
    options: SideNavExpandMode as unknown as string[],
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description:
      'Controls whether one single section stays open at a time or several can remain open together.',
  },
}

export { SIDE_NAV_PROPS_META }
