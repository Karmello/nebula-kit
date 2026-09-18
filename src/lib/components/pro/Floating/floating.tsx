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

import { useControlledValue, useSlots } from 'lib/hooks'

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
  const [internalOpen, setInternalOpen] = useControlledValue({
    value: open,
    defaultValue: false,
    onChange: onOpenChange,
  })

  const [internalPlacement, setInternalPlacement] = useControlledValue({
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

  const slots = useSlots<'Floating.Trigger' | 'Floating.Content'>({
    componentName: 'Floating',
    slotsConfig: [
      { name: 'Floating.Trigger', required: true },
      { name: 'Floating.Content', required: true },
    ],
    someRequired: true,
    childrenToVerify: children,
  })

  if (!slots) return null

  const triggerSlot = slots.slotsByName['Floating.Trigger'][0]
  const contentSlot = slots.slotsByName['Floating.Content'][0]

  if (!triggerSlot || !contentSlot) return null

  return (
    <>
      {cloneElement(triggerSlot as any, {
        elemRef: triggerRef,
        elemAttrs: getReferenceProps(),
      })}
      {cloneElement(contentSlot as any, {
        elemRef: refs.setFloating as unknown as RefObject<HTMLSpanElement>,
        elemAttrs: {
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
}

Floating.displayName = 'Floating'
