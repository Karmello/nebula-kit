import type { FloatingTriggerProps } from 'lib/components/pro/Floating/slots/FloatingTrigger/types'
import { DocMeta } from 'client/definitions'

import { FLOATING_TRIGGER_OVERVIEW } from './overview'
import { FLOATING_TRIGGER_PROPS } from './props'

export const FLOATING_TRIGGER_META = {
  overview: FLOATING_TRIGGER_OVERVIEW,
  props: FLOATING_TRIGGER_PROPS,
} satisfies DocMeta<FloatingTriggerProps>
