import type { FocusTrapProps } from 'lib/components/pro/FocusTrap/types'
import { ComponentMeta } from 'client/definitions'

import { FOCUS_TRAP_CHANGELOG } from './changelog'
import { FOCUS_TRAP_EXAMPLES } from './examples'
import { FOCUS_TRAP_OVERVIEW } from './overview'
import { FOCUS_TRAP_PROPS } from './props'

export const FOCUS_TRAP_META = {
  overview: FOCUS_TRAP_OVERVIEW,
  props: FOCUS_TRAP_PROPS,
  examples: FOCUS_TRAP_EXAMPLES,
  changelog: FOCUS_TRAP_CHANGELOG,
} satisfies ComponentMeta<FocusTrapProps>
