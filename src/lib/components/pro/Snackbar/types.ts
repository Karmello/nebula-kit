import { ReactElement } from 'react'

import { CalloutStatus } from 'lib/components/core/Callout'
import { BoxProps } from 'lib/index.core'

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
