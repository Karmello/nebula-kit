import { useRef } from 'react'
import classNames from 'classnames'

import { Box, Button, Flex, Portal } from 'lib/components'
import { WithSlots, FocusTrap } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SIZE,
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

  if (!open) {
    return null
  }

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
          <Portal>
            <Box
              tagAttrs={{
                onClick: () => {
                  if (closeOnBackdropClick) onClose?.()
                },
              }}
              position="fixed"
              top={0}
              right={0}
              bottom={0}
              left={0}
              zIndex={1000}
            >
              <Flex
                tagAttrs={{
                  style: { blockSize: '100%', inlineSize: '100%' },
                }}
                justifyContent="center"
                alignItems="center"
              >
                <FocusTrap tagRef={tagRef || ref} active={open} onClose={onClose}>
                  <Box
                    tag="dialog"
                    tagAttrs={{
                      ...tagAttrs,
                      className: classNames(withPrefix('dialog'), tagAttrs?.className),
                      role: 'dialog',
                      'aria-modal': true,
                    }}
                    tagRef={tagRef || ref}
                    position="relative"
                    variant="outline"
                    intent="primary"
                    inlineSize={DIALOG_SIZE_MAP[size]}
                    maxBlockSize="90dvh"
                    overflowY="auto"
                  >
                    {onClose ? (
                      <Box position="absolute" top={0} right={0}>
                        <Button tagAttrs={{ onClick: onClose }} size="xs" iconName="close" />
                      </Box>
                    ) : null}
                    {slotsByName['Dialog.Header']}
                    {slotsByName['Dialog.Content']}
                    {slotsByName['Dialog.Footer']}
                  </Box>
                </FocusTrap>
              </Flex>
            </Box>
          </Portal>
        )
      }}
    </WithSlots>
  )
}

Dialog.displayName = 'Dialog'
