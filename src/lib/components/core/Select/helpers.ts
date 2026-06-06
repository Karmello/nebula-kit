import { DEFAULT_ACTION_GROUP_GAP } from 'lib/components/pro/ActionGroup'
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

  const dividerSize = Number.parseFloat(resolveLengthToken(DEFAULT_ACTION_GROUP_GAP || '3xs'))

  const menuBlockSize = finalVisibleItemsCount * optionBlockSize + (finalVisibleItemsCount - 1) * dividerSize + dividerSize

  return {
    menuBlockSize,
    finalVisibleItemsCount,
  }
}
