import { BoxProps, HtmlTagProps } from 'lib/components'
import { IconName } from 'lib/definitions'

export const CALLOUT_CONFIG: Record<CalloutIntent, { heading: string; iconName: IconName }> = {
  info: { heading: 'Info', iconName: 'info' },
  success: { heading: 'Success', iconName: 'check-circle' },
  warning: { heading: 'Warning', iconName: 'triangle-alert' },
  danger: { heading: 'Attention', iconName: 'circle-alert' },
}

export const DEFAULT_CALLOUT_VARIANT: CalloutVariant = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutIntent = 'info'

export const CalloutTag = ['div', 'section', 'article', 'aside'] as const
export const CalloutVariant = ['solid', 'outline'] as const
export const CalloutIntent = ['info', 'success', 'warning', 'danger'] as const

export type CalloutTag = (typeof CalloutTag)[number]
export type CalloutVariant = (typeof CalloutVariant)[number]
export type CalloutIntent = (typeof CalloutIntent)[number]

export type CalloutOwnProps = {
  content: string
  heading?: string
  variant?: CalloutVariant
  intent?: CalloutIntent
}

type PropsFromHtmlTag<T extends CalloutTag = 'div'> = Omit<HtmlTagProps<T>, 'children'>

type PropsFromBox<T extends CalloutTag = 'div'> = Pick<
  BoxProps<T>,
  'borderRadius' | 'padding' | 'paddingInline' | 'paddingBlock'
>

export type CalloutProps<T extends CalloutTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  CalloutOwnProps
