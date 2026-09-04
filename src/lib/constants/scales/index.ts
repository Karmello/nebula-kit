import { LENGTHS } from './length'
import { TSHIRT_SIZES } from './tshirt-size'

export * from './control-scale-map'
export * from './length'
export * from './tshirt-size'
export * from './typography-map'

export const DEFAULT_TSHIRT_SIZE: (typeof TSHIRT_SIZES)[number] = 'md'

export const NEB_LENGTH: Record<(typeof LENGTHS)[number], string> = {
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
