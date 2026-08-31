import { useCallback, useMemo } from 'react'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { type IconName } from 'lib/components/core/Icon/types'
import { Link } from 'lib/components/core/Link'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP } from 'lib/constants'

import {
  DEFAULT_PAGINATION_BOUNDARY_COUNT,
  DEFAULT_PAGINATION_INTENT,
  DEFAULT_PAGINATION_SCALE,
  DEFAULT_PAGINATION_SHOW_FIRST_LAST,
  DEFAULT_PAGINATION_SHOW_PREV_NEXT,
  DEFAULT_PAGINATION_SIBLING_COUNT,
  DEFAULT_PAGINATION_VARIANT,
} from './constants'
import { getPaginationItems } from './helpers'
import { PaginationProps } from './types'

export const Pagination = ({
  // Box
  tagAttrs,
  tagRef,
  color,
  disabled,
  intent = DEFAULT_PAGINATION_INTENT,
  variant = DEFAULT_PAGINATION_VARIANT,
  // own
  scale = DEFAULT_PAGINATION_SCALE,
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
    const endBoundary = Array.from(
      { length: safeBoundaryCount },
      (_, i) => totalPages - safeBoundaryCount + 1 + i
    )

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
    <Box
      tag="nav"
      tagAttrs={{ 'aria-label': 'Pagination', ...tagAttrs }}
      tagRef={tagRef}
      display="flex"
      flexDirection="row"
      flexWrap="nowrap"
      overflowX="auto"
      overflowY="hidden"
    >
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
          const control = (
            <Box
              tag="button"
              interactive
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              tagAttrs={{
                type: 'button',
                'aria-current': active ? 'page' : undefined,
                onClick: () => handleChange(item.page),
              }}
              disabled={disabled}
              // variant={variant}
              intent={intent}
              color={color}
              surfaceDepth={active ? 'raised' : undefined}
              bgRole={active ? 'selection' : undefined}
              ripple
              blockSize={CONTROL_SCALE_MAP[scale].blockSize}
              paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
            >
              {iconName ? (
                <Icon name={iconName} size={CONTROL_SCALE_MAP[scale].fontSize} />
              ) : (
                <Text
                  bold={active}
                  fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                  lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                >
                  {item.page}
                </Text>
              )}
            </Box>
          )

          return hrefBuilder ? (
            <Link href={hrefBuilder(item.page)} onClick={() => handleChange(item.page)}>
              {control}
            </Link>
          ) : (
            control
          )
        }

        return (
          <Box
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
                // variant={variant}
                intent={intent}
                color={color}
                disabled
                blockSize={CONTROL_SCALE_MAP[scale || 'md'].blockSize}
                paddingInline={CONTROL_SCALE_MAP[scale || 'md'].paddingInline}
              >
                <Box
                  display="flex"
                  tagAttrs={{ style: { blockSize: 'inherit' } }}
                  alignItems="center"
                >
                  <Icon name="ellipsis" />
                </Box>
              </Box>
            )}
            {item.type === 'page' &&
              renderControl({ disabled, active: item.page === safeCurrentPage })}
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
          </Box>
        )
      })}
    </Box>
  )
}

Pagination.displayName = 'Pagination'
