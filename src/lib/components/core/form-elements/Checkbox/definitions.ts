import { BoxProps, HtmlTagProps } from 'lib/components'
import { Size } from 'lib/definitions'
import { BoxVariant } from 'lib/components/core/base/Box'

export const CHECKBOX_SIZE_CONFIG: Record<CheckboxSize, { blockSize: string; iconSize: string }> = {
  xs: { blockSize: '28px', iconSize: '20px' },
  sm: { blockSize: '38px', iconSize: '26px' },
  md: { blockSize: '44px', iconSize: '30px' },
  lg: { blockSize: '52px', iconSize: '35px' },
}

export const CHECKBOX_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CHECKBOX_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies Size[]

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
