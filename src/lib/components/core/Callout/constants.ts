import { TShirtSize } from 'lib/types'

import type { BoxColor, BoxIntent, BoxVariant } from '../Box/types'
import { type IconName } from '../Icon/types'
import type { TextTypography } from '../Text/types'

export const CALLOUT_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const CALLOUT_STATUSES = ['info', 'success', 'warning', 'error'] as const
export const CALLOUT_TAGS = ['div', 'section', 'article', 'aside'] as const

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
  (typeof CALLOUT_STATUSES)[number],
  { color: BoxColor; heading: string; iconName: IconName }
> = {
  info: { color: 'blue', heading: 'Info', iconName: 'info' },
  success: { color: 'green', heading: 'Success', iconName: 'check-circle' },
  warning: { color: 'amber', heading: 'Warning', iconName: 'triangle-alert' },
  error: { color: 'red', heading: 'Error', iconName: 'circle-alert' },
}

export const DEFAULT_CALLOUT_SIZE: TShirtSize = 'md'
export const DEFAULT_CALLOUT_VARIANT: (typeof CALLOUT_VARIANTS)[number] = 'solid'
export const DEFAULT_CALLOUT_INTENT: BoxIntent = 'primary'
export const DEFAULT_CALLOUT_STATUS: (typeof CALLOUT_STATUSES)[number] = 'info'
