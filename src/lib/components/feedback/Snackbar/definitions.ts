import { ReactElement } from 'react'

import { CalloutStatus } from '../Callout/definitions'
import { BoxProps } from 'lib/components/base'

export const SNACKBAR_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const

export const DEFAULT_SNACKBAR_PLACEMENT: SnackbarProps['placement'] = 'bottom-right'
export const DEFAULT_SNACKBAR_INLINE_SIZE: SnackbarProps['inlineSize'] = '350px'
export const DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY: SnackbarProps['autoCloseDelay'] = 5000
export const DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK: SnackbarProps['closeOnOutsideClick'] = false

export type SnackbarPlacement = (typeof SNACKBAR_PLACEMENTS)[number]

export type UseSnackbarShowArgs = {
  status: CalloutStatus
  content: string
  placement?: SnackbarPlacement
  heading?: string
}

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

type SnackbarOwnProps = {
  children: ReactElement
  placement?: SnackbarPlacement
  autoCloseDelay?: number
  closeOnOutsideClick?: boolean
}

export type SnackbarProps = PropsFromBox & SnackbarOwnProps
