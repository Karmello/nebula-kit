import { Children, isValidElement, JSX, ReactNode } from 'react'
import { camelCase } from 'lodash'

import { LIB_NAME, Slot } from 'lib/definitions'

export type SlotsReturnObject = Partial<Record<Slot, ReactNode | null>>

type SlotType = 'required' | 'optional'

export type WithSlotsProps = {
  children: (slots: SlotsReturnObject) => JSX.Element
  componentName: string
  header?: SlotType
  side?: SlotType
  sideMobile?: SlotType
  sideDesktop?: SlotType
  main?: SlotType
  footer?: SlotType
  childrenToVerify: ReactNode
}

export const WithSlots = (props: WithSlotsProps) => {
  const pickSlot = (slotName: Slot) =>
    Children.toArray(props.childrenToVerify).find(
      el => isValidElement(el) && (el.type as any).slotName === slotName
    )

  const getWarnMsg = (slotName: string) =>
    `[${LIB_NAME}]: ${props.componentName} expects ${props.componentName}.${slotName}`

  const slots: SlotsReturnObject = {
    Header: null,
    Side: null,
    SideMobile: null,
    SideDesktop: null,
    Main: null,
    Footer: null,
  }

  Object.keys(slots).forEach((slotName: Slot) => {
    const slot = pickSlot(slotName)

    if (slot) {
      slots[slotName] = slot
    } else if ((props[camelCase(slotName) as never] as SlotType) === 'required') {
      console.warn(getWarnMsg(slotName))
    }
  })

  return props.children(slots)
}
