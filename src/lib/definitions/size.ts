import { TextTag, TextTypography } from 'lib/components/core/base/Text/definitions'

// constants

export const TSHIRT_SIZES = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

export const LENGTH_SCALE: Record<TShirtSize, string> = {
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

export const TEXT_TYPOGRAPHY_MAP: Record<
  TextTypography,
  {
    fontSize: string
    lineHeight: number
    iconSize: string
    tag: TextTag
  }
> = {
  body: {
    fontSize: '15px',
    lineHeight: 1.5,
    iconSize: '16px',
    tag: 'p',
  },
  lead: {
    fontSize: '17px',
    lineHeight: 1.4,
    iconSize: '18px',
    tag: 'p',
  },
  small: {
    fontSize: '14px',
    lineHeight: 1.3,
    iconSize: '13px',
    tag: 'p',
  },
  caption: {
    fontSize: '11px',
    lineHeight: 1.4,
    iconSize: '12px',
    tag: 'p',
  },
  h6: {
    fontSize: '16px',
    lineHeight: 1.3,
    iconSize: '15px',
    tag: 'h6',
  },
  h5: {
    fontSize: '21px',
    lineHeight: 1.3,
    iconSize: '19px',
    tag: 'h5',
  },
  h4: {
    fontSize: '27px',
    lineHeight: 1.2,
    iconSize: '25px',
    tag: 'h4',
  },
  h3: {
    fontSize: '37px',
    lineHeight: 1.2,
    iconSize: '33px',
    tag: 'h3',
  },
  h2: {
    fontSize: '48px',
    lineHeight: 1.1,
    iconSize: '40px',
    tag: 'h2',
  },
  h1: {
    fontSize: '60px',
    lineHeight: 1.1,
    iconSize: '50px',
    tag: 'h1',
  },
}

export const CONTROL_SIZE_MAP: Record<
  Extract<TShirtSize, '2xs' | 'xs' | 'sm' | 'md' | 'lg'>,
  {
    blockSize: string
    paddingInline: string
    fontSize: string
    lineHeight: number | string
    iconSize: string
    loaderSize: string
  }
> = {
  '2xs': {
    blockSize: '28px',
    paddingInline: '7px',
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.small.iconSize,
    loaderSize: '12px',
  },
  xs: {
    blockSize: '34px',
    paddingInline: '10px',
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.small.iconSize,
    loaderSize: '14px',
  },
  sm: {
    blockSize: '38px',
    paddingInline: '12px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '16px',
  },
  md: {
    blockSize: '44px',
    paddingInline: '15px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '18px',
  },
  lg: {
    blockSize: '52px',
    paddingInline: '20px',
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    iconSize: TEXT_TYPOGRAPHY_MAP.body.iconSize,
    loaderSize: '22px',
  },
}

// types

export type TShirtSize = (typeof TSHIRT_SIZES)[number]
