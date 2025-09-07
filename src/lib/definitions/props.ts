import { ElementType } from 'react'

import { BoxProps } from 'lib/components'
import { Breakpoint, ScaleValue } from 'lib/definitions'

// constants

export const Theme = ['light', 'gray', 'dark'] as const

export const BoxVariant = ['solid', 'outline', 'ghost'] as const

export const BoxIntent = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
  'inverse',
] as const

export const TextTypography = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'lead',
  'body',
  'secondary',
  'caption',
] as const

export const IconPosition = ['left', 'right'] as const
export const ButtonSize = ['sm', 'md', 'lg'] as const
export const HorizontalPosition = ['left', 'center', 'right'] as const

// types
export type Theme = (typeof Theme)[number]
export type BoxVariant = (typeof BoxVariant)[number]
export type BoxIntent = (typeof BoxIntent)[number]
export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>
export type TextTypography = (typeof TextTypography)[number]
export type ButtonSize = (typeof ButtonSize)[number]
export type HorizontalPosition = (typeof HorizontalPosition)[number]
export type IconPosition = (typeof IconPosition)[number]

export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type LayoutSlotProps<E extends ElementType> = Pick<
  BoxProps<E>,
  | 'children'
  | 'elemProps'
  | 'elemRef'
  | 'intent'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>

// defaults
export const DEFAULT_THEME: Theme = 'light'
export const DEFAULT_BORDER_RADIUS: ScaleValue = 0

export const DEFAULT_BOX_VARIANT: BoxVariant = 'ghost'
export const DEFAULT_BOX_INTENT: BoxIntent = 'neutral'

export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export const DEFAULT_BUTTON_VARIANT: BoxVariant = 'solid'
export const DEFAULT_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'md'

export const DEFAULT_SVG_ICON_SIZE = 8
export const WITH_ICON_DEFAULT_ICON_POSITION: IconPosition = 'left'
