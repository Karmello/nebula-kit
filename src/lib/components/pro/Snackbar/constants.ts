export const SNACKBAR_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const

export const DEFAULT_SNACKBAR_PLACEMENT: (typeof SNACKBAR_PLACEMENTS)[number] = 'bottom-right'
export const DEFAULT_SNACKBAR_INLINE_SIZE = '350px'
export const DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY = 5000
export const DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK = false
