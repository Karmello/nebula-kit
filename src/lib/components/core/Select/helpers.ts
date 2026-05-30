import { resolveLengthToken } from 'lib/helpers'

export const resolveBlockSizes = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
}): { menuBlockSize: number; menuScrollingBlockSize: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const menuBlockSize =
    finalVisibleItemsCount * optionBlockSize + (finalVisibleItemsCount - 1) * Number.parseFloat(resolveLengthToken('3xs'))
  const menuScrollingBlockSize = itemsCount * optionBlockSize + (itemsCount - 1) * Number.parseFloat(resolveLengthToken('3xs'))

  return {
    menuBlockSize,
    menuScrollingBlockSize,
  }
}
