import { Children, isValidElement, ReactNode, useEffect, useMemo } from 'react'
import { Fragment } from 'react/jsx-runtime'

import { getLibMsg } from 'lib/helpers'

import { WithSlotsProps } from './types'

type ResolvedSlots<SlotName extends string> = {
  slotsByName: Record<SlotName, ReactNode[]>
  allValidSlots: ReactNode[]
  allNonSlots: ReactNode[]
}

export const WithSlots = <SlotName extends string>({
  componentName,
  childrenToVerify,
  slotsConfig,
  someRequired,
  children,
}: WithSlotsProps<SlotName>) => {
  const resolved = useMemo<ResolvedSlots<SlotName> | null>(() => {
    if (!childrenToVerify) return null

    const finalChildrenToVerify =
      (childrenToVerify as any)?.type === Fragment
        ? (childrenToVerify as any)?.props?.children
        : childrenToVerify

    const slotsByName = {} as Record<SlotName, ReactNode[]>
    const allValidSlots: ReactNode[] = []
    const allNonSlots: ReactNode[] = []

    // IMPORTANT:
    // if at least one required slot exists, the structure becomes strict:
    // - only registered slot elements are considered valid children
    // - plain text and unknown nodes are ignored
    //
    // if there are no required slots, slots act only as optional enhancements:
    // - arbitrary content is allowed alongside recognized slots
    // - non-slot nodes are preserved in allNonSlots
    const hasRequiredSlots = slotsConfig.some(slot => slot.required)

    for (const { name } of slotsConfig) {
      slotsByName[name] = []
    }

    // IMPORTANT:
    // - do not use Children.toArray here (it normalizes keys and can change identity semantics)
    // - do not clone elements
    // - preserve child element references as-is
    Children.forEach(finalChildrenToVerify as any, child => {
      // allow plain text / primitive children only when the slot system is non-strict
      if (!isValidElement(child)) {
        if (!hasRequiredSlots) {
          allNonSlots.push(child)
        }

        return
      }

      const displayName: string | undefined = (child.type as any)?.displayName

      // non-slot React elements are allowed only in optional-only slot systems
      if (!displayName) {
        if (!hasRequiredSlots) {
          allNonSlots.push(child)
        }

        return
      }

      const slotConfig = slotsConfig.find(c => c.name === displayName)

      // unknown slot element
      if (!slotConfig) {
        if (!hasRequiredSlots) {
          allNonSlots.push(child)
        }

        return
      }

      if (slotConfig.allowMultiple) {
        slotsByName[slotConfig.name].push(child)
      } else {
        slotsByName[slotConfig.name] = [child]
      }

      allValidSlots.push(child)
    })

    return { slotsByName, allValidSlots, allNonSlots }
  }, [childrenToVerify, slotsConfig])

  useEffect(() => {
    if (!resolved) return

    const { slotsByName, allValidSlots } = resolved

    if (someRequired && !allValidSlots.length) {
      console.warn(
        getLibMsg(
          `${componentName} expects ${Object.keys(slotsByName).join(' or ')} to be its child`
        )
      )
      return
    }

    for (const { name, required } of slotsConfig) {
      if (required && !slotsByName[name].length) {
        console.warn(getLibMsg(`${componentName} expects ${name} to be its child`))
      }
    }
  }, [resolved, someRequired, componentName, slotsConfig])

  if (!resolved) return null

  return children(resolved)
}
