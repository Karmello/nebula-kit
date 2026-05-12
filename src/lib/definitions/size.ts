import { TEXT_TYPOGRAPHY_MAP } from 'lib/components/core/base/Text/definitions'
import { IconSize } from 'lib/components/core/elements/Icon/definitions'

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

export const CONTROL_SIZE_MAP: Record<
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
