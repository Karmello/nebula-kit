import { Footer as FooterBase } from './footer'
import { FooterSection } from './slots'

export const Footer = Object.assign(FooterBase, {
  Section: FooterSection,
})

export * from './definitions'
export * from './slots'
