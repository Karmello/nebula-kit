import { BoxProps } from 'lib/components/core/Box/definitions'
import { BoxIntent, TShirtSize } from 'lib/types'

export const DIALOG_SIZE_MAP: Record<DialogSize, BoxProps['inlineSize']> = {
  sm: '360px',
  md: '520px',
  lg: '720px',
}

export const DIALOG_SIZES = ['sm', 'md', 'lg'] as const satisfies TShirtSize[]
export const DIALOG_INTENT: BoxIntent = 'tertiary'
export const DIALOG_PADDING: BoxProps['padding'] = '15px'
export const DIALOG_RESIZE_DURATION = 200

export const DEFAULT_DIALOG_SIZE: DialogProps['size'] = 'md'
export const DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK: DialogProps['closeOnBackdropClick'] = false

export type DialogSize = (typeof DIALOG_SIZES)[number]

type DialogOwnProps = {
  open: boolean
  onClose?: () => void
  closeOnBackdropClick?: boolean
  size?: DialogSize
}

type PropsFromBox = Pick<BoxProps<'dialog'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'dialog'>['children']
}

export type DialogProps = PropsFromBox & DialogOwnProps
