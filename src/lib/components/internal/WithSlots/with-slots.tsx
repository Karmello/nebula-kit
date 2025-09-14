import { Children, isValidElement, JSX, ReactNode } from 'react'

import { LIB_NAME } from 'lib/definitions'

export type WithSlotsProps<SlotName extends string> = {
  componentName: string
  childrenToVerify: ReactNode
  slotsConfig: { name: SlotName; required?: boolean; allowMultiple?: boolean }[]
  children: (slots: Record<SlotName, ReactNode>) => JSX.Element
}

export const WithSlots = <SlotName extends string>({
  componentName,
  childrenToVerify,
  slotsConfig,
  children,
}: WithSlotsProps<SlotName>) => {
  const getWarnMsg = (slotName: SlotName) =>
    `[${LIB_NAME}]: ${componentName} expects ${componentName}.${slotName} as a child`

  const validChildren: Record<SlotName, ReactNode[]> = {} as never
  slotsConfig.forEach(({ name }) => {
    validChildren[name] = []
  })

  Children.toArray(childrenToVerify).forEach(child => {
    if (!isValidElement(child)) return

    const slotName: string = (child.type as any).slotName
    if (!slotName) return

    const slotConfig = slotsConfig.find(c => c.name === slotName)
    if (!slotConfig) return

    if (slotConfig.allowMultiple) {
      validChildren[slotConfig.name].push(child)
    } else {
      validChildren[slotConfig.name] = [child]
    }
  })

  slotsConfig.forEach(({ name, required }) => {
    if (required && !validChildren[name].length) {
      console.warn(getWarnMsg(name))
    }
  })

  return children(validChildren)
}
