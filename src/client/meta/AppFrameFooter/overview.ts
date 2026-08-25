import type { Overview } from 'client/definitions'

export const APP_FRAME_FOOTER_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'AppFrame.Footer?',
  title: 'Defines the bottom region of AppFrame.',
  guidelines: [
    'commonly used for legal notices, links or supplementary information',
    'AppFrame.FooterSection slot is optional, when no footer sections are provided, AppFrame.Footer renders its children directly',
  ],
  composedOf: ['Box'],
  exposedTags: ['footer'],
  slots: ['AppFrame.FooterSection'],
}
