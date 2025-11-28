import { FlexItemProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_FOOTER_SECTION_FLEX: FlexItemProps['flex'] = 1

type PropsFromHtmlTag = Omit<HtmlTagProps<'section'>, 'children' | 'tag'> & {
  children: HtmlTagProps<'section'>['children']
}

type PropsFromFlexItem = Pick<FlexItemProps<'section'>, 'flex' | 'alignSelf'>

export type FooterSectionProps = PropsFromHtmlTag & PropsFromFlexItem
