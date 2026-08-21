import { CONTROL_SCALE_MAP } from 'lib/constants'
import type { TShirtSize } from 'lib/types'

import { BoxProps, BoxVariant } from '../Box'

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

export const DEFAULT_CHECKBOX_VARIANT: CheckboxProps['variant'] = 'outline'
export const DEFAULT_CHECKBOX_INTENT: CheckboxProps['intent'] = 'tertiary'
export const DEFAULT_CHECKBOX_SIZE: CheckboxProps['size'] = 'xs'

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number]

type PropsFromBox = Pick<BoxProps<'input'>, 'tagAttrs' | 'tagRef' | 'intent' | 'color' | 'disabled'>

type CheckboxOwnProps = {
  variant?: CheckboxVariant
  size?: TShirtSize
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export type CheckboxProps = PropsFromBox & CheckboxOwnProps
