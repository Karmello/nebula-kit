import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/components/core/base/Box/definitions'
import { TextProps, TextTag, TextTypography } from 'lib/components/core/base/Text/definitions'
import { TShirtSize } from 'lib/definitions'

export const SECTION_TAGS = ['section', 'article', 'aside', 'div'] as const
export const SECTION_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]
export const SECTION_VARIANTS = ['ghost', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_SECTION_VARIANT: SectionVariant = 'ghost'
export const DEFAULT_SECTION_INTENT: BoxIntent = 'neutral'
export const DEFAULT_SECTION_SIZE: SectionSize = 'md'

export const SECTION_SIZE_CONFIG: Record<
  SectionSize,
  {
    tag: TextTag
    typography: Extract<TextTypography, 'h6' | 'h5' | 'h4' | 'h3' | 'h2'>
    paddingBlock: TShirtSize
    paddingInline: TShirtSize
    spacing: TShirtSize
  }
> = {
  sm: { tag: 'h6', typography: 'h6', paddingBlock: 'sm', paddingInline: 'sm', spacing: 'xs' },
  md: { tag: 'h5', typography: 'h5', paddingBlock: 'md', paddingInline: 'md', spacing: 'sm' },
  lg: { tag: 'h4', typography: 'h4', paddingBlock: 'lg', paddingInline: 'lg', spacing: 'md' },
  xl: { tag: 'h3', typography: 'h3', paddingBlock: 'xl', paddingInline: 'xl', spacing: 'lg' },
  '2xl': { tag: 'h2', typography: 'h2', paddingBlock: '2xl', paddingInline: '2xl', spacing: 'xl' },
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

type PropsFromBox<T extends SectionTag = 'section'> = Pick<BoxProps<T>, 'color' | 'intent'>

type PropsFromText = Pick<TextProps, 'iconName' | 'iconPlacement'>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromText &
  SectionOwnProps
