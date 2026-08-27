import { BOX_COLORS } from 'lib/constants'

import { NEBKIT_PROVIDER_THEMES } from '../NebkitProvider/constants'

export { BOX_COLORS }

export const BOX_THEMES = [...NEBKIT_PROVIDER_THEMES, 'global', 'global-flipped'] as const
export const BOX_VARIANTS = ['solid-outline', 'solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = [
  'neutral',
  'muted',
  'tertiary',
  'secondary',
  'primary',
  'inverse',
] as const
export const BOX_SURFACES = ['selected', 'dividing'] as const
