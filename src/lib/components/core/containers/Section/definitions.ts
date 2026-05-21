import { ReactNode } from 'react'

import { BoxProps, HtmlTagProps, WithIconProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box/definitions'
import { TextProps, TextTypography } from 'lib/components/core/base/Text/definitions'
import { RespValue, TShirtSize } from 'lib/definitions'

export const SECTION_TAGS = ['section', 'article', 'aside', 'div'] as const
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

export type SectionTag = (typeof SECTION_TAGS)[number]
export type SectionSize = (typeof SECTION_SIZES)[number]
export type SectionVariant = (typeof SECTION_VARIANTS)[number]

type SectionOwnProps = {
  heading: ReactNode
  headingIntent?: TextProps['intent']
  size?: SectionSize
  variant?: RespValue<SectionVariant>
}

type PropsFromHtmlTag<T extends SectionTag = 'section'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends SectionTag = 'section'> = Pick<BoxProps<T>, 'color' | 'intent' | 'interactive'>

type PropsFromWithIcon = Pick<WithIconProps, 'iconName' | 'iconPlacement'>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromWithIcon &
  SectionOwnProps
