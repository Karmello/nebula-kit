import { VirtualListProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { VIRTUAL_LIST_PROPS_META } from './props'
import { VIRTUAL_LIST_EXAMPLES_META } from './examples'

const VIRTUAL_LIST_META: ComponentMeta<VirtualListProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    features: ['...'],
  },
  props: VIRTUAL_LIST_PROPS_META,
  examples: VIRTUAL_LIST_EXAMPLES_META,
  changelog: {
    '0.3.0': ['Released'],
  },
}

export default {
  VirtualList: VIRTUAL_LIST_META,
}
