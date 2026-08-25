import type { SideNavItemProps } from 'lib/components/pro/SideNav/slots/SideNavItem/types'
import { DocMeta } from 'client/definitions'

import { SIDE_NAV_ITEM_OVERVIEW } from './overview'
import { SIDE_NAV_ITEM_PROPS } from './props'

export const SIDE_NAV_ITEM_META = {
  overview: SIDE_NAV_ITEM_OVERVIEW,
  props: SIDE_NAV_ITEM_PROPS,
} satisfies DocMeta<SideNavItemProps>
