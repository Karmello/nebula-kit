import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'footer'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'footer'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'footer'>,
  | 'intent'
  | 'minBlockSize'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>

export type AppFrameFooterProps = PropsFromHtmlTag & PropsFromBox
