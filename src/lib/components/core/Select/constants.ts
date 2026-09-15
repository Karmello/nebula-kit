import { BoxBgMode, BoxBorderMode, BoxIntent, BoxText } from '../Box'

export const SELECT_VARIANTS = ['solid', 'outline', 'soft-outline', 'ghost'] as const

export const DEFAULT_SELECT_INLINE_SIZE = '100%'
export const DEFAULT_SELECT_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_SELECT_VISIBLE_ITEMS_COUNT = 5
export const DEFAULT_SELECT_VARIANT: (typeof SELECT_VARIANTS)[number] = 'outline'

export const SELECT_VARIANT_MAP: Record<
  (typeof SELECT_VARIANTS)[number],
  {
    trigger: { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
    content: { borderMode: BoxBorderMode }
    item: { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
    removeFirstTopBorder: boolean
  }
> = {
  solid: {
    trigger: { bgMode: 'filled', borderMode: 'none', text: 'default' },
    content: { borderMode: 'none' },
    item: { bgMode: 'filled', borderMode: 'filled', text: 'default' },
    removeFirstTopBorder: false,
  },
  outline: {
    trigger: { bgMode: 'tinted', borderMode: 'tinted', text: 'default' },
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', text: 'default' },
    removeFirstTopBorder: true,
  },
  'soft-outline': {
    trigger: { bgMode: 'tinted', borderMode: 'tinted', text: 'colored' },
    content: { borderMode: 'tinted' },
    item: { bgMode: 'tinted', borderMode: 'tinted', text: 'colored' },
    removeFirstTopBorder: true,
  },
  ghost: {
    trigger: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
    content: { borderMode: 'none' },
    item: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
    removeFirstTopBorder: false,
  },
}
