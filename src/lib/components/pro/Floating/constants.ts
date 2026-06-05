import { FloatingProps } from 'lib/index.pro'

export const FLOATING_MODE = ['hover', 'click'] as const

export const FLOATING_PLACEMENT = [
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
] as const

export const DEFAULT_FLOATING_MODE: FloatingProps['mode'] = 'hover'
export const DEFAULT_FLOATING_PLACEMENT: FloatingProps['placement'] = 'bottom-start'
