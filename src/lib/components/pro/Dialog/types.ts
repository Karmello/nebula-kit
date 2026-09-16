import type { BoxProps } from '../../core/Box/types'
import { DIALOG_SCALES } from './constants'

export type DialogScale = (typeof DIALOG_SCALES)[number]

export type DialogProps = {
  // own
  open: boolean
  onClose?: () => void
  closeOnBackdropClick?: boolean
  scale?: DialogScale
  // Box
  elemAttrs?: BoxProps<'dialog'>['elemAttrs']
  elemRef?: BoxProps<'dialog'>['elemRef']
  children: BoxProps<'dialog'>['children']
}
