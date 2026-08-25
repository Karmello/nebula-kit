import type { FloatingContentProps } from 'lib/components/pro/Floating/slots/FloatingContent/types'
import { ComponentMeta } from 'client/definitions'

export const FLOATING_CONTENT_META = {
  overview: {
    bundle: 'pro',
    name: 'Floating.Content',
    title: 'Portal-rendered overlay positioned relative to the trigger.',
    description:
      'Floating.Content wraps the floating layer, renders it in a portal and applies the positioning, dismissal and opening animation behavior managed by Floating.',
    features: [
      'renders only while the floating layer is open',
      'closes on outside press, Escape and Tab navigation',
    ],
    composedOf: ['Box'],
    exposedTags: ['span'],
  },
  props: {
    children: {
      options: ['ReactNode'],
      isRequired: true,
      description: 'Content displayed when the floating layer is open.',
    },
  },
} satisfies ComponentMeta<FloatingContentProps>
