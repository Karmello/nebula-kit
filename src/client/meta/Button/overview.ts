import { BUTTON_TAGS } from 'lib/components/core/Button/constants'
import type { Overview } from 'client/definitions'

export const BUTTON_OVERVIEW: Overview = {
  bundle: 'core',
  title:
    'Interactive control for triggering actions with consistent semantics, layout and visual states.',
  features: [
    'provides a consistent, accessible trigger for user actions',
    'handles interactive states: hover, active, focus, disabled, loading',
    'supports first-class icon composition, including custom SVG icons',
    'supports full-width layout to span the entire container',
  ],
  composedOf: ['Box', 'Text', 'Icon', 'Loader'],
  exposedTags: BUTTON_TAGS,
}
