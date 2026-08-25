import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from 'lib/components/pro/Pagination/constants'
import { DEFAULT_TSHIRT_SIZE } from 'lib/constants'
import { PaginationProps } from 'lib/index.pro'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'

export const PAGINATION_PROPS: Record<keyof PaginationProps, Prop> = {
  boundaryCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_PAGINATION_BOUNDARY_COUNT),
    description:
      'Number of page items always shown at the beginning and end of the pagination range.',
  },
  color: BUTTON_META.props.color,
  currentPage: {
    options: ['number'],
    isRequired: true,
    description: 'The currently active page number.',
  },
  disabled: BUTTON_META.props.disabled,
  hrefBuilder: {
    options: ['(page: number) => string'],
    description:
      'Function called with a page number to produce the target URL for that page, enabling routing-based pagination and deep linking.',
  },
  intent: {
    ...BUTTON_META.props.intent,
    defaultValue: String(DEFAULT_PAGINATION_INTENT),
  },
  onChange: {
    options: ['(page: number) => void'],
    isRequired: true,
    description: 'Callback invoked with the target page number when the active page changes.',
  },
  scale: {
    ...BUTTON_META.props.scale,
    defaultValue: DEFAULT_TSHIRT_SIZE,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  totalPages: {
    options: ['number'],
    isRequired: true,
    description: 'Total number of available pages.',
  },
  variant: {
    ...BUTTON_META.props.variant,
    defaultValue: String(DEFAULT_PAGINATION_VARIANT),
  },
}
