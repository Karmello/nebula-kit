import { BoxProps, HtmlTagProps } from 'lib/components'
import { TShirtSize } from 'lib/definitions'
import { BoxVariant } from 'lib/components/core/base/Box'
import { IconSize } from 'lib/components/core/elements/Icon'

import { BUTTON_SIZE_MAP } from '../../controls/Button'

export const CHECKBOX_SIZE_CONFIG: Record<CheckboxSize, { blockSize: BoxProps['blockSize']; iconSize: IconSize }> = {
  '2xs': { blockSize: BUTTON_SIZE_MAP['2xs'].blockSize, iconSize: '18px' },
  xs: { blockSize: BUTTON_SIZE_MAP.xs.blockSize, iconSize: '22px' },
  sm: { blockSize: BUTTON_SIZE_MAP.sm.blockSize, iconSize: '26px' },
  md: { blockSize: BUTTON_SIZE_MAP.md.blockSize, iconSize: '30px' },
  lg: { blockSize: BUTTON_SIZE_MAP.lg.blockSize, iconSize: '35px' },
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
