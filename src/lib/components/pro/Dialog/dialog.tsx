import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Button, Flex, Portal, Resize } from 'lib/components'
import { WithSlots, FocusTrap } from 'lib/components/internal'
import { useGlobalScrollLock, useCurrentTheme } from 'lib/hooks'
import { withPrefix } from 'lib/helpers'

import { DialogProvider } from './DialogProvider'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SIZE,
  DIALOG_INTENT,
  DIALOG_PADDING,
  DIALOG_RESIZE_DURATION,
  DIALOG_SIZE_MAP,
  DialogProps,
} from './definitions'

export const Dialog = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // own
  open,
  onClose,
  closeOnBackdropClick = DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  size = DEFAULT_DIALOG_SIZE,
}: DialogProps) => {
  const ref = useRef(null)
  const canAnimateRef = useRef(false)

  const { lock, unlock } = useGlobalScrollLock()
  const theme = useCurrentTheme()

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

  return (
    <WithSlots<'Dialog.Header' | 'Dialog.Content' | 'Dialog.Footer'>
      componentName="Dialog"
      childrenToVerify={children}
      slotsConfig={[{ name: 'Dialog.Header' }, { name: 'Dialog.Content', required: true }, { name: 'Dialog.Footer' }]}
    >
      {({ slotsByName }) => {
        return (
          <DialogProvider intent={DIALOG_INTENT} padding={DIALOG_PADDING}>
            <Portal>
              <Box
                tagAttrs={{
                  style: {
                    backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                    transition: canAnimateRef.current ? 'opacity 0.4s ease-out' : 'none',
                  },
                  onClick: () => {
                    if (closeOnBackdropClick) onClose?.()
                  },
                }}
                position="fixed"
                inset="0px"
                opacity={open ? '1' : '0'}
                pointerEvents={open ? 'auto' : 'none'}
                zIndex={1000}
              >
                <Flex
                  tagAttrs={{
                    style: { blockSize: '100%', inlineSize: '100%' },
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FocusTrap tagRef={tagRef || ref} active={open} onFocusEscape={onClose} disableEscapeOnOutsideClick>
                    <Resize
                      property="blockSize"
                      visible={open}
                      easing={open ? 'ease-out' : 'ease-in'}
                      duration={DIALOG_RESIZE_DURATION}
                    >
                      <Box
                        tag="dialog"
                        tagAttrs={{
                          ...tagAttrs,
                          className: classNames(withPrefix('dialog'), tagAttrs?.className),
                          role: 'dialog',
                          'aria-modal': true,
                          onClick: e => {
                            e.stopPropagation()
                          },
                        }}
                        tagRef={tagRef || ref}
                        drawable
                        variant="outline"
                        maxInlineSize="95dvw"
                        maxBlockSize="90dvh"
                        position="relative"
                        overflowY="auto"
                        intent="primary"
                        inlineSize={DIALOG_SIZE_MAP[size || 'md']}
                        borderRadius="var(--neb-border-radius)"
                      >
                        <Box drawable variant="solid" intent="neutral" borderRadius="0px">
                          {onClose ? (
                            <Box position="absolute" top="8px" right="8px">
                              <Button size="2xs" iconName="close" variant="outline" intent="tertiary" onClick={onClose} />
                            </Box>
                          ) : null}
                          {slotsByName['Dialog.Header']}
                          {slotsByName['Dialog.Content']}
                          {slotsByName['Dialog.Footer']}
                        </Box>
                      </Box>
                    </Resize>
                  </FocusTrap>
                </Flex>
              </Box>
            </Portal>
          </DialogProvider>
        )
      }}
    </WithSlots>
  )
}

Dialog.displayName = 'Dialog'
