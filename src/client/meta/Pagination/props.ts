import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from 'lib/components/pro/Pagination/constants'
import { PAGINATION_VARIANTS } from 'lib/components/pro/Pagination/types'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { PaginationProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const PAGINATION_PROPS: Record<keyof PaginationProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // value
  currentPage: {
    options: ['number'],
    isRequired: true,
    description: 'The currently active page number.',
    group: 'value',
  },
  totalPages: {
    options: ['number'],
    isRequired: true,
    description: 'Total number of available pages.',
    group: 'value',
  },
  onChange: {
    options: ['(page: number) => void'],
    isRequired: true,
    description: 'Callback invoked with the target page number when the active page changes.',
    group: 'value',
  },
  // content
  boundaryCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_PAGINATION_BOUNDARY_COUNT),
    description:
      'Number of page items always shown at the beginning and end of the pagination range.',
    group: 'content',
  },
  siblingCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_PAGINATION_SIBLING_COUNT),
    description: 'Number of page items shown adjacent to the current page.',
    group: 'content',
  },
  showFirstLast: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_PAGINATION_SHOW_FIRST_LAST),
    description: 'Whether to display controls for jumping to the first and last page.',
    group: 'content',
  },
  showPrevNext: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_PAGINATION_SHOW_PREV_NEXT),
    description: 'Whether to display controls for navigating to the previous and next page.',
    group: 'content',
  },
  // navigation
  hrefBuilder: {
    options: ['(page: number) => string'],
    description:
      'Function called with a page number to produce the target URL for that page, enabling routing-based pagination and deep linking.',
    group: 'navigation',
  },
  // surface
  variant: {
    options: PAGINATION_VARIANTS,
    defaultValue: String(DEFAULT_PAGINATION_VARIANT),
    description: 'Visual style variant.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_PAGINATION_INTENT),
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  // interaction
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
    group: 'interaction',
  },
  // size
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
    group: 'size',
  },
}
