export const getNextActiveIndex = ({
  key,
  itemsCount,
  activeIndex,
  scrollTop,
  visibleItemsCount,
  itemHeight,
}: {
  key: 'ArrowDown' | 'ArrowUp'
  itemsCount: number
  activeIndex: number
  scrollTop: number
  visibleItemsCount: number
  itemHeight: number
}) => {
  const listHeight = visibleItemsCount * itemHeight

  const firstVisibleIndex = Math.floor(scrollTop / itemHeight)
  const lastVisibleIndex = Math.min(Math.ceil((scrollTop + listHeight) / itemHeight) - 1, itemsCount - 1)

  // ✅ first navigation from "no selection" uses current viewport
  if (activeIndex === -1) {
    return key === 'ArrowDown' ? firstVisibleIndex : lastVisibleIndex
  }

  if (key === 'ArrowDown') return Math.min(activeIndex + 1, itemsCount - 1)
  return Math.max(activeIndex - 1, 0)
}
