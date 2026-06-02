import { BoxProps, ButtonProps } from 'lib/index.core'

export const DEFAULT_PAGINATION_SHOW_PREV_NEXT: PaginationProps['showPrevNext'] = false
export const DEFAULT_PAGINATION_SHOW_FIRST_LAST: PaginationProps['showFirstLast'] = false
export const DEFAULT_PAGINATION_SIBLING_COUNT: PaginationProps['siblingCount'] = 1
export const DEFAULT_PAGINATION_BOUNDARY_COUNT: PaginationProps['boundaryCount'] = 1

export const DEFAULT_PAGINATION_INTENT: PaginationProps['intent'] = 'primary'
export const DEFAULT_PAGINATION_SIZE: PaginationProps['size'] = 'md'
export const DEFAULT_PAGINATION_VARIANT: PaginationProps['variant'] = 'ghost'

export type PaginationItem =
  | { type: 'page'; page: number }
  | { type: 'ellipsis'; page: never }
  | { type: 'prev'; page: number }
  | { type: 'next'; page: number }
  | { type: 'first'; page: number }
  | { type: 'last'; page: number }

type PropsFromBox = Pick<BoxProps<'nav'>, 'tagAttrs' | 'tagRef'>

type PropsFromButton = Pick<ButtonProps, 'color' | 'disabled' | 'intent' | 'size' | 'variant'>

type PaginationOwnProps = {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
  hrefBuilder?: (page: number) => string
  showPrevNext?: boolean
  showFirstLast?: boolean
  siblingCount?: number
  boundaryCount?: number
}

export type PaginationProps = PropsFromBox & PropsFromButton & PaginationOwnProps
