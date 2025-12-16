import { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Button, Flex, Portal, FocusTrap, Resize } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { useNebkitStore } from 'lib/state'
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

  const { theme } = useNebkitStore()

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      setTimeout(() => {
        document.body.style.overflow = overflow
      }, DIALOG_RESIZE_DURATION)
    }
  }, [open])

  return (
    <WithSlots<'Dialog.Header' | 'Dialog.Content' | 'Dialog.Footer'>
      componentName="Dialog"
      childrenToVerify={children}
      slotsConfig={[
        { name: 'Dialog.Header' },
        { name: 'Dialog.Content', required: true },
        { name: 'Dialog.Footer' },
      ]}
    >
      {({ slotsByName }) => {
        return (
          <DialogProvider intent={DIALOG_INTENT} padding={DIALOG_PADDING}>
            <Portal>
              <Box
                tagAttrs={{
                  style: {
                    pointerEvents: open ? 'auto' : 'none',
                    opacity: open ? 1 : 0,
                    backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                    transition: 'opacity 0.4s ease-out',
                  },
                  onClick: () => {
                    if (closeOnBackdropClick) onClose?.()
                  },
                }}
                position="fixed"
                top="0px"
                right="0px"
                bottom="0px"
                left="0px"
                zIndex={1000}
              >
                <Flex
                  tagAttrs={{
                    style: { blockSize: '100%', inlineSize: '100%' },
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FocusTrap
                    tagRef={tagRef || ref}
                    active={open}
                    onFocusEscape={onClose}
                    disableEscapeOnOutsideClick
                  >
                    <Resize
                      property="inlineSize"
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
                        }}
                        tagRef={tagRef || ref}
                        drawable
                        variant="outline"
                        maxInlineSize="100dvw"
                        maxBlockSize="90dvh"
                        position="relative"
                        overflowY="auto"
                        intent="inverse"
                        inlineSize={DIALOG_SIZE_MAP[size || 'md']}
                      >
                        {onClose ? (
                          <Box position="absolute" top="5px" right="5px">
                            <Button
                              tagAttrs={{ onClick: onClose }}
                              size="xs"
                              iconName="close"
                              intent="muted"
                            />
                          </Box>
                        ) : null}
                        {slotsByName['Dialog.Header']}
                        {slotsByName['Dialog.Content']}
                        {slotsByName['Dialog.Footer']}
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
