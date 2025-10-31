import { BUTTON_SIZE_CONFIG, ButtonSize } from 'lib/components/controls/Button/definitions'

import { DropdownListProps } from '../../definitions'

export const getInitScrollTop = (
  visibleItemsCount: number,
  size: ButtonSize,
  borderWidth: number,
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
    return baseIndex * (BUTTON_SIZE_CONFIG[size].blockSize + borderWidth)
  }
}
