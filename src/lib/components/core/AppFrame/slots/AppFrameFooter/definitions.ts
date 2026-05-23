import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'

type PropsFromBox = Pick<
  BoxProps<'footer'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'color'
  | 'intent'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
> & {
  children: HtmlTagProps<'footer'>['children']
}

export type AppFrameFooterProps = PropsFromBox
