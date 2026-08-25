import { BOX_COLORS, BOX_INTENTS, BOX_VARIANTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from 'lib/components/pro/Pagination/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { PaginationProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const PAGINATION_PROPS: Record<keyof PaginationProps, DocProp> = {
  boundaryCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_PAGINATION_BOUNDARY_COUNT),
    description:
      'Number of page items always shown at the beginning and end of the pagination range.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  currentPage: {
    options: ['number'],
    isRequired: true,
    description: 'The currently active page number.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  hrefBuilder: {
    options: ['(page: number) => string'],
    description:
      'Function called with a page number to produce the target URL for that page, enabling routing-based pagination and deep linking.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_PAGINATION_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  onChange: {
    options: ['(page: number) => void'],
    isRequired: true,
    description: 'Callback invoked with the target page number when the active page changes.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
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
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  totalPages: {
    options: ['number'],
    isRequired: true,
    description: 'Total number of available pages.',
  },
  variant: {
    options: BOX_VARIANTS,
    defaultValue: String(DEFAULT_PAGINATION_VARIANT),
    description: 'Visual style variant.',
  },
}
