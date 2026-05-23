import { BoxProps } from 'lib/components'
import { CONTROL_SIZE_MAP, RespValue, TShirtSize } from 'lib/definitions'
import { BoxVariant } from 'lib/components/core/Box'

export const CHECKBOX_SIZE_MAP: Record<CheckboxSize, { blockSize: BoxProps['blockSize']; iconSize: string }> = {
  xs: { blockSize: CONTROL_SIZE_MAP['2xs'].blockSize, iconSize: '22px' },
  sm: { blockSize: CONTROL_SIZE_MAP.xs.blockSize, iconSize: '26px' },
  md: { blockSize: CONTROL_SIZE_MAP.sm.blockSize, iconSize: '30px' },
  lg: { blockSize: CONTROL_SIZE_MAP.md.blockSize, iconSize: '35px' },
}

export const CHECKBOX_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CHECKBOX_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export const DEFAULT_CHECKBOX_VARIANT: CheckboxProps['variant'] = 'outline'
export const DEFAULT_CHECKBOX_INTENT: CheckboxProps['intent'] = 'tertiary'
export const DEFAULT_CHECKBOX_SIZE: CheckboxProps['size'] = 'xs'

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number]
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number]

type PropsFromBox = Pick<BoxProps<'input'>, 'tagAttrs' | 'tagRef' | 'intent' | 'color' | 'disabled'>

type CheckboxOwnProps = {
  variant?: RespValue<CheckboxVariant>
  size?: CheckboxSize
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export type CheckboxProps = PropsFromBox & CheckboxOwnProps
