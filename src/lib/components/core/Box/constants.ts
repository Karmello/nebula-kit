import { BOX_COLORS } from 'lib/constants'

import { NEBKIT_PROVIDER_THEMES } from '../NebkitProvider/constants'

export { BOX_COLORS }

export const BOX_THEMES = [...NEBKIT_PROVIDER_THEMES, 'global', 'global-flipped'] as const
export const BOX_INTENTS = [
  'neutral',
  'muted',
  'tertiary',
  'secondary',
  'primary',
  'strong',
] as const
export const BOX_SURFACE_DEPTHS = ['base', 'raised'] as const
export const BOX_BORDER_ROLES = ['surface', 'divider', 'edge'] as const
export const BOX_BORDER = ['none', 'tinted', 'filled'] as const
export const BOX_BG = ['transparent', 'tinted', 'filled'] as const
export const BOX_BG_ROLES = ['surface', 'selection'] as const
export const BOX_TEXT = ['default', 'colored'] as const

export const DEFAULT_BOX_SURFACE_DEPTH = 'base'
export const DEFAULT_BOX_BORDER = 'none'
export const DEFAULT_BOX_BORDER_ROLE = 'surface'
export const DEFAULT_BOX_BG = 'transparent'
export const DEFAULT_BOX_BG_ROLE = 'surface'
export const DEFAULT_BOX_TEXT = 'default'
