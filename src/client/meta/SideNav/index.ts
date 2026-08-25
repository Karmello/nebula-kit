import { SideNavProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SIDE_NAV_CHANGELOG } from './changelog'
import { SIDE_NAV_EXAMPLES } from './examples'
import { SIDE_NAV_OVERVIEW } from './overview'
import { SIDE_NAV_PROPS } from './props'

export const SIDE_NAV_META = {
  overview: SIDE_NAV_OVERVIEW,
  examples: SIDE_NAV_EXAMPLES,
  props: SIDE_NAV_PROPS,
  changelog: SIDE_NAV_CHANGELOG,
} satisfies ComponentMeta<SideNavProps>
