import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'
import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/core/controls/Button/definitions'

export const handleArrowNavigation = (
  key: 'ArrowDown' | 'ArrowUp',
  itemsCount: number,
  visibleItemsCount: number | undefined,
  size: ButtonSize,
  scrollTop: number,
  activeIndex: number
): { activeIndex: number; scrollTop: number } => {
  if (visibleItemsCount === undefined) return { activeIndex: -1, scrollTop: 0 }

  const itemSize =
    Number(BUTTON_SIZE_CONFIG[size].blockSize.replace('px', '')) + Number(BOX_BORDER_WIDTH.replace('px', ''))
  const listHeight = visibleItemsCount * itemSize

  let newIndex = activeIndex
  let newScrollTop = scrollTop

  const firstVisibleIndex = Math.floor(scrollTop / itemSize)
  const lastVisibleIndex = Math.min(Math.ceil((scrollTop + listHeight) / itemSize) - 1, itemsCount - 1)

  // first navigation from "no selection"
  if (activeIndex === -1) {
    newIndex = key === 'ArrowDown' ? firstVisibleIndex : lastVisibleIndex

    // if item is partially cut off, just fix scroll to make it fully visible (no flip)
    const itemTop = newIndex * itemSize
    const itemBottom = itemTop + itemSize

    if (itemTop < scrollTop) {
      newScrollTop = itemTop
    } else if (itemBottom > scrollTop + listHeight) {
      newScrollTop = itemBottom - listHeight
    }

    return {
      activeIndex: newIndex,
      scrollTop: Math.max(0, Math.min(newScrollTop, (itemsCount - visibleItemsCount) * itemSize)),
    }
  }

  // move within bounds
  if (key === 'ArrowDown' && activeIndex < itemsCount - 1) {
    newIndex = activeIndex + 1
  } else if (key === 'ArrowUp' && activeIndex > 0) {
    newIndex = activeIndex - 1
  }

  const itemTop = newIndex * itemSize
  const itemBottom = itemTop + itemSize

  // full-page scroll behavior when navigating
  if (key === 'ArrowDown' && itemBottom > scrollTop + listHeight) {
    // make the new item the first visible one
    newScrollTop = itemTop
  } else if (key === 'ArrowUp' && itemTop < scrollTop) {
    // make the new item the last visible one
    newScrollTop = itemBottom - listHeight
  }

  // clamp range
  newScrollTop = Math.max(0, Math.min(newScrollTop, (itemsCount - visibleItemsCount) * itemSize))

  return { activeIndex: newIndex, scrollTop: newScrollTop }
}
