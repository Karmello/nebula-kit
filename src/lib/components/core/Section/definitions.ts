import { ReactNode } from 'react'

import { TitleProps } from 'lib/index.core'
import { RespValue, SectionTag, TShirtSize } from 'lib/types'

import { BoxProps, BoxVariant } from '../Box'
import { TextProps, TextTypography } from '../Text'

export const SECTION_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]
export const SECTION_VARIANTS = ['ghost', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_SECTION_VARIANT: SectionProps['variant'] = 'ghost'
export const DEFAULT_SECTION_INTENT: SectionProps['intent'] = 'neutral'
export const DEFAULT_SECTION_SIZE: SectionProps['size'] = 'md'

export const SECTION_SIZE_CONFIG: Record<
  SectionSize,
  {
    padding: TShirtSize
    spacerBlockSize: TShirtSize
    textTypography: TextTypography
  }
> = {
  sm: { padding: 'sm', spacerBlockSize: '2xs', textTypography: 'h6' },
  md: { padding: 'sm', spacerBlockSize: 'xs', textTypography: 'h5' },
  lg: { padding: 'md', spacerBlockSize: 'sm', textTypography: 'h4' },
  xl: { padding: 'lg', spacerBlockSize: 'md', textTypography: 'h3' },
  '2xl': { padding: 'xl', spacerBlockSize: 'lg', textTypography: 'h2' },
}

export type SectionSize = (typeof SECTION_SIZES)[number]
export type SectionVariant = (typeof SECTION_VARIANTS)[number]

type SectionOwnProps = {
  heading: ReactNode
  headingIntent?: TextProps['intent']
  size?: SectionSize
  variant?: RespValue<SectionVariant>
}

type PropsFromBox<T extends SectionTag = 'section'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'interactive'
> & {
  children: BoxProps<T>['children']
}

type PropsFromTitle = Pick<TitleProps, 'iconName' | 'iconPlacement'>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromBox<T> & PropsFromTitle & SectionOwnProps
