import { useCallback, useRef, useState } from 'react'

import { Box, Button, Callout, Flex, Slide } from 'lib/components'
import { CALLOUT_CONFIG } from 'lib/components/core/feedback/Callout'

import {
  UseSnackbarShowArgs,
  SnackbarProps,
  DEFAULT_SNACKBAR_PLACEMENT,
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_INLINE_SIZE,
} from './definitions'

import { SnackbarProvider } from './SnackbarProvider'

export const Snackbar = ({
  // Box
  inlineSize = DEFAULT_SNACKBAR_INLINE_SIZE,
  // own
  children,
  placement = DEFAULT_SNACKBAR_PLACEMENT,
  autoCloseDelay = DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  closeOnOutsideClick = DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
}: SnackbarProps) => {
  const [snackbar, setSnackbar] = useState<UseSnackbarShowArgs | null>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  const finalPlacement = snackbar?.placement || placement || 'bottom-right'

  return (
    <SnackbarProvider
      rootRef={rootRef}
      visible={visible}
      setVisible={setVisible}
      setSnackbar={setSnackbar}
      autoCloseDelay={autoCloseDelay}
      closeOnOutsideClick={closeOnOutsideClick}
    >
      <Flex tagRef={rootRef} justifyContent="center">
        <Box
          position="fixed"
          top={finalPlacement.includes('top') ? '0px' : 'unset'}
          bottom={finalPlacement.includes('bottom') ? '0px' : 'unset'}
          left={finalPlacement.includes('left') ? '0px' : 'unset'}
          right={finalPlacement.includes('right') ? '0px' : 'unset'}
          pointerEvents={!visible ? 'none' : undefined}
          zIndex={30}
        >
          <Slide from={finalPlacement.split('-')[0] as never} visible={visible} easing={visible ? 'ease-out' : 'ease-in'}>
            <Box
              key={snackbar?.status}
              position="relative"
              padding="10px"
              inlineSize={inlineSize}
              maxInlineSize="calc(100vw - 10px)"
            >
              <Box position="absolute" top="15px" right="15px">
                <Button
                  tagAttrs={{ onClick: handleClose }}
                  iconName="close"
                  size="xs"
                  variant="solid"
                  intent="primary"
                  color={CALLOUT_CONFIG[snackbar?.status || 'info'].color}
                />
              </Box>
              <Callout size="sm" content={snackbar?.content || ''} heading={snackbar?.heading} status={snackbar?.status} />
            </Box>
          </Slide>
        </Box>
      </Flex>
      {children}
    </SnackbarProvider>
  )
}

Snackbar.displayName = 'Snackbar'
