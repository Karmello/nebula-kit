import type { Overview } from 'client/definitions'

export const FLOATING_TRIGGER_OVERVIEW: Overview = {
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
}
