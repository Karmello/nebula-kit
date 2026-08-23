export const SCALE_ORIGIN = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const

export const SCALE_ORIGIN_MAP: Record<(typeof SCALE_ORIGIN)[number], string> = {
  center: 'center center',
  top: 'top center',
  bottom: 'bottom center',
  left: 'center left',
  right: 'center right',
  'top-left': 'top left',
  'top-right': 'top right',
  'bottom-left': 'bottom left',
  'bottom-right': 'bottom right',
}

export const SCALE_AXIS = ['both', 'x', 'y'] as const
