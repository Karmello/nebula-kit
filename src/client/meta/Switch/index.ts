import { SwitchProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SWITCH_CHANGELOG } from './changelog'
import { SWITCH_EXAMPLES } from './examples'
import { SWITCH_OVERVIEW } from './overview'
import { SWITCH_PROPS } from './props'

export const SWITCH_META = {
  overview: SWITCH_OVERVIEW,
  props: SWITCH_PROPS,
  examples: SWITCH_EXAMPLES,
  changelog: SWITCH_CHANGELOG,
} satisfies ComponentMeta<SwitchProps>
