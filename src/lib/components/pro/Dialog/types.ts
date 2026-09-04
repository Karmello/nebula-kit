import type { BoxProps } from '../../core/Box/types'
import { DIALOG_SIZES } from './constants'

export type DialogSize = (typeof DIALOG_SIZES)[number]

export type DialogProps = {
  // own
  open: boolean
  onClose?: () => void
  closeOnBackdropClick?: boolean
  size?: DialogSize
  // Box
  tagAttrs?: BoxProps<'dialog'>['tagAttrs']
  tagRef?: BoxProps<'dialog'>['tagRef']
  children: BoxProps<'dialog'>['children']
}
