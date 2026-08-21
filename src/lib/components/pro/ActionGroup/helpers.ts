import { KeyboardEvent, ReactNode } from 'react'

import { ActionGroupProps } from './types'

const isItemDisabled = (itemSlots: ReactNode[], index: number) => {
  const slot = itemSlots[index] as any
  return !!slot?.props?.disabled
}

const getNextIndex = (currentIndex: number, itemsCount: number) => {
  return currentIndex === itemsCount - 1 ? 0 : currentIndex + 1
}

const getPreviousIndex = (currentIndex: number, itemsCount: number) => {
  return currentIndex === 0 ? itemsCount - 1 : currentIndex - 1
}

const getNextEnabledIndex = (itemSlots: ReactNode[], currentIndex: number) => {
  let index = currentIndex

  do {
    index = getNextIndex(index, itemSlots.length)

    if (!isItemDisabled(itemSlots, index)) {
      return index
    }
  } while (index !== currentIndex)

  return currentIndex
}

const getPreviousEnabledIndex = (itemSlots: ReactNode[], currentIndex: number) => {
  let index = currentIndex

  do {
    index = getPreviousIndex(index, itemSlots.length)

    if (!isItemDisabled(itemSlots, index)) {
      return index
    }
  } while (index !== currentIndex)

  return currentIndex
}

export const getTargetIndexFromKeyboardEvent = (
  e: KeyboardEvent<HTMLElement>,
  currentIndex: number,
  itemSlots: ReactNode[],
  direction: ActionGroupProps['direction']
): number | undefined => {
  switch (e.key) {
    case 'Home':
      return getNextEnabledIndex(itemSlots, itemSlots.length - 1)

    case 'End':
      return getPreviousEnabledIndex(itemSlots, 0)

    case 'ArrowRight':
      return direction === 'row' ? getNextEnabledIndex(itemSlots, currentIndex) : undefined

    case 'ArrowLeft':
      return direction === 'row' ? getPreviousEnabledIndex(itemSlots, currentIndex) : undefined

    case 'ArrowDown':
      return direction === 'column' ? getNextEnabledIndex(itemSlots, currentIndex) : undefined

    case 'ArrowUp':
      return direction === 'column' ? getPreviousEnabledIndex(itemSlots, currentIndex) : undefined

    default:
      return undefined
  }
}

export const getInitialActiveIndex = (itemSlots: ReactNode[]) =>
  itemSlots.findIndex(slot => !(slot as any)?.props?.disabled)
