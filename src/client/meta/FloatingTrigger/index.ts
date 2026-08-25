import {
  DEFAULT_FLOATING_TRIGGER_DISPLAY,
  FLOATING_TRIGGER_DISPLAY,
} from 'lib/components/pro/Floating/slots/FloatingTrigger/constants'
import type { FloatingTriggerProps } from 'lib/components/pro/Floating/slots/FloatingTrigger/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const FLOATING_TRIGGER_META = {
  overview: {
    bundle: 'pro',
    name: 'Floating.Trigger',
    title: 'Anchor element used to position and control the floating content.',
    description:
      'Floating.Trigger wraps the element that opens the floating layer and acts as the positioning reference for Floating.Content.',
    features: [
      'provides the reference element used by Floating UI',
      'preserves the rendered child structure without applying visual styling',
    ],
    composedOf: ['Box'],
    exposedTags: ['span'],
  },
  props: {
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
  },
} satisfies ComponentMeta<FloatingTriggerProps>
