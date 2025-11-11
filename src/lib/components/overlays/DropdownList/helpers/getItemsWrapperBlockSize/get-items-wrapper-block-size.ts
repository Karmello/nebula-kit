import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/controls/Button/definitions'

export const getItemsWrapperBlockSize = (
  visibleItemsCount: number,
  size: ButtonSize,
  borderWidth: number
) => {
  const allItemsBlockSize = visibleItemsCount * BUTTON_SIZE_CONFIG[size].blockSize
  const allItemsBorderWidth = visibleItemsCount * borderWidth
  return `${allItemsBlockSize + allItemsBorderWidth}px`
}
