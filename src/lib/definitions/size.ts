import { CssFontSize, CssLength } from './css'

// constants

export const TSHIRT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

export const SIZING_SCALE: Record<TShirtSize, CssLength> = {
  '3xs': '2px',
  '2xs': '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
}

export const CONTROL_SIZE_TOKENS: Record<
  Extract<TShirtSize, '2xs' | 'xs' | 'sm' | 'md' | 'lg'>,
  { blockSize: CssLength; paddingInline: CssLength; fontSize: CssFontSize }
> = {
  '2xs': { blockSize: '28px', paddingInline: '7px', fontSize: '12px' },
  xs: { blockSize: '34px', paddingInline: '10px', fontSize: '14px' },
  sm: { blockSize: '38px', paddingInline: '12px', fontSize: '15px' },
  md: { blockSize: '44px', paddingInline: '15px', fontSize: '16px' },
  lg: { blockSize: '52px', paddingInline: '20px', fontSize: '18px' },
}

// types

export type TShirtSize = (typeof TSHIRT_SIZES)[number]
