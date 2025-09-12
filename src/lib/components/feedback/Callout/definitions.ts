import { BoxProps } from 'lib/components'
import { CalloutElem, CalloutIntent, CalloutVariant } from 'lib/definitions'
import { IconName } from 'lib/icons'

// types

export type CalloutOwnProps = {
  content: string
  heading?: string
}

export const CALLOUT_INHERITED_PROPS = {
  Box: [
    'elem',
    'elemProps',
    'elemRef',
    'variant',
    'intent',
    'borderRadius',
    'padding',
    'paddingBlock',
    'paddingInline',
  ] as const satisfies readonly (keyof BoxProps<CalloutElem>)[],
  Text: [] as const,
}

export type CalloutInheritedProps<E extends CalloutElem = 'div'> = Pick<
  BoxProps<E>,
  (typeof CALLOUT_INHERITED_PROPS)['Box'][number]
> & {
  variant?: CalloutVariant
  intent?: CalloutIntent
}

export type CalloutProps<E extends CalloutElem = 'div'> = CalloutOwnProps & CalloutInheritedProps<E>

// constants

export const CALLOUT_CONFIG: Record<CalloutIntent, { heading: string; iconName: IconName }> = {
  info: { heading: 'Info', iconName: 'info' },
  success: { heading: 'Success', iconName: 'check-circle' },
  warning: { heading: 'Warning', iconName: 'triangle-alert' },
  danger: { heading: 'Attention', iconName: 'circle-alert' },
}
