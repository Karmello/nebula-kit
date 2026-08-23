import { BoxProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export const DEFAULT_PAGINATION_SHOW_PREV_NEXT: PaginationProps['showPrevNext'] = false
export const DEFAULT_PAGINATION_SHOW_FIRST_LAST: PaginationProps['showFirstLast'] = false
export const DEFAULT_PAGINATION_SIBLING_COUNT: PaginationProps['siblingCount'] = 1
export const DEFAULT_PAGINATION_BOUNDARY_COUNT: PaginationProps['boundaryCount'] = 1

export const DEFAULT_PAGINATION_INTENT: PaginationProps['intent'] = 'primary'
export const DEFAULT_PAGINATION_SCALE: PaginationProps['scale'] = 'md'
export const DEFAULT_PAGINATION_VARIANT: PaginationProps['variant'] = 'ghost'

export type PaginationItem =
  | { type: 'page'; page: number }
  | { type: 'ellipsis'; page: never }
  | { type: 'prev'; page: number }
  | { type: 'next'; page: number }
  | { type: 'first'; page: number }
  | { type: 'last'; page: number }

export type PaginationProps = {
  // own
  scale?: TShirtSize
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
  hrefBuilder?: (page: number) => string
  showPrevNext?: boolean
  showFirstLast?: boolean
  siblingCount?: number
  boundaryCount?: number
  // Box
  tagAttrs?: BoxProps<'nav'>['tagAttrs']
  tagRef?: BoxProps<'nav'>['tagRef']
  color?: BoxProps<'nav'>['color']
  disabled?: BoxProps<'nav'>['disabled']
  intent?: BoxProps<'nav'>['intent']
  variant?: BoxProps<'nav'>['variant']
}
