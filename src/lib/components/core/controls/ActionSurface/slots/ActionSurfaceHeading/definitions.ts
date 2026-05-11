import { TextProps } from 'lib/components'
import { TextTypography } from 'lib/components/core/base/Text'

export const ACTION_SURFACE_HEADING_TYPOGRAPHY = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const satisfies TextTypography[]

export const DEFAULT_ACTION_SURFACE_HEADING_BOLD: ActionSurfaceHeadingProps['bold'] = true
export const DEFAULT_ACTION_SURFACE_HEADING_TYPOGRAPHY: ActionSurfaceHeadingProps['typography'] = 'h6'
export const DEFAULT_ACTION_SURFACE_HEADING_TRUNCATE: ActionSurfaceHeadingProps['truncate'] = true

type ActionSurfaceHeadingTypography = (typeof ACTION_SURFACE_HEADING_TYPOGRAPHY)[number]

type PropsFromText = Pick<
  TextProps,
  | 'bold'
  | 'children'
  | 'clampLines'
  | 'color'
  | 'customSvgIcon'
  | 'iconName'
  | 'iconPlacement'
  | 'intent'
  | 'tagAttrs'
  | 'tagRef'
  | 'truncate'
> & {
  typography?: ActionSurfaceHeadingTypography
}

export type ActionSurfaceHeadingProps = PropsFromText
