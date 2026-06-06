import { useEffect, useRef } from 'react'
import { FloatingPortal, useDismiss, useFloating, useInteractions } from '@floating-ui/react'
import classNames from 'classnames'
import { motion } from 'motion/react'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { useCurrentTheme, useGlobalScrollLock } from 'lib/hooks'
import { Box, Flex, IconButton } from 'lib/index.core'
import { DialogProps } from 'lib/index.pro'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SIZE,
  DIALOG_INTENT,
  DIALOG_PADDING,
  DIALOG_RESIZE_DURATION,
  DIALOG_SIZE_MAP,
} from './definitions'
import { DialogProvider } from './DialogProvider'

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
  const ref = useRef<HTMLDialogElement | null>(null)

  const finalRef = tagRef || ref

  const { lock, unlock } = useGlobalScrollLock()

  const theme = useCurrentTheme()

  useEffect(() => {
    if (!open) return
    lock()
    return () => {
      setTimeout(() => {
        unlock()
      }, DIALOG_RESIZE_DURATION)
    }
  }, [open])

  const { refs, context } = useFloating({
    open,
    onOpenChange: nextOpen => {
      if (!nextOpen) {
        onClose?.()
      }
    },
  })

  const dismiss = useDismiss(context, {
    outsidePress: closeOnBackdropClick,
    escapeKey: true,
  })

  const { getFloatingProps } = useInteractions([dismiss])

  return (
    <WithSlots<'Dialog.Header' | 'Dialog.Content' | 'Dialog.Footer'>
      componentName="Dialog"
      childrenToVerify={children}
      slotsConfig={[{ name: 'Dialog.Header' }, { name: 'Dialog.Content', required: true }, { name: 'Dialog.Footer' }]}
    >
      {({ slotsByName }) => {
        return (
          <DialogProvider intent={DIALOG_INTENT} padding={DIALOG_PADDING}>
            {open ? (
              <FloatingPortal>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{ position: 'fixed', inset: 0, zIndex: 1000 }}
                >
                  <Box
                    tagAttrs={{
                      style: { backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)' },
                      onClick: () => {
                        if (closeOnBackdropClick) {
                          onClose?.()
                        }
                      },
                    }}
                    position="fixed"
                    inset="0px"
                    pointerEvents={open ? 'auto' : 'none'}
                  >
                    <Flex blockSize="100%" inlineSize="100%" justifyContent="center" alignItems="center">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <Box tagRef={refs.setFloating as any} tagAttrs={getFloatingProps()}>
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
                            tagRef={finalRef}
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
                                  <IconButton size="2xs" iconName="close" variant="outline" intent="tertiary" onClick={onClose} />
                                </Box>
                              ) : null}

                              {slotsByName['Dialog.Header']}
                              {slotsByName['Dialog.Content']}
                              {slotsByName['Dialog.Footer']}
                            </Box>
                          </Box>
                        </Box>
                      </motion.div>
                    </Flex>
                  </Box>
                </motion.div>
              </FloatingPortal>
            ) : null}
          </DialogProvider>
        )
      }}
    </WithSlots>
  )
}

Dialog.displayName = 'Dialog'
