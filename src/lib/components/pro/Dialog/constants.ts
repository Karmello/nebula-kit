import type { TShirtSize } from 'lib/types'

import type { BoxIntent, BoxProps } from '../../core/Box/types'

export const DIALOG_SIZES = ['sm', 'md', 'lg'] as const satisfies TShirtSize[]

export const DIALOG_SIZE_MAP: Record<(typeof DIALOG_SIZES)[number], BoxProps['inlineSize']> = {
  sm: '360px',
  md: '520px',
  lg: '720px',
}
export const DIALOG_INTENT: BoxIntent = 'tertiary'
export const DIALOG_PADDING: BoxProps['padding'] = '15px'
export const DIALOG_RESIZE_DURATION = 200

export const DEFAULT_DIALOG_SIZE: (typeof DIALOG_SIZES)[number] = 'md'
export const DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK = false
