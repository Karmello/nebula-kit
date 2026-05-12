import { TextProps } from 'lib/components'
import type { TextTypography } from 'lib/components/core/base/Text'

export const ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY = ['body', 'small', 'caption'] as const satisfies TextTypography[]

export const DEFAULT_ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY: ActionSurfaceDescriptionProps['typography'] = 'small'
export const DEFAULT_ACTION_SURFACE_DESCRIPTION_CLAMP_LINES: ActionSurfaceDescriptionProps['clampLines'] = 2
export const DEFAULT_ACTION_SURFACE_DESCRIPTION_INTENT: ActionSurfaceDescriptionProps['intent'] = 'primary'

type ActionSurfaceDescriptionTypography = (typeof ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY)[number]

type PropsFromText = Pick<
  TextProps,
  'children' | 'clampLines' | 'color' | 'intent' | 'italic' | 'tagAttrs' | 'tagRef' | 'truncate'
> & {
  typography?: ActionSurfaceDescriptionTypography
}

export type ActionSurfaceDescriptionProps = PropsFromText
