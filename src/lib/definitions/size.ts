import { IconSize } from 'lib/components/core/elements/Icon'
import { TextScale, TextTag, TextTypography } from 'lib/components/core/base/Text'

// constants

export const TSHIRT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

export const SIZING_SCALE: Record<TShirtSize, string> = {
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

export const FONT_SIZE_TOKENS: Record<
  TextScale,
  Record<
    TextTypography,
    {
      fontSize: string
      lineHeight: number | string
      iconSize: IconSize
      tag: TextTag
    }
  >
> = {
  regular: {
    caption: { fontSize: '12px', lineHeight: 1.4, iconSize: '14px', tag: 'p' },
    small: { fontSize: '14px', lineHeight: 1.5, iconSize: '14px', tag: 'p' },
    body: { fontSize: '15px', lineHeight: 1.6, iconSize: '16px', tag: 'p' },
    lead: { fontSize: '18px', lineHeight: 1.6, iconSize: '18px', tag: 'p' },
    h6: { fontSize: '20px', lineHeight: 1.3, iconSize: '18px', tag: 'h6' },
    h5: { fontSize: '24px', lineHeight: 1.3, iconSize: '22px', tag: 'h5' },
    h4: { fontSize: '30px', lineHeight: 1.25, iconSize: '26px', tag: 'h4' },
    h3: { fontSize: '36px', lineHeight: 1.25, iconSize: '30px', tag: 'h3' },
    h2: { fontSize: '48px', lineHeight: 1.2, iconSize: '38px', tag: 'h2' },
    h1: { fontSize: '60px', lineHeight: 1.1, iconSize: '46px', tag: 'h1' },
  },
  compact: {
    caption: { fontSize: '11px', lineHeight: 1.35, iconSize: '12px', tag: 'p' },
    small: { fontSize: '13px', lineHeight: 1.45, iconSize: '13px', tag: 'p' },
    body: { fontSize: '14px', lineHeight: 1.5, iconSize: '14px', tag: 'p' },
    lead: { fontSize: '16px', lineHeight: 1.5, iconSize: '16px', tag: 'p' },
    h6: { fontSize: '18px', lineHeight: 1.25, iconSize: '16px', tag: 'h6' },
    h5: { fontSize: '21px', lineHeight: 1.25, iconSize: '20px', tag: 'h5' },
    h4: { fontSize: '26px', lineHeight: 1.2, iconSize: '23px', tag: 'h4' },
    h3: { fontSize: '32px', lineHeight: 1.2, iconSize: '27px', tag: 'h3' },
    h2: { fontSize: '42px', lineHeight: 1.15, iconSize: '34px', tag: 'h2' },
    h1: { fontSize: '52px', lineHeight: 1.05, iconSize: '42px', tag: 'h1' },
  },
}

export const CONTROL_SIZE_TOKENS: Record<
  Extract<TShirtSize, '2xs' | 'xs' | 'sm' | 'md' | 'lg'>,
  {
    blockSize: string
    paddingInline: string
    fontSize: string
    lineHeight: number | string
    iconSize: IconSize
    loaderSize: string
  }
> = {
  '2xs': {
    blockSize: '28px',
    paddingInline: '7px',
    fontSize: FONT_SIZE_TOKENS.regular.small.fontSize,
    lineHeight: FONT_SIZE_TOKENS.regular.small.lineHeight,
    iconSize: FONT_SIZE_TOKENS.regular.small.iconSize,
    loaderSize: '12px',
  },
  xs: {
    blockSize: '34px',
    paddingInline: '10px',
    fontSize: FONT_SIZE_TOKENS.regular.small.fontSize,
    lineHeight: FONT_SIZE_TOKENS.regular.small.lineHeight,
    iconSize: FONT_SIZE_TOKENS.regular.small.iconSize,
    loaderSize: '14px',
  },
  sm: {
    blockSize: '38px',
    paddingInline: '12px',
    fontSize: FONT_SIZE_TOKENS.regular.body.fontSize,
    lineHeight: FONT_SIZE_TOKENS.regular.body.lineHeight,
    iconSize: FONT_SIZE_TOKENS.regular.body.iconSize,
    loaderSize: '16px',
  },
  md: {
    blockSize: '44px',
    paddingInline: '15px',
    fontSize: FONT_SIZE_TOKENS.regular.body.fontSize,
    lineHeight: FONT_SIZE_TOKENS.regular.body.lineHeight,
    iconSize: FONT_SIZE_TOKENS.regular.body.iconSize,
    loaderSize: '18px',
  },
  lg: {
    blockSize: '52px',
    paddingInline: '20px',
    fontSize: FONT_SIZE_TOKENS.regular.body.fontSize,
    lineHeight: FONT_SIZE_TOKENS.regular.body.lineHeight,
    iconSize: FONT_SIZE_TOKENS.regular.body.iconSize,
    loaderSize: '22px',
  },
}

// types

export type TShirtSize = (typeof TSHIRT_SIZES)[number]
