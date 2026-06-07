import { resolveLengthToken } from 'lib/helpers'

export const resolveSelectValues = ({
  visibleItemsCount,
  optionBlockSize,
  itemsCount,
}: {
  visibleItemsCount: number
  optionBlockSize: number
  itemsCount: number
}): { menuBlockSize: number; finalVisibleItemsCount: number } => {
  const finalVisibleItemsCount = Math.min(itemsCount, visibleItemsCount)

  const dividerSize = Number.parseFloat(resolveLengthToken('3xs'))

  const menuBlockSize = finalVisibleItemsCount * optionBlockSize + (finalVisibleItemsCount - 1) * dividerSize + dividerSize

  return {
    menuBlockSize,
    finalVisibleItemsCount,
  }
}
