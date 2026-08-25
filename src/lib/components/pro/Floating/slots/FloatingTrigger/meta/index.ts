import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FLOATING_TRIGGER_DISPLAY, FLOATING_TRIGGER_DISPLAY } from '../constants'
import type { FloatingTriggerProps } from '../types'

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
    cursor: BOX_META.Box.props.cursor,
    display: {
      ...BOX_META.Box.props.display,
      options: FLOATING_TRIGGER_DISPLAY,
      defaultValue: DEFAULT_FLOATING_TRIGGER_DISPLAY,
      isResponsive: false,
    },
  },
} satisfies ComponentMeta<FloatingTriggerProps>
