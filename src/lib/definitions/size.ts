import { IconSize } from 'lib/components/core/elements/Icon'
import { TextTag, TextTypography } from 'lib/components/core/base/Text'

// constants

export const TSHIRT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

export const SIZING_SCALE: Record<TShirtSize, string> = {
  '3xs': 'var(--neb-size-3xs)',
  '2xs': 'var(--neb-size-2xs)',
  xs: 'var(--neb-size-xs)',
  sm: 'var(--neb-size-sm)',
  md: 'var(--neb-size-md)',
  lg: 'var(--neb-size-lg)',
  xl: 'var(--neb-size-xl)',
  '2xl': 'var(--neb-size-2xl)',
  '3xl': 'var(--neb-size-3xl)',
  '4xl': 'var(--neb-size-4xl)',
}

export const TYPOGRAPHY_TOKENS: Record<
  TextTypography,
  {
    fontSize: string
    lineHeight: string
    iconSize: IconSize
    tag: TextTag
  }
> = {
  body: {
    fontSize: 'var(--neb-typography-body-font-size)',
    lineHeight: 'var(--neb-typography-body-line-height)',
    iconSize: '16px',
    tag: 'p',
  },
  lead: {
    fontSize: 'var(--neb-typography-lead-font-size)',
    lineHeight: 'var(--neb-typography-lead-line-height)',
    iconSize: '18px',
    tag: 'p',
  },
  small: {
    fontSize: 'var(--neb-typography-small-font-size)',
    lineHeight: 'var(--neb-typography-small-line-height)',
    iconSize: '13px',
    tag: 'p',
  },
  caption: {
    fontSize: 'var(--neb-typography-caption-font-size)',
    lineHeight: 'var(--neb-typography-caption-line-height)',
    iconSize: '12px',
    tag: 'p',
  },
  h6: {
    fontSize: 'var(--neb-typography-h6-font-size)',
    lineHeight: 'var(--neb-typography-h6-line-height)',
    iconSize: '15px',
    tag: 'h6',
  },
  h5: {
    fontSize: 'var(--neb-typography-h5-font-size)',
    lineHeight: 'var(--neb-typography-h5-line-height)',
    iconSize: '19px',
    tag: 'h5',
  },
  h4: {
    fontSize: 'var(--neb-typography-h4-font-size)',
    lineHeight: 'var(--neb-typography-h4-line-height)',
    iconSize: '25px',
    tag: 'h4',
  },
  h3: {
    fontSize: 'var(--neb-typography-h3-font-size)',
    lineHeight: 'var(--neb-typography-h3-line-height)',
    iconSize: '33px',
    tag: 'h3',
  },
  h2: {
    fontSize: 'var(--neb-typography-h2-font-size)',
    lineHeight: 'var(--neb-typography-h2-line-height)',
    iconSize: '40px',
    tag: 'h2',
  },
  h1: {
    fontSize: 'var(--neb-typography-h1-font-size)',
    lineHeight: 'var(--neb-typography-h1-line-height)',
    iconSize: '50px',
    tag: 'h1',
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
    fontSize: TYPOGRAPHY_TOKENS.small.fontSize,
    lineHeight: TYPOGRAPHY_TOKENS.small.lineHeight,
    iconSize: TYPOGRAPHY_TOKENS.small.iconSize,
    loaderSize: '12px',
  },
  xs: {
    blockSize: '34px',
    paddingInline: '10px',
    fontSize: TYPOGRAPHY_TOKENS.small.fontSize,
    lineHeight: TYPOGRAPHY_TOKENS.small.lineHeight,
    iconSize: TYPOGRAPHY_TOKENS.small.iconSize,
    loaderSize: '14px',
  },
  sm: {
    blockSize: '38px',
    paddingInline: '12px',
    fontSize: TYPOGRAPHY_TOKENS.body.fontSize,
    lineHeight: TYPOGRAPHY_TOKENS.body.lineHeight,
    iconSize: TYPOGRAPHY_TOKENS.body.iconSize,
    loaderSize: '16px',
  },
  md: {
    blockSize: '44px',
    paddingInline: '15px',
    fontSize: TYPOGRAPHY_TOKENS.body.fontSize,
    lineHeight: TYPOGRAPHY_TOKENS.body.lineHeight,
    iconSize: TYPOGRAPHY_TOKENS.body.iconSize,
    loaderSize: '18px',
  },
  lg: {
    blockSize: '52px',
    paddingInline: '20px',
    fontSize: TYPOGRAPHY_TOKENS.body.fontSize,
    lineHeight: TYPOGRAPHY_TOKENS.body.lineHeight,
    iconSize: TYPOGRAPHY_TOKENS.body.iconSize,
    loaderSize: '22px',
  },
}

// types

export type TShirtSize = (typeof TSHIRT_SIZES)[number]
