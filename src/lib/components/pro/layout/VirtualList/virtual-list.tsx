import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { Box } from 'lib/components'

import {
  DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN,
  DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX,
  VirtualListProps,
} from './definitions'

export const VirtualList = <T,>({
  // Box
  tagRef,
  tagAttrs,
  intent,
  color,
  // own
  items,
  itemHeight,
  visibleItemsCount,
  renderItem,
  scrollToIndex = DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX,
  scrollAlign = DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN,
  overscan,
}: VirtualListProps<T>) => {
  const internalRef = useRef<HTMLDivElement | null>(null)
  const resolvedRef = tagRef || internalRef

  const [scrollTop, setScrollTop] = useState<number>(0)

  const viewportHeight = visibleItemsCount * itemHeight
  const totalHeight = items.length * itemHeight

  const resolvedOverscan = overscan === undefined ? visibleItemsCount : overscan

  useLayoutEffect(() => {
    const el = resolvedRef.current
    if (!el || scrollToIndex === undefined) return

    let baseIndex = scrollToIndex

    if (scrollAlign === 'center') {
      baseIndex -= Math.floor((visibleItemsCount - 1) / 2)
    } else if (scrollAlign === 'end') {
      baseIndex -= visibleItemsCount - 1
    }

    const maxScrollTop = Math.max(0, (items.length - visibleItemsCount) * itemHeight)
    const nextScrollTop = Math.max(0, Math.min(baseIndex * itemHeight, maxScrollTop))

    el.scrollTop = nextScrollTop
    setScrollTop(nextScrollTop)
  }, [scrollToIndex, scrollAlign, visibleItemsCount, itemHeight, items.length])

  const { startIndex, endIndex, offsetY } = useMemo(() => {
    let start = Math.floor(scrollTop / itemHeight) - resolvedOverscan
    let end = start + visibleItemsCount + resolvedOverscan * 2

    start = Math.max(0, start)
    end = Math.min(items.length, end)

    return {
      startIndex: start,
      endIndex: end,
      offsetY: start * itemHeight,
    }
  }, [scrollTop, itemHeight, visibleItemsCount, resolvedOverscan, items.length])

  const visibleItems = items.slice(startIndex, endIndex)

  return (
    <Box
      tagRef={resolvedRef}
      tagAttrs={{
        ...tagAttrs,
        onScroll: e => {
          const next = e.currentTarget.scrollTop
          setScrollTop(next)
          tagAttrs?.onScroll?.(e)
        },
      }}
      drawable
      variant="solid"
      intent={intent}
      color={color}
      blockSize={`${viewportHeight}px`}
      overflowY="auto"
      overflowX="hidden"
      borderRadius="0px"
    >
      <Box position="relative" blockSize={`${totalHeight}px`}>
        <Box
          tagAttrs={{
            style: { transform: `translateY(${offsetY}px)` },
          }}
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
        >
          {visibleItems.map((item, i) => renderItem(item, startIndex + i))}
        </Box>
      </Box>
    </Box>
  )
}

VirtualList.displayName = 'VirtualList'
