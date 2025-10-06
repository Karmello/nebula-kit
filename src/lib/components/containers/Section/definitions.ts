import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { TextTypography } from 'lib/components/base/Text/definitions'
import { ScaleValue } from 'lib/definitions'

export const SectionTag = ['section', 'article', 'aside', 'div'] as const
export const SectionSize = ['sm', 'md', 'lg', 'xl', 'xxl'] as const
export const SectionVariant = ['ghost', 'outline'] as const

export const DEFAULT_SECTION_VARIANT: SectionVariant = 'ghost'
export const DEFAULT_SECTION_INTENT: BoxIntent = 'neutral'
export const DEFAULT_SECTION_SIZE: SectionSize = 'md'

export const SECTION_SIZE_CONFIG: Record<
  SectionSize,
  { typography: Extract<TextTypography, 'h6' | 'h5' | 'h4' | 'h3' | 'h2'>; spacing: ScaleValue }
> = {
  sm: { typography: 'h6', spacing: 8 },
  md: { typography: 'h5', spacing: 10 },
  lg: { typography: 'h4', spacing: 12 },
  xl: { typography: 'h3', spacing: 13 },
  xxl: { typography: 'h2', spacing: 15 },
}

export type SectionTag = (typeof SectionTag)[number]
export type SectionSize = (typeof SectionSize)[number]
export type SectionVariant = (typeof SectionVariant)[number]

type SectionOwnProps = {
  heading: string
  size?: SectionSize
  variant?: SectionVariant
}

type PropsFromHtmlTag<T extends SectionTag = 'section'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends SectionTag = 'section'> = Pick<BoxProps<T>, 'intent'>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  SectionOwnProps
