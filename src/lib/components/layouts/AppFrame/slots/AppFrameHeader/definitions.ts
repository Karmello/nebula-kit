import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'
export const DEFAULT_APP_FRAME_HEADER_BORDER_INTENT: AppFrameHeaderProps['borderIntent'] = 'tertiary'

type PropsFromHtmlTag = Pick<HtmlTagProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'header'>['children']
}

type PropsFromBox = Pick<BoxProps<'header'>, 'intent' | 'borderIntent' | 'minBlockSize'>

export type AppFrameHeaderProps = PropsFromHtmlTag & PropsFromBox
