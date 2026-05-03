import { HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/core/base/Box/definitions'
import { LengthValue, TShirtSize } from 'lib/definitions'

export const DIALOG_SIZE_MAP: Record<DialogSize, LengthValue> = {
  sm: '360px',
  md: '520px',
  lg: '720px',
}

export const DIALOG_SIZES = ['sm', 'md', 'lg'] as const satisfies TShirtSize[]
export const DEFAULT_DIALOG_SIZE: DialogProps['size'] = 'md'
export const DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK: DialogProps['closeOnBackdropClick'] = false

export const DIALOG_INTENT: BoxIntent = 'tertiary'
export const DIALOG_PADDING: string = '15px'
export const DIALOG_RESIZE_DURATION = 200

export type DialogSize = (typeof DIALOG_SIZES)[number]

type DialogOwnProps = {
  open: boolean
  onClose?: () => void
  closeOnBackdropClick?: boolean
  size?: DialogSize
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'dialog'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'dialog'>['children']
}

export type DialogProps = PropsFromHtmlTag & DialogOwnProps
