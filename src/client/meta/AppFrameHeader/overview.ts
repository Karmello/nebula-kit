import type { Overview } from 'client/definitions'

export const APP_FRAME_HEADER_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'AppFrame.Header',
  title: 'Defines the top region of AppFrame.',
  guidelines: ['typically used for navigation, branding or other global actions'],
  composedOf: ['Box'],
  exposedTags: ['header'],
}
