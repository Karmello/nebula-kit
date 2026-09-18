import { FONT_SIZES } from './font-size'
import { LENGTHS } from './length'
import { LINE_HEIGHTS } from './line-height'
import { TSHIRT_SIZES } from './tshirt-size'

export * from './control-scale-map'
export * from './font-size'
export * from './length'
export * from './line-height'
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

export const NEB_FONT_SIZE: Record<(typeof FONT_SIZES)[number], string> = {
  px_010: '10px',
  px_012: '12px',
  px_014: '14px',
  px_016: '16px',
  px_018: '18px',
  px_020: '20px',
  px_024: '24px',
  px_028: '28px',
  px_032: '32px',
  px_040: '40px',
  px_048: '48px',
  px_064: '64px',
}

export const NEB_LINE_HEIGHT: Record<(typeof LINE_HEIGHTS)[number], number> = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
}
