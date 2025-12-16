import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box/definitions'
import { TextTypography } from 'lib/components/core/base/Text/definitions'
import { Color, IconName, Sizes } from 'lib/definitions'

export const CALLOUT_SIZE_CONFIG: Record<
  CalloutSize,
  { typography: Extract<TextTypography, 'h6' | 'h5' | 'h4' | 'h3' | 'h2'>; spacing: string }
> = {
  sm: { typography: 'h6', spacing: '16px' },
  md: { typography: 'h5', spacing: '20px' },
  lg: { typography: 'h4', spacing: '24px' },
  xl: { typography: 'h3', spacing: '26px' },
  xxl: { typography: 'h2', spacing: '30px' },
}

export const CALLOUT_CONFIG: Record<CalloutStatus, { color: Color; heading: string; iconName: IconName }> = {
  info: { color: 'blue', heading: 'Info', iconName: 'info' },
  success: { color: 'green', heading: 'Success', iconName: 'check-circle' },
  warning: { color: 'amber', heading: 'Warning', iconName: 'triangle-alert' },
  error: { color: 'red', heading: 'Error', iconName: 'circle-alert' },
}

export const DEFAULT_CALLOUT_SIZE: CalloutProps['size'] = 'md'
export const DEFAULT_CALLOUT_VARIANT: CalloutProps['variant'] = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutProps['intent'] = 'primary'
export const DEFAULT_CALLOUT_STATUS: CalloutProps['status'] = 'info'

export const CALLOUT_TAGS = ['div', 'section', 'article', 'aside'] as const
export const CALLOUT_SIZES = ['sm', 'md', 'lg', 'xl', 'xxl'] as const satisfies Sizes[]
export const CALLOUT_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CALLOUT_STATUSES = ['info', 'success', 'warning', 'error'] as const

export type CalloutTag = (typeof CALLOUT_TAGS)[number]
export type CalloutSize = (typeof CALLOUT_SIZES)[number]
export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number]
export type CalloutStatus = (typeof CALLOUT_STATUSES)[number]

type CalloutOwnProps = {
  content: string
  heading?: string
  size?: CalloutSize
  variant?: CalloutVariant
  status?: CalloutStatus
}

type PropsFromHtmlTag<T extends CalloutTag = 'div'> = Omit<HtmlTagProps<T>, 'children'>

type PropsFromBox<T extends CalloutTag = 'div'> = Pick<BoxProps<T>, 'intent'>

export type CalloutProps<T extends CalloutTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  CalloutOwnProps
