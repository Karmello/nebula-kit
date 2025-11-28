import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'main'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'main'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'main'>,
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>

export type AppFrameMainProps = PropsFromHtmlTag & PropsFromBox
