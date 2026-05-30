import { resolveLengthToken } from 'lib/helpers'

export const resolveSelectValues = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
  removeSingleDivider,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
  removeSingleDivider: boolean
}): { menuBlockSize: number; menuScrollingBlockSize: number; finalVisibleItemsCount: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const countOffset = removeSingleDivider ? 1 : 0
  const dividerSize = Number.parseFloat(resolveLengthToken('3xs'))

  const menuBlockSize = finalVisibleItemsCount * optionBlockSize + (finalVisibleItemsCount - countOffset) * dividerSize
  const menuScrollingBlockSize = itemsCount * optionBlockSize + (itemsCount - countOffset) * dividerSize

  return {
    menuBlockSize,
    menuScrollingBlockSize,
    finalVisibleItemsCount,
  }
}
