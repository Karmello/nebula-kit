import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'

type PropsFromHtmlTag = Pick<HtmlTagProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'header'>['children']
}

type PropsFromBox = Pick<BoxProps<'header'>, 'color' | 'intent'>

export type AppFrameHeaderProps = PropsFromHtmlTag & PropsFromBox
