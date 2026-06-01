import { ComponentMeta } from 'client/definitions'

import { PaginationProps } from '../definitions'
import { PAGINATION_PROPS_META } from './props'
import { PAGINATION_EXAMPLES_META } from './examples'

const PAGINATION_META: ComponentMeta<PaginationProps> = {
  overview: {
    bundle: 'pro',
    title: 'Navigation control for paging through large collections of content.',
    description:
      'Pagination provides a controlled navigation interface for moving between pages of content. It supports large page ranges with configurable boundaries, sibling pages, first, last, previous and next controls, while remaining accessible and responsive by default.',
    features: [
      'controlled API with explicit page state',
      'boundary and sibling page windowing',
      'first, last, previous and next controls',
      'automatic ellipsis handling',
      'routing support via hrefBuilder for URL-based pagination and deep linking',
    ],
    composedOf: ['Box', 'Segment', 'Flex', 'Button', 'Link', 'Icon'],
    topLevelTags: ['nav'],
  },
  props: PAGINATION_PROPS_META,
  examples: PAGINATION_EXAMPLES_META,
  changelog: {
    '0.4.0': ['released'],
  },
}

export default {
  Pagination: PAGINATION_META,
}
