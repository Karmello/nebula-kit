export const SIDE_NAV_ITEM_ALIGNS = ['center', 'start', 'split'] as const
export const SIDE_NAV_ITEM_ICON_PLACEMENTS = ['left', 'right'] as const

export const DEFAULT_SIDE_NAV_ITEM_ALIGN: (typeof SIDE_NAV_ITEM_ALIGNS)[number] = 'center'
export const DEFAULT_SIDE_NAV_ITEM_ICON_PLACEMENT: (typeof SIDE_NAV_ITEM_ICON_PLACEMENTS)[number] =
  'left'
