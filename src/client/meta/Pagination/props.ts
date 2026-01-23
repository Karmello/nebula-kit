import { ComponentMeta } from 'client/definitions'
import { PaginationProps } from 'lib/components'
import { DEFAULT_BUTTON_SIZE } from 'lib/components/core/controls/Button'

import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from 'lib/components/pro/navigation/Pagination'

import { BUTTON_PROPS_META } from '../Button/props'
import { BOX_PROPS_META } from '../Box/props'

const PAGINATION_PROPS_META: ComponentMeta<PaginationProps>['props'] = {
  boundaryCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_PAGINATION_BOUNDARY_COUNT),
    description: 'Number of page items always shown at the beginning and end of the pagination range.',
  },
  color: BUTTON_PROPS_META.color,
  currentPage: {
    options: ['number'],
    isRequired: true,
    description: 'The currently active page number.',
  },
  disabled: BUTTON_PROPS_META.disabled,
  hrefBuilder: {
    options: ['(page: number) => string'],
    description:
      'Function called with a page number to produce the target URL for that page, enabling routing-based pagination and deep linking.',
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
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
  size: {
    ...BUTTON_PROPS_META.size,
    defaultValue: String(DEFAULT_BUTTON_SIZE),
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  totalPages: {
    options: ['number'],
    isRequired: true,
    description: 'Total number of available pages.',
  },
  variant: {
    ...BUTTON_PROPS_META.variant,
    defaultValue: String(DEFAULT_PAGINATION_VARIANT),
  },
}

export { PAGINATION_PROPS_META }
