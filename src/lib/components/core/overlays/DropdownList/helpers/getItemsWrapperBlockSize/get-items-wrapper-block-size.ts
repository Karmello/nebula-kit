import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'
import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/core/controls/Button/definitions'

export const getItemsWrapperBlockSize = (visibleItemsCount: number, size: ButtonSize) => {
  const allItemsBlockSize = visibleItemsCount * BUTTON_SIZE_CONFIG[size].blockSize
  const allItemsBorderWidth = visibleItemsCount * BOX_BORDER_WIDTH
  return `${allItemsBlockSize + allItemsBorderWidth}px`
}
