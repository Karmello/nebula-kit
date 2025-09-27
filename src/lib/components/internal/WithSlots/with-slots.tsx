import { Children, isValidElement, ReactNode } from 'react'

import { getLibMsg } from 'lib/helpers'

import { WithSlotsProps } from './definitions'

export const WithSlots = <SlotName extends string>({
  componentName,
  childrenToVerify,
  slotsConfig,
  someRequired,
  children,
}: WithSlotsProps<SlotName>) => {
  if (!childrenToVerify) return null

  const slots: Record<SlotName, ReactNode[]> = {} as never
  const validNodes: ReactNode[] = []

  slotsConfig.forEach(({ name }) => {
    slots[name] = []
  })

  Children.toArray(childrenToVerify).forEach(child => {
    if (!isValidElement(child)) return

    const displayName: string = (child.type as any).displayName
    if (!displayName) return

    const slotConfig = slotsConfig.find(c => c.name === displayName)
    if (!slotConfig) return

    if (slotConfig.allowMultiple) {
      slots[slotConfig.name].push(child)
    } else {
      slots[slotConfig.name] = [child]
    }

    validNodes.push(child)
  })

  if (someRequired && !validNodes.length) {
    console.warn(getLibMsg(`${componentName} expects ${Object.keys(slots).join(' or ')} to be its child`))
  } else {
    slotsConfig.forEach(({ name, required }) => {
      if (required && !slots[name].length) {
        console.warn(getLibMsg(`${componentName} expects ${name} to be its child`))
      }
    })
  }

  return children({ slots, validNodes })
}
