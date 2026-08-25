import type { DocOverview } from 'client/definitions'

export const PAGINATION_OVERVIEW: DocOverview = {
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
  composedOf: ['Box', 'Icon', 'Link', 'Text'],
  exposedTags: ['nav'],
}
