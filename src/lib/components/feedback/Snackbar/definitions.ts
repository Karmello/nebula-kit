import { ReactElement } from 'react'

import { SlideDirection } from 'lib/components/motion/Slide/definitions'

import { CalloutStatus } from '../Callout/definitions'

export const SNACKBAR_PLACEMENT_CONFIG: Record<SnackbarPlacement, SnackbarPlacementConfigValue> = {
  'bottom-center': { direction: 'bottom', bottom: true },
  'bottom-left': { direction: 'bottom', bottom: true, left: true },
  'bottom-right': { direction: 'bottom', bottom: true, right: true },
  'top-center': { direction: 'top', top: true },
  'top-left': { direction: 'top', top: true, left: true },
  'top-right': { direction: 'top', top: true, right: true },
}

export const SNACKBAR_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const

export const DEFAULT_SNACKBAR_PLACEMENT: SnackbarProps['placement'] = 'bottom-right'

export const SNACKBAR_MARGIN = 10

export type SnackbarPlacement = (typeof SNACKBAR_PLACEMENTS)[number]

export type SnackbarPlacementConfigValue = {
  direction: SlideDirection
  top?: boolean
  right?: boolean
  bottom?: boolean
  left?: boolean
}

export type SnackbarItemConfig = {
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
