import { BoxProps } from 'lib/index.core'

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
  children: BoxProps<'footer'>['children']
}

export type AppFrameFooterProps = PropsFromBox
