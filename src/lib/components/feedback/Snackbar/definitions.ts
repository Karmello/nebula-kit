import { ReactElement } from 'react'

import { CalloutStatus } from '../Callout/definitions'

export const SNACKBAR_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const

export const DEFAULT_SNACKBAR_PLACEMENT: SnackbarProps['placement'] = 'top-right'

export type SnackbarPlacement = (typeof SNACKBAR_PLACEMENTS)[number]

export type UseSnackbarShowArgs = {
  status: CalloutStatus
  content: string
  placement?: SnackbarPlacement
  heading?: string
}

type SnackbarOwnProps = {
  children: ReactElement
  placement?: SnackbarPlacement
}

export type SnackbarProps = SnackbarOwnProps
