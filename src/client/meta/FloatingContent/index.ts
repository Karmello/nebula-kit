import type { FloatingContentProps } from 'lib/components/pro/Floating/slots/FloatingContent/types'
import { DocMeta } from 'client/definitions'

import { FLOATING_CONTENT_OVERVIEW } from './overview'
import { FLOATING_CONTENT_PROPS } from './props'

export const FLOATING_CONTENT_META = {
  overview: FLOATING_CONTENT_OVERVIEW,
  props: FLOATING_CONTENT_PROPS,
} satisfies DocMeta<FloatingContentProps>
