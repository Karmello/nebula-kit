import type { SideNavCategoryProps } from 'lib/components/pro/SideNav/slots/SideNavCategory/types'
import { ComponentMeta } from 'client/definitions'

import { SIDE_NAV_CATEGORY_OVERVIEW } from './overview'
import { SIDE_NAV_CATEGORY_PROPS } from './props'

export const SIDE_NAV_CATEGORY_META = {
  overview: SIDE_NAV_CATEGORY_OVERVIEW,
  props: SIDE_NAV_CATEGORY_PROPS,
} satisfies ComponentMeta<SideNavCategoryProps>
