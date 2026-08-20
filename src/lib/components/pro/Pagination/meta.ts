import { BOX_META } from 'lib/components/core/Box/meta'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { DEFAULT_TSHIRT_SIZE } from 'lib/constants'
import { PaginationProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from './definitions'
import { PAGINATION_EXAMPLES } from './examples'

export const PAGINATION_META = {
  Pagination: {
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
      exposedTags: ['nav'],
    },
    props: {
      boundaryCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_PAGINATION_BOUNDARY_COUNT),
        description: 'Number of page items always shown at the beginning and end of the pagination range.',
      },
      color: BUTTON_META.Button.props.color,
      currentPage: {
        options: ['number'],
        isRequired: true,
        description: 'The currently active page number.',
      },
      disabled: BUTTON_META.Button.props.disabled,
      hrefBuilder: {
        options: ['(page: number) => string'],
        description:
          'Function called with a page number to produce the target URL for that page, enabling routing-based pagination and deep linking.',
      },
      intent: {
        ...BUTTON_META.Button.props.intent,
        defaultValue: String(DEFAULT_PAGINATION_INTENT),
      },
      onChange: {
        options: ['(page: number) => void'],
        isRequired: true,
        description: 'Callback invoked with the target page number when the active page changes.',
      },
      showFirstLast: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_PAGINATION_SHOW_FIRST_LAST),
        description: 'Whether to display controls for jumping to the first and last page.',
      },
      showPrevNext: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_PAGINATION_SHOW_PREV_NEXT),
        description: 'Whether to display controls for navigating to the previous and next page.',
      },
      siblingCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_PAGINATION_SIBLING_COUNT),
        description: 'Number of page items shown adjacent to the current page.',
      },
      scale: {
        ...BUTTON_META.Button.props.scale,
        defaultValue: DEFAULT_TSHIRT_SIZE,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      totalPages: {
        options: ['number'],
        isRequired: true,
        description: 'Total number of available pages.',
      },
      variant: {
        ...BUTTON_META.Button.props.variant,
        defaultValue: String(DEFAULT_PAGINATION_VARIANT),
      },
    },
    examples: PAGINATION_EXAMPLES,
    changelog: {
      '0.4.0': ['released'],
    },
  } satisfies ComponentMeta<PaginationProps>,
}
