import { SectionProps } from 'lib/index.core'
import type { TShirtSize } from 'lib/types'

import { type BoxVariant } from '../Box'
import { type TextTypography } from '../Text'

export const SECTION_VARIANTS = ['ghost', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_SECTION_VARIANT: SectionProps['variant'] = 'ghost'
export const DEFAULT_SECTION_INTENT: SectionProps['intent'] = 'neutral'
export const DEFAULT_SECTION_SIZE: SectionProps['size'] = 'md'

export const SECTION_SIZE_CONFIG: Record<
  TShirtSize,
  {
    padding: string
    spacerBlockSize: string
    textTypography: TextTypography
  }
> = {
  xs: { padding: '16px', spacerBlockSize: '4px', textTypography: 'h6' },
  sm: { padding: '16px', spacerBlockSize: '4px', textTypography: 'h6' },
  md: { padding: '16px', spacerBlockSize: '8px', textTypography: 'h5' },
  lg: { padding: '24px', spacerBlockSize: '16px', textTypography: 'h4' },
  xl: { padding: '32px', spacerBlockSize: '24px', textTypography: 'h3' },
}
