import { BoxProps, HtmlTagProps } from 'lib/components'
import { LengthValue, TShirtSize } from 'lib/definitions'
import { BoxVariant } from 'lib/components/core/base/Box'

export const CHECKBOX_SIZE_CONFIG: Record<CheckboxSize, { blockSize: LengthValue; iconSize: LengthValue }> = {
  '2xs': { blockSize: '28px', iconSize: '18px' },
  xs: { blockSize: '34px', iconSize: '22px' },
  sm: { blockSize: '38px', iconSize: '26px' },
  md: { blockSize: '44px', iconSize: '30px' },
  lg: { blockSize: '52px', iconSize: '35px' },
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
