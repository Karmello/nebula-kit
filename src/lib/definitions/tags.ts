// constants

export const ButtonElem = ['button', 'a'] as const
export const TextElem = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'] as const
export const GridElem = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const
export const MarkerListElem = ['ul', 'ol'] as const
export const SectionElem = ['section', 'article', 'aside', 'div'] as const
export const CalloutElem = ['div', 'section', 'article', 'aside'] as const

// types

export type ButtonElem = (typeof ButtonElem)[number]
export type TextElem = (typeof TextElem)[number]
export type GridElem = (typeof GridElem)[number]
export type MarkerListElem = (typeof MarkerListElem)[number]
export type SectionElem = (typeof SectionElem)[number]
export type CalloutElem = (typeof CalloutElem)[number]
