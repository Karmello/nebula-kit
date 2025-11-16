import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/components/base/Box/definitions'
import { TextProps, TextTypography } from 'lib/components/base/Text/definitions'
import { ScaleValue, Sizes } from 'lib/definitions'

export const SECTION_TAGS = ['section', 'article', 'aside', 'div'] as const
export const SECTION_SIZES = ['sm', 'md', 'lg', 'xl', 'xxl'] as const satisfies Sizes[]
export const SECTION_VARIANTS = ['ghost', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_SECTION_VARIANT: SectionVariant = 'ghost'
export const DEFAULT_SECTION_INTENT: BoxIntent = 'neutral'
export const DEFAULT_SECTION_SIZE: SectionSize = 'md'

export const SECTION_SIZE_CONFIG: Record<
  SectionSize,
  { typography: Extract<TextTypography, 'h6' | 'h5' | 'h4' | 'h3' | 'h2'>; spacing: ScaleValue }
> = {
  sm: { typography: 'h6', spacing: 16 },
  md: { typography: 'h5', spacing: 20 },
  lg: { typography: 'h4', spacing: 24 },
  xl: { typography: 'h3', spacing: 26 },
  xxl: { typography: 'h2', spacing: 30 },
}

export type SectionTag = (typeof SECTION_TAGS)[number]
export type SectionSize = (typeof SECTION_SIZES)[number]
export type SectionVariant = (typeof SECTION_VARIANTS)[number]

type SectionOwnProps = {
  heading: string
  size?: SectionSize
  variant?: SectionVariant
}

type PropsFromHtmlTag<T extends SectionTag = 'section'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends SectionTag = 'section'> = Pick<
  BoxProps<T>,
  'color' | 'intent' | 'borderIntent' | 'interactive' | 'hoveredByDefault'
>

type PropsFromText = Pick<TextProps, 'iconName' | 'iconPosition'>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromText &
  SectionOwnProps
