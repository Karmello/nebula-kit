import { Children, isValidElement, JSX, ReactNode } from 'react'
import { sentenceCase } from 'change-case'

import { LIB_NAME } from 'lib/definitions'

type SlotType = 'header' | 'side' | 'main' | 'footer'
type SlotsReturnObject = Record<SlotType, ReactNode>

export type WithSlotsProps = {
  children: (slots: SlotsReturnObject) => JSX.Element
  componentName: string
  slotNames: SlotType[]
  childrenToVerify: ReactNode
}

export const WithSlots = ({ children, componentName, slotNames = [], childrenToVerify }: WithSlotsProps) => {
  const pickSlot = (slotName: string) =>
    Children.toArray(childrenToVerify).find(
      el => isValidElement(el) && (el.type as any).slotName === slotName
    )

  const getWarnMsg = (slotName: string) =>
    `[${LIB_NAME}]: ${componentName} expects ${componentName}.${sentenceCase(slotName)}`

  const slots: SlotsReturnObject = { header: null, side: null, main: null, footer: null }

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
