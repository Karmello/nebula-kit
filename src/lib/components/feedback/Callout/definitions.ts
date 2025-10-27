import { HtmlTagProps } from 'lib/components'
import { TextTypography } from 'lib/components/base/Text/definitions'
import { IconName, ScaleValue, Sizes } from 'lib/definitions'

export const CALLOUT_SIZE_CONFIG: Record<
  CalloutSize,
  { typography: Extract<TextTypography, 'h6' | 'h5' | 'h4' | 'h3' | 'h2'>; spacing: ScaleValue }
> = {
  sm: { typography: 'h6', spacing: 16 },
  md: { typography: 'h5', spacing: 20 },
  lg: { typography: 'h4', spacing: 24 },
  xl: { typography: 'h3', spacing: 26 },
  xxl: { typography: 'h2', spacing: 30 },
}

export const CALLOUT_CONFIG: Record<CalloutIntent, { heading: string; iconName: IconName }> = {
  info: { heading: 'Info', iconName: 'info' },
  success: { heading: 'Success', iconName: 'check-circle' },
  warning: { heading: 'Warning', iconName: 'triangle-alert' },
  danger: { heading: 'Attention', iconName: 'circle-alert' },
}

export const DEFAULT_CALLOUT_SIZE: CalloutSize = 'md'
export const DEFAULT_CALLOUT_VARIANT: CalloutVariant = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutIntent = 'info'

export const CALLOUT_TAGS = ['div', 'section', 'article', 'aside'] as const
export const CALLOUT_SIZES = ['sm', 'md', 'lg', 'xl', 'xxl'] as const satisfies Sizes[]
export const CALLOUT_VARIANTS = ['solid', 'outline'] as const
export const CALLOUT_INTENTS = ['info', 'success', 'warning', 'danger'] as const

export type CalloutTag = (typeof CALLOUT_TAGS)[number]
export type CalloutSize = (typeof CALLOUT_SIZES)[number]
export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number]
export type CalloutIntent = (typeof CALLOUT_INTENTS)[number]

type CalloutOwnProps = {
  content: string
  heading?: string
  size?: CalloutSize
  variant?: CalloutVariant
  intent?: CalloutIntent
}

type PropsFromHtmlTag<T extends CalloutTag = 'div'> = Omit<HtmlTagProps<T>, 'children'>

export type CalloutProps<T extends CalloutTag = 'div'> = PropsFromHtmlTag<T> & CalloutOwnProps
