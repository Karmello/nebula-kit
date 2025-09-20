import { Children, isValidElement, ReactNode } from 'react'

import { getLibMsg } from 'lib/helpers'

import { WithSlotsProps } from './definitions'

export const WithSlots = <SlotName extends string>({
  componentName,
  childrenToVerify,
  slotsConfig,
  children,
}: WithSlotsProps<SlotName>) => {
  const getWarnMsg = (slotName: SlotName) =>
    getLibMsg(`${componentName} expects ${componentName}.${slotName} as a child`)

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
