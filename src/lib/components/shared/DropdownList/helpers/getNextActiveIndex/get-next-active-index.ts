export const getNextActiveIndex = ({
  key,
  itemsCount,
  activeIndex,
  scrollTop,
  visibleItemsCount,
  itemBlockSize,
}: {
  key: 'ArrowDown' | 'ArrowUp'
  itemsCount: number
  activeIndex: number
  scrollTop: number
  visibleItemsCount: number
  itemBlockSize: number
}) => {
  const listHeight = visibleItemsCount * itemBlockSize

  const firstVisibleIndex = Math.floor(scrollTop / itemBlockSize)
  const lastVisibleIndex = Math.min(Math.ceil((scrollTop + listHeight) / itemBlockSize) - 1, itemsCount - 1)

  // ✅ first navigation from "no selection" uses current viewport
  if (activeIndex === -1) {
    return key === 'ArrowDown' ? firstVisibleIndex : lastVisibleIndex
  }

  if (key === 'ArrowDown') return Math.min(activeIndex + 1, itemsCount - 1)
  return Math.max(activeIndex - 1, 0)
}
