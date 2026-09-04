import { cloneElement, RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import {
  autoUpdate,
  flip,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react'

import { WithSlots } from 'lib/components/shared'
import { useControlled } from 'lib/hooks'

import { DEFAULT_FLOATING_MODE, DEFAULT_FLOATING_PLACEMENT } from './constants'
import { focusTriggerChild } from './helpers'
import { FloatingProps } from './types'

export const Floating = ({
  children,
  mode = DEFAULT_FLOATING_MODE,
  placement = DEFAULT_FLOATING_PLACEMENT,
  offset,
  open,
  disabled,
  onOpenChange,
  onPlacementChange,
}: FloatingProps) => {
  const [internalOpen, setInternalOpen] = useControlled({
    value: open,
    defaultValue: false,
    onChange: onOpenChange,
  })

  const [internalPlacement, setInternalPlacement] = useControlled({
    value: placement,
    defaultValue: DEFAULT_FLOATING_PLACEMENT,
    onChange: onPlacementChange,
  })

  const triggerRef = useRef<HTMLSpanElement | null>(null)

  const {
    refs,
    floatingStyles,
    context,
    placement: floatingPlacement,
  } = useFloating({
    open: internalOpen,
    onOpenChange: setInternalOpen,
    placement,
    middleware: [flip(), shift(), floatingOffset(offset)],
    whileElementsMounted: autoUpdate,
  })

  useLayoutEffect(() => {
    setInternalPlacement(floatingPlacement)
  }, [floatingPlacement])

  useLayoutEffect(() => {
    refs.setReference(triggerRef.current)
  }, [])

  const hover = useHover(context, { enabled: !disabled && mode === 'hover' })
  const click = useClick(context, { enabled: !disabled && mode === 'click' })
  const dismiss = useDismiss(context, { outsidePress: true, escapeKey: true })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss])

  const isOpeningDownwards = internalPlacement?.includes('bottom')

  const previousOpenRef = useRef(internalOpen)

  useEffect(() => {
    const wasOpen = previousOpenRef.current
    if (wasOpen && !internalOpen) {
      focusTriggerChild(triggerRef)
    }
    previousOpenRef.current = internalOpen
  }, [internalOpen])

  useEffect(() => {
    if (!internalOpen) return

    const handleScroll = () => {
      setInternalOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [internalOpen])

  return (
    <WithSlots<'Floating.Trigger' | 'Floating.Content'>
      componentName="Floating"
      slotsConfig={[
        { name: 'Floating.Trigger', required: true },
        { name: 'Floating.Content', required: true },
      ]}
      someRequired
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const triggerSlot = slotsByName['Floating.Trigger'][0]
        const contentSlot = slotsByName['Floating.Content'][0]

        if (!triggerSlot || !contentSlot) return null

        return (
          <>
            {cloneElement(triggerSlot as any, {
              tagRef: triggerRef,
              tagAttrs: getReferenceProps(),
            })}
            {cloneElement(contentSlot as any, {
              tagRef: refs.setFloating as unknown as RefObject<HTMLSpanElement>,
              tagAttrs: {
                style: {
                  ...floatingStyles,
                },
                ...getFloatingProps(),
              },
              internalOpen,
              setInternalOpen,
              isOpeningDownwards,
            })}
          </>
        )
      }}
    </WithSlots>
  )
}

Floating.displayName = 'Floating'
