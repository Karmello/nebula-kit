import { ReactNode, ComponentProps } from 'react'

import { BoxProps, HtmlTagProps, TextProps } from 'lib/components'
import { CssTextAlign, RespValue, TShirtSize } from 'lib/definitions'

import { TEXT_TYPOGRAPHY_MAP } from '../../base/Text'

export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_VARIANT: ActionSurfaceProps['variant'] = 'solid'
export const DEFAULT_ACTION_SURFACE_INTENT: ActionSurfaceProps['intent'] = 'tertiary'
export const DEFAULT_ACTION_SURFACE_SIZE: ActionSurfaceProps['size'] = 'sm'
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true
export const DEFAULT_ACTION_SURFACE_TEXT_ALIGN: ActionSurfaceProps['textAlign'] = 'left'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const
export const ACTION_SURFACE_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]
export const ACTION_SURFACE_TEXT_ALIGNS = ['left', 'center'] as const satisfies CssTextAlign[]

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]
export type ActionSurfaceSize = (typeof ACTION_SURFACE_SIZES)[number]
export type ActionSurfaceTextAlign = (typeof ACTION_SURFACE_TEXT_ALIGNS)[number]

type ActionSurfaceOwnProps<T extends ActionSurfaceTag = 'button'> = {
  heading: ReactNode
  description?: ReactNode
  size?: ActionSurfaceSize
  fullWidth?: RespValue<boolean>
  loading?: boolean
  ripple?: boolean
  selected?: boolean
  inlineTrailingIcon?: boolean
  onClick?: ComponentProps<T>['onClick']
}

type PropsFromHtmlTag<T extends ActionSurfaceTag = 'button'> = Pick<HtmlTagProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<
  BoxProps<T>,
  'variant' | 'color' | 'intent' | 'interactive' | 'disabled' | 'elevated' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'
>

type PropsFromText = Pick<TextProps<'span'>, 'iconName' | 'iconPlacement' | 'iconAngle' | 'customSvgIcon'> & {
  textAlign?: ActionSurfaceTextAlign
  boldHeading?: TextProps<'span'>['bold']
  italicDescription?: TextProps<'span'>['italic']
}

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromText &
  ActionSurfaceOwnProps<T>

export const ACTION_SURFACE_SIZE_MAP: Record<
  ActionSurfaceSize,
  { fontSize: string; lineHeight: number; blockSize: string; paddingInline: string; gap?: TShirtSize; loaderSize: string }
> = {
  xs: {
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    blockSize: '58px',
    paddingInline: '14px',
    loaderSize: '21px',
  },
  sm: {
    fontSize: TEXT_TYPOGRAPHY_MAP.h6.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.h6.lineHeight,
    blockSize: '67px',
    paddingInline: '16px',
    gap: '3xs',
    loaderSize: '24px',
  },
  md: {
    fontSize: TEXT_TYPOGRAPHY_MAP.h6.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.h6.lineHeight,
    blockSize: '77px',
    paddingInline: '20px',
    gap: '2xs',
    loaderSize: '27px',
  },
  lg: {
    fontSize: TEXT_TYPOGRAPHY_MAP.h5.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.h5.lineHeight,
    blockSize: '84px',
    paddingInline: '22px',
    gap: '2xs',
    loaderSize: '30px',
  },
}
