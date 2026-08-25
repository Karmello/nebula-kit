import type { Overview } from 'client/definitions'

export const APP_FRAME_MAIN_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'AppFrame.Main',
  title: 'Defines the central content region of AppFrame.',
  features: ['holds the primary application content or view'],
  composedOf: ['Box'],
  exposedTags: ['main'],
}
