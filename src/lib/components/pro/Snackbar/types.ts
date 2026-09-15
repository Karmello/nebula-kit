import { ReactElement } from 'react'

import { BoxProps } from 'lib/components/core/Box'
import { CalloutStatus } from 'lib/components/core/Callout'

import { SNACKBAR_PLACEMENTS } from './constants'

export type SnackbarPlacement = (typeof SNACKBAR_PLACEMENTS)[number]

export type UseSnackbarShowArgs = {
  status: CalloutStatus
  content: string
  placement?: SnackbarPlacement
  heading?: string
}

export type SnackbarProps = {
  // own
  children: ReactElement
  placement?: SnackbarPlacement
  autoCloseDelay?: number
  closeOnOutsideClick?: boolean
  // Box
  inlineSize?: BoxProps['inlineSize']
}
