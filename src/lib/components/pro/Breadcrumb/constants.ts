import type { TShirtSize } from 'lib/types'

import type { BoxBgMode, BoxBorderMode, BoxIntent, BoxTextMode } from '../../core/Box/types'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const BREADCRUMB_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const BREADCRUMB_VARIANT_MAP: Record<
  (typeof BREADCRUMB_VARIANTS)[number],
  {
    content: { borderMode: BoxBorderMode }
    item: { bgMode: BoxBgMode; borderMode: BoxBorderMode; textMode: BoxTextMode }
    removeFirstTopBorder: boolean
  }
> = {
  solid: {
    content: { borderMode: 'none' },
    item: { bgMode: 'filled', borderMode: 'filled', textMode: 'default' },
    removeFirstTopBorder: false,
  },
  outline: {
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'default' },
    removeFirstTopBorder: false,
  },
  'soft-outline': {
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'colored' },
    removeFirstTopBorder: false,
  },
  ghost: {
    content: { borderMode: 'none' },
    item: { bgMode: 'transparent', borderMode: 'none', textMode: 'colored' },
    removeFirstTopBorder: false,
  },
}

export const DEFAULT_BREADCRUMB_INTENT: BoxIntent = 'muted'
export const DEFAULT_BREADCRUMB_SCALE: TShirtSize = 'xs'
export const DEFAULT_BREADCRUMB_VARIANT: (typeof BREADCRUMB_VARIANTS)[number] = 'solid'
export const DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT = 5
