import type { Overview } from 'client/definitions'

export const APP_FRAME_FOOTER_SECTION_OVERVIEW: Overview = {
  bundle: 'core',
  name: 'AppFrame.FooterSection?',
  title: 'Defines a content group inside AppFrame.Footer.',
  description:
    'AppFrame.FooterSection groups related footer content such as links, legal text or supplementary navigation inside the footer region.',
  features: [
    'groups related footer content into separate sections',
    'participates in the footer layout when sections stack or align horizontally',
    'keeps footer content structure explicit without requiring custom wrappers',
  ],
  composedOf: ['Box'],
  exposedTags: ['section'],
}
