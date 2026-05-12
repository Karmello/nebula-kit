import { ReactNode, MouseEventHandler } from 'react'

import { BoxProps, HtmlTagProps, TextProps } from 'lib/components'
import { RespValue, TShirtSize } from 'lib/definitions'
import { TEXT_TYPOGRAPHY_MAP } from '../../base/Text'

export const DEFAULT_ACTION_SURFACE_INTERACTIVE: ActionSurfaceProps['interactive'] = true
export const DEFAULT_ACTION_SURFACE_VARIANT: ActionSurfaceProps['variant'] = 'solid'
export const DEFAULT_ACTION_SURFACE_INTENT: ActionSurfaceProps['intent'] = 'tertiary'
export const DEFAULT_ACTION_SURFACE_SIZE: ActionSurfaceProps['size'] = 'md'
export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true
export const DEFAULT_ACTION_SURFACE_JUSTIFY_CONTENT: ActionSurfaceProps['justifyContent'] = 'center'
export const DEFAULT_ACTION_SURFACE_TEXT_ALIGN: ActionSurfaceProps['textAlign'] = 'center'

export const ACTION_SURFACE_TAGS = ['button', 'a'] as const
export const ACTION_SURFACE_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]
export type ActionSurfaceSize = (typeof ACTION_SURFACE_SIZES)[number]

type ActionSurfaceOwnProps = {
  heading: ReactNode
  description?: ReactNode
  size?: ActionSurfaceSize
  fullWidth?: RespValue<boolean>
  loading?: boolean
  ripple?: boolean
  selected?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag<T extends ActionSurfaceTag = 'button'> = Pick<HtmlTagProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<
  BoxProps<T>,
  'variant' | 'color' | 'intent' | 'interactive' | 'disabled' | 'elevated' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'
>

type PropsFromText = Pick<
  TextProps<'span'>,
  'bold' | 'iconName' | 'iconPlacement' | 'iconAngle' | 'customSvgIcon' | 'justifyContent' | 'textAlign'
>

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromText &
  ActionSurfaceOwnProps

export const ACTION_SURFACE_SIZE_MAP: Record<
  ActionSurfaceSize,
  { fontSize: string; lineHeight: number; blockSize: string; paddingInline: string; loaderSize: string }
> = {
  xs: {
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    blockSize: '20px',
    paddingInline: '20px',
    loaderSize: '30px',
  },
  sm: {
    fontSize: TEXT_TYPOGRAPHY_MAP.small.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.small.lineHeight,
    blockSize: '30px',
    paddingInline: '20px',
    loaderSize: '30px',
  },
  md: {
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    blockSize: '60px',
    paddingInline: '15px',
    loaderSize: '22px',
  },
  lg: {
    fontSize: TEXT_TYPOGRAPHY_MAP.body.fontSize,
    lineHeight: TEXT_TYPOGRAPHY_MAP.body.lineHeight,
    blockSize: '70px',
    paddingInline: '20px',
    loaderSize: '30px',
  },
}
