export const resolveAutocompleteValues = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
}): { menuBlockSize: number; finalVisibleItemsCount: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const dividerSize = 2

  const menuBlockSize =
    finalVisibleItemsCount * optionBlockSize +
    (finalVisibleItemsCount - 1) * dividerSize +
    dividerSize

  return {
    menuBlockSize,
    finalVisibleItemsCount,
  }
}
