import {
  DEFAULT_FLOATING_TRIGGER_DISPLAY,
  FLOATING_TRIGGER_DISPLAY,
} from 'lib/components/pro/Floating/slots/FloatingTrigger/constants'
import type { FloatingTriggerProps } from 'lib/components/pro/Floating/slots/FloatingTrigger/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const FLOATING_TRIGGER_PROPS: Record<keyof FloatingTriggerProps, Prop> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Element used to trigger and position the floating content.',
  },
  cursor: BOX_META.props.cursor,
  display: {
    ...BOX_META.props.display,
    options: FLOATING_TRIGGER_DISPLAY,
    defaultValue: DEFAULT_FLOATING_TRIGGER_DISPLAY,
    isResponsive: false,
  },
}
