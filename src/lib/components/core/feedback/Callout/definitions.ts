import { BoxProps, HtmlTagProps } from 'lib/components'
import { IconName, RespValue, TShirtSize } from 'lib/definitions'
import { BoxVariant, BoxColor } from 'lib/components/core/base/Box'
import { TextTypography } from 'lib/components/core/base/Text'

export const CALLOUT_SIZE_CONFIG: Record<
  CalloutSize,
  {
    padding: TShirtSize
    textTypography: TextTypography
    spacerBlockSize: TShirtSize
  }
> = {
  sm: { padding: 'sm', textTypography: 'h6', spacerBlockSize: 'xs' },
  md: { padding: 'md', textTypography: 'h5', spacerBlockSize: 'sm' },
  lg: { padding: 'lg', textTypography: 'h4', spacerBlockSize: 'md' },
  xl: { padding: 'xl', textTypography: 'h3', spacerBlockSize: 'lg' },
  '2xl': { padding: '2xl', textTypography: 'h2', spacerBlockSize: 'xl' },
}

export const CALLOUT_CONFIG: Record<CalloutStatus, { color: BoxColor; heading: string; iconName: IconName }> = {
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
export const CALLOUT_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]
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
  variant?: RespValue<CalloutVariant>
  status?: CalloutStatus
}

type PropsFromHtmlTag<T extends CalloutTag = 'div'> = Omit<HtmlTagProps<T>, 'children'>

type PropsFromBox<T extends CalloutTag = 'div'> = Pick<BoxProps<T>, 'intent'>

export type CalloutProps<T extends CalloutTag = 'div'> = PropsFromHtmlTag<T> & PropsFromBox<T> & CalloutOwnProps
