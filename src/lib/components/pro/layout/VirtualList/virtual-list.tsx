import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { Box } from 'lib/components'

import { DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN, DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX, VirtualListProps } from './definitions'

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
  ensureVisibleIndex,
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

    if (el.scrollTop !== nextScrollTop) {
      el.scrollTop = nextScrollTop
      setScrollTop(nextScrollTop)
    }
  }, [scrollToIndex, scrollAlign, visibleItemsCount, itemHeight, items.length])

  useLayoutEffect(() => {
    if (ensureVisibleIndex === undefined) return

    const el = resolvedRef.current
    if (!el) return

    const listHeight = visibleItemsCount * itemHeight

    const itemTop = ensureVisibleIndex * itemHeight
    const itemBottom = itemTop + itemHeight

    const viewportTop = el.scrollTop
    const viewportBottom = viewportTop + listHeight

    let nextScrollTop = viewportTop

    if (itemBottom > viewportBottom) {
      nextScrollTop = itemTop // new item becomes first visible
    } else if (itemTop < viewportTop) {
      nextScrollTop = itemBottom - listHeight // new item becomes last visible
    }

    const maxScrollTop = Math.max(0, (items.length - visibleItemsCount) * itemHeight)
    nextScrollTop = Math.max(0, Math.min(nextScrollTop, maxScrollTop))

    if (nextScrollTop !== viewportTop) {
      el.scrollTop = nextScrollTop
      setScrollTop(nextScrollTop)
    }
  }, [ensureVisibleIndex, visibleItemsCount, itemHeight, items.length])

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
      <Box blockSize={`${totalHeight}px`}>
        <Box
          tagAttrs={{
            style: { transform: `translateY(${offsetY}px)` },
          }}
        >
          {visibleItems.map((item, i) => (
            <Box key={i}>{renderItem(item, startIndex + i)}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

VirtualList.displayName = 'VirtualList'
