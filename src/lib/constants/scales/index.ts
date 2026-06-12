import type { CssValue, Length, TShirtSize } from 'lib/types'

export * from './control-scale-map'
export * from './typography-map'

export const TSHIRT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export const DEFAULT_TSHIRT_SIZE: TShirtSize = 'md'

export const LENGTHS = [
  '0px',
  '2px',
  '4px',
  '6px',
  '8px',
  '12px',
  '16px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
  '256px',
  '512px',
] as const

export const LENGTH_SCALE: Record<Length, CssValue> = {
  '0px': '0px',
  '2px': '2px',
  '4px': '4px',
  '6px': '6px',
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '24px': '24px',
  '32px': '32px',
  '48px': '48px',
  '64px': '64px',
  '96px': '96px',
  '128px': '128px',
  '256px': '256px',
  '512px': '512px',
}
