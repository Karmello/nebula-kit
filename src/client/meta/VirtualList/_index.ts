import { VirtualListProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { VIRTUAL_LIST_PROPS_META } from './props'
import { VIRTUAL_LIST_EXAMPLES_META } from './examples'

const VIRTUAL_LIST_META: ComponentMeta<VirtualListProps> = {
  overview: {
    bundle: 'pro',
    title: 'High-performance, fixed-height virtualized list for rendering large datasets efficiently.',
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
    topLevelTags: ['div'],
  },
  props: VIRTUAL_LIST_PROPS_META,
  examples: VIRTUAL_LIST_EXAMPLES_META,
  changelog: {
    '0.3.0': ['released'],
  },
}

export default {
  VirtualList: VIRTUAL_LIST_META,
}
