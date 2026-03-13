import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'section'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'section'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'section'>,
  'padding' | 'paddingInline' | 'paddingBlock' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'
>

export type SplitViewMainProps = PropsFromHtmlTag & PropsFromBox
