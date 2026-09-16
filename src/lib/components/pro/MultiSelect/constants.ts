import { BoxBgMode, BoxBorderMode, BoxIntent, BoxTextMode } from 'lib/components/core/Box'

export const MULTI_SELECT_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const MULTI_SELECT_VARIANT_MAP: Record<
  (typeof MULTI_SELECT_VARIANTS)[number],
  {
    trigger: { bgMode: BoxBgMode; borderMode: BoxBorderMode; textMode: BoxTextMode }
    content: { borderMode: BoxBorderMode }
    item: { bgMode: BoxBgMode; borderMode: BoxBorderMode; textMode: BoxTextMode }
    removeFirstTopBorder: boolean
  }
> = {
  solid: {
    trigger: { bgMode: 'filled', borderMode: 'none', textMode: 'default' },
    content: { borderMode: 'none' },
    item: { bgMode: 'filled', borderMode: 'filled', textMode: 'default' },
    removeFirstTopBorder: false,
  },
  outline: {
    trigger: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'default' },
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'default' },
    removeFirstTopBorder: true,
  },
  'soft-outline': {
    trigger: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'colored' },
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', textMode: 'colored' },
    removeFirstTopBorder: true,
  },
  ghost: {
    trigger: { bgMode: 'transparent', borderMode: 'none', textMode: 'colored' },
    content: { borderMode: 'none' },
    item: { bgMode: 'transparent', borderMode: 'none', textMode: 'colored' },
    removeFirstTopBorder: false,
  },
}

export const DEFAULT_MULTI_SELECT_INLINE_SIZE = '100%'
export const DEFAULT_MULTI_SELECT_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_MULTI_SELECT_VARIANT: (typeof MULTI_SELECT_VARIANTS)[number] = 'outline'
export const DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT = 5
