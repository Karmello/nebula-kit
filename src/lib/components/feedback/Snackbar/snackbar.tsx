import { useCallback, useRef, useState } from 'react'

import { Box, Button, Callout, Flex, Slide } from 'lib/components'

import {
  UseSnackbarShowArgs,
  SnackbarProps,
  DEFAULT_SNACKBAR_PLACEMENT,
  DEFAULT_SNACKBAR_MAX_INLINE_SIZE,
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
} from './definitions'

import { SnackbarProvider } from './SnackbarProvider'
import { CALLOUT_CONFIG } from '../Callout/definitions'

export const Snackbar = ({
  // Box
  maxInlineSize = DEFAULT_SNACKBAR_MAX_INLINE_SIZE,
  // own
  children,
  placement = DEFAULT_SNACKBAR_PLACEMENT,
  autoCloseDelay = DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  closeOnOutsideClick = DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
}: SnackbarProps) => {
  const [snackbar, setSnackbar] = useState<UseSnackbarShowArgs | null>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)

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
          tagAttrs={{
            style: { pointerEvents: !visible ? 'none' : undefined },
          }}
          position="fixed"
          top={finalPlacement.includes('top') ? 0 : 'unset'}
          bottom={finalPlacement.includes('bottom') ? 0 : 'unset'}
          left={finalPlacement.includes('left') ? 0 : 'unset'}
          right={finalPlacement.includes('right') ? 0 : 'unset'}
          zIndex={30}
        >
          <Slide
            property={finalPlacement.split('-')[0] as never}
            visible={visible}
            easing={visible ? 'ease-out' : 'ease-in'}
          >
            <Box key={snackbar?.status} position="relative" padding={10} maxInlineSize={maxInlineSize}>
              <Box position="absolute" top={15} right={15}>
                <Button
                  tagAttrs={{ onClick: handleClose }}
                  iconName="close"
                  size="xs"
                  variant="solid"
                  intent="primary"
                  color={CALLOUT_CONFIG[snackbar?.status || 'info'].color}
                />
              </Box>
              <Callout
                size="sm"
                content={snackbar?.content || ''}
                heading={snackbar?.heading}
                status={snackbar?.status}
              />
            </Box>
          </Slide>
        </Box>
      </Flex>
      {children}
    </SnackbarProvider>
  )
}

Snackbar.displayName = 'Snackbar'
