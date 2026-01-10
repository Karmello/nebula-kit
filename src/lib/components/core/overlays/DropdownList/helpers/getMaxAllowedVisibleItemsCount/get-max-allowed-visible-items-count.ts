import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/core/controls/Button'

export const getMaxAllowedVisibleItemsCount = (
  size: ButtonSize | undefined,
  maxBlockSize: number | undefined
): number | undefined => {
  if (size === undefined || maxBlockSize === undefined) return

  const itemBlockSize = Number(BUTTON_SIZE_CONFIG[size].blockSize.replace('px', ''))

  return Math.floor(maxBlockSize / itemBlockSize)
}
