import { resolveLengthToken } from 'lib/helpers'

export const resolveSelectValues = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
}): { menuBlockSize: number; menuScrollingBlockSize: number; finalVisibleItemsCount: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const dividerSize = Number.parseFloat(resolveLengthToken('3xs'))

  // const menuBlockSize = finalVisibleItemsCount * optionBlockSize + (finalVisibleItemsCount - 1) * dividerSize
  // const menuScrollingBlockSize = itemsCount * optionBlockSize + (itemsCount - 1) * dividerSize

  const menuBlockSize = finalVisibleItemsCount * optionBlockSize
  const menuScrollingBlockSize = itemsCount * optionBlockSize

  return {
    menuBlockSize,
    menuScrollingBlockSize,
    finalVisibleItemsCount,
  }
}
