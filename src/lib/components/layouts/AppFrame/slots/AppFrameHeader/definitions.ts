import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'tertiary'
export const DEFAULT_APP_FRAME_HEADER_BORDER_INTENT: AppFrameHeaderProps['borderIntent'] = 'secondary'

type PropsFromHtmlTag = Pick<HtmlTagProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'header'>['children']
}

type PropsFromBox = Pick<BoxProps<'header'>, 'intent' | 'borderIntent' | 'minBlockSize'>

export type AppFrameHeaderProps = PropsFromHtmlTag & PropsFromBox
