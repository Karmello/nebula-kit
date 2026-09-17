import { useEffect, useRef } from 'react'

import { Box } from 'lib/components/core/Box'
import { IconButton } from 'lib/components/core/IconButton'
import { Portal } from 'lib/components/pro/Portal'
import { useFocusTrap } from 'lib/components/pro/useFocusTrap'
import { useScale } from 'lib/components/pro/useScale'
import { useCurrentTheme, useGlobalScrollLock, useSlots } from 'lib/hooks'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SCALE,
  DIALOG_INTENT,
  DIALOG_PADDING,
  DIALOG_RESIZE_DURATION,
  DIALOG_SCALE_MAP,
} from './constants'
import { DialogProvider } from './providers/DialogProvider'
import { type DialogProps } from './types'

export const Dialog = ({
  // HtmlElem
  children,
  elemAttrs,
  elemRef,
  // own
  open,
  onClose,
  closeOnBackdropClick = DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  scale = DEFAULT_DIALOG_SCALE,
}: DialogProps) => {
  const ref = useRef(null)
  const canAnimateRef = useRef(false)
  const scaleRef = useRef<HTMLDivElement | null>(null)

  const { lock, unlock } = useGlobalScrollLock()
  const theme = useCurrentTheme()

  useFocusTrap({
    ref: elemRef || ref,
    active: open,
    onFocusEscape: onClose,
    disableEscapeOnOutsideClick: true,
  })

  useScale({
    ref: scaleRef,
    visible: open,
    easing: open ? 'ease-out' : 'ease-in',
    duration: DIALOG_RESIZE_DURATION,
  })

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      canAnimateRef.current = true
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!open) return
    lock()
    return () => {
      setTimeout(() => {
        unlock()
      }, DIALOG_RESIZE_DURATION)
    }
  }, [open])

  const slots = useSlots<'Dialog.Header' | 'Dialog.Content' | 'Dialog.Footer'>({
    componentName: 'Dialog',
    childrenToVerify: children,
    slotsConfig: [
      { name: 'Dialog.Header' },
      { name: 'Dialog.Content', required: true },
      { name: 'Dialog.Footer' },
    ],
  })

  if (!slots) return null

  const { slotsByName } = slots

  return (
    <DialogProvider intent={DIALOG_INTENT} padding={DIALOG_PADDING}>
      <Portal zIndex="var(--neb-z-dialog-portal)">
        <Box
          onClick={() => {
            if (closeOnBackdropClick) onClose?.()
          }}
          elemAttrs={{
            style: {
              backgroundColor:
                theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              transition: canAnimateRef.current ? 'opacity 0.4s ease-out' : 'none',
            },
          }}
          position="fixed"
          inset="0px"
          opacity={open ? '1' : '0'}
          pointerEvents={open ? 'auto' : 'none'}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box elemRef={scaleRef} display="inline-block">
            <Box
              elemTag="dialog"
              onClick={e => {
                e.stopPropagation()
              }}
              elemAttrs={{
                ...elemAttrs,
                role: 'dialog',
                'aria-modal': true,
              }}
              elemRef={elemRef || ref}
              drawable
              borderMode="filled"
              maxInlineSize="95dvw"
              maxBlockSize="90dvh"
              position="relative"
              overflowY="auto"
              intent="secondary"
              inlineSize={DIALOG_SCALE_MAP[scale]}
            >
              <Box drawable bgMode="filled" intent="neutral" borderRadius="0px">
                {onClose ? (
                  <Box position="absolute" top="8px" right="8px">
                    <IconButton
                      scale="xs"
                      iconName="close"
                      variant="outline"
                      intent="tertiary"
                      onClick={onClose}
                    />
                  </Box>
                ) : null}
                {slotsByName['Dialog.Header']}
                {slotsByName['Dialog.Content']}
                {slotsByName['Dialog.Footer']}
              </Box>
            </Box>
          </Box>
        </Box>
      </Portal>
    </DialogProvider>
  )
}

Dialog.displayName = 'Dialog'
