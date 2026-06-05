import { cloneElement, RefObject, useLayoutEffect, useRef } from 'react'
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
import { FloatingProps } from './types'

export const Floating = ({
  children,
  mode = DEFAULT_FLOATING_MODE,
  placement = DEFAULT_FLOATING_PLACEMENT,
  offset,
  open,
  onOpenChange,
}: FloatingProps) => {
  const [internalOpen, setInternalOpen] = useControlled({
    value: open,
    defaultValue: false,
    onChange: onOpenChange,
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
    refs.setReference(triggerRef.current)
  }, [])

  const hover = useHover(context, { enabled: mode === 'hover' })
  const click = useClick(context, { enabled: mode === 'click' })
  const dismiss = useDismiss(context, { outsidePress: true, escapeKey: true })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss])

  const isOpeningDownwards = floatingPlacement.includes('bottom')

  return (
    <WithSlots<'Floating.Trigger' | 'Floating.Content'>
      componentName="Floating"
      slotsConfig={[
        { name: 'Floating.Trigger', required: true },
        { name: 'Floating.Content', required: true },
      ]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const triggerSlot = slotsByName['Floating.Trigger'][0]
        const contentSlot = slotsByName['Floating.Content'][0]

        return (
          <>
            {cloneElement(triggerSlot as any, {
              tagRef: triggerRef,
              tagAttrs: getReferenceProps({ style: { display: 'inline-block' } }),
            })}
            {cloneElement(contentSlot as any, {
              tagRef: refs.setFloating as unknown as RefObject<HTMLSpanElement>,
              tagAttrs: {
                style: {
                  ...floatingStyles,
                  zIndex: 'var(--neb-z-floating)',
                },
                ...getFloatingProps({
                  onKeyDown: e => {
                    if (e.key === 'Tab') setInternalOpen(false)
                  },
                }),
              },
              open: internalOpen,
              isOpeningDownwards,
            })}
          </>
        )
      }}
    </WithSlots>
  )
}

Floating.displayName = 'Floating'
