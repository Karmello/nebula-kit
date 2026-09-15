import {
  DEFAULT_FLOATING_TRIGGER_DISPLAY,
  FLOATING_TRIGGER_DISPLAY,
} from 'lib/components/pro/Floating/slots/FloatingTrigger/constants'
import type { FloatingTriggerProps } from 'lib/components/pro/Floating/slots/FloatingTrigger/types'
import { CSS_CURSOR } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const FLOATING_TRIGGER_PROPS: Record<keyof FloatingTriggerProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Element used to trigger and position the floating content.',
  },
  cursor: {
    options: CSS_CURSOR,
    description: 'Controls the mouse cursor shown when hovering over the element.',
  },
  display: {
    options: FLOATING_TRIGGER_DISPLAY,
    defaultValue: DEFAULT_FLOATING_TRIGGER_DISPLAY,
    isResponsive: false,
    description: 'Display type controlling how the component is laid out.',
    link: true,
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
}
