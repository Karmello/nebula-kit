import { NEBKIT_PROVIDER_THEMES } from '../NebkitProvider/constants'

export const BOX_THEMES = [...NEBKIT_PROVIDER_THEMES, 'global', 'global-flipped'] as const
export const BOX_COLORS = ['gray', 'green', 'blue', 'red', 'pink', 'amber'] as const
export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = [
  'neutral',
  'muted',
  'tertiary',
  'secondary',
  'primary',
  'inverse',
] as const
export const BOX_SURFACES = ['selected', 'dividing'] as const
