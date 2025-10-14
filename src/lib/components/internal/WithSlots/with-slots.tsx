import { Children, Fragment, isValidElement, ReactNode, useLayoutEffect, useState } from 'react'

import { getLibMsg } from 'lib/helpers'

import { WithSlotsProps } from './definitions'

export const WithSlots = <SlotName extends string>({
  componentName,
  childrenToVerify,
  slotsConfig,
  someRequired,
  children,
}: WithSlotsProps<SlotName>) => {
  const [slots, setSlots] = useState<Record<SlotName, ReactNode[]> | null>(null)
  const [validNodes, setValidNodes] = useState<ReactNode[] | null>(null)

  useLayoutEffect(() => {
    if (!childrenToVerify) return

    const finalChildrenToVerify =
      (childrenToVerify as any).type === Fragment
        ? (childrenToVerify as any).props.children
        : childrenToVerify

    const slots = {} as Record<SlotName, ReactNode[]>
    const validNodes = [] as ReactNode[]

    slotsConfig.forEach(({ name }) => {
      slots[name] = []
    })

    Children.toArray(finalChildrenToVerify).forEach(child => {
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

    setSlots(slots)
    setValidNodes(validNodes)
  }, [childrenToVerify])

  useLayoutEffect(() => {
    if (slots && validNodes) {
      if (someRequired && !validNodes.length) {
        console.warn(getLibMsg(`${componentName} expects ${Object.keys(slots).join(' or ')} to be its child`))
      } else {
        slotsConfig.forEach(({ name, required }) => {
          if (required && !slots[name].length) {
            console.warn(getLibMsg(`${componentName} expects ${name} to be its child`))
          }
        })
      }
    }
  }, [slots, validNodes])

  if (!childrenToVerify || !slots || !validNodes) return null

  return children({ slots, validNodes })
}
