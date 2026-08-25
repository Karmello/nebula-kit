import { TabsProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { TABS_CHANGELOG } from './changelog'
import { TABS_EXAMPLES } from './examples'
import { TABS_OVERVIEW } from './overview'
import { TABS_PROPS } from './props'

export const TABS_META = {
  overview: TABS_OVERVIEW,
  props: TABS_PROPS,
  examples: TABS_EXAMPLES,
  changelog: TABS_CHANGELOG,
} satisfies ComponentMeta<TabsProps>
