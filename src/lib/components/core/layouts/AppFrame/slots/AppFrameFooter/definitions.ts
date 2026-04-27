import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'

type PropsFromHtmlTag = Pick<HtmlTagProps<'footer'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'footer'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'footer'>,
  | 'color'
  | 'intent'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>

export type AppFrameFooterProps = PropsFromHtmlTag & PropsFromBox
