import { TitleProps } from 'lib/index.core'

import { TextTypography } from '../Text'

export const TITLE_TYPOGRAPHY = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const satisfies TextTypography[]
export const TITLE_ICON_PLACEMENTS = ['left', 'right'] as const

export const DEFAULT_TITLE_TYPOGRAPHY: TitleProps['typography'] = 'h6'
export const DEFAULT_TITLE_ICON_PLACEMENT: TitleProps['iconPlacement'] = 'left'
