import { useCallback, useMemo } from 'react'

import { Box, Button, Flex, Icon, Link, Segment } from 'lib/components'
import { BUTTON_SIZE_CONFIG } from 'lib/components/core/controls/Button'
import { IconName } from 'lib/definitions'

import {
  PaginationProps,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_VARIANT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SIZE,
} from './definitions'

import { getPaginationItems } from './helpers'

export const Pagination = ({
  // Box
  tagAttrs,
  tagRef,
  // Button
  color,
  disabled,
  intent = DEFAULT_PAGINATION_INTENT,
  size = DEFAULT_PAGINATION_SIZE,
  variant = DEFAULT_PAGINATION_VARIANT,
  // own
  currentPage,
  totalPages,
  onChange,
  hrefBuilder,
  showPrevNext = DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  showFirstLast = DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  siblingCount = DEFAULT_PAGINATION_SIBLING_COUNT,
  boundaryCount = DEFAULT_PAGINATION_BOUNDARY_COUNT,
}: PaginationProps) => {
  const handleChange = useCallback(
    (page: number) => {
      onChange(page)
    },
    [onChange]
  )

  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages)

  const paginationItems = useMemo(() => {
    const safeSiblingCount = Math.max(0, siblingCount ?? 0)
    const safeBoundaryCount = Math.max(0, boundaryCount ?? 0)
    const startPage = Math.max(safeCurrentPage - safeSiblingCount, safeBoundaryCount + 1)
    const endPage = Math.min(safeCurrentPage + safeSiblingCount, totalPages - safeBoundaryCount)
    const startBoundary = Array.from({ length: safeBoundaryCount }, (_, i) => i + 1)
    const endBoundary = Array.from({ length: safeBoundaryCount }, (_, i) => totalPages - safeBoundaryCount + 1 + i)

    return getPaginationItems(
      totalPages,
      showFirstLast,
      showPrevNext,
      safeCurrentPage,
      startPage,
      endPage,
      startBoundary,
      endBoundary
    )
  }, [safeCurrentPage, totalPages, siblingCount, boundaryCount, showFirstLast, showPrevNext])

  if (totalPages <= 1) return null

  return (
    <Box tag="nav" tagAttrs={{ 'aria-label': 'Pagination', ...tagAttrs }} tagRef={tagRef} overflowX="auto" overflowY="hidden">
      <Segment>
        {paginationItems.map((item, index) => {
          const renderControl = ({
            active,
            disabled,
            iconName,
          }: {
            active?: boolean
            disabled?: boolean
            iconName?: IconName
          }) => {
            const button = (
              <Button
                tagAttrs={{ 'aria-current': active ? 'page' : undefined }}
                onClick={!hrefBuilder ? () => handleChange(item.page) : undefined}
                variant={variant}
                intent={intent}
                color={color}
                size={size}
                iconName={iconName}
                disabled={disabled}
                bold={active}
                selected={active}
                surface={active ? 'elevated' : undefined}
              >
                {!iconName ? item.page : undefined}
              </Button>
            )

            return hrefBuilder ? (
              <Link href={hrefBuilder(item.page)} onClick={() => handleChange(item.page)}>
                {button}
              </Link>
            ) : (
              button
            )
          }

          return (
            <Segment.Item
              key={
                item.type === 'page'
                  ? `page-${item.page}-${item.page === safeCurrentPage}`
                  : item.page !== undefined
                    ? `${item.type}-${item.page}`
                    : `${item.type}-${index}`
              }
            >
              {item.type === 'ellipsis' && (
                <Box
                  tagAttrs={{ 'aria-hidden': true }}
                  drawable
                  variant={variant}
                  intent={intent}
                  color={color}
                  disabled
                  blockSize={BUTTON_SIZE_CONFIG[size || 'md'].blockSize}
                  paddingInline={BUTTON_SIZE_CONFIG[size || 'md'].padding}
                >
                  <Flex tagAttrs={{ style: { blockSize: 'inherit' } }} alignItems="center">
                    <Icon name="ellipsis" />
                  </Flex>
                </Box>
              )}
              {item.type === 'page' && renderControl({ disabled, active: item.page === safeCurrentPage })}
              {item.type === 'prev' &&
                renderControl({
                  disabled: disabled || safeCurrentPage === 1,
                  iconName: 'chevron-left',
                })}
              {item.type === 'next' &&
                renderControl({
                  disabled: disabled || safeCurrentPage === totalPages,
                  iconName: 'chevron-right',
                })}
              {item.type === 'first' &&
                renderControl({
                  disabled: disabled || safeCurrentPage === 1,
                  iconName: 'chevrons-left',
                })}
              {item.type === 'last' &&
                renderControl({
                  disabled: disabled || safeCurrentPage === totalPages,
                  iconName: 'chevrons-right',
                })}
            </Segment.Item>
          )
        })}
      </Segment>
    </Box>
  )
}

Pagination.displayName = 'Pagination'
