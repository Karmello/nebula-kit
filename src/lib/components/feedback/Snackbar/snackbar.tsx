import { useCallback, useState } from 'react'

import { Box, Button, Callout, Flex, Slide } from 'lib/components'

import {
  DEFAULT_SNACKBAR_PLACEMENT,
  DEFAULT_SNACKBAR_MAX_INLINE_SIZE,
  UseSnackbarShowArgs,
  SnackbarProps,
} from './definitions'

import { SnackbarProvider } from './SnackbarProvider'
import { CALLOUT_CONFIG } from '../Callout/definitions'

export const Snackbar = ({
  // Box
  maxInlineSize = DEFAULT_SNACKBAR_MAX_INLINE_SIZE,
  // own
  children,
  placement = DEFAULT_SNACKBAR_PLACEMENT,
}: SnackbarProps) => {
  const [snackbar, setSnackbar] = useState<UseSnackbarShowArgs | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  const finalPlacement = snackbar?.placement || placement || 'bottom-right'

  return (
    <SnackbarProvider setVisible={setVisible} setSnackbar={setSnackbar}>
      <Flex justifyContent="center">
        <Box
          tagAttrs={{ style: { pointerEvents: !visible ? 'none' : undefined } }}
          position="fixed"
          top={finalPlacement.includes('top') ? 0 : 'unset'}
          bottom={finalPlacement.includes('bottom') ? 0 : 'unset'}
          left={finalPlacement.includes('left') ? 0 : 'unset'}
          right={finalPlacement.includes('right') ? 0 : 'unset'}
          zIndex={30}
        >
          <Slide property={finalPlacement.split('-')[0] as never} visible={visible}>
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
      <Box tagAttrs={{ style: { pointerEvents: visible ? 'none' : undefined } }}>{children}</Box>
    </SnackbarProvider>
  )
}

Snackbar.displayName = 'Snackbar'
