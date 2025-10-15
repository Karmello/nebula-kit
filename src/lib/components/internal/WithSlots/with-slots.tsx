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
  const [slotsByName, setSlotsByName] = useState<Record<SlotName, ReactNode[]> | null>(null)
  const [allValidSlots, setAllValidSlots] = useState<ReactNode[] | null>(null)
  const [allNonSlots, setAllNonSlots] = useState<ReactNode[] | null>(null)

  useLayoutEffect(() => {
    if (!childrenToVerify) return

    const finalChildrenToVerify =
      (childrenToVerify as any).type === Fragment
        ? (childrenToVerify as any).props.children
        : childrenToVerify

    const slotsByName = {} as Record<SlotName, ReactNode[]>
    const allValidSlots = [] as ReactNode[]
    const allNonSlots = [] as ReactNode[]

    slotsConfig.forEach(({ name }) => {
      slotsByName[name] = []
    })

    Children.toArray(finalChildrenToVerify).forEach(child => {
      if (!isValidElement(child)) return

      const displayName: string = (child.type as any).displayName
      if (!displayName) {
        allNonSlots.push(child)
        return
      }

      const slotConfig = slotsConfig.find(c => c.name === displayName)
      if (!slotConfig) {
        allNonSlots.push(child)
        return
      }

      if (slotConfig.allowMultiple) {
        slotsByName[slotConfig.name].push(child)
      } else {
        slotsByName[slotConfig.name] = [child]
      }

      allValidSlots.push(child)
    })

    setSlotsByName(slotsByName)
    setAllValidSlots(allValidSlots)
    setAllNonSlots(allNonSlots)
  }, [childrenToVerify])

  useLayoutEffect(() => {
    if (slotsByName && allValidSlots) {
      if (someRequired && !allValidSlots.length) {
        console.warn(
          getLibMsg(`${componentName} expects ${Object.keys(slotsByName).join(' or ')} to be its child`)
        )
      } else {
        slotsConfig.forEach(({ name, required }) => {
          if (required && !slotsByName[name].length) {
            console.warn(getLibMsg(`${componentName} expects ${name} to be its child`))
          }
        })
      }
    }
  }, [slotsByName, allValidSlots])

  if (!childrenToVerify || !slotsByName || !allValidSlots) return null

  return children({ slotsByName, allValidSlots, allNonSlots })
}
