import { BoxProps, HtmlTagProps } from 'lib/components'
import { CONTROL_SIZE_TOKENS, TShirtSize } from 'lib/definitions'
import { BoxVariant } from 'lib/components/core/base/Box'
import { IconSize } from 'lib/components/core/elements/Icon'

export const CHECKBOX_SIZE_CONFIG: Record<CheckboxSize, { blockSize: BoxProps['blockSize']; iconSize: IconSize }> = {
  '2xs': { blockSize: CONTROL_SIZE_TOKENS['2xs'].blockSize, iconSize: '18px' },
  xs: { blockSize: CONTROL_SIZE_TOKENS.xs.blockSize, iconSize: '22px' },
  sm: { blockSize: CONTROL_SIZE_TOKENS.sm.blockSize, iconSize: '26px' },
  md: { blockSize: CONTROL_SIZE_TOKENS.md.blockSize, iconSize: '30px' },
  lg: { blockSize: CONTROL_SIZE_TOKENS.lg.blockSize, iconSize: '35px' },
}

export const CHECKBOX_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CHECKBOX_SIZES = ['2xs', 'xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export const DEFAULT_CHECKBOX_VARIANT: CheckboxProps['variant'] = 'outline'
export const DEFAULT_CHECKBOX_INTENT: CheckboxProps['intent'] = 'tertiary'
export const DEFAULT_CHECKBOX_SIZE: CheckboxProps['size'] = 'xs'

export type CheckboxVariant = (typeof CHECKBOX_VARIANTS)[number]
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'input'>, 'intent' | 'color' | 'disabled'>

type CheckboxOwnProps = {
  variant?: CheckboxVariant
  size?: CheckboxSize
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export type CheckboxProps = PropsFromHtmlTag & PropsFromBox & CheckboxOwnProps
