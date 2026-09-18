import type { UseFocusTrapArgs } from 'lib/components/pro/useFocusTrap/types'
import { DocMeta } from 'client/definitions'

import { USE_FOCUS_TRAP_CHANGELOG } from './changelog'
import { USE_FOCUS_TRAP_EXAMPLES } from './examples'
import { USE_FOCUS_TRAP_OVERVIEW } from './overview'
import { USE_FOCUS_TRAP_PROPS } from './props'

export const USE_FOCUS_TRAP_META = {
  overview: USE_FOCUS_TRAP_OVERVIEW,
  props: USE_FOCUS_TRAP_PROPS,
  examples: USE_FOCUS_TRAP_EXAMPLES,
  changelog: USE_FOCUS_TRAP_CHANGELOG,
} satisfies DocMeta<UseFocusTrapArgs>
