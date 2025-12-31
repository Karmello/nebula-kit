import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box'
import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/core/controls/Button'

export const getItemsWrapperBlockSize = (visibleItemsCount: number, size: ButtonSize) => {
  const allItemsBlockSize = visibleItemsCount * Number(BUTTON_SIZE_CONFIG[size].blockSize.replace('px', ''))

  const allItemsBorderWidth = visibleItemsCount * Number(BOX_BORDER_WIDTH.replace('px', ''))

  return `${allItemsBlockSize + allItemsBorderWidth}px`
}
