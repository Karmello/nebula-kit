import { CalloutTag, TShirtSize } from 'lib/types'

import type { BoxColor, BoxProps, BoxVariant } from '../Box/types'
import { type IconName } from '../Icon/types'
import type { TextTypography } from '../Text/types'

export const CALLOUT_SIZE_CONFIG: Record<
  TShirtSize,
  {
    padding: string
    textTypography: TextTypography
    spacerBlockSize: string
  }
> = {
  xs: { padding: '16px', textTypography: 'h6', spacerBlockSize: '8px' },
  sm: { padding: '16px', textTypography: 'h6', spacerBlockSize: '8px' },
  md: { padding: '24px', textTypography: 'h5', spacerBlockSize: '16px' },
  lg: { padding: '32px', textTypography: 'h4', spacerBlockSize: '24px' },
  xl: { padding: '48px', textTypography: 'h3', spacerBlockSize: '32px' },
}

export const CALLOUT_CONFIG: Record<
  CalloutStatus,
  { color: BoxColor; heading: string; iconName: IconName }
> = {
  info: { color: 'blue', heading: 'Info', iconName: 'info' },
  success: { color: 'green', heading: 'Success', iconName: 'check-circle' },
  warning: { color: 'amber', heading: 'Warning', iconName: 'triangle-alert' },
  error: { color: 'red', heading: 'Error', iconName: 'circle-alert' },
}

export const DEFAULT_CALLOUT_SIZE: CalloutProps['size'] = 'md'
export const DEFAULT_CALLOUT_VARIANT: CalloutProps['variant'] = 'solid'
export const DEFAULT_CALLOUT_INTENT: CalloutProps['intent'] = 'primary'
export const DEFAULT_CALLOUT_STATUS: CalloutProps['status'] = 'info'

export const CALLOUT_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CALLOUT_STATUSES = ['info', 'success', 'warning', 'error'] as const

export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number]
export type CalloutStatus = (typeof CALLOUT_STATUSES)[number]

export type CalloutProps<T extends CalloutTag = 'div'> = {
  // own
  content: string
  heading?: string
  size?: TShirtSize
  variant?: CalloutVariant
  status?: CalloutStatus
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  intent?: BoxProps<T>['intent']
}
