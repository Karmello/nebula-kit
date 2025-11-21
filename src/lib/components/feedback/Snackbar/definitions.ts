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
export const DEFAULT_SNACKBAR_MAX_INLINE_SIZE: SnackbarProps['maxInlineSize'] = { md: '450px' }

export type SnackbarPlacement = (typeof SNACKBAR_PLACEMENTS)[number]

export type UseSnackbarShowArgs = {
  status: CalloutStatus
  content: string
  placement?: SnackbarPlacement
  heading?: string
}

type PropsFromBox = Pick<BoxProps, 'maxInlineSize'>

type SnackbarOwnProps = {
  children: ReactElement
  placement?: SnackbarPlacement
}

export type SnackbarProps = PropsFromBox & SnackbarOwnProps
