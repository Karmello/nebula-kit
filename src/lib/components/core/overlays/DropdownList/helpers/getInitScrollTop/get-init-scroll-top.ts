import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/core/controls/Button/definitions'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import { DropdownListProps } from '../../definitions'

export const getInitScrollTop = (
  visibleItemsCount: number,
  size: ButtonSize,
  scrollToIndex: number,
  scrollAlign: DropdownListProps['scrollAlign']
): number | undefined => {
  let baseIndex = scrollToIndex

  if (scrollAlign === 'center') {
    baseIndex -= (visibleItemsCount - 1) / 2
  } else if (scrollAlign === 'end') {
    baseIndex -= visibleItemsCount - 1
  }

  if (baseIndex >= 0) {
    return baseIndex * (BUTTON_SIZE_CONFIG[size].blockSize + BOX_BORDER_WIDTH)
  }
}
