import { PaginationProps } from 'lib/index.pro'

import { PaginationItem } from './definitions'

const buildItems = (
  totalPages: PaginationProps['totalPages'],
  startPage: number,
  endPage: number,
  startBoundary: number[],
  endBoundary: number[]
): PaginationItem[] => {
  const pageSet = new Set<number>()

  // boundaries
  for (const page of startBoundary) {
    if (page >= 1 && page <= totalPages) {
      pageSet.add(page)
    }
  }

  for (const page of endBoundary) {
    if (page >= 1 && page <= totalPages) {
      pageSet.add(page)
    }
  }

  // main range
  for (let page = startPage; page <= endPage; page++) {
    if (page >= 1 && page <= totalPages) {
      pageSet.add(page)
    }
  }

  const pages = Array.from(pageSet).sort((a, b) => a - b)

  const items: PaginationItem[] = []

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    const prevPage = pages[i - 1]

    // insert ellipsis if there is a gap
    if (prevPage != null && page - prevPage > 1) {
      items.push({ type: 'ellipsis' } as PaginationItem)
    }

    items.push({ type: 'page', page })
  }

  return items
}

export const getPaginationItems = (
  totalPages: PaginationProps['totalPages'],
  showFirstLast: PaginationProps['showFirstLast'],
  showPrevNext: PaginationProps['showPrevNext'],
  safeCurrentPage: number,
  startPage: number,
  endPage: number,
  startBoundary: number[],
  endBoundary: number[]
): PaginationItem[] => {
  const items: PaginationItem[] = []

  if (showFirstLast && safeCurrentPage > 1) {
    items.push({ type: 'first', page: 1 })
  }

  if (showPrevNext && safeCurrentPage > 1) {
    items.push({ type: 'prev', page: safeCurrentPage - 1 })
  }

  items.push(...buildItems(totalPages, startPage, endPage, startBoundary, endBoundary))

  if (showPrevNext && safeCurrentPage < totalPages) {
    items.push({ type: 'next', page: safeCurrentPage + 1 })
  }

  if (showFirstLast && safeCurrentPage < totalPages) {
    items.push({ type: 'last', page: totalPages })
  }

  return items
}
