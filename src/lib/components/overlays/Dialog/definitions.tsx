import { HtmlTagProps } from 'lib/components'
import { Sizes } from 'lib/definitions'

export const DIALOG_SIZE_MAP: Record<DialogSize, string> = {
  sm: '360px',
  md: '520px',
  lg: '720px',
}

export const DIALOG_SIZES = ['sm', 'md', 'lg'] as const satisfies Sizes[]
export const DEFAULT_DIALOG_SIZE: DialogProps['size'] = 'md'
export const DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK: DialogProps['closeOnBackdropClick'] = false

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
