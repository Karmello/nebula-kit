import type { Length, TShirtSize } from 'lib/types'

export * from './control-scale-map'
export * from './typography-map'

export const TSHIRT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export const DEFAULT_TSHIRT_SIZE: TShirtSize = 'md'

export const LENGTHS = [
  'px_000',
  'px_002',
  'px_004',
  'px_006',
  'px_008',
  'px_012',
  'px_016',
  'px_024',
  'px_032',
  'px_048',
  'px_064',
  'px_096',
  'px_128',
  'px_256',
  'px_512',
] as const

export const NEB_LENGTH: Record<Length, string> = {
  px_000: '0px',
  px_002: '2px',
  px_004: '4px',
  px_006: '6px',
  px_008: '8px',
  px_012: '12px',
  px_016: '16px',
  px_024: '24px',
  px_032: '32px',
  px_048: '48px',
  px_064: '64px',
  px_096: '96px',
  px_128: '128px',
  px_256: '256px',
  px_512: '512px',
}
