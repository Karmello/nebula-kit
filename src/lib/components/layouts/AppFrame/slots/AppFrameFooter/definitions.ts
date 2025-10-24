import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'
export const DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT: AppFrameFooterProps['borderIntent'] = 'tertiary'
export const DEFAULT_APP_FRAME_FOOTER_MIN_BLOCK_SIZE: AppFrameFooterProps['minBlockSize'] = 80

type PropsFromHtmlTag = Pick<HtmlTagProps<'footer'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'footer'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'footer'>,
  | 'intent'
  | 'borderIntent'
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
