import { CONTROL_SCALE_MAP } from 'lib/constants'
import type { TShirtSize } from 'lib/types'

import { BoxIntent, BoxProps, BoxVariant } from '../Box'

export const CHECKBOX_SIZE_MAP: Record<
  TShirtSize,
  { blockSize: BoxProps['blockSize']; iconSize: string }
> = {
  xs: { blockSize: CONTROL_SCALE_MAP.xs.blockSize, iconSize: '22px' },
  sm: { blockSize: CONTROL_SCALE_MAP.sm.blockSize, iconSize: '26px' },
  md: { blockSize: CONTROL_SCALE_MAP.md.blockSize, iconSize: '30px' },
  lg: { blockSize: CONTROL_SCALE_MAP.lg.blockSize, iconSize: '35px' },
  xl: { blockSize: CONTROL_SCALE_MAP.xl.blockSize, iconSize: '35px' },
}

export const CHECKBOX_VARIANTS = [
  'solid',
  'outline',
  'soft-outline',
] as const satisfies BoxVariant[]

export const DEFAULT_CHECKBOX_VARIANT: (typeof CHECKBOX_VARIANTS)[number] = 'outline'
export const DEFAULT_CHECKBOX_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_CHECKBOX_SIZE: TShirtSize = 'xs'
