import { useCallback, useState } from 'react'

import { Box, Flex } from 'lib/components'

import { DEFAULT_SNACKBAR_PLACEMENT, SnackbarItemConfig, SnackbarProps } from './definitions'
import { SnackbarProvider } from './SnackbarProvider'
import { SnackbarRegion } from './snackbar-region'

export const Snackbar = ({
  // own
  children,
  placement = DEFAULT_SNACKBAR_PLACEMENT,
}: SnackbarProps) => {
  const [snackbar, setSnackbar] = useState<SnackbarItemConfig | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const finalPlacement = snackbar?.placement || placement

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <SnackbarProvider setVisible={setVisible} setSnackbar={setSnackbar}>
      <Flex justifyContent="center">
        <SnackbarRegion
          direction="top"
          left
          visible={finalPlacement === 'top-left' && visible}
          {...(finalPlacement === 'top-left' ? snackbar : {})}
          handleClose={handleClose}
        />
        <SnackbarRegion
          direction="top"
          visible={finalPlacement === 'top-center' && visible}
          {...(finalPlacement === 'top-center' ? snackbar : {})}
          handleClose={handleClose}
        />
        <SnackbarRegion
          direction="top"
          right
          visible={finalPlacement === 'top-right' && visible}
          {...(finalPlacement === 'top-right' ? snackbar : {})}
          handleClose={handleClose}
        />
        <SnackbarRegion
          direction="bottom"
          left
          visible={finalPlacement === 'bottom-left' && visible}
          {...(finalPlacement === 'bottom-left' ? snackbar : {})}
          handleClose={handleClose}
        />
        <SnackbarRegion
          direction="bottom"
          visible={finalPlacement === 'bottom-center' && visible}
          {...(finalPlacement === 'bottom-center' ? snackbar : {})}
          handleClose={handleClose}
        />
        <SnackbarRegion
          direction="bottom"
          right
          visible={finalPlacement === 'bottom-right' && visible}
          {...(finalPlacement === 'bottom-right' ? snackbar : {})}
          handleClose={handleClose}
        />
      </Flex>
      <Box tagAttrs={{ style: { pointerEvents: visible ? 'none' : undefined } }}>{children}</Box>
    </SnackbarProvider>
  )
}

Snackbar.displayName = 'Snackbar'
