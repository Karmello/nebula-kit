import { Children, isValidElement, JSX, ReactNode } from 'react'

import { LIB_NAME, Slot } from 'lib/definitions'

type SlotsReturnObject = Partial<Record<Slot, ReactNode>>

export type WithSlotsProps = {
  children: (slots: SlotsReturnObject) => JSX.Element
  componentName: string
  slotNames: Slot[]
  childrenToVerify: ReactNode
}

export const WithSlots = ({ children, componentName, slotNames = [], childrenToVerify }: WithSlotsProps) => {
  const pickSlot = (slotName: string) =>
    Children.toArray(childrenToVerify).find(
      el => isValidElement(el) && (el.type as any).slotName === slotName
    )

  const getWarnMsg = (slotName: string) =>
    `[${LIB_NAME}]: ${componentName} expects ${componentName}.${slotName}`

  const slots: SlotsReturnObject = {}

  slotNames.forEach(slotName => {
    const slot = pickSlot(slotName)

    if (!slot) {
      console.warn(getWarnMsg(slotName))
    } else {
      slots[slotName] = slot
    }
  })

  return children(slots)
}
