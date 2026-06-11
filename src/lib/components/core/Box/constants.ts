import { THEMES } from 'lib/constants'

export const BOX_THEMES = [...THEMES, 'global', 'global-flipped'] as const
export const BOX_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const
export const BOX_INTENTS = ['neutral', 'muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const
export const BOX_SURFACES = ['selected', 'dividing'] as const
