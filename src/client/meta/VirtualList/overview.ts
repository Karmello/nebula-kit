import type { Overview } from 'client/definitions'

export const VIRTUAL_LIST_OVERVIEW: Overview = {
  bundle: 'pro',
  title:
    'High-performance, fixed-height virtualized list for rendering large datasets efficiently.',
  description:
    'VirtualList is a low-level layout primitive for rendering long lists in a predictable and performant way. It limits DOM output to only what is visible while preserving natural scrolling behavior.',
  features: [
    'renders only visible items to keep the dom small',
    'fixed-height, index-based virtualization',
    'predictable scrolling without layout guessing',
    'designed for large lists and frequent updates',
    'suitable for dropdowns menus and command palettes',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
