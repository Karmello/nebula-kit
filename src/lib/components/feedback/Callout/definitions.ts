import { BoxProps } from 'lib/components'
import { IconName } from 'lib/definitions'

export const CalloutTag = ['div', 'section', 'article', 'aside'] as const
export type CalloutTag = (typeof CalloutTag)[number]

export const CalloutVariant = ['solid', 'outline'] as const
export const CalloutIntent = ['info', 'success', 'warning', 'danger'] as const

export type CalloutVariant = (typeof CalloutVariant)[number]
export type CalloutIntent = (typeof CalloutIntent)[number]

export const DEFAULT_CALLOUT_VARIANT: CalloutVariant = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutIntent = 'info'

export type CalloutOwnProps = {
  content: string
  heading?: string
}

export const CALLOUT_INHERITED_PROPS = {
  Box: [
    'tag',
    'tagAttrs',
    'tagRef',
    'variant',
    'intent',
    'borderRadius',
    'padding',
    'paddingBlock',
    'paddingInline',
  ] as const satisfies readonly (keyof BoxProps<CalloutTag>)[],
  Text: [] as const,
}

export type CalloutInheritedProps<T extends CalloutTag = 'div'> = Omit<
  Pick<BoxProps<T>, (typeof CALLOUT_INHERITED_PROPS)['Box'][number]>,
  'variant' | 'intent'
> & {
  variant?: CalloutVariant
  intent?: CalloutIntent
}

export type CalloutProps<T extends CalloutTag = 'div'> = CalloutOwnProps & CalloutInheritedProps<T>

export const CALLOUT_CONFIG: Record<CalloutIntent, { heading: string; iconName: IconName }> = {
  info: { heading: 'Info', iconName: 'info' },
  success: { heading: 'Success', iconName: 'check-circle' },
  warning: { heading: 'Warning', iconName: 'triangle-alert' },
  danger: { heading: 'Attention', iconName: 'circle-alert' },
}
