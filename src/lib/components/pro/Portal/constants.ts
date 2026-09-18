import type { BoxProps } from '../../core/Box/types'

export const DEFAULT_PORTAL_Z_INDEX: BoxProps['zIndex'] = 'var(--neb-z-portal)'

export const PORTAL_PLACEMENTS = [
  'top-start',
  'top-center',
  'top-end',
  'right-start',
  'right-center',
  'right-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'left-start',
  'left-center',
  'left-end',
] as const
