import { Footer as FooterBase } from './footer'

import { FooterSection } from './slots'

export const Footer = Object.assign(FooterBase, {
  Section: FooterSection,
})

export { type FooterProps } from './definitions'
export type { FooterSectionProps } from './slots'
